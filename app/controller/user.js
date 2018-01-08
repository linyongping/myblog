'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async query() {
    this.ctx.body = await this.ctx.model.User.fin({  });
  }
}

module.exports = UserController;
