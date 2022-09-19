import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
     
      <p class="my-6">
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}
