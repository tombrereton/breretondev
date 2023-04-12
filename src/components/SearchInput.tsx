export function SearchInput(handleText: (event: any) => void, query: string) {
  return (
    <input
      className="bg-black border border-black-light rounded p-2 mt-5 mb-10 placeholder-grey-dark text-grey-light focus:border-grey focus:outline-none focus:rounded"
      type="text"
      name="search"
      onChange={handleText}
      placeholder="Search for anything"
      value={query}
      aria-label="document-search-input" />
  );
}
