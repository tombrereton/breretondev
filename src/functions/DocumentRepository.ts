import Fuse from "fuse.js";
import type { Document } from "../content/schemas/_document";

export default class DocumentRepository {
  private fuse: Fuse<Document>;

  constructor(private documents: Document[], private options: any) {
    this.fuse = new Fuse(this.documents, options);
  }

  search(query: string): Document[] {
    return this.fuse.search(query).map((result) => result.item);
  }
}
