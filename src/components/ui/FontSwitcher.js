'use client';

import { useState, useEffect, useRef } from 'react';
import { Type, ChevronDown, Check } from 'lucide-react';
import { fontPairs, defaultFontPair } from '@/lib/fonts';

const pairKeys = Object.keys(fontPairs);

export default function FontSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(defaultFontPair);
  const panelRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  function applyPair(key) {
    const pair = fontPairs[key];
    if (!pair) return;

    const root = document.documentElement;
    root.style.setProperty('--font-heading', pair.heading);
    root.style.setProperty('--font-body', pair.body);

    setActive(key);
    setOpen(false);
  }

  function resetPair() {
    const root = document.documentElement;
    root.style.removeProperty('--font-heading');
    root.style.removeProperty('--font-body');

    setActive(defaultFontPair);
    setOpen(false);
  }

  return (
    <div
      ref={panelRef}
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        right: '1.25rem',
        zIndex: 9999,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 0.5rem)',
            right: 0,
            width: '280px',
            background: '#1a1a1a',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '0.5rem',
          }}
        >
          <button
            onClick={resetPair}
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              marginBottom: '0.25rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px dashed rgba(255,255,255,0.15)',
              borderRadius: '8px',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.04em',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            Reset to CSS defaults
          </button>

          <div
            style={{
              padding: '0.6rem 0.75rem 0.3rem',
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            Font pair
          </div>

          {pairKeys.map((key) => {
            const pair = fontPairs[key];
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => applyPair(key)}
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '0.15rem',
                  padding: '0.55rem 0.75rem',
                  background: isActive
                    ? 'rgba(255,255,255,0.1)'
                    : 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.1s',
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.style.background =
                      'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.style.background = 'transparent';
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    width: '100%',
                    fontSize: '0.72rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
                  }}
                >
                  <span style={{ flex: 1 }}>{pair.label}</span>
                  {isActive && (
                    <Check
                      size={14}
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    />
                  )}
                </span>
                <span
                  style={{
                    fontFamily: pair.heading,
                    fontSize: '1rem',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: 1.1,
                    marginTop: '0.1rem',
                  }}
                >
                  Aa
                </span>
                <span
                  style={{
                    fontFamily: pair.body,
                    fontSize: '0.72rem',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.2,
                  }}
                >
                  The quick brown fox
                </span>
              </button>
            );
          })}
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Switch font pair"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.6rem 1rem',
          background: '#1a1a1a',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '10px',
          fontSize: '0.72rem',
          fontWeight: 600,
          letterSpacing: '0.02em',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
          transition: 'box-shadow 0.15s, transform 0.15s',
          fontFamily: 'inherit',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.25)';
        }}
      >
        <Type size={14} />
        <span>{fontPairs[active].label}</span>
        <ChevronDown
          size={12}
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.15s',
          }}
        />
      </button>
    </div>
  );
}
