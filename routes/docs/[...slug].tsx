import { Handlers, type PageProps } from "$fresh/server.ts";
import { type Doc, getDoc } from "../../utils/docs.ts";
import { CSS, render } from "@deno/gfm";
import { join } from "$std/path/mod.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers<Doc> = {
  async GET(_req, ctx) {
    console.log(ctx.params.slug);
    const slug = ctx.params.slug;
    const fullPath = join("docs", `${slug}.md`);
    const doc = await getDoc(fullPath, slug);
    if (doc === null) return ctx.renderNotFound();
    return ctx.render(doc);
  },
};

export default function DocPage(props: PageProps<Doc>) {
  const post = props.data;
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <h1 class="text-5xl font-bold">{post.title}</h1>
        <time class="text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div
          class="mt-8 markdown-body"
          dangerouslySetInnerHTML={{ __html: render(post.content) }}
        />
      </main>
    </>
  );
}
