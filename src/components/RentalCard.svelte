<!-- RentalCard.svelte -->
<script>
  export let rentalObject;
</script>

<div class="wrapper">
  <div
    class="relative card overflow-hidden md:grid-rows-[1fr_1fr] border-[1px] border-red-400 rounded-[2rem] grid shadow-lg"
  >
    <p
      class="font-normal text-xl absolute right-3 text-center top-3 bg-[--color3] p-2 rounded-[100vw] border aap"
    >
      <span class="text-xl text-[lightgoldenrodyellow]"
        >${rentalObject.price_per_night} / PN</span
      >
    </p>
    <img
      class=" object-cover h-[100%] gap-4 rounded-t-2xl aspect-video w-full overflow-hidden transition-all duration-1000 ease-in-out"
      src={rentalObject.images}
      alt={rentalObject.name}
    />
    <div
      class=" p-2 m-0 grid grid-cols-subgrid grid-flow-row bg-[--color2] text-center"
    >
      <h3 class="font-medium text-lg">{rentalObject.name}</h3>
      <p class="w-[34ch] place-self-center text-sm">
        {rentalObject.description}
      </p>

      <div class="grid grid-rows-2 justify-evenly">
        <button
          class="border-red-500 border-2 place-self-center text-red font-semibold text-xl uppercase px-4 rounded-2xl"
          >Book now</button
        >
        <p
          class="text-[8px] w-[25ch] text-pretty text-[hsla(0,11%,68%,1)] place-self-center justify-self-end"
        >
          {rentalObject.address}
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  :root {
    --color2: linear-gradient(
      0deg,
      oklch(90.335% 0.04296 181.963 / 0.271) 10%,
      oklch(44.094% 0.26408 275.447 / 0.108) 20%
    );
    --color: oklch(70.088% 0.10002 357.373 / 0.267);
    --color3: oklch(90.088% 1.10002 57.373 / 0.967);
  }

  .card {
    background-image: var(--color2);
  }

  .aap {
    corner-shape: scoop;
    border-radius: 1rem 0.1rem;
  }
</style>
