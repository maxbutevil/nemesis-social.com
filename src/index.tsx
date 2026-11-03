import { render } from 'solid-js/web';
import App from './App';

const root = document.getElementById('root');
if (root) {
  render(() => <App />, root);
} else {
  console.error("failed to find document root");
}
