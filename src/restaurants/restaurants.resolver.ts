import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';

@Resolver()
export class RestaurantsResolver {
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
