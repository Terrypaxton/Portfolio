import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.vx = 0;
        this.vy = 0;
    }

    update(isActive, mouseX, mouseY) {
        // Return to origin
        const dx0 = this.originX - this.x;
        const dy0 = this.originY - this.y;
        this.vx += dx0 * 0.05;
        this.vy += dy0 * 0.05;

        // Mouse interaction
        if (isActive) {
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 250;

            if (dist < maxDist) {
                const force = (maxDist - dist) / maxDist;
                this.vx -= (dx / dist) * force * 4;
                this.vy -= (dy / dist) * force * 4;
            }
        }

        // Apply velocity & friction
        this.vx *= 0.8;
        this.vy *= 0.8;
        this.x += this.vx;
        this.y += this.vy;
    }
}

const LiquidCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const points = [];
        const gap = 40;
        const rows = Math.floor(height / gap) + 1;
        const cols = Math.floor(width / gap) + 1;

        let mouseX = width / 2;
        let mouseY = height / 2;
        let isActive = false;

        // Initialize points
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                points.push(new Point(x * gap, y * gap));
            }
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Background mesh styling from CSS vars
            const style = getComputedStyle(document.body);
            const coral = style.getPropertyValue('--coral').trim() || '#ff6b6b';
            const lavender = style.getPropertyValue('--lavender').trim() || '#a29bfe';
            const mint = style.getPropertyValue('--mint').trim() || '#56cfb2';

            ctx.beginPath();

            // Connect points to draw the liquid grid
            for (let y = 0; y < rows - 1; y++) {
                for (let x = 0; x < cols - 1; x++) {
                    const p1 = points[y * cols + x];
                    const p2 = points[y * cols + x + 1];
                    const p3 = points[(y + 1) * cols + x + 1];
                    const p4 = points[(y + 1) * cols + x];

                    p1.update(isActive, mouseX, mouseY);
                    if (x === cols - 2) p2.update(isActive, mouseX, mouseY);
                    if (y === rows - 2 && x === cols - 2) p3.update(isActive, mouseX, mouseY);
                    if (y === rows - 2) p4.update(isActive, mouseX, mouseY);

                    // Create bezier curves to simulate liquid mesh
                    const cx = (p1.x + p2.x + p3.x + p4.x) / 4;
                    const cy = (p1.y + p2.y + p3.y + p4.y) / 4;

                    // Dist based color
                    let distCol = (p1.x / width) * 255;

                    ctx.moveTo(p1.x, p1.y);
                    ctx.quadraticCurveTo(cx, cy, p2.x, p2.y);
                }
            }

            ctx.strokeStyle = `rgba(59, 130, 246, 0.15)`; // blue tint
            ctx.lineWidth = 1.5;
            ctx.stroke();

            requestAnimationFrame(render);
        };

        let animationId = requestAnimationFrame(render);

        const handleMouseMove = (e) => {
            isActive = true;
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseLeave = () => {
            isActive = false;
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

            // Re-initialize points
            points.length = 0;
            const newRows = Math.floor(height / gap) + 1;
            const newCols = Math.floor(width / gap) + 1;
            for (let y = 0; y < newRows; y++) {
                for (let x = 0; x < newCols; x++) {
                    points.push(new Point(x * gap, y * gap));
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 mix-blend-multiply"
        />
    );
};

export default LiquidCanvas;
