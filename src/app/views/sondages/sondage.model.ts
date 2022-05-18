export class Sondage {
    id!:          number;
    description!: string;
    IdUser!:      number;
    created_at!:  Date;
    updated_at!:  Date;
    deleted_at!:  null;
    user!:        User;
}
export class User {
    id!:   number;
    name!: string;
}
export class Option {
  id!:        number;
  libelle!:   string;
  point!:     number;
  IdSondage!: number;
}
