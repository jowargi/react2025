export default class HttpError extends Error {
  name = "HttpError";

  constructor(status) {
    super(status);

    this.status = status;
  }
}
