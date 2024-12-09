<script lang="ts">
  import { Select as SelectPrimitive } from "bits-ui";
  import { cn } from "$lib/utils.js";
  import { ChevronDown } from "lucide-svelte";

  type $$Props = SelectPrimitive.TriggerProps;
  type $$Events = SelectPrimitive.TriggerEvents;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<SelectPrimitive.Trigger
  class={cn(
    "border-neutral-400 bg-primary-white ring-offset-background focus-visible:ring-ring aria-[invalid]:border-danger-700 data-[placeholder]:[&>span]:text-neutral-500 flex h-[44px] w-full items-center justify-between rounded-xl border px-3 py-2 text-sm text-primary-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus:border-primary-accent disabled:cursor-not-allowed disabled:text-neutral-550 disabled:bg-neutral-200 [&>span]:line-clamp-1",
    className
  )}
  {...$$restProps}
  let:builder
  on:click
  on:keydown
>
  <slot {builder} />
  <div>
    <ChevronDown class="h-4 w-4 opacity" />
  </div>
</SelectPrimitive.Trigger>
