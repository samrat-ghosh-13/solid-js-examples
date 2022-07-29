import { Routes, Route } from "solid-app-router";

import logo from "./logo.svg";
import styles from "./App.module.css";

// components
import Names from "./examples/Names";
import Counter from "./examples/Counter";
import EffectCounter from "./examples/EffectCount";
import Fibonacci from "./examples/Fibonacci";
import OnMount from "./examples/onMount";

function Home() {
	return (
		<div class={styles.App}>
			<header class={styles.header}>
				<h1>My Site with Lots of Examples</h1>
				<img src={logo} class={styles.logo} alt="logo" />
				<p>
					Edit <code>src/App.jsx</code> and save to reload.
				</p>
				<a
					class={styles.link}
					href="https://github.com/solidjs/solid"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn Solid
				</a>
			</header>
		</div>
	);
}

function App() {
	return (
		<>
			<Routes>
				<Route path="/" component={Home} />
				<Route path="/counter" component={Counter} />
				<Route path="/names" component={Names} />
				<Route path="/effect-counter" component={EffectCounter} />
				<Route path="/fibonacci" component={Fibonacci} />
				<Route path="/on-mount" component={OnMount} />
			</Routes>
		</>
	);
}

export default App;
