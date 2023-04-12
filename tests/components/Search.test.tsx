import { expect, test } from "vitest";
import "@testing-library/jest-dom";
import SearchBox from "@/components/Search";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DocumentFactory } from "tests/helpers/DocumentFactory";

test("should render textbox", () => {
  const docs = DocumentFactory.buildList(10);

  const html = render(<SearchBox documents={docs} />);
  const input = html.getByRole("textbox");
  expect(input).toBeInTheDocument();
});

test("should show input text", async () => {
  const docs = DocumentFactory.buildList(10);
  const user = userEvent.setup();

  const html = render(<SearchBox documents={docs} />);
  const input = html.getByRole("textbox");
  await user.type(input, "test");
  expect(input).toHaveValue("test");
});