    const d=document.getElementById("button");
    d.addEventListener('click', (e) =>{
     
    e.preventDefault();
    const n=document.getElementById("nom").value;
    const c=document.getElementById("con").value;
    const mi_nombre="Armando";
    const mi_contra="61912988";

    if(n==mi_nombre && c==mi_contra) 
        {
        window.location.href="menu_enlace1/inicio.html"; 
        } 
    else 
    {
        document.getElementById("mensaje_de_error").textContent="Usuario o contraseña incorrectos.";
    }

    });
    
