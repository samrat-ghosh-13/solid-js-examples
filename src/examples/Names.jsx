import { createSignal, batch } from "solid-js";

const Reactivity = () => {
	const [firstName, setFirstName] = createSignal("Samrat");
	const [lastName, setLastName] = createSignal("Ghosh");

	// derived signal
	const fullName = () => {
		console.log("Running FullName");
		return `${firstName()} ${lastName()}`;
	};

	const updateNames = () => {
		console.log("Button Clicked");
		batch(() => {
			setFirstName(firstName() + "@");
			setLastName(lastName() + "!");
		})
		console.log("Names Updated");
	};

	return (
		<div
			style={{
				margin: "80px",
			}}
		>
			<h1>Reactivity</h1>
			<button onClick={updateNames}>My name is {fullName()}</button>
		</div>
	);
};

export default Reactivity;
