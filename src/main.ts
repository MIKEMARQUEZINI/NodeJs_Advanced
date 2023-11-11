import express from 'express';
import { router } from 'router';

class Main {
  private _server;

  constructor() {
    this._server = express();
    this._middleware();
    this._router();
  }
  private _router() {
    this._server.use(router);
  }

  private _middleware() {
    this._server.use(express.json());
  }

  get server() {
    return this._server;
  }
}
export const main = new Main();
