export class Item {
  public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public sex: string;
    public height: number;
    public age: number;
    
    
  
    constructor(id:number, name: string, desc: string, imagePath: string, sex: string, age: number, height: number) {
      this.id = id;
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.sex = sex;
      this.height = height;
      this.age = age;
    }
  }