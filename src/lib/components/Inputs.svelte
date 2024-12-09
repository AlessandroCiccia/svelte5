<script>
  import { Input } from "./ui/input";
</script>

<main class="flex gap-2 p-5">
  <Input placeholder="Telephone" />
  <Input disabled placeholder="Telephone" />
  <Input value="PARIS" placeholder="Telephone" />
  <Input disabled value="PARIS" placeholder="Telephone" />
  <Input aria-invalid value="PARIS" placeholder="Telephone" />
</main>
