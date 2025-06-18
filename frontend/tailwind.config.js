/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],

  // Configuración del modo oscuro para evitar conflictos
  darkMode: 'class',

  theme: {
    extend: {
      // 🎨 Paleta de Colores Ambrosía actualizada
      colors: {
        ambrosia: {
          // Dorados principales - basados en las imágenes
          'gold': '#D4AF37',        // Oro clásico del texto principal
          'gold-light': '#E8C547',  // Oro más claro para highlights
          'gold-bright': '#F4D03F', // Oro brillante para acentos
          'gold-dark': '#B8860B',   // Oro oscuro para sombras

          // Bronces y cobres - tonos más cálidos
          'bronze': '#CD7F32',      // Bronce base
          'bronze-light': '#DAA520', // Bronce dorado
          'bronze-dark': '#8B4513',  // Bronce oscuro/marrón

          // Fondos oscuros - exactos de las imágenes
          'dark-primary': '#1A0F0A',   // Fondo principal muy oscuro
          'dark-secondary': '#2D1810', // Fondo secundario marrón oscuro
          'dark-accent': '#0F0604',    // Fondo de acentos negro-marrón
          'dark-light': '#3D2817',     // Fondo más claro para cards

          // Cremas y beiges - para contrastes suaves
          'cream': '#F5F5DC',
          'cream-dark': '#F3E5AB',
          'beige': '#F7F3E9',
        },
        // Alias para facilidad de uso - tonos dorados
        primary: {
          50: '#FEF7E0',    // Crema muy claro
          100: '#FDECC8',   // Crema claro
          200: '#FBD78C',   // Dorado muy claro
          300: '#F4D03F',   // Dorado claro brillante
          400: '#E8C547',   // Dorado medio
          500: '#D4AF37',   // Dorado principal
          600: '#B8860B',   // Dorado oscuro
          700: '#996F09',   // Bronce dorado
          800: '#7A5607',   // Bronce
          900: '#5D4105',   // Bronce oscuro
          950: '#3D2B03',   // Bronce muy oscuro
        },
        // Escala de grises/marrones para fondos
        secondary: {
          50: '#FAF7F2',    // Beige muy claro
          100: '#F0E6D2',   // Beige claro
          200: '#E1CCA4',   // Beige medio
          300: '#C8A876',   // Marrón claro
          400: '#A68B5B',   // Marrón medio
          500: '#8B6F47',   // Marrón
          600: '#6B5537',   // Marrón oscuro
          700: '#4A3B28',   // Marrón muy oscuro
          800: '#3D2817',   // Fondo cards
          900: '#2D1810',   // Fondo secundario
          950: '#1A0F0A',   // Fondo principal
        }
      },

      // 🖋️ Tipografías
      fontFamily: {
        // Fuentes principales con alias - CORREGIDOS para coincidir con App.tsx
        'cinzel': ['Cinzel'],                    // ✅ Coincide con App.tsx··
        'cinzel-bold': ['CinzelBold'],           // ✅ Coincide con App.tsx  
        'cinzel-regular': ['CinzelRegular'],     // ✅ Coincide con App.tsx
        'cinzel-medium': ['CinzelMedium'],       // ✅ Coincide con App.tsx

        'crimson': ['Crimson'],                  // ✅ Coincide con App.tsx
        'crimson-bold': ['CrimsonBold'],         // ✅ Coincide con App.tsx
        'crimson-semibold': ['CrimsonSemiBold'], // ✅ Coincide con App.tsx

        // Alias semánticos para tu app
        'display': ['CinzelBold'],               // Para títulos principales
        'heading': ['CinzelMedium'],             // Para subtítulos  
        'body': ['Crimson'],                     // Para texto normal
        'caption': ['CrimsonSemiBold'],          // Para texto pequeño destacado
      },

      // 🎨 Gradientes personalizados actualizados
      backgroundImage: {
        'gradient-ambrosia': 'linear-gradient(135deg, #1A0F0A, #2D1810, #3D2817)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37, #B8860B)',
        'gradient-bronze': 'linear-gradient(135deg, #CD7F32, #8B4513)',
        'gradient-mystical': 'linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(184, 134, 11, 0.1))',
        'gradient-dark': 'linear-gradient(180deg, #1A0F0A 0%, #2D1810 50%, #3D2817 100%)',
      },

      // 📐 Espaciado personalizado
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },

      // 🎭 Animaciones personalizadas
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'mystical': 'mystical 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)' },
        },
        mystical: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.02)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translateY(-15px) scale(1.2)', opacity: '0.8' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
      },

      // 🎯 Sombras personalizadas actualizadas
      boxShadow: {
        'mystical': '0 4px 15px rgba(212, 175, 55, 0.25)',
        'mystical-lg': '0 10px 25px rgba(212, 175, 55, 0.35)',
        'inner-glow': 'inset 0 2px 4px rgba(212, 175, 55, 0.15)',
        'gold': '0 4px 15px rgba(212, 175, 55, 0.4)',
        'gold-intense': '0 0 30px rgba(212, 175, 55, 0.5)',
        'bronze': '0 4px 12px rgba(205, 127, 50, 0.3)',
        'cauldron': '0 0 20px rgba(212, 175, 55, 0.1), inset 0 -10px 20px rgba(0, 0, 0, 0.5)',
      },

      // 📱 Dimensiones para móvil
      maxWidth: {
        'mobile': '428px',
        'tablet': '834px',
      },

      // 🎨 Opacidades personalizadas
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '85': '0.85',
      },

      // 📐 Border radius personalizados
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },

      // 🎯 Z-index scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      // 📏 Border width personalizados
      borderWidth: {
        '3': '3px',
      },

      // 🎨 Letra spacing para títulos místicos
      letterSpacing: {
        'mystical': '3px',
      }
    },
  },
  plugins: [],
}