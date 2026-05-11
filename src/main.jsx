import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root');
console.log('ROOT:', rootElement);

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);