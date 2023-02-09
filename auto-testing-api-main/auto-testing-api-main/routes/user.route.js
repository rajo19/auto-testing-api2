const router = require('express').Router();

const {
    userLoginValidator,
    userAddValidator,
    userUpdateValidator,
    userDeleteValidator
} = require("../validations/user.validation");

const {
    userLogin,
    userAdd,
    userUpdate,
    userDelete,
    userList
} = require("../controllers/user.controller");
const logger = require('../lib/logger').API;

const { expressjwt } = require('express-jwt');
const { secret } = require('../config');
const jwt = require('jsonwebtoken');
//const logger = require('../lib/logger').API;

const generateToken = (payload, type) => {
    logger.info('The generateToken started');
    if (type === 'AccessToken') {
        return jwt.sign(payload, secret, {expiresIn: "600s"});
    } else {
        return jwt.sign(payload, secret, {expiresIn: "24h"});
    }
}
// login
// router.post('/login',  function(req, res, next) {
//     let {username, password} = req.body;
//     logger.info(`username: ${username}, password: ${password}`)
//     //return res.status(200).json({success: true, data: {id: "test"}});
//     const accessToken = generateToken({userId: 1, createTime: new Date()}, 'AccessToken');
//     return res.status(200).json({success: true, data: {id: 1, username, accessToken}});
// });
router.post('/login',userLoginValidator,userLogin);
// 添加用户
router.post('/add', userAddValidator, userAdd);

// 更新用户
router.post('/update', userUpdateValidator, userUpdate);

// 删除用户
router.post('/delete', userDeleteValidator, userDelete);

// 获取所有用户列表
router.post('/list', userList);

module.exports = router;