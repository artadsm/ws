import Piu from "../models/Pius";
import { usersRepository } from "../routes/users.routes";
class PiusRepository {
  private pius: Piu[];

  constructor() {
    this.pius = [];
  }
  public specific(id: string): Piu | undefined {
    const piu = this.pius.find((piu) => piu.id === id);
    if (!piu) throw Error("User not found");
    return piu;
  }
  public all(): Piu[] {
    return this.pius;
  }
  public changePiu(data: Partial<Piu>): Piu {
    const piu = this.pius.find((piu) => piu.id === data.id);
    data.updateDate = new Date();
    if (!piu) throw Error("User not found");
    const updated = {
      ...piu,
      ...data,
    };
    this.validatePiu(updated);
    this.pius[this.pius.findIndex((piu) => piu.id === data.id)] = updated;
    return updated;
  }
  public deletePiu(id: string): void {
    const piu = this.pius.find((piu) => piu.id === id);
    if (!piu) throw "User not found";
    this.pius = this.pius.filter((piu) => piu.id !== id);
  }
  public validatePiu(data: Partial<Piu>) {
    if (!data.text) throw Error("Texto não pode ser vazio");
    if (data.text.length >= 140) throw Error("Limite de caracteres excedido");
    const users = usersRepository.all();
    console.log(users);
    if (!users.find((user) => user.id === data.userId)) throw Error("User not found");
  }
  public createPiu(userId:string,text:string):Piu {
    const piu = new Piu(userId,text);
    this.validatePiu(piu);
    this.pius.push(piu);
    return piu;
  }
}

export default PiusRepository;
