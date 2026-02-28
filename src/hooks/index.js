import { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── Throttled mouse parallax hook ──────────────────────────
export function useMouseParallax() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let pending = false;
    const onMove = (e) => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        mouse.current = {
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: -(e.clientY / window.innerHeight) * 2 + 1,
        };
        pending = false;
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return mouse;
}

// ── GSAP scroll reveal for sections ───────────────────────
export function useReveal(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return;
    
    // Use a mutation observer to re-apply animations when DOM changes
    const animateReveals = () => {
      const els = ref.current?.querySelectorAll('.reveal');
      if (!els || !els.length) return;
      
      // Kill existing animations for these elements to prevent conflicts
      gsap.killTweensOf(els);
      
      gsap.fromTo(
        els,
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0,
          duration: 0.85,
          stagger: 0.09,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 78%',
            once: false,
          },
        }
      );
    };
    
    // Observe DOM mutations to catch filter changes
    const observer = new MutationObserver(() => {
      animateReveals();
    });
    
    observer.observe(ref.current, {
      childList: true,
      subtree: true,
      attributes: false,
    });
    
    // Initial animation
    animateReveals();
    
    return () => {
      observer.disconnect();
    };
  }, [ref]);
}

// ── Floating skill side-panel visibility ──────────────────
export function useSkillPanel(skillsSectionRef) {
  useEffect(() => {
    const panel = document.getElementById('skill-panel');
    if (!panel || !skillsSectionRef.current) return;

    ScrollTrigger.create({
      trigger: skillsSectionRef.current,
      start: 'top 60%',
      end: 'bottom 40%',
      onEnter: () => {
        panel.classList.add('visible');
      },
      onEnterBack: () => {
        panel.classList.add('visible');
      },
    });
  }, []);
}
