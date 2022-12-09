import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to my Qwik playground <span class="lightning">⚡️</span>
      </h1>

      <ul>
        <li>
          Check out the <code>src/routes</code> directory to get started.
        </li>
        <li>
          Add integrations with <code>npm run qwik add</code>.
        </li>
        <li>
          More info about development in <code>README.md</code>
        </li>
      </ul>

      <div class="link-container">
        <Link class="pagelink" href="/hello/">
          Hello 👋
        </Link>
        <Link class="pagelink" href="/counter/">
          Counter ⏰
        </Link>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
