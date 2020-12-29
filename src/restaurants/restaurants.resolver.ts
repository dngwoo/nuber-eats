import { Args, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver()
export class RestaurantsResolver {
  @Query(() => [Restaurant])
  myRestaurant(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }
}
