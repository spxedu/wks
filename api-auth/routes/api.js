var express = require('express');
var router = express.Router();
var api_u = require('../controllers/api/user.api');
var mdw = require('../middleware/api.auth');
 
router.get('/users', mdw.api_auth ,api_u.listUser); // ds u:  /api/users

router.post('/users/login', api_u.login); // đăng nhập

router.post('/users/reg', api_u.reg); // đăng ký

router.get('/users/profile',mdw.api_auth ,api_u.profile); // lấy thông tin user

router.get('/users/logout',mdw.api_auth, api_u.logout); // đăng xuất

module.exports = router;