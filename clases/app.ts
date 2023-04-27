interface IPerson {
  sayHello:()=> void;
}

class Persona implements IPerson {
  readonly id: number;
  nombre: string;
  edad: number;
  private genero: string;

  constructor(id:number ,nombre: string, edad: number, genero: string) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }

  setGenero(genero: string): void {
    this.genero = genero;
  }

  getGenero(): string {
    return this.genero;
  }

  sayHello(): void {
    console.log("Hello!");
  }

  protected metodoProtegido(): void {
    console.log("Este es un método protegido");
  }

  static sayHi(): void {
    console.log("Hi!");
  }
}

class Empleado extends Persona implements IPerson {
  cargo: string;
  private sueldo: number;

  constructor(id: number, nombre: string, edad: number, genero: string, cargo: string, sueldo: number) {
    super(id, nombre, edad, genero);
    this.cargo = cargo;
    this.sueldo = sueldo;
  }

  trabajar(): void {
    console.log(`${this.nombre} está trabajando como ${this.cargo}`);
    super.sayHello();
  }

  static decirHola(): void {
    console.log("Hola desde Empleado!");
  }
}
const personaEjemplo: Persona = new Persona(1, "Juan", 35, "masculino");
personaEjemplo.sayHello(); // imprime "Hello!"
const generoPersona: string = personaEjemplo.getGenero();
console.log(generoPersona); // imprime "masculino"
personaEjemplo.setGenero("femenino");
console.log(personaEjemplo.getGenero()); // imprime "femenino"

const empleado: Empleado = new Empleado(2, "Ana", 25, "Femenino", "Programador", 5000);
console.log(empleado.nombre); // Ana
empleado.sayHello(); // imprime "Hello!"
empleado.trabajar(); // Ana está trabajando como Programador
