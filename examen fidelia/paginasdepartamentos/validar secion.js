function ingresar()
{

    var usuario="fidelia";
    var contraseña="examen";

    if(document.foringreso.usuario.value==usuario &&
        document.foringreso.contraseña.value==contraseña)
        {
            document,location="inicio.html"
        }
        else
        {
            alert("ingrese usuario y contraceña correctamente")
        }
}