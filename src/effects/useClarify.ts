import { useEffect } from 'react';

export function useClarify() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {     
      if (e.key === 'Enter') {
        const fuzzyContainers = document.querySelectorAll('.fuzzy');
        if (fuzzyContainers?.length) {
          const el = fuzzyContainers[0];
          el.classList.remove('fuzzy');
          el.classList.add('clear');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}