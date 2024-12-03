<script>
  import { Button } from "$lib/components/ui/button";
  import "./app.css";
  import PreFooter from "./lib/components/PreFooter.svelte";
</script>

<main class="flex gap-2 p-5">
  <!-- buttons -->
  <div class="p-2 flex flex-col gap-2 border-2 border-primary rounded-md">
    <p class="text-black">Primary</p>
    <Button>default</Button>
    <Button size="md">size md</Button>
    <Button size="sm">size sm</Button>

    <p class="text-black">Disabled</p>
    <Button variant="defaultDisabled">default</Button>
    <Button variant="defaultmdsmDisabled" size="md">size md</Button>
    <Button variant="defaultmdsmDisabled" size="sm">size sm</Button>
  </div>

  <div class="p-2 flex flex-col gap-2 border-2 border-primary rounded-md">
    <p class="text-black">Secondary</p>

    <Button variant="secondary">secondary</Button>
    <Button variant="secondary" size="md">size md</Button>
    <Button variant="secondary" size="sm">size sm</Button>

    <p class="text-black">Disabled</p>
    <Button variant="secondaryDisabled">secondary</Button>
    <Button variant="mdSecondaryDisabled" size="md">size md</Button>
    <Button variant="secondaryDisabled" size="sm">size sm</Button>
  </div>

  <div class="p-2 flex flex-col gap-2 border-2 border-primary rounded-md">
    <p class="text-black">Link</p>
    <Button variant="link" size="link">default</Button>
    <Button variant="link" size="linksm">size sm</Button>
    <Button variant="link" size="linkxs">size xs</Button>
  </div>
</main>

<style>
</style>
