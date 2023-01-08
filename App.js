import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement("h1",{id: 'first', style: {color: 'green'}}, "Namaste!!");
const heading2 = React.createElement("h1",{}, ["React!!", React.createElement("h6",{}, "op")]);
const container1 = React.createElement("div",{}, [heading1, heading2]);
const container2 = React.createElement("div",{}, [container1, heading1]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container2);