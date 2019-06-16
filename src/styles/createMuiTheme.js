import transitions from './transitions';

function createMuiTheme() {
  return {
    breakpoints: {},
    direction: 'ltr',
    mixins: {},
    overrides: {}, // Inject custom styles
    palette: {},
    props: {}, // Inject custom properties
    shadows: {},
    typography: {},
    spacing: {},
    shape: {},
    transitions,
    zIndex: {}
  };
}

export default createMuiTheme;
