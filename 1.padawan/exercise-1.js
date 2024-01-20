//*Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".


const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
//*Uso un mapeo para obtener las edades
yearUsers = users.map((users) => users.years)
console.log(yearUsers)
//*Map para los nombres
nameUsers = users.map((users) => users.name )
console.log(nameUsers)
for(let i=0 ;i< yearUsers.length ;i++){

  if(yearUsers >= 18){
    console.log(`${nameUsers[i]} es mayor de edad`)
  }
  else{
    console.log(`${nameUsers[i]} es menor de edad`)
  }
}
