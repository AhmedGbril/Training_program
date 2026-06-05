import { useState } from 'react';
import ExerciseCard from './ExerciseCard';

const PHASE_COLORS = { 1: '#00C9A7', 2: '#3B82F6', 3: '#8B5CF6' };

export default function DaySection({ day, selectedExercises, onToggleSelect }) {
  const [phaseFilter, setPhaseFilter] = useState(0); // 0 = All

  const availablePhases = [...new Set(day.exercises.map(e => e.phase))].sort();
  const filtered = phaseFilter === 0
    ? day.exercises
    : day.exercises.filter(e => e.phase === phaseFilter);

  const selectedCount = day.exercises.filter(e => selectedExercises.has(e.id)).length;

  return (
    <section className="day-section" id={`day-${day.id}`} style={{ '--day-color': day.color }}>
      {/* Header */}
      <div className="day-section__header" style={{ background: day.bgGradient }}>
        <div className="container">
          <div className="day-header__top">
            <span className="day-header__number">Day {day.id}</span>
            <span className="day-header__duration">⏱ {day.duration}</span>
          </div>
          <span className="day-header__emoji">{day.emoji}</span>
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

      {/* Phase filter + session count */}
      <div className="day-section__toolbar">
        <div className="container">
          <div className="phase-filter">
            <button
              className={`phase-tab ${phaseFilter === 0 ? 'phase-tab--active' : ''}`}
              onClick={() => setPhaseFilter(0)}
            >
              All <span className="phase-tab__count">{day.exercises.length}</span>
            </button>
            {availablePhases.map(p => (
              <button
                key={p}
                className={`phase-tab ${phaseFilter === p ? 'phase-tab--active' : ''}`}
                style={phaseFilter === p ? { '--tab-color': PHASE_COLORS[p] } : {}}
                onClick={() => setPhaseFilter(p)}
              >
                Phase {p}
                <span className="phase-tab__count">
                  {day.exercises.filter(e => e.phase === p).length}
                </span>
              </button>
            ))}
          </div>

          {selectedCount > 0 && (
            <span className="day-session-count">
              {selectedCount} in session
            </span>
          )}
        </div>
      </div>

      {/* Exercises */}
      <div className="day-section__exercises">
        <div className="container">
          <div className="ex-grid">
            {filtered.map((ex, i) => (
              <ExerciseCard
                key={ex.id}
                exercise={ex}
                index={i}
                dayColor={day.color}
                selected={selectedExercises.has(ex.id)}
                onToggleSelect={onToggleSelect}
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
