import { config } from './config/config.js';
import express, {json} from 'express';

import authRoutes from './routes/user.router.js'
import taskRoutes from './routes/task.router.js'
import errorHandler from './middleware/error.middleware.js';

const app = express();

app.use(json());

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

app.use(errorHandler);

const PORT = config.port || 8080;

app.listen(PORT, ()=>console.log(`Server is running on ${PORT}`));