const inputEmail=document.getElementById("inputEmail")
const buttonConfirmar=document.getElementById("btn-confirmarForm1")


inputEmail.addEventListener("input", function() {
    // alert('holaaa')
    // console.log(inputEmail.value)
    const res=inputEmail.value.split(['@'])
    // console.log(res)
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
        
    // }

    if(res.length===2){
        // alert('Eliminar exitoso!')
        buttonConfirmar.style='display:block'
    }else{
        buttonConfirmar.style='display:none'
    }
});

buttonConfirmar.addEventListener("click", function() {
    // alert('holaaa')
    let correo=document.getElementById('inputEmail').value
    // console.log(correo)
    location.href="Form1/Verify/"+correo
    // borrarUser('JmczcOrTy2YPy77Y5wFTAN7Ne112')
});