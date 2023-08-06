export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  constructor(name:string, dese: string, imagePath:string ){
    this.name= name;
    this.description= dese;
    this.imagePath=imagePath;
  }
}


