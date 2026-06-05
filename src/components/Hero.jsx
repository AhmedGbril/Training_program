import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 201, 167, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__content">
        <div className="hero__badge animate-fade-up">Saudi German Hospital — Orthopaedic</div>
        <h1 className="hero__title animate-fade-up delay-1">
          Ahmed's<br />
          <span className="hero__title--accent">Recovery</span><br />
          Program
        </h1>
        <p className="hero__subtitle animate-fade-up delay-2">
          8-Week Back Recovery · 3 Days/Week · 45–60 min
        </p>
        <div className="hero__tags animate-fade-up delay-3">
          <span className="hero__tag">🏊 Pool Training</span>
          <span className="hero__tag">💪 Low-Load Strength</span>
          <span className="hero__tag">🦵 Joint Rehab</span>
          <span className="hero__tag">🧠 L5-S1 Safe</span>
        </div>
        <div className="hero__diagnosis animate-fade-up delay-4">
          <div className="hero__dx-label">Diagnosed Conditions</div>
          <div className="hero__dx-items">
            <span className="hero__dx">Low Back Pain</span>
            <span className="hero__dx">L5-S1 Disc Narrowing</span>
            <span className="hero__dx">Radiculopathy (G55.1)</span>
            <span className="hero__dx">Left Scoliosis 4–6°</span>
          </div>
        </div>
        <a href="#day-1" className="hero__cta animate-fade-up delay-5">
          View Program ↓
        </a>
      </div>
      <div className="hero__spine-art">
        <div className="spine-vertebra" style={{ '--i': 0 }} />
        <div className="spine-vertebra" style={{ '--i': 1 }} />
        <div className="spine-vertebra" style={{ '--i': 2 }} />
        <div className="spine-vertebra" style={{ '--i': 3, '--highlight': 1 }} />
        <div className="spine-vertebra" style={{ '--i': 4, '--highlight': 1 }} />
        <div className="spine-vertebra" style={{ '--i': 5 }} />
        <div className="spine-disc" style={{ '--i': 0 }} />
        <div className="spine-disc" style={{ '--i': 1 }} />
        <div className="spine-disc" style={{ '--i': 2 }} />
        <div className="spine-disc spine-disc--narrow" style={{ '--i': 3 }} />
        <div className="spine-disc" style={{ '--i': 4 }} />
      </div>
    </section>
  );
}
