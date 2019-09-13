const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const userRouter = require("./routes/users");
const updateRouter = require("./routes/update");
const createRouter = require("./routes/create");
const designRouter = require("./routes/design");
const createdesignRouter = require("./routes/createdesign");
// const idRouter = require("./routes/api");


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use("/api", apiRouter);
app.use("/users", userRouter);
app.use("/update", updateRouter);
app.use("/create", createRouter);
app.use("/design", designRouter);
app.use("/createdesign", createdesignRouter);
// app.use("/users/id", idRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
