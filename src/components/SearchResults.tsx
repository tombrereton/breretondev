import type { Document } from "@/content/schemas/_document";
import type Fuse from "fuse.js";
import DocumentRepository from "@/functions/DocumentRepository";
import { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import { SearchInput } from "./SearchInput";

type Props = {
  documents: Document[];
};

let config: Fuse.IFuseOptions<Document> = {
  keys: ["title", "tags", "summary", "category"],
  useExtendedSearch: true,
};

const searchPromptText = (
  <div>
    <h2
      id="search-prompt"
      className="font-serif text-3xl italic text-center mt-12 m-3 text-grey-dark"
    >
      Try searching for tags, posts, or projects.
    </h2>
  </div>
);

export default function SearchResults({ documents }: Props): JSX.Element {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search); 
    const queryFromParams = params.get("q");
    setQuery(queryFromParams || "");
  }, []);

  const docRepo = new DocumentRepository(documents, config);
  let results = docRepo.search(query);

  function handleText(event: any) {
    const value = event.target.value;
    setQuery(value);
  }

  return (
    <div className="flex flex-col w-full">
      {SearchInput(handleText, query)}
      {results.length === 0 && searchPromptText}
      <div role="listbox" className="flex flex-col gap-5 h-full">
        {results.map((post) => {
          return ResultCard(post);
        })}
      </div>
    </div>
  );
}
