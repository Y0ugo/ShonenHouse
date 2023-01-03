
export class Mangas_model {

    constructor(
      public id:string,
      public name: string,
      public author: string,
      public img_tome: number,
      public lien_tome: string,
      public img_mangas: string,
      public video: string,
      public price: string,
      public stock: Number,
      public like: number,

    ) {

        this.id = id;
        this.name = name;
        this.author = author;
        this.img_tome = img_tome;
        this.lien_tome = lien_tome;
        this.img_mangas = img_mangas;
        this.video = video;
        this.stock = stock;
        this.like = like;
     }

  }
