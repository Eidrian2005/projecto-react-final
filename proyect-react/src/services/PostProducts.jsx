async function PostProducts(imagen, producto,descripcion,etiqueta, precio) {
    try {
        const productsData = { 
            imagen,
            producto,
            descripcion,
            etiqueta,
            precio
        };

        const response = await fetch("http://localhost:3001/Productos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productsData)
        });

        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{PostProducts}