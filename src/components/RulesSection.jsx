import { rules } from '../data/program';

export default function RulesSection() {
  return (
    <section className="rules-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Before You Start</span>
          <h2 className="section-title">Program Rules</h2>
          <p className="section-sub">Designed around your L5-S1 diagnosis — follow these for safe progress</p>
        </div>
        <div className="rules-grid">
          {rules.map((rule, i) => (
            <div key={i} className="rule-card">
              <span className="rule-icon">{rule.icon}</span>
              <p className="rule-text">{rule.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
