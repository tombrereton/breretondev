import { expect, test } from "vitest";
import "@testing-library/jest-dom";
import SearchResults from "@/components/SearchResults";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DocumentFactory } from "tests/helpers/DocumentFactory";

test("should render textbox", () => {
  const docs = DocumentFactory.buildList(10);

  const html = render(<SearchResults documents={docs} />);
  const input = html.getByRole("listbox");
  // expect(input).toBeInTheDocument();
});

