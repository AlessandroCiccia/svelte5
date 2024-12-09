<script lang="ts">
  import type { Selected } from "bits-ui";
  import ScrollArea from "../scroll-area/scroll-area.svelte";
  import * as Select from "./index";
  import { fly } from "svelte/transition";

  let {
    placeholderVisible = false,
    selected = { value: "", label: "" } as Selected<string>,
    disabled = false,
    placeholder = "Placeholder",
    children,
  } = $props();
</script>

<Select.Root
  bind:selected
  onSelectedChange={(e) => {
    if (placeholderVisible) {
      return;
    } else {
      placeholderVisible = true;
      return;
    }
  }}
>
  <div class="relative">
    <Select.Trigger {disabled} class="w-[180px] group">
      {#if placeholderVisible}
        <span
          in:fly={{ y: 10, duration: 500 }}
          class="text-xxs absolute top-0 mt-1 text-neutral-500 group-aria-[invalid]:text-danger-700"
          >{placeholder}</span
        >
      {/if}
      <Select.Value
        class={`${placeholderVisible ? "mt-2 ml-[1px]" : ""}`}
        {placeholder}
      />
    </Select.Trigger>
  </div>
  <Select.Content>
    {#if children}
      <ScrollArea class="h-52 rounded-xl">
        {@render children()}
      </ScrollArea>
    {:else}
      <Select.Item disabled value="No Data">No Data</Select.Item>
    {/if}
  </Select.Content>
</Select.Root>
