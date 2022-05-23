export class Sondage {
    id!:          number;
    description!: string;
    options?: String[];
}
export class User {
    id!:   number;
    name!: string;
}
export class Option {
  id!:        number;
  libelle!:   string;
  IdSondage!: number;
}
