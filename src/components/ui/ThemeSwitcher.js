'use client';

import { useState, useEffect, useRef } from 'react';
import { Palette, ChevronDown, Check } from 'lucide-react';
import themes from '@/lib/themes';

const themeKeys = Object.keys(themes);
const groups = [...new Set(Object.values(themes).map((t) => t.group))];

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('indigo-ink-and-sage');
  const panelRef = useRef(null);

  useEffect(() => {
    applyTheme('indigo-ink-and-sage');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  function applyTheme(key) {
    const theme = themes[key];
    if (!theme) return;

    const root = document.documentElement;
    const vars = theme.colors;

    Object.entries(vars).forEach(([prop, value]) => {
      root.style.setProperty(prop, value);
    });

    setActive(key);
    setOpen(false);
  }

  function resetTheme() {
    const root = document.documentElement;
    const vars = themes['indigo-ink-and-sage'].colors;

    Object.keys(vars).forEach((prop) => {
      root.style.removeProperty(prop);
    });

    setActive('indigo-ink-and-sage');
    setOpen(false);
  }

  return (
    <div
      ref={panelRef}
      style={{
        position: 'fixed',
        bottom: '4.25rem',
        right: '1.25rem',
        zIndex: 9999,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Dropdown panel */}
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 0.5rem)',
            right: 0,
            width: '280px',
            maxHeight: '420px',
            overflowY: 'auto',
            background: '#1a1a1a',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '0.5rem',
          }}
        >
          {/* Reset button */}
          <button
            onClick={resetTheme}
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

          {groups.map((group) => (
            <div key={group}>
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
                {group}
              </div>
              {themeKeys
                .filter((k) => themes[k].group === group)
                .map((key) => {
                  const theme = themes[key];
                  const isActive = active === key;
                  const colors = theme.colors;
                  return (
                    <button
                      key={key}
                      onClick={() => applyTheme(key)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.5rem 0.75rem',
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
                      {/* Color dots */}
                      <div
                        style={{
                          display: 'flex',
                          gap: '3px',
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            width: '14px',
                            height: '14px',
                            borderRadius: '4px',
                            background: colors['--primary-900'],
                            border: '1px solid rgba(255,255,255,0.1)',
                          }}
                        />
                        <span
                          style={{
                            width: '14px',
                            height: '14px',
                            borderRadius: '4px',
                            background:
                              colors['--accent-500'] ||
                              colors['--accent-600'],
                            border: '1px solid rgba(255,255,255,0.1)',
                          }}
                        />
                        <span
                          style={{
                            width: '14px',
                            height: '14px',
                            borderRadius: '4px',
                            background: colors['--neutral-50'],
                            border: '1px solid rgba(255,255,255,0.1)',
                          }}
                        />
                      </div>
                      {/* Label */}
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: isActive ? 600 : 400,
                          color: isActive
                            ? '#fff'
                            : 'rgba(255,255,255,0.7)',
                          flex: 1,
                        }}
                      >
                        {theme.label}
                      </span>
                      {/* Check */}
                      {isActive && (
                        <Check
                          size={14}
                          style={{ color: 'rgba(255,255,255,0.5)' }}
                        />
                      )}
                    </button>
                  );
                })}
            </div>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Switch color theme"
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
        <Palette size={14} />
        <span>{themes[active].label}</span>
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
