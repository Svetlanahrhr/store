import App from './App/App';

const app = new App();

const root = document.createElement('div');

root.innerHTML = app.render();

document.body.append(root);
