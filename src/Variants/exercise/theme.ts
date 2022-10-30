import { backgroundColor, colorStyle } from 'styled-system';

const commonAlertStyles = {
  borderRadius: '8px',
  padding: '8px',
  boxShadow:
    '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14) 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
  fontSize: '18px',
  margin: '24px',
  fontWeight: '800',
  textAlign: 'center',
};

const theme = {
  colors: {
    blue: '#07c',
    green: '#3f714c',
    primary: 'peru',
    secondary: '#f6f6ff',
    background: 'papayawhip',
  },
  alerts: {
    default: { backgroundColor: '#0984e3', ...commonAlertStyles },
    success: { backgroundColor: '#00b894', ...commonAlertStyles },
    error: { backgroundColor: '#d63031', ...commonAlertStyles },
    warning: { backgroundColor: '#fdcb6e', ...commonAlertStyles },
  },
};

export default theme;
