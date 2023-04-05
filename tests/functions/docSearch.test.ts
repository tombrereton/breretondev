import { assert, expect, test } from "vitest";
import Fuse from "fuse.js";
import { faker } from "@faker-js/faker";
import * as Factory from "factory.ts";
import type { Document } from "../../src/content/schemas/documentSchema";

const docFactory = Factory.Sync.makeFactory<Document>({
  category: "post",
  date: Factory.each(() => faker.date.recent()),
  draft: Factory.each(() => faker.datatype.boolean()),
  pic: Factory.each(() => faker.internet.url()),
  tags: ["tag1", "tag2"],
  title: Factory.each(() => faker.name.jobDescriptor()),
});

test("should not return results without keys", () => {
  // arrange
  const docs = docFactory.buildList(10);
  const fuse = new Fuse(docs);

  // act
  const result = fuse.search("test");

  // assert
  expect(result).toBeInstanceOf(Array<Document>);
  expect(result.length).toBe(0);
});

test("should return results with title key", () => {
  // arrange
  const docs = docFactory.buildList(3);
  const fuse = new Fuse(docs, { keys: ["title"] });
  const firstTitleWord = docs[0].title.split(" ")[0];

  // act
  const result = fuse.search(firstTitleWord);

  // assert
  expect(result).toBeInstanceOf(Array<Document>);
  expect(result.length).toBeGreaterThanOrEqual(1);
});

test("should not return results without tag key", () => {
  // arrange
  const docs = docFactory.buildList(3);
  const fuse = new Fuse(docs, { keys: ["title"] });
  const firstTag = docs[0].tags[0];

  // act
  const result = fuse.search(firstTag);

  // assert
  expect(result).toBeInstanceOf(Array<Document>);
  expect(result.length).toBe(0);
});

test("should return results with tag key", () => {
  // arrange
  const docs = docFactory.buildList(3);
  const fuse = new Fuse(docs, { keys: ["title", "tags"] });
  const firstTag = docs[0].tags[0];

  // act
  const result = fuse.search(firstTag);

  // assert
  expect(result).toBeInstanceOf(Array<Document>);
  expect(result.length).toBeGreaterThanOrEqual(1);
});
