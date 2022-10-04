
const appDiv:HTMLElement = document.getElementById('app')!;
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Persona{
    readonly nombre:string;
    readonly apellido:string;
    private añodenacimiento:number;
    constructor(nombre:string, apellido:string, añodenacimiento:number) { 
        this.apellido = apellido;
        this.nombre = nombre;
        this.añodenacimiento =añodenacimiento; 
    }
    public NombreyApellido():string
    {
        return this.nombre + this.apellido;
    }
    public edad(añoactual: number):number
    {
        return (añoactual - this.añodenacimiento);
    }
    
}

function DecoradorPersona(target:Function){
    console.log(target);
}

@DecoradorPersona

class Persona{
    private nombre:string="";
    private apellido:string="";
    private AnioNac:number=0;
    constructor(nombre:string, apellido:string){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}


class Operacion{
    protected valorA:number;
    protected valorB:number;
    protected resultado:number;
    constructor(){
        this.valorA=0;
        this.valorB=0;
        this.resultado=0;
    }
    set ValorA(value:number){
        this.valorA=value;
    }
    set ValorB(value:number){
        this.valorB=value;
    }

    get Resultado():number{
        return this.resultado;
    }
}

class Suma extends Operacion{
    Sumar()
    {
        this.resultado=this.ValorA+this.ValorB;
    }
}
class Resta extends Operacion
{
    Restar()
    {
        this.resultado=this.ValorA-this.ValorB;
    }
}


let operacionR=new Resta();
operacionR.ValorA=45;
operacionR.ValorB=10;
operacionR.Restar();
console.log("El resultado de la resta es: " + operacionR.Resultado);

let operacionS=new Suma();

operacionS.ValorA=45;
operacionS.ValorB=10;
operacionS.Sumar();
console.log("El resultado de la suma es " + operacionS.Resultado);



