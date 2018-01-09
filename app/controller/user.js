"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
  async query() {
    const { query } = this.ctx.request;
    const res = await this.ctx.model.User.find({ ...query });
    this.ctx.body = res.map(item => ({ username: item.username, password: item.password }))
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
    const res = await this.ctx.model.User.create(params);
    ctx.body = { id: res.id };
    ctx.status = 201;
  }

  async update() {
    const params = this.ctx.request.body;
    const isExist = await this.ctx.model.User.find({ username: params.username });
    console.log('params', isExist)    
    if (isExist[0]) {
      const res = await this.ctx.model.User.update(params);
      this.ctx.body = res;
      this.ctx.status = 201;
    }else {
      this.ctx.body = { errMessage: "用户名不存在"  },
      this.ctx.status = 400
    }
  }
}

module.exports = UserController;
