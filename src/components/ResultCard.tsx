import type { Document } from "@/content/schemas/_document";

var options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function ResultCard(post: Document): JSX.Element {
  return (
    <a href={"/blog/" + post.slugLink}>
      <article
        key={post.slugLink}
        className="bg-black border border-black-light rounded px-5 py-10 flex flex-col gap-10"
      >
        <div>
          <h2 className="font-sans text-xl">{post.title}</h2>
          <h3 className="font-mono">
            {post.dateCreated.toLocaleString("en-GB", options)}
          </h3>
        </div>
        <p>{post.summary}</p>
        <p className="font-mono">{post.tags.join(" ")}</p>
      </article>
    </a>
  );
}
