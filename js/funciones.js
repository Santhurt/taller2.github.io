let resultado=document.getElementById('resultado')

function CalcularFactura(){
    let estrato=parseInt(document.getElementById('estrato').value)

    let cantidad=parseInt(document.getElementById('cantidad').value)

    let cobro

    switch (estrato) {
        case 1:
            cobro=cantidad*5000
            return resultado.innerHTML='$'+cobro
        
        case 2:
            cobro=cantidad*6500
            return resultado.innerHTML='$'+cobro

        case 3:
            cobro=cantidad*7000
            return resultado.innerHTML='$'+cobro
            
        case 4:
            cobro=cantidad*8000
            return resultado.innerHTML='$'+cobro

        case 5:
            cobro=cantidad*9200
            return resultado.innerHTML='$'+cobro
        default:
            return resultado.innerHTML=`El estrato ingresado no es valido`
        
    }
}

function CalcularTarifa(){
    let cantidad=parseInt(document.getElementById('cantidad').value)

    let cobro

    if(cantidad<200){
        cobro=cantidad*14000
        return resultado.innerHTML='$'+cobro
    }
    else if(cantidad>=200 && cantidad<300){
        cobro=cantidad*11000
        return resultado.innerHTML='$'+cobro
    }
    else if(cantidad>=300){
        cobro=cantidad*9000
        return resultado.innerHTML='$'+cobro
    }
}

function CalcularEmbarque(){
    let tipo=document.getElementById('tipo').value
    let cantidad=parseInt(document.getElementById('cantidad').value)
    
    let tamano=parseInt(document.getElementById('tamano').value)

    let kiloUva=6000

    tipo=tipo.toUpperCase()

    

    

    if(tipo=='A' && tamano==1){
        kiloUva=kiloUva+2000
    }

    if (tipo=='A' && tamano==2) {
        kiloUva=kiloUva+1000
    }

    if (tipo=='B' && tamano==1){
        kiloUva=kiloUva-500
    }
    if (tipo=='B' && tamano==2){
        kiloUva=kiloUva-900
    }

    return resultado.innerHTML='$'+cantidad*kiloUva

}

function CalcularViaje(){
    let cantidad=parseInt(document.getElementById('cantidad').value)
    let costo

    if(cantidad>=100){
        costo=cantidad*6500
    }
    else if(cantidad>=50){
        costo=cantidad*9000
    }
    else if (cantidad>=30){
        costo=cantidad*9500
    }
    else{
        costo=400000/cantidad
    }

    return resultado.innerHTML='$'+costo
    
}