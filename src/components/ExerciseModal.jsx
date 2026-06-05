import { createPortal } from 'react-dom';
import { useState } from 'react';

const SEVERITY = {
  low:      { label: 'Low Impact',  color: '#00C9A7' },
  moderate: { label: 'Moderate',    color: '#FFB347' },
};
const PHASE_COLORS = { 1: '#00C9A7', 2: '#3B82F6', 3: '#8B5CF6' };

function parseSteps(instruction) {
  return instruction
    .split(/(?<=\.)\s+/)
    .map(s => s.replace(/\.$/, '').trim())
    .filter(Boolean);
}

export default function ExerciseModal({ exercise, onClose }) {
  const [imgError, setImgError] = useState(false);
  const sev = SEVERITY[exercise.severity] || SEVERITY.low;
  const phaseColor = PHASE_COLORS[exercise.phase] || '#00C9A7';
  const steps = parseSteps(exercise.instruction);

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">

        {/* Close */}
        <button className="modal__close" onClick={onClose} aria-label="Close">✕</button>

        {/* Header */}
        <div className="modal__header" style={{ '--phase-color': phaseColor }}>
          <div className="modal__header-badges">
            <span className="modal__phase-badge" style={{ background: phaseColor }}>
              Phase {exercise.phase}
            </span>
            <span className="modal__severity-badge" style={{ color: sev.color, borderColor: sev.color }}>
              {sev.label}
            </span>
            <span className="modal__level" style={{ color: exercise.levelColor }}>
              {exercise.level}
            </span>
          </div>
          <h2 className="modal__name">{exercise.name}</h2>
          <div className="modal__metrics">
            <span className="modal__metric">
              <span className="modal__metric-label">Sets / Reps</span>
              <span className="modal__metric-value">{exercise.sets}</span>
            </span>
            <span className="modal__metric-divider" />
            <span className="modal__metric">
              <span className="modal__metric-label">Rest</span>
              <span className="modal__metric-value">{exercise.rest}</span>
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="modal__image-wrap">
          {!imgError ? (
            <img
              src={exercise.image}
              alt={exercise.name}
              className="modal__image"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="modal__image-fallback">🏋️</div>
          )}
          <div className="modal__image-label">Exercise Reference</div>
        </div>

        {/* Step-by-step guide */}
        <div className="modal__guide">
          <h3 className="modal__guide-title">Step-by-Step Guide</h3>
          <ol className="modal__steps">
            {steps.map((step, i) => (
              <li key={i} className="modal__step">
                <span className="modal__step-num">{i + 1}</span>
                <span className="modal__step-text">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Key tip */}
        <div className="modal__tip" style={{ borderColor: phaseColor }}>
          {exercise.tip}
        </div>

        {/* YouTube */}
        <a
          href={exercise.video}
          target="_blank"
          rel="noopener noreferrer"
          className="modal__video-btn"
        >
          ▶ Watch Tutorial on YouTube
        </a>
      </div>
    </div>,
    document.body
  );
}
