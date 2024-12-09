<script>
  import { Skull } from "lucide-svelte";

  import { Button } from "./ui/button";
</script>

<main class="flex gap-2 p-5">
  <!-- buttons -->
  <div class="p-2 flex flex-col gap-2 border-2 border-primary rounded-md">
    <p class="text-black">Primary</p>
    <Button>Default</Button>
    <Button size="md">Size md</Button>
    <Button size="sm">Size sm</Button>

    <Button><Skull /> Default <Skull /></Button>
    <Button size="md">Size md</Button>
    <Button size="sm">Size sm</Button>

    <p class="text-black">Disabled</p>
    <Button disabled>Default</Button>
    <Button disabled size="md">Size md</Button>
    <Button disabled size="sm">Size sm</Button>
  </div>

  <div class="p-2 flex flex-col gap-2 border-2 border-primary rounded-md">
    <p class="text-black">Secondary</p>

    <Button variant="secondary">Secondary</Button>
    <Button variant="secondary" size="md">Size md</Button>
    <Button variant="secondary" size="sm">Size sm</Button>

    <p class="text-black">Disabled</p>
    <Button disabled variant="secondary">Secondary</Button>
    <Button disabled variant="secondary" size="md">Size md</Button>
    <Button disabled variant="secondary" size="sm">Size sm</Button>
  </div>

  <div class="p-2 flex flex-col gap-2 border-2 border-primary rounded-md">
    <p class="text-black">Link</p>
    <Button variant="link" size="link">Default</Button>
    <Button variant="link" size="linksm">Size sm</Button>
    <Button variant="link" size="linkxs">Size xs</Button>
  </div>
</main>
