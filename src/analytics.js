import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize(import.meta.env.VITE_GA4_MEASUREMENT_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};