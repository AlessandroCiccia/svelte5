<script lang="ts">
  import type { HTMLTextareaAttributes } from "svelte/elements";
  import type { TextareaEvents } from "./index.js";
  import { cn } from "$lib/utils.js";
  import { fly } from "svelte/transition";

  type $$Props = HTMLTextareaAttributes;
  type $$Events = TextareaEvents;

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
  <textarea
    class={cn(
      "border-neutral-400 z-10 bg-primary-white ring-offset-background placeholder:text-neutral-500 focus-visible:border-primary-accent flex min-h-[96px] w-full rounded-xl border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:border disabled:cursor-not-allowed disabled:text-neutral-550 disabled:bg-neutral-200 aria-[invalid]:border-danger-700",
      value && "pt-4",
      className
    )}
    bind:value
    {readonly}
    on:blur
    on:change
    on:click
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:paste
    on:input
    {...$$restProps}
  ></textarea>
</div>
