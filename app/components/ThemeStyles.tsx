"use client";

export default function ThemeStyles() {
  return (
    <style jsx global>{`
      .hacker-theme {
        background-color: black;
        color: #00ff00;
        font-family: var(--font-fira-code), monospace;
      }
      
      .hacker-theme body {
        background-color: black;
      }
      
      /* Custom scrollbar for hacker theme */
      .hacker-theme ::-webkit-scrollbar {
        width: 8px;
      }
      
      .hacker-theme ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.5);
      }
      
      .hacker-theme ::-webkit-scrollbar-thumb {
        background: rgba(0, 255, 0, 0.3);
        border-radius: 4px;
      }
      
      .hacker-theme ::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 255, 0, 0.5);
      }
    `}</style>
  );
} 