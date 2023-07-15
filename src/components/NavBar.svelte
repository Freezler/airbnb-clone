<script>
</script>

<nav
	class=" w-full flex space-between mx-auto bg-white text-coolgrey-900 border-b-2 border-coolgrey-100 py-4 spacing-x-12"
>
	<div class="flex ml-9 space-x-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-brand-airbnb"
			width="48"
			height="54"
			viewBox="0 0 24 24"
			stroke-width="1.2"
			stroke="#f37"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path
				d="M12 10c-2 0 -3 1 -3 3c0 1.5 1.494 3.535 3 5.5c1 1 1.5 1.5 2.5 2s2.5 1 4.5 -.5s1.5 -3.5 .5 -6s-2.333 -5.5 -5 -9.5c-.834 -1 -1.5 -1.5 -2.503 -1.5c-1 0 -1.623 .45 -2.497 1.5c-2.667 4 -4 7 -5 9.5s-1.5 4.5 .5 6s3.5 1 4.5 .5s1.5 -1 2.5 -2c1.506 -1.965 3 -4 3 -5.5c0 -2 -1 -3 -3 -3z"
			/>
		</svg>
		<h3 class="font-manrope text-3xl font-semibold flex align-self-start text-red-500 ml-1 mt-2">
			airbnb
		</h3>
	</div>

	<ul class="text-coolgrey-900 hidden md:flex md:justify-center gap-12 mt-3 text-lg w-full">
		<li>
			<a
				href="/"
				on:hover|preventDefault={() => (menu = 1)}
				class="font-thin
			   		  hover:border-b-2
					  pb-8
					  hover:font-semibold
					border-red-500">Stays</a
			>
		</li>
		<li>
			<a
				href="/"
				on:click|preventDefault={() => (menu = 2)}
				class="font-thin hover:border-b-4 pb-6 hover:font-semibold border-red-500">Experiences</a
			>
		</li>
		<li>
			<a
				href="/"
				on:click|preventDefault={() => (menu = 3)}
				class="font-thin hover:border-b-4 pb-6 hover:font-semibold border-red-500"
				>Online Experiences</a
			>
		</li>
	</ul>

	<button class="flex md:hidden focus:outline-none absolute top-4 right-4 py-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-menu-2"
			width="40"
			height=""
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="grey"
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
		class=" rounded-full hidden md:flex mr-9"
		alt=""
	/>
</nav>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@650&display=swap');
</style>
