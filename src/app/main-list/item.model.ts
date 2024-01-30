export class Item {
  public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public sex: string;
    
    public age: number;
    public height: number;
    public idData?: string;
    
    
  
    constructor(id:number, name: string, desc: string, imagePath: string, sex: string, height: number, age: number,  idData?: string) {
      this.id = id;
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.sex = sex;
      this.height = height;
      this.age = age;
      this.idData = idData;
    }
  }