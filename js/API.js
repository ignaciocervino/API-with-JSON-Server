const url= 'http://localhost:4000/clientes';
//Cuando se crea nuevo cliente
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
//Obtiene todos los clientes
export const obtenerClientes = async ()=>{
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

//Elimina un cliente
export const  eliminarCliente = async (id)=>{
    try {
        await fetch(`${url}/${id}`,{
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}