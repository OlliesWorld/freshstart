import Layout from '../components/layout.tsx'
import Timer from "../islands/Timer.tsx";
export default function Index() {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return (
    <Layout>
      <h1>Welcome!</h1>
      <p>This is the beginning page.</p>
      <p class='text-center text-xl text-purple-700 mt-12'>
      The big event is happening <Timer target={date.toISOString()} />.
    </p>
    </Layout>
  );
}