import type { Doc } from "../utils/docs.ts";

const DocCard = (props: { doc: Doc }) => {
  const { doc } = props;
  return (
    <div class="py-8 border(t gray-200)">
      <a class="sm:col-span-2" href={`/${doc.slug}`}>
        <h3 class="text(3xl gray-900) font-bold">
          {doc.title}
        </h3>
        <time class="text-gray-500">
          {new Date(doc.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="mt-4 text-gray-900">
          {doc.snippet}
        </div>
      </a>
    </div>
  );
};

export default DocCard;
