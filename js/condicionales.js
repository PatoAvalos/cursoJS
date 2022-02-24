
// Generación a la que perteneces de acuerdo al año de nacimiento uso de IF
console.log("TE DIREMOS A QUE GENERACIÓN PERTENECES DEPENDIENTO DEL AÑO EN QUE NACISTE")
let anoNacimiento = parseInt(prompt("Te diremos a que generación perteneces dependiedo del año en que naciste " + "\n\nEn que año naciste?"));

if (anoNacimiento >=1946 && anoNacimiento <=1964) {
    alert("Eres un BabyBoomers, conservador y ordenado y usabas diskete ☺");
}
else if (anoNacimiento >=1965 && anoNacimiento <=1980){
    alert("Perteneces ala generación X, tu niñez fué análoga y tu adultez digital ♥");
}
else if (anoNacimiento >=1981 && anoNacimiento <=2000){
    alert("Perteneces a la generación MILLENIALS y eres de la generación de  Emprendedores ♣ ");
}
else if (anoNacimiento >=2001 && anoNacimiento <= 2016){
    alert ("perteneces a la generación Z y no puedes vivir sin las Redes Sociales ♦");
}
else if (anoNacimiento >2016){
    alert("Tu generación no existe");
}
