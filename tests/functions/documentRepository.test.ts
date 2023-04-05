import { expect, test } from "vitest";
import { faker } from "@faker-js/faker";
import * as Factory from "factory.ts";
import type { Document } from "../../src/content/schemas/_document";
import DocumentRepository from "../../src/functions/documentRepository";

const docFactory = Factory.Sync.makeFactory<Document>({
  category: "post",
  dateCreated: Factory.each(() => faker.date.recent()),
  dateLastModified: Factory.each(() => faker.date.recent()),
  draft: Factory.each(() => faker.datatype.boolean()),
  pic: Factory.each(() => faker.internet.url()),
  tags: Factory.each(() => faker.lorem.words(3).split(" ")),
  title: Factory.each(() => faker.name.jobDescriptor()),
  summary: Factory.each(() => faker.lorem.lines(3)),
});

test("should not return results without keys", () => {
  // arrange
  const docs = docFactory.buildList(10);
  const docRepo = new DocumentRepository(docs, { keys: [] });

  // act
  const result = docRepo.search("test");

  // assert
  expect(result).toBeInstanceOf(Array<Document>);
  expect(result.length).toBe(0);
});

test("should return results with title key", () => {
  // arrange
  const docs = docFactory.buildList(3);
  const docRepo = new DocumentRepository(docs, { keys: ["title"] });
  const firstTitleWord = docs[0].title.split(" ")[0];

  // act
  const result = docRepo.search(firstTitleWord);

  // assert
  expect(result).toBeInstanceOf(Array<Document>);
  expect(result.length).toBeGreaterThanOrEqual(1);
});

test("should return results with tag key", () => {
  // arrange
  const docs = docFactory.buildList(3);
  const docRepo = new DocumentRepository(docs, { keys: ["tags"] });
  const firstTag = docs[0].tags[0];

  // act
  const result = docRepo.search(firstTag);

  // assert
  expect(result).toBeInstanceOf(Array<Document>);
  expect(result.length).toBeGreaterThanOrEqual(1);
});

test("should return results with summary key", () => {
  // arrange
  const docs = docFactory.buildList(3);
  const docRepo = new DocumentRepository(docs, { keys: ["summary"] });
  const firstSummaryWord = docs[0].summary.split(" ")[0];

  // act
  const result = docRepo.search(firstSummaryWord);

  // assert
  expect(result).toBeInstanceOf(Array<Document>);
  expect(result.length).toBeGreaterThanOrEqual(1);
});

test("should return results with summary key and last summary word as input", () => {
  // arrange
  const docs = docFactory.buildList(3);
  const docRepo = new DocumentRepository(docs, { keys: ["summary"], ignoreLocation: true });
  const summaryWords = docs[0].summary.split(" ");
  const lastSummaryWord = summaryWords[summaryWords.length - 1];

  // act
  const result = docRepo.search(lastSummaryWord);

  // assert
  expect(result).toBeInstanceOf(Array<Document>);
  expect(result.length).toBeGreaterThanOrEqual(1);
});
