import { days } from '../data/program';

export default function ProgramOverview() {
  return (
    <section className="overview-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">The Plan</span>
          <h2 className="section-title">Your 3-Day Split</h2>
          <p className="section-sub">Structured to build strength without loading your spine or injured joints</p>
        </div>
        <div className="overview-grid">
          {days.map(day => (
            <a key={day.id} href={`#day-${day.id}`} className="overview-card" style={{ '--day-color': day.color }}>
              <div className="overview-card__emoji">{day.emoji}</div>
              <div className="overview-card__number">Day {day.id}</div>
              <div className="overview-card__title">{day.title}</div>
              <div className="overview-card__sub">{day.subtitle}</div>
              <div className="overview-card__meta">
                <span>⏱ {day.duration}</span>
                <span>· {day.exercises.length} exercises</span>
              </div>
              <div className="overview-card__arrow">↓</div>
            </a>
          ))}
        </div>

        <div className="weekly-layout">
          <h3 className="weekly-layout__title">Weekly Schedule</h3>
          <div className="weekly-days">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => {
              const config = {
                'Mon': { active: true, label: 'Day 1 🏊', color: '#00C9A7' },
                'Wed': { active: true, label: 'Day 2 💪', color: '#3B82F6' },
                'Fri': { active: true, label: 'Day 3 🦵', color: '#8B5CF6' },
              };
              const c = config[d];
              return (
                <div
                  key={d}
                  className={`weekly-day ${c ? 'weekly-day--active' : ''}`}
                  style={c ? { '--wcolor': c.color } : {}}
                >
                  <span className="weekly-day__name">{d}</span>
                  {c ? (
                    <span className="weekly-day__label">{c.label}</span>
                  ) : (
                    <span className="weekly-day__rest">Rest</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
