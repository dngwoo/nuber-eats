import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';

@Resolver()
export class RestaurantsResolver {
  // RestaurantService는 restaurants.module.ts의 provier에 추가 시켜줘야 동작함.
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(() => [Restaurant])
  resturants(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }

  @Mutation(() => Boolean)
  // async를 쓸 때는 return type을 줄 때 항상 Promise<value> 를 써줘야 한다.
  async createRestaurant(
    @Args() CreateRestaurantDto: CreateRestaurantDto,
  ): Promise<boolean> {
    try {
      // restaurants.service.ts에 있는 createRestaurant 메서드 이용
      await this.restaurantService.createRestaurant(CreateRestaurantDto);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
