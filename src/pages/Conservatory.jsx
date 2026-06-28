import { WeatherWidget } from '../components/WeatherWidget';
import '../styles/Conservatory.css';

/**
 * Conservatory Page
 * Displays plant care information and weather widget
 */
export const Conservatory = () => {
  return (
    <div className="conservatory-page">
      <header className="conservatory-header">
        <h1>🌿 The Conservatory</h1>
        <p>Your plants' optimal growing conditions</p>
      </header>

      <main className="conservatory-content">
        <section className="weather-section">
          <WeatherWidget />
        </section>

        <section className="plant-care-section">
          <h2>Plant Care Tips</h2>
          {/* Plant care content goes here */}
        </section>
      </main>
    </div>
  );
};
