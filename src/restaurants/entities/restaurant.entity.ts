import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field((type) => String) // type은 굳이 써주지 않아도 되지만 반환값이 무엇을 의미하는지 적어줌
  name: string;
  @Field((type) => Boolean)
  veganOnly: boolean;
  @Field((type) => String)
  address: string;
  @Field((type) => String)
  ownersName: string;
}
