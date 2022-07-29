import { createSignal, createEffect, onCleanup } from "solid-js";

function EffectCounter() {
	const [count, setCount] = createSignal(0);
	const [time, setTime] = createSignal(0);

	const timer = setInterval(() => setTime(time() + 1), 1000);

	createEffect(() => {
		console.log("The count is now", count());
	});

	createEffect(() => {
		console.log("The time is now", time());
	});

	onCleanup(() => clearInterval(timer));

	return (
		<div
			style={{
				margin: "80px",
			}}
		>
			<button onClick={() => setCount(count() + 1)}>Click Me</button>
		</div>
	);
}

export default EffectCounter;
