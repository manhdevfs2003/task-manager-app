import {
  Body,
  Controller,
  Post,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { OmitUser } from './interfaces/auth.interface';
import { Request } from 'express';
import { Public } from './decorator/public.decorator';
import { RefreshJwtAuthGuard } from './guard/refresh-jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Temporary GET endpoint for testing - REMOVE IN PRODUCTION
  @Public()
  @Get('test-login')
  async testLogin() {
    try {
      // Test with a default user - adjust email/password as needed
      const result = await this.authService.login({
        email: 'test@example.com',
        password: 'password123',
      });
      return {
        message: 'Test login successful',
        access_token: result.access_token,
        refresh_token: result.refresh_token,
      };
    } catch (error) {
      return {
        message: 'Test login failed - user may not exist',
        error: error.message,
        instructions: 'Create a user first or check your credentials',
      };
    }
  }

  @Public()
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(
    @Body() authRegisterDto: AuthRegisterDto,
  ): Promise<OmitUser> | never {
    return this.authService.register(authRegisterDto);
  }

  @Public()
  @Post('login')
  login(
    @Body() authLoginDto: AuthLoginDto,
  ): Promise<{ access_token: string; refresh_token: string }> | never {
    return this.authService.login(authLoginDto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@Req() req: Request) {
    const user = req.user;
    return this.authService.logout(user['sub']);
  }

  @Public()
  @UseGuards(RefreshJwtAuthGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshToken(
    @Req() req: Request,
  ): Promise<{ access_token: string; refresh_token: string }> | never {
    const user = req.user;

    return this.authService.refreshTokens(user['sub'], user['refreshToken']);
  }
}
