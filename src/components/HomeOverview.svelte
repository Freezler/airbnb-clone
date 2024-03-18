<!-- YourGridComponent.svelte -->
<script>
	import rentalObjects from '../assests/rentalObjects.json';
  import RentalCard from '../components/RentalCard.svelte'; 
</script>

<div class="max-w-[85vw] mt-4 gap-4 grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] grid-rows-[repeat(4,1fr)] place-items-center">
  {#each rentalObjects as rentalObject}
	<RentalCard rentalObject={rentalObject} />
  {/each}
</div>