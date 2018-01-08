'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async query() {
    const request = this.ctx.request;
    console.log('request', request)
    this.ctx.body = await this.ctx.model.User.find({username: 'sean'});
  }

  async create() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    const isExist = await service.user.query(body.username)
    if(isExist) {
      const err = new Error('Username already exist')
      err.status = 400;
      throw err
    }
    const res = await service.user.create(params)
    ctx.body = { id: res.id }
    ctx.status = 201
  }
}

module.exports = UserController;
