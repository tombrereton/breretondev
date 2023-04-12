import type { Document } from "@/content/schemas/_document";

var options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function ResultCard(post: Document): JSX.Element {
  return (
    <article
      key={post.slugLink}
      className="bg-black border border-black-light rounded px-5 py-10 flex flex-col gap-10"
    >
      <a href={"/blog/" + post.slugLink}>
        <div>
          <h2 className="font-sans text-xl">{post.title}</h2>
          <h3 className="font-mono">
            {post.dateCreated.toLocaleString("en-GB", options)}
          </h3>
        </div>
        <p>{post.summary}</p>
      </a>
      <div className="flex gap-4 font-mono">
        {post.tags.map((tag) => {
          return (
            <a key={tag} href={`/search?q=%3D${tag}`}>
              {tag}
            </a>
          );
        })}
      </div>
    </article>
  );
}
