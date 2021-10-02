function capturaDatos(){
    let horasTrabajadas = Number(document.getElementById('inputHorasTrabajadas').value);
    
    if(horasTrabajadas<=40){
        salarioPorHora=16000;
    }else{
        salarioPorHora=20000;
    }
    salarioSemanal= horasTrabajadas*salarioPorHora;
    
    alert(`Horas trabajadas: ${horasTrabajadas}
Salario semanal: ${salarioSemanal}`);
    
}