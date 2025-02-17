import { h } from 'preact';
import { html } from 'htm/preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const App = () => html`
	<div id="app">
		<${Header} />
		<${Router}>
			<${Home} path="/" />
			<${Profile} path="/profile/" user="me" />
			<${Profile} path="/profile/:user" />
		</${Router}>
	</div>
`;

export default App;
