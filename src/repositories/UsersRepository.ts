import User from '../models/Users';

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public all() : User[] {
    return this.users;
  }

  public create(name: string,birth: string,cpf: string,phoneNumber: string,creationDate: string,updateDate: string) : User {
    const user = new User(name,birth,cpf,phoneNumber,creationDate,updateDate);

    this.users.push(user);

    return user;
  }
}

export default UsersRepository;