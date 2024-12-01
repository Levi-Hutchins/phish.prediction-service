import { Module } from '@nestjs/common';
import { AppController } from './public/default/app.controller';
import { AppService } from './public/default/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
