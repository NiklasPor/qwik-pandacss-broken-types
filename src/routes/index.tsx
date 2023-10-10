import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { styled } from "~/styled-system/jsx";

const StyledButton = styled("button", {
  base: {
    p: 4,
    rounded: "md",
  },
});

export default component$(() => {
  return (
    <>
      <StyledButton>My Button</StyledButton>
    </>
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
