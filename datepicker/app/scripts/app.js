import React from 'react';

import Datepicker from './components/datepicker';

window.React = React;
const mountNode = document.getElementById('app');
React.render(<Datepicker />, mountNode);

