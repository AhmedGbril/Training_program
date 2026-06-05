import { phases } from '../data/program';

export default function PhaseTimeline() {
  return (
    <section className="phases-section" id="phases">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Long-Term Plan</span>
          <h2 className="section-title">Progression Phases</h2>
          <p className="section-sub">You're currently in Phase 1 — focus on consistency and zero pain</p>
        </div>

        <div className="phases-timeline">
          {phases.map((p, i) => (
            <div key={i} className={`phase-card ${p.active ? 'phase-card--active' : ''}`} style={{ '--p-color': p.color }}>
              <div className="phase-card__dot" />
              {i < phases.length - 1 && <div className="phase-card__line" />}
              <div className="phase-card__content">
                <div className="phase-card__badge">{p.active ? '📍 Current' : '🔒 Locked'}</div>
                <h3 className="phase-card__phase">{p.phase}</h3>
                <div className="phase-card__weeks">{p.weeks}</div>
                <p className="phase-card__focus">{p.focus}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="phases-butterfly">
          <div className="butterfly-card">
            <span className="butterfly-card__emoji">🦋</span>
            <div className="butterfly-card__body">
              <h4>Butterfly Stroke — Phase 2 Goal</h4>
              <p>Once your core stabilizers are built and L5-S1 is supported by strong glutes, we reintroduce butterfly in Week 5. It's worth the wait — butterfly will then become a strength builder, not a risk.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
