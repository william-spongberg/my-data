import { Handlers, PageProps } from "$fresh/server.ts";
import { handler as jokeHandler } from "./api/joke.ts";

interface Joke {
  text: string;
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const res = await jokeHandler(req, ctx);
    const joke = await res.text();
    return ctx.render(joke);
  },
};

export default function Foo({ data }: PageProps<Joke>) {
  return (
    <main>
      {data && <p>{data}</p>}
    </main>
  );
}
