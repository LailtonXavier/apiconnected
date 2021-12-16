"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ContactController = require('../controllers/ContactController'); var _ContactController2 = _interopRequireDefault(_ContactController);

const router = new (0, _express.Router)();

router.get('/', _ContactController2.default.index);
router.post('/', _ContactController2.default.sendEmail);

exports. default = router;
