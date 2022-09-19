
import Layout from "../components/layout.tsx";
import Counter from "../islands/Counter.tsx";

export default function AboutPage() {
  return (
    <Layout>
      <h1>About</h1>
      <p>Should I make this my sub portfolio page?!</p>
      <p>Vote if I should keep going??</p>
      <Counter start={3} />
    </Layout>
  );
}