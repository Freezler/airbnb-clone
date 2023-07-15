<script>
	let count = 0;
</script>

<main class="flex bg-white py-1 px-6 border-b-2 w-full">
	<div class="flex items-center container">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-map bg-slate-900 rounded-t-xl rounded-b-xl z-10 py-3 px-1"
			width="52"
			height="52"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="#fffffa"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M3 7l6 -3l6 3l6 -3l0 13l-6 3l-6 -3l-6 3l0 -13" />
			<path d="M9 4l0 13" />
			<path d="M15 7l0 13" />
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-layout-grid bg-zinc-100 rounded-tr-xl rounded-br-xl py-3 -translate-x-2 px-1 pl-3"
			width="56"
			height="52"
			viewBox="0 0 24 24"
			stroke-width="1.6"
			stroke="gray"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
			<path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
			<path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
			<path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
		</svg>
	</div>

	<div class="flex items-center my-1 bg-zinc-100 rounded-xl mr-28 pr-2.5 pl-0">
		<div class="flex flex-row items-center ml-3">
			<button on:click={() => (count -= 1)} class="px-3.5 py-1 border border-gray-300 text-red-600 rounded-lg"
				>-</button>
			<div class="text-gray-700 w-24 text-center">{count} Guests</div>
			<button on:click={() => (count += 1)} class="px-3.5 py-1 border border-gray-300 rounded-lg text-red-600"
				>+</button
			>
		</div>
	</div>

	<div class="flex justify-self-end my-1 bg-zinc-100 rounded-xl mr-4">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-filter bg-zinc-100 rounded-xl py-4 px-3"
			width="56"
			height="56"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="gray"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path
				d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z"
			/>
		</svg>
	</div>
</main>

<style>
	/* Additional Styles for Counter */
	.flex-row > * + * {
		margin-left: 0.5rem;
	}

	.flex-row > button {
		font-size: 1.2rem;
	}

	.text-gray-700 {
		color: #4a5568;
	}
</style>
