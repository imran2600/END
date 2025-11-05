import React, { useEffect, useRef } from 'react';
import styles from './BenefitsSection.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BenefitsSection = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const benefits = [
    {
      icon: '🕐',
      title: 'Lightning-Fast Delivery',
      description: 'Receive your finished video within 24 hours.'
    },
    {
      icon: '💼',
      title: 'Professional Quality',
      description: 'Cinematic camera movement, smooth transitions, and branded overlays.'
    },
    {
      icon: '🎛️',
      title: 'Completely Customizable',
      description: "You're in full control. Upload the exact photos or scenes you want featured — highlight your property's best angles, rooms, and details."
    },
    {
      icon: '💰',
      title: 'More Buyer Engagement',
      description: 'Video listings attract up to 87% more views online.'
    },
    {
      icon: '💡',
      title: 'Simple & Stress-Free',
      description: 'Upload photos, pick your package, and we handle the rest.'
    }
  ];

  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Cards animation
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>
          Why Agents Love QuantumTour
        </h2>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={styles.benefitCard}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{benefit.icon}</span>
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

