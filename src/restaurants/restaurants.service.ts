import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant) // 무조건 @Entity()를 사용한 Entity가 들어가야 한다.
    private readonly restaurants: Repository<Restaurant>,
  ) {}
  getAll(): Promise<Restaurant[]> {
    // restaurants란 restaurant entitydml repository이다.
    // @InjectRepository(Restaurant)
    return this.restaurants.find(); // find는 respository의 옵션 (메서드) 중 하나이다.
  }
}
