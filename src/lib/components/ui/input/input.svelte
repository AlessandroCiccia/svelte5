<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";
  import type { InputEvents } from "./index.js";
  import { cn } from "$lib/utils.js";
  import { fly, scale } from "svelte/transition";
  import { cubicIn } from "svelte/easing";

  type $$Props = HTMLInputAttributes;
  type $$Events = InputEvents;

  let className: $$Props["class"] = undefined;
  export let value: $$Props["value"] = undefined;
  export { className as class };

  // Workaround for https://github.com/sveltejs/svelte/issues/9305
  // Fixed in Svelte 5, but not backported to 4.x.
  export let readonly: $$Props["readonly"] = undefined;
</script>

<div class="relative">
  {#if value}
    <span
      in:fly={{ x: 10, y: 10, duration: 500 }}
      class="text-xxs absolute transition-all duration-500 top-0 mt-1 ml-3 text-neutral-500 group-aria-[invalid]:text-danger-700"
      >{$$restProps.placeholder}</span
    >
  {/if}
  <input
    class={cn(
      "border-neutral-400 bg-primary-white ring-offset-background placeholder:text-neutral-500 focus-visible:border-primary-accent flex h-[44px] w-full rounded-xl border px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:border disabled:cursor-not-allowed disabled:text-neutral-550 disabled:bg-neutral-200 aria-[invalid]:border-danger-700",
      value && "pt-3",
      className
    )}
    bind:value
    {readonly}
    on:blur
    on:change
    on:click
    on:focus
    on:focusin
    on:focusout
    on:keydown
    on:keypress
    on:keyup
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:mousemove
    on:paste
    on:input
    on:wheel|passive
    {...$$restProps}
  />
</div>
