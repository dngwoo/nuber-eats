import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    RestaurantsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dngwoo',
      password: '12345',
      database: 'nuber-eats',
      synchronize: true, // 데이터베이스를 나의 모듈의 현재상태로 마이그레이션
      logging: true, // 데이터베이스에서 무슨 일이 일어나는지 콘솔에 표시
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
