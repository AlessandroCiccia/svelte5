<script lang="ts">
  import Carousel from "./components/Carousel/index.svelte";

  const mySlides = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slidbe 3" }
  ];
</script>

<main>
  <Carousel slides={mySlides} loop={true} />
</main>
