export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__main">
            <div className="hero__badge">Saudi German Hospital — Orthopaedic</div>
            <h1 className="hero__title">Ahmed's Recovery Program</h1>
            <p className="hero__subtitle">12-Week Back Recovery · 3 Days/Week · 45–60 min</p>

            <div className="hero__tags">
              <span className="hero__tag">🏊 Pool Training</span>
              <span className="hero__tag">💪 Low-Load Strength</span>
              <span className="hero__tag">🦵 Joint Rehab</span>
              <span className="hero__tag">🧠 L5-S1 Safe</span>
            </div>

            <a href="#day-1" className="hero__cta">View Program ↓</a>
          </div>

          <div className="hero__diagnosis">
            <div className="hero__dx-label">Diagnosed Conditions</div>
            <div className="hero__dx-items">
              <span className="hero__dx">Low Back Pain</span>
              <span className="hero__dx">L5-S1 Disc Narrowing</span>
              <span className="hero__dx">Radiculopathy (G55.1)</span>
              <span className="hero__dx">Left Scoliosis 4–6°</span>
              <span className="hero__dx">Lumbar Spondylosis</span>
            </div>
            <p className="hero__dx-note">
              All exercises are selected and ordered to avoid spinal compression.
              Clear with Dr. Khadder before starting any new phase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
