try {
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'on-surface-variant': '#42484a',
          'primary-container': '#1a2e35',
          'technical-gray': '#666666',
          'border-subtle': '#D1D5DB',
          'on-secondary': '#ffffff',
          'tertiary-fixed-dim': '#cbc6b7',
          'on-primary-container': '#81969e',
          'surface-variant': '#e4e2e2',
          'on-primary-fixed': '#091e25',
          'architectural-parchment': '#E8E3D3',
          'secondary-container': '#fe9d7c',
          'on-secondary-fixed': '#390c00',
          'on-error-container': '#93000a',
          'outline-variant': '#c2c7ca',
          'on-tertiary-fixed': '#1d1c12',
          'on-tertiary-container': '#969284',
          'surface-bright': '#fbf9f8',
          'inverse-on-surface': '#f2f0f0',
          'surface-container-low': '#f5f3f3',
          'primary-fixed-dim': '#b4cad3',
          'on-error': '#ffffff',
          'surface-tint': '#4d6169',
          'inverse-surface': '#303031',
          'surface-container-high': '#e9e8e7',
          background: '#fbf9f8',
          primary: '#041920',
          'tertiary-container': '#2d2b21',
          'on-tertiary-fixed-variant': '#49473b',
          'secondary-fixed': '#ffdbcf',
          'on-primary-fixed-variant': '#364a51',
          outline: '#73787a',
          'surface-container-lowest': '#ffffff',
          'on-primary': '#ffffff',
          'secondary-fixed-dim': '#ffb59c',
          'on-background': '#1b1c1c',
          'on-secondary-container': '#773319',
          secondary: '#94492d',
          'surface-container': '#efeded',
          'surface-container-highest': '#e4e2e2',
          'slate-deep': '#1A2E35',
          'surface-dim': '#dbdad9',
          surface: '#fbf9f8',
          'on-tertiary': '#ffffff',
          'tertiary-fixed': '#e7e2d2',
          error: '#ba1a1a',
          'primary-fixed': '#d0e6ef',
          'on-surface': '#1b1c1c',
          'error-container': '#ffdad6',
          'blueprint-white': '#FFFFFF',
          'on-secondary-fixed-variant': '#763218',
          'inverse-primary': '#b4cad3',
          'terracotta-technical': '#9B4E32',
          tertiary: '#18170d'
        },
        borderRadius: {
          DEFAULT: '0.25rem',
          lg: '0.5rem',
          xl: '0.75rem',
          full: '9999px'
        },
        spacing: {
          'margin-mobile': '20px',
          gutter: '24px',
          unit: '8px',
          'section-padding': '120px',
          'container-max': '1280px',
          'margin-desktop': '80px'
        },
        fontFamily: {
          'label-technical': ['Inter'],
          'headline-display': ['Montserrat'],
          'headline-lg-mobile': ['Montserrat'],
          'headline-md': ['Montserrat'],
          'headline-lg': ['Montserrat'],
          'label-caps': ['Inter'],
          'body-lg': ['Inter'],
          'body-md': ['Inter']
        },
        fontSize: {
          'label-technical': ['14px', { lineHeight: '1.4', fontWeight: '500' }],
          'headline-display': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
          'headline-lg-mobile': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
          'headline-md': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
          'headline-lg': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
          'label-caps': ['12px', { lineHeight: '1.0', letterSpacing: '0.1em', fontWeight: '600' }],
          'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
          'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }]
        }
      }
    }
  };
} catch (_error) {
}