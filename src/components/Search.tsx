import React from "react";
import type { Document } from "@/content/schemas/_document";

type Props = {
  documents: Document[];
};

export default function Search({ documents }: Props): JSX.Element {
  return (
		<input type="text" name="search" aria-label="document-search-input" />
	);
}
