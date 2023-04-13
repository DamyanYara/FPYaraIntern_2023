import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from 'src/core/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}
  // Method to create new User into the user Table and returns user object
  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }
  //Finding User By Email and returns User
  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }
  // Finding One User By ID and returns User
  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
  // Finding all Users by ID
  /*
  async findAll(id: number): Promise<User[]> {
    return await this.userRepository.findAll<User>();
  }
  //TODO:
  //loginCheck validation if token available
  //signToken
}*/
}
