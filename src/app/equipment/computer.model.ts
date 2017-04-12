export class Computer {
  public name: string;
  public cpu: string;
  public storage: string;
  public memory: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
