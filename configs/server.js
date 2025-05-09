'use strict'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import apiLimiter from "../src/middlewares/validar-peticiones.js"
import superheroRoutes from "../src/superhero/superhero.routes.js"


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.superheroPath = '/api/v1/superhero';
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(apiLimiter)
    }

    routes() {
        this.app.use(this.superheroPath, superheroRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port ', this.port);
        })
    }
}

export default Server