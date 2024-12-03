<script lang="ts">
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import Autoplay from 'embla-carousel-autoplay'
  import type CarouselProps from './index.model';

  let { 
    slides = [], 
    loop = false, 
    isVertical = false 
  }: CarouselProps = $props();

  let options = {
    loop: loop,
    draggable: true,
  }
  let plugins = [Autoplay()]

</script>

<div 
  class="embla" 
  use:emblaCarouselSvelte="{{ options, plugins }}"
>
  <div 
    class="embla__container" 
    class:vertical_carousel={isVertical}
  >
    {#each slides as slide, i}
      <div class="embla__slide">{slide.content}</div>
    {/each}
  </div>
</div>

<style>
  .embla {
    background-color: rosybrown;
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .vertical_carousel {
    flex-direction: column;
    height: 200px;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
</style>