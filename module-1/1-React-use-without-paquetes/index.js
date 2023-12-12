import React from 'https://esm.sh/react@18.2.0';
import ReactDom from 'https://esm.sh/react-dom@18.2.0/client';

const appDomElement = document.getElementById('app');

const root = ReactDom.createRoot(appDomElement);

const buttonReact1 = React.createElement('button', { 'data-1': 1 }, 'Button 1');

const buttonReact2 = React.createElement('button', { 'data-2': 2 }, 'Button 2');

const buttonReact3 = React.createElement('button', { 'data-3': 3 }, 'Button 3');

root.render([buttonReact1, buttonReact2, buttonReact3]);
