var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(id, nombre, edad, genero) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    Persona.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    Persona.prototype.getGenero = function () {
        return this.genero;
    };
    Persona.prototype.sayHello = function () {
        console.log("Hello!");
    };
    Persona.prototype.metodoProtegido = function () {
        console.log("Este es un método protegido");
    };
    Persona.sayHi = function () {
        console.log("Hi!");
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(id, nombre, edad, genero, cargo, sueldo) {
        var _this = _super.call(this, id, nombre, edad, genero) || this;
        _this.cargo = cargo;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.trabajar = function () {
        console.log("".concat(this.nombre, " est\u00E1 trabajando como ").concat(this.cargo));
        _super.prototype.sayHello.call(this);
    };
    Empleado.decirHola = function () {
        console.log("Hola desde Empleado!");
    };
    return Empleado;
}(Persona));
var personaEjemplo = new Persona(1, "Juan", 35, "masculino");
personaEjemplo.sayHello(); // imprime "Hello!"
var generoPersona = personaEjemplo.getGenero();
console.log(generoPersona); // imprime "masculino"
personaEjemplo.setGenero("femenino");
console.log(personaEjemplo.getGenero()); // imprime "femenino"
var empleado = new Empleado(2, "Ana", 25, "Femenino", "Programador", 5000);
console.log(empleado.nombre); // Ana
empleado.sayHello(); // imprime "Hello!"
empleado.trabajar(); // Ana está trabajando como Programador
