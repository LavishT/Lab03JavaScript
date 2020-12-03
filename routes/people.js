const { index, show } = require('../controllers/people');

module.exports = router => {
  router.get('/people', index);
  router.get('/people/:id', show);
};
