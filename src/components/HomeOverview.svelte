<script>
	import { onMount } from 'svelte';

	let result = {}; // Define result as an object

	const fetchData = async () => {
		try {
			const response = await fetch('/src/assests/rentalObjects.json');
			const data = await response.json(); // Parse response as JSON
			result = data; // Store parsed JSON data directly
			console.table(result);
		} catch (error) {
			console.error(error);
		}
	};

	function go() {
		window.location.href = 'https://reactjs.org/';
	};

	onMount(() => {
		fetchData(); // Call fetchData function inside onMount
	});
</script>

<div class="bg-blue-300 p-2 grid">
	<button
		class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 pl-[24px] border-2 rounded-3xl  border-gray-400 shadow grid-cols-2 grid place-items-center text-xl"
		>react <svg class="relative place-self-end place-items-center right-[4px] bottom-[8px] w-3  fill-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" role="button" type="button" id="reactButton"
			><path
				d="M6.52813 5.9999L11.4781 10.9499L10.9531 11.4749L6.00313 6.5249L1.05313 11.4749L0.528125 10.9499L5.47813 5.9999L0.453125 1.0499L0.978125 0.524902L5.92813 5.4749L10.8781 0.524902L11.4031 1.0499L6.52813 5.9999Z"
				fill="black"
				
			></path></svg
		></button
	>
</div>
