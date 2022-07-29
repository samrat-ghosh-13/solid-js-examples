import { createSignal, onCleanup } from "solid-js";
// onCleanup(() => clearInterval(timer));

const ReactivityWithCounter = () => {
	const [count, setCount] = createSignal(0);

	const timer = setInterval(() => setCount(count() + 1), 1000);

	console.log("Working");

	return (
		<div
			style={{
				margin: "80px",
			}}
		>
			<p>Count: {count()}</p>
			<button onClick={() => clearInterval(timer)}>Stop Counter</button>
		</div>
	);
};

export default ReactivityWithCounter;
