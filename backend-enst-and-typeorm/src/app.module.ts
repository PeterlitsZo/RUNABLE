import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './news.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [ News ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ News ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
