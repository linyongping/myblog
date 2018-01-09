const Mock = require('mockjs')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/my-blog')
const artcleSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    comments: [{
        author: String,
        date: Date,
        body: String
    }],
    date: Date,
    tags: [{ type: String }]
})
const Blog = mongoose.model('blog', artcleSchema)

const Random = Mock.Random;

const getFakeBlog = () => {
    const blog = {
        title: Random.ctitle(3,10),
        author: Random.cword(2, 3),
        body: Random.cparagraph(1,3),       //随机生成1-3段中文段落
        comments: [],
        date: Random.datetime('yyyy-MM-dd HH:mm'),  //随机生成一个时间点
        tags: []
    }

    const length =~~(Math.random()*10) +5;
    for (let i = 0; i < length; i++) {
        blog.comments.push(Mock.mock({
                    author: Random.cword(2,3),      //随机生成一条评论的作者名字
                    body: Random.cparagraph(1,3),   //随机生成一条评论的内容
                    date: Random.datetime('yyyy-MM-dd HH:mm')   //随机生成评论的时间点
                }))
    }
    const length2 =~~(Math.random()*4) +2;
    for (let i = 0; i < length2; i++) {             //随机加入几个标签
        const tag = Random.pick(['nodejs','js','html','css','java','php','python']);
        if(blog.tags.indexOf(tag) == -1) blog.tags.push(tag)
    }
    return blog;
}

const fakeblogs = Array.from(Array(10).keys()).map(() => getFakeBlog())
fakeblogs.forEach(item => {
    const blog = new Blog(item);
    blog.save()
})
