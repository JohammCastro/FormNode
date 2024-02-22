const inputEliminar=document.getElementById("inputEliminarDelete")
const buttonEliminar=document.getElementById("btn-confirmar")


inputEliminar.addEventListener("input", function() {
    // alert('holaaa')
    // console.log(inputEliminar.value)
    if(inputEliminar.value==='Eliminar'){
        // alert('Eliminar exitoso!')
        buttonEliminar.style='display:block'
    }else{
        buttonEliminar.style='display:none'
    }
});

buttonEliminar.addEventListener("click", function() {
    // alert('holaaa')
    let correo=document.getElementById('spanCorreo').innerHTML
    // console.log(correo)
    location.href="Verify/"+correo
    // borrarUser('JmczcOrTy2YPy77Y5wFTAN7Ne112')
});