optionOne = prompt("¿Qué deseas para comer?");
const option = (optionOne) => {
    
    if (optionOne === "ceviche"){
    alert("No me queda :(");
    promt("¿algo mas?");
    }else if (optionOne === "tacos al pastor") {
    alert("Hoy no ofrecemos tacos al pastor :(");
    promt("¿algo mas?");
    }else if (optionOne ==="empanada chilena") {
    alert("No hay, lo sentimos :(");
    promt("¿algo mas?");
    }else {
    alert("ok, sale una hamburguesa");
    }   

}

