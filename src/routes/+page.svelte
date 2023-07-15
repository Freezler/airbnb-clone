<script>
	import NavBar from '../components/NavBar.svelte';
	import SearchBar from '../components/SearchBar.svelte';

	import { onMount } from 'svelte';

	onMount(() => {
    const interval = setInterval(() => {
      console.count('build that thing!!');
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

<NavBar />
<SearchBar />
