<script lang="ts">
  import Button from "./Button.svelte";
  import { RefTest } from "./service";

  export let name: string;
</script>

<main>
  <h1>Hello {name}!</h1>
  <p
    onclick={() => {
      RefTest.method2();
    }}
  >
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.
  </p>
</main>

<Button />
