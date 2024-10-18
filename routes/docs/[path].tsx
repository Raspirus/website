import { PageProps } from "$fresh/server.ts";

export default function DocsPage(props: PageProps) {
  const { path } = props.params;
  return (
    <main>
      <p>Greetings to you, {path}!</p>
    </main>
  );
}