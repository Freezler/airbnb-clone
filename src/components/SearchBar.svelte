<script>
	let searchQuery = '';

	function handleSearch(e) {
		searchQuery = e.target.value;
	}
</script>

<main
	class="grid place-items-center grid-cols-2 justify-center box-border border-b-1 text-lg border-coolgrey-100 bg-white h-[60px] mt-0"
>
	<header class="flex justify-between items-center">
		<nav class="flex items-center">
			<svg
				class="icon icon-tabler icon-tabler-map"
				width="44"
				height="44"
				viewBox="0 0 24 24"
				stroke-width="1"
				stroke="#fffffa"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M12 3l8 5v8l-8 5l-8 -5v-8l8 -5" />
				<path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			</svg>
			<svg
				class="icon icon-tabler icon-tabler-layout-grid"
				width="48"
				height="44"
				viewBox="0 0 24 24"
				stroke-width="1.6"
				stroke="#767676"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<rect x="4" y="4" width="6" height="6" rx="1" />
				<rect x="14" y="4" width="6" height="6" rx="1" />
				<rect x="4" y="14" width="6" height="6" rx="1" />
				<rect x="14" y="14" width="6" height="6" rx="1" />
			</svg>
		</nav>
		<div class="flex items-center justify-end">
			<div class="inputWrapper">
				<label for="searchBox"
					>Search:
					<input type="text" name="searchBox" id="search" />
					<button type="submit">Go</button>
				</label>
			</div>
		</div>
	</header>
	<section class="">
		<p>TEST</p>
	</section>
</main>

<style>
	.inputWrapper {
		display: flex;
		background: #000;
		place-items: center;
		justify-items: center;
		color: white;

		& input {
			background: red;
		}
	}
</style>
