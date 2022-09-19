// routes/github/[username].tsx

import { Handlers, PageProps } from "$fresh/server.ts";
import { useState } from "preact/hooks";
import Layout from '../../components/layout.tsx'

interface User {
  login: string;
  name: string;
  avatar_url: string;
  public_reps: number;
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if (resp.status === 404) {
        return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
},
};

export default function GithubUser({ data }: PageProps<User | null>) {
    
    if (!data) {
        return <h1>User not found</h1>;
    }
    // console.log(data);
  return (
    <Layout>
        <section>
            <form>

            <input type="text" placeholder="Search Github user" />
            <button type="submit">Search</button>
                            
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