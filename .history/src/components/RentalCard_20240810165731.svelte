<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
<!-- RentalCard.svelte -->
<script>
	export let rental = {};
	export let rentalObject;
</script>

<div
	class="grid md:grid-rows-[1fr_1fr_1fr] min-w-[250px] w-full max-w-[800px] border border-gray-400 rounded-t-2xl rounded-b-2xl h-[572px] shadow-lg"
	class="   md:grid-rows-[1fr_1fr_1fr] min-w-[250px] w-full max-w-[800px] border-[1px] border-gray-400 rounded-t-2xl rounded-b-2xl h-[572px] grid shadow-lg"
>
	<img
		class="object-cover h-40 rounded-t-2xl min-w-full w-full"
		src={rental.images[0]}
		alt={rental.name}
		class=" object-cover h-40 rounded-t-2xl min-w-[250px] w-full"
		src={rentalObject.images[0]}
		alt={rentalObject.name}
	/>
	<div class="p-6 grid grid-rows-sub grid-cols-2 grid-flow-row">
		<h3 class="font-medium text-md font-sm">{rental.name}</h3>
		<p class="text-xs text-gray-500">{rental.address}</p>
		<p class="text-xs font-normal text-center">
			<span class="text-red-500 text-xl">${rental.price_per_night}</span> / night
	<div class="p-6 my-0 grid grid-rows-sub grid-cols-2 grid-rows-2 grid-flow-row">
		<h3 class="font-medium text-md font-sm row-span-1 col-span-1">{rentalObject.name}</h3>
		<p class="text-xs w-[25ch] text-pretty auto-rows-max text-[gray]">
			{rentalObject.address}
		</p>
		<p class="text-xs font-normal row-span-1 text-center my-4">
			<span class="text-xl text-pretty text-red-400">${rentalObject.price_per_night}</span> / night
		</p>
		<button
			class="border-red-500 border-2 text-red font-semibold text-xl uppercase px-4 rounded-2xl w-full h-[48px]"
			class="border-red-500 border-2 place-self-center text-red font-semibold text-xl uppercase px-4 rounded-2xl w-[220px] h-[48px]"
			>Book now</button
		>
	</div>
</div>

<<<<<<<  506a9b4d-7a7a-4e15-858f-f51b401975bc  >>>>>>>