import User from "../models/Users";

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }
  public specific(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw Error("User not found");
    return user;
  }
  public all(): User[] {
    return this.users;
  }
  public changeUser(data: Partial<User>): User {
    const user = this.users.find((user) => user.id === data.id);
    data.updateDate = new Date();
    if (!user) throw Error("User not found");
    const updated = {
      ...user,
      ...data,
    };
    this.validateUser(updated);
    this.users[this.users.findIndex((user) => user.id === data.id)] = updated;
    return updated;
  }
  public deleteUser(id: string): void {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw "User not found";
    this.users = this.users.filter((user) => user.id !== id);
  }
  public validateUser(data: Partial<User>) {
    if (!data.name) throw Error("Nome não pode ser vazio");
    if (!data.birth) throw Error("Data de nascimento não pode ser vazia");
    if (!data.cpf) throw Error("CPF não pode ser vazio");
    if (!data.phoneNumber) throw Error("Número de telefone não pode ser vazio");
    this.users.map((user) => {
      if (user.cpf === data.cpf && user.id !== data.id)
        throw Error("Esse cpf já está sendo utilizado");
      if (user.name === data.name && user.id !== data.id)
        throw Error("Esse nome já está sendo utilizado");
    });
  }

  public createUser(
    name: string,
    birth: string,
    cpf: string,
    phoneNumber: string
  ): User {
    const user = new User(name, birth, cpf, phoneNumber);
    this.validateUser(user);
    this.users.push(user);
    return user;
  }
}

export default UsersRepository;
