export class Tarjeta{
    static counter = 0;

    constructor(fecha, monto, nombre, indicador, cuota, dias){
        this.id = ++Tarjeta.counter;
        this.fecha = fecha,
        this.monto = monto,
        this.nombre = nombre,
        this.indicador = indicador,
        this.cuota = cuota,
        this.dias = dias
    }
    get id(){
        return this.id
    }
    set id(id){
        return this.id = id
    }
    get fecha(){
        return this.fecha
    }
    set fecha(fecha){
        return this.fecha = fecha
    }
    get monto(){
        return this.monto
    }
    set monto(monto){
        return this.monto = monto
    }
    get nombre(){
        return this.nombre
    }
    set nombre(nombre){
        return this.nombre = nombre
    }
    get indicador(){
        return this.indicador
    }
    set indicador(indicador){
        return this.indicador = indicador
    }
    get cuota(){
        return this.cuota
    }
    set cuota(cuota){
        return this.cuota = cuota
    }
    get dias(){
        return this.dias
    }
    set dias(dias){
        return this.dias = dias
    }
    totalPlan(){
        return `total: ${this.cuota * this.dias}`
    }
}
