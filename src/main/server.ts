import 'reflect-metadata';
import { app } from './app';
import { config } from '../core/config/config';
import { setupContainer } from '../shared/container';

async function bootstrap() {
  try {
    await setupContainer();

    app.listen(config.server.port, () => {
      console.log(`🚀 Server running on port ${config.server.port}`);
    });
  } catch (error) {
    console.error('Application initialization failure:', error);
    process.exit(1);
  }
}

bootstrap().catch(err => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
