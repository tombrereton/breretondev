import type { Document } from "@/content/schemas/_document";
import DocumentRepository from "@/functions/DocumentRepository";
import { useState } from "react";

type Props = {
  documents: Document[];
};

const config = {
  keys: ["title", "tags", "summary"],
  ignoreLocation: true,
};

export default function SearchResults({ documents }: Props): JSX.Element {
  const [query, setQuery] = useState("");
  const docRepo = new DocumentRepository(documents, config);
  const results = docRepo.search(query);

  return (
    <div role="listbox">
      {results.map((post) => {
        return (
          <article>
            <h2>
              <a href={`/blog/${post.slugLink}`}>{post.title}</a>
            </h2>
            <p>{post.summary}</p>
            <p>
              <a href={`/blog/${post.slugLink}`}>full post &rarr;</a>
            </p>
          </article>
        );
      })}
    </div>
  );
}
