// routes/github/[username].tsx

import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from '../../components/layout.tsx'

interface User {
  login: string;
  name: string;
  avatar_url: string;
  public_reps: number;
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const q = url.searchParams.get('q');
    console.log(q)
    const resp = await fetch(`https://api.github.com/users/${q}`);
    if (resp.status === 404) {
        return ctx.render(null);
    }
    const user = await resp.json();
    return await ctx.render(user);
},
};

export default function Github({ data }: PageProps<User | null>) {
    
    
    // console.log(data);
  return (
    <Layout>
        <section class="w-full mt-12 ">
            <form class="mx-auto text-center">

            <input class="border-2 border-blue-700 w-1/2 mx-2 rounded" type="text" name="q" placeholder="Search Github user" />
            <button class="bg-green-300 text-blue-700 uppercase p-2 rounded" type="submit">Search</button>
                            
            </form>
        </section>
        { data?.name &&
            <section>
                <img src={data.avatar_url} width={64} height={64} />
                <h1>Name: {data.name}</h1>
                <p>username: {data.login}</p>
                {/* <p>Repos: {data.public_repos}</p> */}
            </section>
        }
    </Layout>
  );
}