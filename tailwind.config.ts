import tailwindcssAnimate from 'tailwindcss-animate';
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      scrollbar: ['rounded', 'dark'],
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontSize: {
        xs: ['.75rem', '1rem'],
        sm: ['.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
        '4xl': ['2.125rem', '2.5rem'],
        '5xl': ['3rem', '1'],
        '6xl': ['4rem', '1'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
        'wiggle-more': {
          '0%, 100%': {
            transform: 'rotate(-12deg)',
          },
          '50%': {
            transform: 'rotate(12deg)',
          },
        },
        'rotate-y': {
          '0%': {
            transform: 'rotateY(360deg)',
          },
          '100%': {
            transform: 'rotateY(0)',
          },
        },
        'rotate-x': {
          '0%': {
            transform: 'rotateX(360deg)',
          },
          '100%': {
            transform: 'rotateX(0)',
          },
        },
        jump: {
          '0%, 100%': {
            transform: 'scale(100%)',
          },
          '10%': {
            transform: 'scale(80%)',
          },
          '50%': {
            transform: 'scale(120%)',
          },
        },
        'jump-in': {
          '0%': {
            transform: 'scale(0%)',
          },
          '80%': {
            transform: 'scale(120%)',
          },
          '100%': {
            transform: 'scale(100%)',
          },
        },
        'jump-out': {
          '0%': {
            transform: 'scale(100%)',
          },
          '20%': {
            transform: 'scale(120%)',
          },
          '100%': {
            transform: 'scale(0%)',
          },
        },
        shake: {
          '0%': {
            transform: 'translateX(0rem)',
          },
          '25%': {
            transform: 'translateX(-1rem)',
          },
          '75%': {
            transform: 'translateX(1rem)',
          },
          '100%': {
            transform: 'translateX(0rem)',
          },
        },
        fade: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'flip-up': {
          '0%': {
            transform: 'rotateX(90deg)',
            transformOrigin: 'bottom',
          },
          '100%': {
            transform: 'rotateX(0)',
            transformOrigin: 'bottom',
          },
        },
        'flip-down': {
          '0%': {
            transform: 'rotateX(-90deg)',
            transformOrigin: 'top',
          },
          '100%': {
            transform: 'rotateX(0)',
            transformOrigin: 'top',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s both',
        'wiggle-more': 'wiggle-more 1s both',
        'rotate-y': 'rotate-y 1s both',
        'rotate-x': 'rotate-x 1s both',
        jump: 'jump .5s both',
        'jump-in': 'jump-in .5s both',
        'jump-out': 'jump-out .5s both',
        shake: 'shake .5s both',
        fade: 'fade 1s both',
        'fade-down': 'fade-down 1s both',
        'fade-up': 'fade-up 1s both',
        'fade-left': 'fade-left 1s both',
        'fade-right': 'fade-right 1s both',
        'flip-up': 'flip-up 1s both',
        'flip-down': 'flip-down 1s both',
      },
      animationDelay: {
        none: '0ms',
        0: '0ms',
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
      },
      animationDuration: {
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    tailwindcssAnimate,
  ],
};
