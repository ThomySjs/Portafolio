import React from 'react';
import './HeroSection.css';
import image from '../../assets/hero-logo.svg'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <img src="/assets/hero-image.svg" alt="hero-image" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Psicología Social e Institucional</h1>
        <h3 className="name">Fernandez Melany Estefania</h3>
        <h3 className="university-name">Portafolio I.S.F.D</h3>
      </div>
    </section>
  );
}

export default HeroSection