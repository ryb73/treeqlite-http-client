import type { TreeQLiteRequest } from "treeqlite-http-types";

export class TreeQLiteHttpRequestError extends Error {
  public constructor(
    public requestBody: TreeQLiteRequest,
    public response: Response
  ) {
    super(`TreeQLiteHttpRequestError`);
    // eslint-disable-next-line @typescript-eslint/quotes, @shopify/prefer-class-properties
    this.name = "TreeQLiteHttpRequestError";
  }
}
