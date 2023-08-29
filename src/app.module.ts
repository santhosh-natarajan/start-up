/* eslint-disable prettier/prettier */
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterController } from './register/register.controller';
import { CustomerModule } from './customer/customer.module';
import { LoggerMiddleWare } from './middleware';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Customer } from './customer/entity/customer.entity';

@Module({
  imports: [
    CustomerModule, 
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3306,
      username:'root',
      password:'Root@123',
      database:'billing',
      entities:[Customer],
      synchronize:true
    })
  ],
  controllers: [AppController, RegisterController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer:MiddlewareConsumer) {
    consumer.apply(LoggerMiddleWare).forRoutes('customer')
  }
}
