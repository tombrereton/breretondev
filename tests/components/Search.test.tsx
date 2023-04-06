import { expect, test } from "vitest";
import "@testing-library/jest-dom";
import Search from "@/components/Search";
import { render, screen, fireEvent } from "@testing-library/react";
import { DocumentFactory } from "tests/helpers/DocumentFactory";
import React, { Component } from "react";

// write test for search react component
test("should render search component", () => {
  const docs = DocumentFactory.buildList(10);

  render(<Search documents={docs} />);
  const input = screen.getByRole("input");
  expect(input).toBeInTheDocument();
  // const input = screen.getByLabelText("document-search-input");
});
