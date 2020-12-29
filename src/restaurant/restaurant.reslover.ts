import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantResolver {
  @Query(() => Boolean) // graphql을 위한 반환 값
  isPizzaGood(): boolean {
    // typescript를 위한 반환 값
    return true;
  }
}
