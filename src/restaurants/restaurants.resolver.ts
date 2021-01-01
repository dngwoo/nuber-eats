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
  createRestaurant(@Args() createRestaurantArgs: CreateRestaurantDto): boolean {
    console.log(createRestaurantArgs);
    return true;
  }
}
