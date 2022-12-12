
export class Mangas_model {

    constructor(
      public name: string,
      public author: string,
      public tome: string,
      public img_tome: string,
      public img_mangas: string,
      public video: string,
      public price: string,
      public stock: Number,
      public like: Number,

    ) {

        this.name = name;
        this.author = author;
        this.tome = tome;
        this.img_tome = img_tome;
        this.img_mangas = img_mangas;
        this.video = video;
        this.stock = stock;
        this.like = like;
     }

  }
