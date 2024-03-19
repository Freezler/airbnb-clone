<!-- RentalCard.svelte -->
<script>
	export let rentalObject;
</script>

<div
	class="grid grid-cols-1 grid-rows-[1fr_1fr_1fr_1fr]] ml-[12px] md:grid-rows-[1fr_1fr_1fr] min-w-[344px] w-full max-w-[800px] place-content-center border-[1px] border-gray-400 rounded-t-2xl rounded-b-2xl h-[440px]  mr-2"
>
	<img
		class=" aspect-video object-cover h-40 w-full bg-cover grid-cols-1 grid-rows-1 rounded-t-2xl"
		src={rentalObject.images[0]}
		alt={rentalObject.name}
	/>
	<div class="p-3 grid grid-rows-sub grid-cols-1 grid-rows-2 grid-flow-row">
		<h3 class="text-sm font-semibold font-sm row-span-1">{rentalObject.name}</h3>
		<p class="text-[8px] w-[25ch] text-pretty row-span-1 mb-2 text-[gray]">
			{rentalObject.address}
		</p>
		<p class="text-xs font-normal mt-0 row-span-1 text-center mb-2">
			<span class="text-pretty text-red-400">${rentalObject.price_per_night}</span> / night
		</p>
		<button
			class="border-red-500 border-2 place-self-center text-red font-bold px-4 rounded-2xl w-[220px] h-[48px]"
			>Book now</button
		>
	</div>
</div>
