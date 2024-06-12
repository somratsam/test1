import express, { Application, Request, Response } from 'express';

import cors from 'cors';
import { serviceRoutes } from './app/modules/web-service/web-service.route';
import { techStackRoutes } from './app/modules/tech-stack/techStack.route';
import { blogRoutes } from './app/modules/blog/blog.route';
const app: Application = express();

// parsers

app.use(express.json());
app.use(cors());

app.use('/api/techStacks', techStackRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/services', serviceRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a.toString());
};

app.get('/', getAController);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
