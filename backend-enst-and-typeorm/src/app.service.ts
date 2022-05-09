import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './news.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(News) private newsRepo: Repository<News>) { }

  addNews() {
    // Why TS do not raise error? It do not have title and content.
    const news = this.newsRepo.create({});
    // Raise error: QueryFailedError: Field 'title' doesn't have a default
    // value.
    this.newsRepo.save(news);
    return "OK";
  }
}
