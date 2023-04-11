import type { Document } from "@/content/schemas/_document";
import type Fuse from "fuse.js";
import DocumentRepository from "@/functions/DocumentRepository";
import { useState } from "react";
import ResultCard from "./ResultCard";

type Props = {
  documents: Document[];
};

let config: Fuse.IFuseOptions<Document> = {
  keys: ["title", "tags", "summary", "category"],
  useExtendedSearch: true
};

export default function SearchResults({ documents }: Props): JSX.Element {
  const [query, setQuery] = useState("");
  const docRepo = new DocumentRepository(documents, config);
  const results = docRepo.search(query);

  function handleText(event: any) {
    const value = event.target.value;
    const searchPrompt = document.getElementById("search-prompt");
    if (searchPrompt) {
      searchPrompt.style.display = "none";
    }
    setQuery(value);
  }
  return (
    <div className="flex flex-col w-full">
      <input
        className="bg-black border border-black-light rounded p-2 mt-5 mb-10 placeholder-grey-dark text-grey-light focus:border-grey focus:outline-none focus:rounded"
        type="text"
        name="search"
        onChange={handleText}
        placeholder="Search for anything"
        value={query}
        aria-label="document-search-input"
      />
      <div>
        <h2
          id="search-prompt"
          className="font-serif text-3xl italic text-center mt-12 m-3 "
        >
          Search for tags, posts, or projects.
        </h2>
      </div>
      <div role="listbox" className="flex flex-col gap-5 h-full">
        {results.map((post) => {
          return ResultCard(post);
        })}
      </div>
    </div>
  );
}
