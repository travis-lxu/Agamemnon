import { IncomingMessage } from 'http';
import url from 'url';

class Request {
  req: IncomingMessage;
  constructor(req: IncomingMessage) {
    this.req = req;
  }

  get query() {
    return url.parse(this.req.url as string, true).query;
  }
}

export default Request;
