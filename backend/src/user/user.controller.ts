import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('user')
export class UserController {
  @UseGuards(AuthGuard)
  @Get('/me')
  me(@Req() req) {
    return req.user;
  }
}
