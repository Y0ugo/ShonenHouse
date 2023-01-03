
export class User_model{

      constructor(
       public lastname: string,
       public firtname: string,
       public  email: string,
       
       public password: string,
       public  createDate: Date,
       public roles: string[],
       public liste_achat: string[],
       public panier: string[]

      ){

        this.lastname = lastname;
        this.firtname = firtname;
        this.email = email;
        this.password = password;
        this.createDate = createDate;
        this.roles = roles;
        this.liste_achat = liste_achat;
        this.panier = panier;

      }
}
