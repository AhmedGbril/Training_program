import { useState } from 'react';

const SEVERITY = {
  low:      { label: 'Low Impact',  color: '#00C9A7' },
  moderate: { label: 'Moderate',    color: '#FFB347' },
};

const PHASE_COLORS = { 1: '#00C9A7', 2: '#3B82F6', 3: '#8B5CF6' };

export default function ExerciseCard({ exercise, index, dayColor, selected, onToggleSelect }) {
  const [imgError, setImgError] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const sev = SEVERITY[exercise.severity] || SEVERITY.low;
  const phaseColor = PHASE_COLORS[exercise.phase] || dayColor;

  return (
    <div
      className={`ex-card ${selected ? 'ex-card--selected' : ''}`}
      style={{ '--ex-color': dayColor, '--phase-color': phaseColor }}
    >
      {/* Image */}
      <div className="ex-card__image-wrap">
        {!imgError ? (
          <img
            src={exercise.image}
            alt={exercise.name}
            className="ex-card__image"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="ex-card__image-fallback">
            <span>🏋️</span>
          </div>
        )}

        {/* Overlaid badges */}
        <div className="ex-card__badges">
          <span className="ex-phase-badge" style={{ background: phaseColor }}>
            P{exercise.phase}
          </span>
          <span
            className="ex-severity-badge"
            style={{ color: sev.color, borderColor: sev.color }}
          >
            {sev.label}
          </span>
        </div>

        {/* Session select button */}
        <button
          className={`ex-select-btn ${selected ? 'ex-select-btn--on' : ''}`}
          onClick={() => onToggleSelect(exercise.id)}
          aria-label={selected ? 'Remove from session' : 'Add to session'}
        >
          {selected ? '✓' : '+'}
        </button>
      </div>

      {/* Body */}
      <div className="ex-card__body">
        <div className="ex-card__meta-row">
          <span className="ex-card__number">#{String(index + 1).padStart(2, '0')}</span>
          <span className="ex-card__level" style={{ color: exercise.levelColor }}>
            {exercise.level}
          </span>
        </div>

        <h3 className="ex-card__name">{exercise.name}</h3>

        <div className="ex-card__metrics">
          <div className="ex-metric">
            <span className="ex-metric__label">Sets / Reps</span>
            <span className="ex-metric__value">{exercise.sets}</span>
          </div>
          <div className="ex-metric">
            <span className="ex-metric__label">Rest</span>
            <span className="ex-metric__value">{exercise.rest}</span>
          </div>
        </div>

        <div className="ex-card__instruction">
          <button
            className="ex-card__toggle"
            onClick={() => setShowInstructions(!showInstructions)}
          >
            {showInstructions ? '▲ Hide Instructions' : '▼ How To Do It'}
          </button>
          {showInstructions && (
            <div className="ex-card__steps">
              <p className="ex-card__desc">{exercise.instruction}</p>
              <div className="ex-card__tip">{exercise.tip}</div>
            </div>
          )}
        </div>

        <a
          href={exercise.video}
          target="_blank"
          rel="noopener noreferrer"
          className="ex-card__video-btn"
        >
          ▶ Watch Tutorial on YouTube
        </a>
      </div>
    </div>
  );
}
