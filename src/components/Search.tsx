import type { Document } from "@/content/schemas/_document";

type Props = {
  documents: Document[];
};

export default function SearchBox({ documents }: Props): JSX.Element {
  return <input type="text" name="search" aria-label="document-search-input" />;
}
