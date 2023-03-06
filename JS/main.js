


function agregoCarrito(){
    let choice = parseInt(prompt(msjInicial))



    while(choice>6 || choice<1 || typeof(choice)!='number' || isNaN(choice)){
        console.warn("El código ingresado es incorrecto, por favor ingreselo nuevamente:\n")

        choice = parseInt(prompt(msjInicial))
    }

    switch(choice){
        case 1:
            kgBanana = parseFloat(prompt("¿Cuántos kg de banana desea?\n"))
            break
        case 2:
            kgManzana = parseFloat(prompt("¿Cuántos kg de manzana desea?\n"))
            break
        case 3:
            kgUvas = parseFloat(prompt("¿Cuántos kg de uvas desea?\n"))
            break
        case 4:
            kgSandia = parseFloat(prompt("¿Cuántos kg de sandía desea?\n"))
            break
        case 5:
            kgLimon = parseFloat(prompt("¿Cuántos kg de limón desea?\n"))
            break
        case 6:
            kgNaranja = parseFloat(prompt("¿Cuántos kg de naranja desea?\n"))
            break
        default:
            console.error("Este mensaje no debería ser visto, tiene que haber un error")
            break
    }

    sumaTotal()

}

function sumaTotal(){
    total = kgBanana * 400 + kgManzana * 800 + kgUvas * 2400 + kgSandia * 150 + kgLimon * 300 + kgNaranja * 250
}

function muestraTotal(){
    console.log("El Costo total de su carrito es: $",total)
}

function muestraCarrito(){
    let mostrar = "Actualmente en su carrito cuenta con:\n" + 
                kgBanana + "Kg de bananas\n" +
                kgManzana + "Kg de manzanas\n" +
                kgUvas + "Kg de uvas\n" +
                kgSandia + "Kg de sandías\n" +
                kgLimon + "Kg de limones\n" +
                kgNaranja + "Kg de naranjas\n"

    console.log(mostrar)
}

function menu(){
    let choiceM = parseInt(prompt(msjMenu))
    while(choiceM > 4 || choiceM < 1 || isNaN(choiceM) || typeof(choiceM)!='number'){
        console.warn("El código ingresado es incorrecto, por favor ingreselo nuevamente:\n")


        choiceM = parseInt(prompt(msjMenu))
    }

    switch(choiceM){
        case 1:
            agregoCarrito()
            break
        case 2:
            muestraCarrito()
            break
        case 3:
            muestraTotal()
            break
        case 4:
            continuar = !(confirm ("¿Desea dar por finalizada su compra?\n"))

            if(!continuar){
                alert("El precio final de su carrito es: $" + total)

                if(confirm("Desea pagar en cuotas?")){
                    iCuotas = parseInt(prompt(msjCuotas))
                    
                    while((iCuotas !== 3 && iCuotas !== 6) || isNaN(iCuotas)){
                        console.warn("El numero de cuotas debe ser 3 o 6, ingreselo nuevamente.\n")
                        iCuotas = parseInt(prompt("ingrese '3' o '6' de acuerdo a la cantidad de cuotas requeridas."))
                    }

                    alert("El pago se realizara en " + iCuotas + " cuotas de $" + calculaCuotas(total, iCuotas))
                }

                direccionCliente = prompt("Ingrese la dirección de envío:")
                alert("Muchas Gracias por su compra! ya estamos preparando su pedido.")
            }
            break

        default:
            console.error("Este mensaje no debería ser visto, tiene que haber un error")
            break
    }
}

function calculaCuotas(precio, i){
    
    if(i==3){
        precio *= 1.2
        return precio/i
    }
    else if(i==6){
        precio *= 1.45
        return precio/i
    }
}

function resetear(){
    kgBanana = 0
    kgManzana = 0
    kgUvas = 0
    kgSandia = 0
    kgLimon = 0
    kgNaranja = 0
    total = 0
    cuotas = 0
    continuar = true
}

function iniciar(){
    resetear()
    while(continuar){
        menu()
    }
}
