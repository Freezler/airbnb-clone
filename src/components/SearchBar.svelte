<script>
	let count = 0;
</script>

<main
	class="grid grid-cols-[1fr_auto_auto] place-items-start justify-between box-border border-b-1 text-lg border-coolgrey-100 bg-white h-[60px] mt-0"
>
	<section class=" ">
		<div class="flex select-none items-center justify-center border-1 mt-1 ml-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-map z-10 ml-[6px] rounded-md bg-slate-900 p-2"
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
				<path d="M3 7l6 -3l6 3l6 -3l0 13l-6 3l-6 -3l-6 3l0 -13" />
				<path d="M9 4l0 13" />
				<path d="M15 7l0 13" />
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-layout-grid -translate-x-2 rounded-br-md rounded-tr-md bg-zinc-100 p-2"
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
				<path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
				<path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
				<path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
				<path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
			</svg>
		</div>
	</section>
	<div class="ml-auto my-2 hidden select-none align-center rounded-xl lg:flex text-gray-600 gap-4">
		<div class=" my-1 hidden select-none rounded-xl md:flex bg-zinc-100">
			<div class="m-3 flex flex-row">
				<select
					name="destination"
					class="rounded-lg px-3.5 py-1 bg-transparent outline-none"
					id="destination"
				>
					<option value="all">Anywhere</option>
					<option value="Amsterdam">Amsterdam</option>
					<option value="Utrecht">Utrecht</option>
					<option value="Alkmaar">Alkmaar</option>
					<option value="Maastricht">Maastricht</option>
					<option value="Rotterdam">Rotterdam</option>
					<option value="Eindhoven">Eindhoven</option>
					<option value="Den Haag">Den Haag</option>
					<option value="Gulpen">Gulpen</option>
				</select>
			</div>
		</div>

		<div class=" my-2 hidden select-none items-center rounded-xl bg-zinc-100 md:flex text-gray-600">
			<div class="m-3 flex flex-row items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-calendar pr-2"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					stroke-width="1.25"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"
					/>
					<path d="M16 3v4" />
					<path d="M8 3v4" />
					<path d="M4 11h16" />
					<path d="M11 15h1" />
					<path d="M12 15v3" />
				</svg>
				<label for="week"></label>

				<input
					type="date"
					name="date"
					id="bnb-week"
					value="2023-10-10"
					min="2023-W28"
					max="2023-W32"
					required
				/>
			</div>
		</div>

		<div
			class="my-1 px-3 hidden select-none items-center rounded-xl bg-zinc-100 md:flex text-gray-400"
		>
			<div class="my-0 flex flex-row items-center">
				<button
					on:click={() => (count -= 1)}
					class="rounded-lg border border-gray-300 px-3 py-1 ml-0.5 text-red-600 bg-white">-</button
				>

				<div class="w-24 text-center text-gray-700 text-md">{count} Guests</div>
				<button
					on:click={() => (count += 1)}
					class="rounded-lg border border-gray-300 px-3 py-1 ml-0.5 text-red-600 bg-wh">+</button
				>
			</div>
		</div>
	</div>
	<div class=" select-none my-auto md:flex">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-filter rounded-xl bg-zinc-100 py-4 text-gray-900 ml-auto mr-4"
			width="44"
			height="44"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="#000"
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
