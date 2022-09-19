// routes/github/[username].tsx

import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from '../../components/layout.tsx'

interface User {
  login: string;
  name: string;
  avatar_url: string;
  public_repos: number;
  html_url: string;
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
              <h2 class="mt-6 text-center text-xl text-purple-700 font-extrabold">Repo Found:</h2>
                <div class="w-1/2 p-8 flex mt-6 bg-blue-700 mx-auto rounded">
                  <img src={data.avatar_url} width={94} height={94} />
                  <div class="ml-4 text-white text-lg">
                    <h3>Name: <span class="text-green-300">{data.name}</span></h3>
                    <p>username: <span class="text-green-300">{data.login}</span></p>
                    <p>Repos: <span class="text-green-300">{data.public_repos}</span></p>
                    <a href={data.html_url} target="_blank" rel="noopener">Repo Link</a>
                  </div>
                </div>
            </section>
        }
    </Layout>
  );
}