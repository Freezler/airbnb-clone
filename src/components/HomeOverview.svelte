<!-- YourGridComponent.svelte -->
<script>
	import rentalObjects from '../assests/rentalObjects.json';
	import RentalCard from '../components/RentalCard.svelte';
</script>

<div
	class="w-[100vw] mt-4 gap-2 grid lg:grid-cols-[1fr_1fr] grid-rows-[repeat(4,1fr)] place-items-center mx-3"
>
	{#each rentalObjects as rentalObject}
		<RentalCard {rentalObject} />
	{/each}
</div>
