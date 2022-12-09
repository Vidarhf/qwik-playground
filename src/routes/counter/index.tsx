import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore({ count: 0 });
  return (
    <div>
      <p>This is a counter!</p>
      <p>Count: {store.count}</p>
      <p>
        <button onClick$={() => store.count++}>Click me</button>
      </p>
    </div>
  );
});
