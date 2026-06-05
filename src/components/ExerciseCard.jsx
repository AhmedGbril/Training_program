import { useState } from 'react';

export default function ExerciseCard({ exercise, index, dayColor }) {
  const [imgError, setImgError] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className="ex-card" style={{ '--ex-color': dayColor, animationDelay: `${index * 0.07}s` }}>
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
        <div className="ex-card__level" style={{ '--level-color': exercise.levelColor }}>
          {exercise.level}
        </div>
      </div>

      <div className="ex-card__body">
        <div className="ex-card__number">#{String(index + 1).padStart(2, '0')}</div>
        <h3 className="ex-card__name">{exercise.name}</h3>

        <div className="ex-card__metrics">
          <div className="ex-metric">
            <span className="ex-metric__label">SETS/REPS</span>
            <span className="ex-metric__value">{exercise.sets}</span>
          </div>
          <div className="ex-metric">
            <span className="ex-metric__label">REST</span>
            <span className="ex-metric__value">{exercise.rest}</span>
          </div>
        </div>

        <div className={`ex-card__instruction ${showInstructions ? 'ex-card__instruction--open' : ''}`}>
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
