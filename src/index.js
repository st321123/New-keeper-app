import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './components/App';


const root = createRoot(document.getElementById('root'));
root.render(
 <h1><App /> </h1>
);


