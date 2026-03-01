<!-- YourGridComponent.svelte -->
<script>
	import rentalObjects from '../assests/rentalObjects.json';
	import RentalCard from '../components/RentalCard.svelte';
</script>

<div class="wrapper">
	<div class="w-full grid gap-3 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr]">
		{#each rentalObjects as rentalObject}
			<RentalCard {rentalObject} />
		{/each}
	</div>
</div>

<style>
	.wrapper {
		margin-inline: 2rem;
	}
</style>