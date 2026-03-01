<script>
	import '../app.postcss';
	import HomeOverview from '../components/HomeOverview.svelte';
	import IconSideBar from '../components/IconSideBar.svelte';
	import NavBar from '../components/NavBar.svelte';
	import SearchBar from '../components/SearchBar.svelte';
</script>

<slot />
<div class="wrapper">
	<header>
		<NavBar />
	</header>
	<main>
		<section>
			<!-- <SearchBar /> -->
			<IconSideBar />
		</section>
		<section class="flex flex-col align-center justify-center">
			<HomeOverview />
		</section>
	</main>
</div>

<style>
	.wrapper {
		max-width: 1200px;
		margin: 2rem auto;
		border-radius: var(--border-raduis);
		overflow:hidden;

	}

	main {
		/* background: rgba(255, 0, 0, 0.28); */

	}
</style>
