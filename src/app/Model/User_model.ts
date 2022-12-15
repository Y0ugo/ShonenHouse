
export class User_model{

    constructor(

        public Lastname: string,
        public firtname: string,
        public email: string,
        public password: string,
        public create: Date,
        public roles: any,
        public liste_achat: any,

    ){


        this.Lastname = Lastname;
        this.firtname = firtname;
        this.email = email;
        this.password = password;
        this.create = create;
        this.roles = [];
        this.liste_achat = [];

    }

}
