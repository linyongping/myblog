"use strict";

const Controller = require("egg").Controller;

class BlogController extends Controller {
  async query() {
    const { query } = this.ctx.request;
    const res = await this.ctx.model.Blog.find({ ...query });
    this.ctx.body = res;
  }

  async createArtcle() {
    const params = this.ctx.request.body;
    const Blog = this.ctx.model.Blog;
    const res = await Blog.create(params)
    this.ctx.body = res
    this.ctx.status = 201 
  }

}

module.exports = BlogController
