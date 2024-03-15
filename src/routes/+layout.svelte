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
	<section class="container flex items-center justify-center gap-8 w-full">
		<HomeOverview />
	</section>
</main>
