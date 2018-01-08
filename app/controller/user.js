'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async query() {
    const { query } = this.ctx.request;
    this.ctx.body = await this.ctx.model.User.find({ ...query });
  }

  async create() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    // const isExist = await this.ctx.model.User.find({ username: params.username })
    // if(isExist) {
    //   const err = new Error('Username already exist')
    //   err.status = 400;
    //   throw err
    // }
    const res = await this.ctx.model.User.create(params)
    ctx.body = { id: res.id }
    ctx.status = 201
  }
}

module.exports = UserController;
