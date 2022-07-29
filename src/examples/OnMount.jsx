import { createSignal, onMount, For } from "solid-js";

import "./styles.css";

const OnMount = () => {
	const [photos, setPhotos] = createSignal([]);

	onMount(async () => {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/photos?_limit=20`
		);
		setPhotos(await res.json());
	});

	return (
		<>
			<h1>Photo album</h1>
			<div class="photos">
				<For each={photos()} fallback={<p>Loading...</p>}>
					{(photo) => (
						<figure>
							<img src={photo.thumbnailUrl} alt={photo.title} />
							<figcaption>{photo.title}</figcaption>
						</figure>
					)}
				</For>
			</div>
		</>
	);
};

export default OnMount;
