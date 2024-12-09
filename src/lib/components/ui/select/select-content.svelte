<script lang="ts">
  import { Select as SelectPrimitive } from "bits-ui";
  import { scale } from "svelte/transition";
  import { cn, flyAndScale } from "$lib/utils.js";
  import { slide } from "svelte/transition";

  type $$Props = SelectPrimitive.ContentProps;
  type $$Events = SelectPrimitive.ContentEvents;

  export let sideOffset: $$Props["sideOffset"] = 4;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<SelectPrimitive.Content
  {sideOffset}
  class={cn(
    "bg-primary-white no-scrollbar border-primary-accent text-popover-foreground relative z-50 min-w-[8rem] rounded-xl border shadow-md outline-none",
    className
  )}
  {...$$restProps}
  on:keydown
>
  <div
    in:slide={{ duration: 300 }}
    out:slide={{ duration: 200 }}
    class="w-full"
  >
    <slot />
  </div>
</SelectPrimitive.Content>
