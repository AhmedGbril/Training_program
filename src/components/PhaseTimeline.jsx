import { phases } from '../data/program';

export default function PhaseTimeline() {
  return (
    <section className="phases-section" id="phases">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">12-Week Plan</span>
          <h2 className="section-title">Progression Phases</h2>
          <p className="section-sub">Use the phase filter on each day to mix exercises across phases</p>
        </div>

        <div className="phases-timeline">
          {phases.map((p) => (
            <div
              key={p.phase}
              className={`phase-card ${p.active ? 'phase-card--active' : ''}`}
              style={{ '--p-color': p.color }}
            >
              <div className="phase-card__badge">{p.active ? '📍 Current' : `🔒 Weeks ${p.weeks.split('–')[0].replace('Weeks ', '')}`}</div>
              <h3 className="phase-card__phase">{p.label}</h3>
              <div className="phase-card__weeks">{p.weeks}</div>
              <p className="phase-card__focus">{p.focus}</p>
              <p className="phase-card__desc">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="phases-butterfly">
          <div className="butterfly-card">
            <span className="butterfly-card__emoji">🦋</span>
            <div className="butterfly-card__body">
              <h4>Butterfly Stroke — Phase 2 Goal</h4>
              <p>
                Once your core stabilizers are built and L5-S1 is supported by strong glutes,
                butterfly returns in Week 5. It becomes a strength builder — not a risk.
                You'll find it in Day 1 under the Phase 2 filter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
