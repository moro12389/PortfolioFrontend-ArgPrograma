
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


class Turbina
{
    private numTurbinas:number = 0;
    public constructor(n:number)
    {
        this.numTurbinas = n;

    }
    public ToString()
    {
        return this.numTurbinas + "Turbina/s";
    }
}

class Cubierta
{
    private cabinaTripulacion:boolean = false;
    private cabinaVuelo:boolean =  false;
    private sistemaEmergencia:boolean = false;
    private numTanquesCombustible:number=0;
    private numPuertasSalidas:number = 0;
    public constructor(cabinaTripulacion:boolean, cabinaVuelo:boolean, sistemaEmergencia:boolean, numTanquesCombustible:number, numPuertasSalidas:number){
        this.cabinaTripulacion = cabinaTripulacion;
        this.cabinaVuelo = cabinaVuelo;
        this.sistemaEmergencia = sistemaEmergencia;
        this.numTanquesCombustible = numTanquesCombustible;
        this.numPuertasSalidas = numPuertasSalidas;
    }
    public ToString()
    {
        let mensaje = "Cubierta compuesta de: ";
        if (this.cabinaVuelo)
        {
            mensaje += "Cubierta de Vuelo, ";

        }
        if  (this.cabinaTripulacion)
        {
            mensaje += "Cubierta de Tripulación, ";
        }
        if (this.sistemaEmergencia)
        {
            mensaje += "Sistema de Emergencia, ";
        }
        mensaje += this.numTanquesCombustible + " Tanques de Combustible, ";
        mensaje += this.numPuertasSalidas + " Puertas de Salida.";
        return mensaje;
    }
}
class Helice
{
    private numHelices:number = 0;
    public constructor(numHe:number){
        this.numHelices = numHe;
    }
    public ToString()
    {
        return this.numHelices + " Helice/s";
    }

}
class TrenDeAterrizaje
{
    private numderuedas:number;
    public constructor(numHe:number){
        this.numderuedas = numHe;
    }
    public ToString()
    {
        return this.numderuedas + " Rueda/s";
    }

}
class Alas
{
    private numdealas:number=2;
    public constructor(numHe:number){
        this.numdealas = numHe;
    }
    public ToString()
    {
        return this.numdealas + " Rueda/s";
    }

}
class Aeroplano
{
    private helice:Helice;
    private trenAterrizaje:TrenDeAterrizaje;
    private alas:Alas;
    private cubierta:Cubierta;
    constructor(helice: Helice, trenAterrizaje:TrenDeAterrizaje, alas:Alas, cubierta:Cubierta)
    {
        this.helice = helice;
        this.trenAterrizaje = trenAterrizaje;
        this.alas = alas;
        this.cubierta = cubierta;
    }

}

