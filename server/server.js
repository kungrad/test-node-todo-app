const express = require('express');
const bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {User} = require('./model/user');
var {Todo} = require('./model/todo');

const app = express();
