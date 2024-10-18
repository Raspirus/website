import { type Handlers, PageProps } from "$fresh/server.ts";
import DocCard from "../components/DocsCard.tsx";
import { type Doc, getDocs } from "../utils/docs.ts";

export const handler: Handlers<Doc[]> = {
  async GET(_req, ctx) {
    const docs = await getDocs();
    return ctx.render(docs);
  },
};

const docs = (props: PageProps<Doc[]>) => {
  const docs = props.data;
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">Docs</h1>
      <div class="mt-8">
        {docs.map((doc) => <DocCard doc={doc} />)}
      </div>
    </main>
  );
};

export default docs;
