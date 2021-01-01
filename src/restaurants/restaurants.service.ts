import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
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
  createRestaurant(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    // Typeorm에서 create를 할 때 기본적인 사용방법이다.
    // const newRestaurant = new Restaurant();
    // newRestaurant.name = createRestaurant.name;

    // 위의 코드를 이렇게 줄일 수  있다.
    // const newRestaurant = this.restaurants.create({
    //   name: createRestaurantDto.name
    // });
    const newRestaurant = this.restaurants.create(createRestaurantDto);
    return this.restaurants.save(newRestaurant); // newRestaurant entity를 DB에 저장 시킬 때 save를 사용한다.
  }
}
