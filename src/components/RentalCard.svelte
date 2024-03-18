<!-- RentalCard.svelte -->
<script>
  export let rentalObject;
</script>

<div class="grid grid-cols-1 grid-rows-[subgrid[1fr_1fr]] md:grid-rows-[subgrid[1fr_1fr_1fr]] place-content-center border-[1px] border-red-400">
  <img class=" aspect-video object-cover h-48 w-96  bg-cover grid-cols-1 rounded-t-2xl " src={rentalObject.images[0]} alt={rentalObject.name}  />
  <div class="p-4 grid grid-rows-[1fr_1fr_56px]">
  <h3 class="font-bold row-span-1">{rentalObject.name}</h3>
  <p class="w-[22ch] text-pretty">{rentalObject.description}</p>
  <p>${rentalObject.price_per_night} / night</p>
  </div>
  <button class="border-red-500 border-2 text-red font-bold  px-4 rounded-2xl w-[220px] h-[48px] place-self-center mb-8">Book now</button>
</div>