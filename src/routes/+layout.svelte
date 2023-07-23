<script>
	import '../app.postcss';
	import NavBar from '../components/NavBar.svelte';
	import SearchBar from '../components/SearchBar.svelte';
	import IconSideBar from '../components/IconSideBar.svelte';
	import HomeOverview from '../components/HomeOverview.svelte'
</script>

<slot />


<NavBar />
<SearchBar />
<IconSideBar />
<HomeOverview />