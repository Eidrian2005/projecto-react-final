async function updateProducts(producto, descripcion,etiqueta ,id) {
    try {
    
        const productsData = { 
            producto, 
            descripcion,
            etiqueta
        
        };
        const response = await fetch("http://localhost:3001/Productos/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productsData)
        });

    
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{updateProducts}