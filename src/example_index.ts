import createError, { HttpError } from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import cookieParser from 'cookie-parser';
import logger from 'morgan';



// eslint-disable-next-line
const cardsRouter = require('./routes/cards')(db);
// eslint-disable-next-line
const authRouter  = require('./routes/auth')(db);
// eslint-disable-next-line
const usersRouter = require('./routes/users')(db);
// eslint-disable-next-line
const tagsRouter  = require('./routes/tags')(db);

const app = express();

// eslint-disable-next-line
const expressSwagger = require('express-swagger-generator')(app);

const options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '0.1.0',
        },
        host: 'localhost:3000',
        basePath: '/v0',
        produces: [
            "application/json",
        ],
        schemes: ['http', 'https'],
		securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, // app absolute path
    files: ['./routes/**/*.js'] // Path to the API handle folder
};
expressSwagger(options)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/cards', cardsRouter);
app.use('/tags', tagsRouter);

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  res.header('content-type', 'application/json')
  res.status(404).json({"error": "notFound"})
});

// error handler
app.use(function(err: HttpError, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*
import { db } from './routes/database/connector';
db.connect();
 */

export default app;
