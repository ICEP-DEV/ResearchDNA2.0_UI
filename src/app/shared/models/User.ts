export class User {
  constructor(
   public userId: number,
   public firstName: string,
   public lastName: string,
   public email: string,
   public password: string,
   public department: string,
   public faculty: string,

  ){}

}
export class Login {
  constructor(
   public userId: number,
   public password: string,

  ){}

}
