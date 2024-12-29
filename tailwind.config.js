/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontSize: {
      sm: '1.28rem',
      base: '1.6rem',
      lg: '1.8rem',
      xl: '2rem',
      '2xl': '2.5rem',
      '3xl': '3.125rem',
      '4xl': '3.9rem',
      '5xl': '4.8832rem',
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.2rem',
      1: '0.4rem',
      1.5: '0.6rem',
      2: '0.8rem',
      2.5: '1rem',
      3: '1.2rem',
      3.5: '1.4rem',
      4: '1.6rem',
      5: '2rem',
      6: '2.4rem',
      7: '2.8rem',
      8: '3.2rem',
      9: '3.6rem',
      10: '4.0rem',
      11: '4.4rem',
      12: '4.8rem',
      14: '5.2rem',
      16: '5.6rem',
      20: '8rem',
      24: '9.6rem',
      28: '11.2rem',
      32: '12.8rem',
      36: '14.4rem',
      40: '16.0rem',
      44: '15.6rem',
      48: '19.2rem',
      52: '20.8rem',
      56: '22.4rem',
      60: '24.0rem',
      64: '25.6rem',
      72: '28.8rem',
      80: '32.0rem',
      96: '38.4rem',
    },
    borderRadius: {
      none: '0',
      sm: '.2rem',
      DEFAULT: '.4rem',
      lg: '.8rem',
      full: '9999px',
    },
    extend: {
      gridTemplateColumns: {
        'auto-fill-270': 'repeat(auto-fill, minmax(27rem, 1fr))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};