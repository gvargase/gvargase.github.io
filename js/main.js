// Llama a la información ingresada en un archivo JSON
function funCargarDatos(){
    let peticion = new XMLHttpRequest();
    // Interfaz que permite realizar petiicones HTTP a servidores web

    // OPEN --> función que solicita a un archivo JSON para obtenet los datos
    peticion.open("GET", "./js/datos.json");
    // peticion.open("GET", "./js/datos.json");

    //onload --> la función para cuando los datos sean recibidos
    peticion.onload = function(){
        //status 200 indica que la petición fue exitosa
        if(peticion.status == 200){
            // transforma los datos de string a objeto de JavaScript
            let datos = JSON.parse(peticion.response);

            // Muestra los datos en el div
            document.getElementById("contenido").innerHTML = "Nombre: " + datos.nombre
                        +" " + datos.apellido
                        +"<br>Edad: " + datos.edad
                        +"<br>Telefono: " + datos.telefono
                        +"<br>Dirección: " + datos.direccion;

            // Muestra los datos en el formulario
            document.getElementById("formNombre").value = datos.nombre + " " + datos.apellido;
            document.getElementById("formEdad").value = datos.edad;
            document.getElementById("formTelefono").value = datos.telefono;
            document.getElementById("formDireccion").value = datos.direccion;
        }
    }//fin onload

    // Send usa los datos cuando hayan sido recibidos
    peticion.send();
}//fin function