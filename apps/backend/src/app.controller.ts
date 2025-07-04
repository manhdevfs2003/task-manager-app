import { Controller, Get } from '@nestjs/common';
import { Public } from './auth/decorator/public.decorator';

@Controller()
export class AppController {
  @Public()
  @Get()
  getHealth() {
    return {
      message: 'Task Manager API is running!',
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    };
  }

  @Public()
  @Get('health')
  healthCheck() {
    return {
      status: 'OK',
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    };
  }
}
