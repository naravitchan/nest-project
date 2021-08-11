import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Ctx, Payload, RedisContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Define the message pattern for this method
  @MessagePattern('greeting')
  // greeting & greeting.reply
  async hello(data: string)  {
    this.logger.log('hello ' + data.toString()); 
    return 'hello ' + data.toString()
  }
}
