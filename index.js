let turistas = [
    {nombre: 'Juan', nacionalidad:'mexicano', edad: 20 },
    {nombre: 'Ernesto', nacionalidad:'argentino', edad: 50},
    {nombre: 'Saul', nacionalidad:'argentino', edad: 35},
    {nombre: 'Sebastian', nacionalidad:'venezolano', edad: 30},
    {nombre: 'Ruben', nacionalidad:'peruano', edad: 42},
    {nombre: 'Jose', nacionalidad:'mexicano', edad: 27},
    {nombre: 'Alejandro', nacionalidad:'argentino', edad: 65},
    {nombre: 'Maciel', nacionalidad:'peruano', edad: 45},
    {nombre: 'Cristian', nacionalidad:'venezolano', edad: 75},
];

console.log(turistas)

let mexico = turistas.filter( i => i.nacionalidad === 'mexicano')
    console.log(mexico)

let argentina = turistas.filter (i => i.nacionalidad === 'argentino')
    console.log(argentina)

let peru = turistas.filter ( i => i.nacionalidad === 'peruano')
    console.log(peru)

let venezuela = turistas.filter ( i=> i.nacionalidad === 'venezolano')
    console.log(venezuela)
