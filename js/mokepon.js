function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)    
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya "
    }else{
        alert("Selecciona una Mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    }else if(mascotaAleatoria ==2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }else{
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}


window.addEventListener("load", iniciarJuego)