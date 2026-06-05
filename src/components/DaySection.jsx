import ExerciseCard from './ExerciseCard';

export default function DaySection({ day }) {
  return (
    <section className="day-section" id={`day-${day.id}`} style={{ '--day-color': day.color }}>
      <div className="day-section__header" style={{ background: day.bgGradient }}>
        <div className="container">
          <div className="day-header__top">
            <span className="day-header__number">Day {day.id}</span>
            <span className="day-header__duration">⏱ {day.duration}</span>
          </div>
          <div className="day-header__emoji">{day.emoji}</div>
          <h2 className="day-header__title">{day.title}</h2>
          <p className="day-header__subtitle">{day.subtitle}</p>
          <p className="day-header__desc">{day.description}</p>

          <div className="day-header__blocks">
            <div className="day-block day-block--warm">
              <span className="day-block__label">🔥 Warm-Up</span>
              <span className="day-block__text">{day.warmup}</span>
            </div>
            <div className="day-block day-block--cool">
              <span className="day-block__label">❄️ Cool-Down</span>
              <span className="day-block__text">{day.cooldown}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="day-section__exercises">
        <div className="container">
          <div className="ex-grid">
            {day.exercises.map((ex, i) => (
              <ExerciseCard
                key={ex.id}
                exercise={ex}
                index={i}
                dayColor={day.color}
              />
            ))}
          </div>

          {day.note && (
            <div className="day-note">
              <p>{day.note}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
