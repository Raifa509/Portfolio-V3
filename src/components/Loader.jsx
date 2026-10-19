import { useEffect, useState } from "react";

const RADIUS = 30;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function Loader({ onFinish }) {
    const [progress, setProgress] = useState(0);
    const [fading, setFading] = useState(false);
    useEffect(() => {
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previous;
        };
    }, []);

    // Count up to 100
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((p) => {
                if (p >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return Math.min(100, p + Math.floor(Math.random() * 6) + 2);
            });
        }, 80);

        return () => clearInterval(timer);
    }, []);

    // Fade out, then tell the parent we're done
    useEffect(() => {
        if (progress < 100) return;

        const fadeTimer = setTimeout(() => setFading(true), 300);
        const doneTimer = setTimeout(() => onFinish?.(), 900);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(doneTimer);
        };
    }, [progress, onFinish]);

    return (
        <div
            className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-bg px-5 transition-opacity duration-500 ${fading ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
        >
            <style>{`
                @keyframes loader-rise { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
                @keyframes loader-glow { 0%, 100% { opacity: .35; transform: scale(1) } 50% { opacity: .7; transform: scale(1.15) } }
            `}</style>

            {/* Ring + monogram */}
            <div className="relative flex h-32 w-32 items-center justify-center">
                {/* soft glow */}
                <div
                    className="absolute inset-4 rounded-full bg-highlights/20 blur-2xl"
                    style={{ animation: "loader-glow 2.4s ease-in-out infinite" }}
                />

                <svg
                    className="absolute inset-0 -rotate-90"
                    viewBox="0 0 120 120"
                    fill="none"
                >
                    <circle
                        cx="60"
                        cy="60"
                        r={RADIUS}
                        strokeWidth="2"
                        className="stroke-border"
                    />
                    <circle
                        cx="60"
                        cy="60"
                        r={RADIUS}
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="stroke-highlights transition-all duration-150 ease-out"
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE}
                    />
                </svg>

                <span className="relative font-mono text-xl font-semibold tracking-tight text-primary">
                    F<span className="text-highlights">R</span>
                </span>
            </div>

            {/* Name */}
            <div
                className=" text-center"
                style={{ animation: "loader-rise 0.8s ease-out both" }}
            >
              
                <p className=" font-mono text-xs text-text/60">
                    Loading &middot;{" "}
                    <span className="text-highlights">{progress}%</span>
                </p>
            </div>
        </div>
    );
}