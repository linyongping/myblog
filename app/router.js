'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user', controller.user.query);
  router.post('/user', controller.user.create);
  router.put('/user', controller.user.update);
  router.post('/artcle',controller.blog.createArtcle)
  router.get('/artcle',controller.blog.query)
};
