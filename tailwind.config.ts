import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
  "./src/**/*.{ts,tsx}"],

  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // Unique Electric Noir Palette
        electric: {
          cyan: '#00FFFF',
          magenta: '#FF00FF',
          yellow: '#FFFF00',
          white: '#FFFFFF'
        },
        neon: {
          green: '#39FF14',
          blue: '#0066FF'
        },
        void: {
          black: '#000000',
          deep: '#0A0A0A'
        },
        shadow: {
          purple: '#1A0033'
        },

        // Shadcn/ui compatibility
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        'display': ['Orbitron', 'monospace'],
        'body': ['Space Grotesk', 'sans-serif']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px'
      },
      boxShadow: {
        'neon-cyan': '0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF',
        'neon-magenta': '0 0 20px #FF00FF, 0 0 40px #FF00FF',
        'neon-yellow': '0 0 15px #FFFF00, 0 0 30px #FFFF00',
        'neon-green': '0 0 15px #39FF14, 0 0 30px #39FF14',
        'electric-glow': '0 0 30px #00FFFF, 0 0 60px #FF00FF'
      },
      keyframes: {
        'morph-shift': {
          '0%': {
            transform: 'rotate(0deg) scale(1)',
            borderRadius: '0'
          },
          '25%': {
            transform: 'rotate(90deg) scale(1.1)',
            borderRadius: '25%'
          },
          '50%': {
            transform: 'rotate(180deg) scale(0.9)',
            borderRadius: '50%'
          },
          '75%': {
            transform: 'rotate(270deg) scale(1.1)',
            borderRadius: '25%'
          },
          '100%': {
            transform: 'rotate(360deg) scale(1)',
            borderRadius: '0'
          }
        },
        'electric-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px #00FFFF, 0 0 40px #00FFFF',
            borderColor: '#00FFFF'
          },
          '33%': {
            boxShadow: '0 0 20px #FF00FF, 0 0 40px #FF00FF',
            borderColor: '#FF00FF'
          },
          '66%': {
            boxShadow: '0 0 15px #FFFF00, 0 0 30px #FFFF00',
            borderColor: '#FFFF00'
          }
        },
        'glitch-effect': {
          '0%, 100%': {
            transform: 'translate(0, 0)',
            filter: 'hue-rotate(0deg)'
          },
          '10%': {
            transform: 'translate(2px, -2px)',
            filter: 'hue-rotate(90deg)'
          },
          '20%': {
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(180deg)'
          },
          '30%': {
            transform: 'translate(0, 0)',
            filter: 'hue-rotate(270deg)'
          },
          '40%': {
            transform: 'translate(1px, -1px)',
            filter: 'hue-rotate(360deg)'
          }
        },
        'neon-text': {
          '0%, 100%': {
            textShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
            color: '#00FFFF'
          },
          '50%': {
            textShadow: '0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 15px #FF00FF',
            color: '#FF00FF'
          }
        },
        'geometric-spin': {
          '0%': {
            transform: 'rotate(0deg) skew(0deg)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          },
          '25%': {
            transform: 'rotate(90deg) skew(5deg)',
            clipPath: 'polygon(0 0, 80% 0, 100% 100%, 20% 100%)'
          },
          '50%': {
            transform: 'rotate(180deg) skew(0deg)',
            clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)'
          },
          '75%': {
            transform: 'rotate(270deg) skew(-5deg)',
            clipPath: 'polygon(0 20%, 100% 0, 100% 80%, 0 100%)'
          },
          '100%': {
            transform: 'rotate(360deg) skew(0deg)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          }
        },
        'holographic-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      animation: {
        'morph-shift': 'morph-shift 3s ease-in-out infinite',
        'electric-pulse': 'electric-pulse 2s ease-in-out infinite',
        'glitch-effect': 'glitch-effect 0.3s ease-in-out infinite',
        'neon-text': 'neon-text 2s ease-in-out infinite',
        'geometric-spin': 'geometric-spin 4s linear infinite',
        'holographic-shift': 'holographic-shift 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite'
      },
      clipPath: {
        'triangle': 'polygon(50% 0%, 0% 100%, 100% 100%)',
        'diamond': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        'hexagon': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        'arrow': 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)'
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px'
      }
    }
  },
  plugins: [
  require("tailwindcss-animate"),
  function ({ addUtilities }) {
    const newUtilities = {
      '.clip-triangle': {
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
      },
      '.clip-diamond': {
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
      },
      '.clip-hexagon': {
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
      },
      '.clip-arrow': {
        clipPath: 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)'
      }
    };
    addUtilities(newUtilities);
  }]

} satisfies Config;