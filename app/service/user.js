const Service = require('egg').Service;

class User extends Service {
    async create (params) {
        const user = new this.ctx.model.User({ ...params })
        const result = await user.save();
        return result
    }

    async query (username) {
        const user = await this.ctx.model.User.find({ username })
        return user.length > 0;
    }
}