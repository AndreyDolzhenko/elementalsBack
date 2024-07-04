import express from 'express';
import cors from 'cors';

import sequelize from './db/db';
import {usersRouter, User} from './modules/users';
import { LastTryRouter } from './modules/guessSTM';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const API = process.env.API || '/api/v1';
// const URL = `http://127.0.0.1:${PORT}/${API}`;

async function start () {
    try {        
        await sequelize.authenticate();
        await sequelize.sync();
        
        app.use(`${API}/users`, usersRouter);
    
        app.use(`${API}/last_try`, LastTryRouter);

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);                                             
        });

    } catch (err: any) {
        throw new Error(err);
    }    
};

start();
