import React from 'react';
import ReactDOM from 'react-dom';

import 'bootswatch/dist/slate/bootstrap.min.css'; 
// import "bootswatch/dist/[theme]/bootstrap.min.css";
// TODO: Note: Replace ^[theme]^ (examples: darkly, slate, cosmo, spacelab, and superhero. See https://bootswatch.com for current theme names.)

import App from './components/app/app';

ReactDOM.render(<App />, document.getElementById('root'));