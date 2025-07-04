import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { WorkspaceModule } from './workspace/workspace.module';
import { BoardModule } from './board/board.module';
import { ActivityModule } from './activity/activity.module';
import { ListModule } from './list/list.module';
import { CardModule } from './card/card.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '../..', 'frontend', 'dist'),
    // }),
    UserModule,
    AuthModule,
    PrismaModule,
    WorkspaceModule,
    BoardModule,
    ActivityModule,
    ListModule,
    CardModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
