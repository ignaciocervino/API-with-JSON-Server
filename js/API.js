const url= 'http://localhost:4000/clientes';

export const nuevoCliente = async (cliente)=>{
    try {
        await fetch(url,{
            method: 'POST',//Siempre en todas las API va a ser metodo POST cuando se crea un nuevo registro
            body: JSON.stringify(cliente),//Cliente lo pasamos a string y lo enviamos a la url por metodo post
            headers: {
                'Content-Type':'application/json'//Esto cambia segun que suba
            }

        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}