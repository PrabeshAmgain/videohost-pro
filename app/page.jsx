'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load and execute the index.html content
    fetch('/index.html')
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const body = document.querySelector('body');
        if (body && doc.body) {
          body.innerHTML = doc.body.innerHTML;
          // Re-execute scripts
          const scripts = doc.body.querySelectorAll('script');
          scripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.textContent = script.textContent;
            document.body.appendChild(newScript);
          });
        }
      })
      .catch(err => console.error('Failed to load HTML:', err));
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div id="app" />
  );
}
