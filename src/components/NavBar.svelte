<script>
	const navItems = [
		{
			label: 'Stays',
			url: '#'
		},
		{
			label: 'Experiences',
			url: '#'
		},
		{
			label: 'Online Experiences',
			url: '#'
		}
	];
</script>

<nav
	class="box-border border-coolgrey-900 full relative flex h-22 select-none items-center border-b bg-white font-bold md:justify-center"
>
	<div class="ml-4 flex items-center md:ml-9">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-brand-airbnb"
			width="48"
			height="48"
			viewBox="0 0 24 24"
			stroke-width="1.2"
			stroke="#FF5A5F"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path
				d="M12 10c-2 0 -3 1 -3 3c0 1.5 1.494 3.535 3 5.5c1 1 1.5 1.5 2.5 2s2.5 1 4.5 -.5s1.5 -3.5 .5 -6s-2.333 -5.5 -5 -9.5c-.834 -1 -1.5 -1.5 -2.503 -1.5c-1 0 -1.623 .45 -2.497 1.5c-2.667 4 -4 7 -5 9.5s-1.5 4.5 .5 6s3.5 1 4.5 .5s1.5 -1 2.5 -2c1.506 -1.965 3 -4 3 -5.5c0 -2 -1 -3 -3 -3z"
			/>
		</svg>
		<h3 class="font-manrope flex items-center text-3xl font-semibold text-red-500">airbnb</h3>
	</div>

	<ul
		class="align-center border-box h-19 hidden w-full items-center gap-10 text-lg font-thin  md:flex md:justify-center "
	>
		{#each navItems as navItem}
			<li
				class="items-bottom group relative my-auto inline-flex h-full p-4 text-stone-900 hover:scale-105 hover:text-stone-900"
			>
				<a href={navItem.url}>{navItem.label}</a>
				<div
					class="absolute h-1 w-auto bg-red-500 opacity-0 duration-150 ease-out group-hover:opacity-100"
				/>
			</li>
		{/each}
	</ul>

	<button class="absolute right-5 top-5 flex py-2 focus:outline-none md:right-8 md:hidden">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-menu-2"
			width="33"
			height="33"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="#767676"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 6l16 0" />
			<path d="M4 12l16 0" />
			<path d="M4 18l16 0" />
		</svg>
	</button>
	<div />

	<img
		src="https://thispersondoesnotexist.com/"
		width="52"
		height="52"
		viewBox="0 0 24 24"
		stroke="currentColor"
		class="hidden rounded-full md:flex mr-10"
		alt=""
	/>
</nav>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@650&display=swap');
</style>
