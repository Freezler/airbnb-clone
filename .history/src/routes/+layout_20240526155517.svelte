<script>
	import '../app.postcss';
	import NavBar from '../components/NavBar.svelte';
	import SearchBar from '../components/SearchBar.svelte';
	import IconSideBar from '../components/IconSideBar.svelte';
	import HomeOverview from '../components/HomeOverview.svelte';
</script>

<slot />

<header><NavBar /></header>
<main>
	<section>
		<SearchBar />
		<IconSideBar />
	</section>
	<section class="flex flex-row align-center justify-center">
		<HomeOverview />
	</section>
</main>

<style>
	 * {
		outline: 1px solid red;
	 }
</style>