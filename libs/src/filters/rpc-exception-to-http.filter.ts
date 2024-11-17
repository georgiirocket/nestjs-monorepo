import {
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  HttpStatus,
  Logger,
  HttpException,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

/**
 * Rpc exception
 */
@Catch(RpcException)
export class RpcExceptionToHttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('GATEWAY');

  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    this.logger.error(exception.message);

    response.status(statusCode).json({
      statusCode,
      message: exception.message,
    });
  }
}
