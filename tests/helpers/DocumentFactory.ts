import { faker } from "@faker-js/faker";
import * as Factory from "factory.ts";
import type { Document } from "@/content/schemas/_document";

export const DocumentFactory = Factory.Sync.makeFactory<Document>({
  category: "post",
  dateCreated: Factory.each(() => faker.date.recent()),
  dateLastModified: Factory.each(() => faker.date.recent()),
  draft: Factory.each(() => faker.datatype.boolean()),
  pic: Factory.each(() => faker.internet.url()),
  tags: Factory.each(() => faker.lorem.words(3).split(" ")),
  title: Factory.each(() => faker.name.jobDescriptor()),
  summary: Factory.each(() => faker.lorem.lines(3)),
});
