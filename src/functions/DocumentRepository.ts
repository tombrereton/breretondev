import Fuse from "fuse.js";
import type { Document } from "../content/schemas/_document";

export default class DocumentRepository {
  private fuse: Fuse<Document>;

  constructor(
    private documents: Document[],
    private options: Fuse.IFuseOptions<Document>
  ) {
    this.fuse = new Fuse(this.documents, this.options);
  }

  search(query: string): Document[] {
    return this.fuse.search(query).map((result) => result.item);
  }
}
