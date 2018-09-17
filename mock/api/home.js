'use strict';

module.exports = function(router) {

  router.get('/api/test', (req, res) => {
    res.json({
      code: '00000',
      data: {
        name: 'admin',
      },
      msg: ''
    });
  });
};