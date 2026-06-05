import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import RulesSection from './components/RulesSection';
import ProgramOverview from './components/ProgramOverview';
import DaySection from './components/DaySection';
import PhaseTimeline from './components/PhaseTimeline';
import Footer from './components/Footer';
import { days } from './data/program';
import './App.css';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState(new Set());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onToggleSelect = (id) => {
    setSelectedExercises(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const totalSelected = selectedExercises.size;

  return (
    <div className="app">
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <span className="nav__logo">Ahmed's Training</span>
        <div className="nav__links">
          {days.map(d => (
            <a key={d.id} href={`#day-${d.id}`} className="nav__link">
              {d.emoji} Day {d.id}
            </a>
          ))}
          <a href="#phases" className="nav__link">Phases</a>
        </div>
        {totalSelected > 0 && (
          <div className="nav__session">
            <span className="nav__session-count">{totalSelected} in session</span>
            <button className="nav__session-clear" onClick={() => setSelectedExercises(new Set())}>
              Clear
            </button>
          </div>
        )}
      </nav>

      <Hero />
      <RulesSection />
      <ProgramOverview />

      {days.map(day => (
        <DaySection
          key={day.id}
          day={day}
          selectedExercises={selectedExercises}
          onToggleSelect={onToggleSelect}
        />
      ))}

      <PhaseTimeline />
      <Footer />
    </div>
  );
}
