import App from "./App.svelte";
import type Button from "./Button.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
