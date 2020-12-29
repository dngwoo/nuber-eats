import { Module } from '@nestjs/common';
import { RestaurantResolver } from './restaurant.reslover';

@Module({
  providers: [RestaurantResolver],
})
export class RestaurantModule {}
