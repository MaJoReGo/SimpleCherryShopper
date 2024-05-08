fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res=>res.json())
            .then(json=>console.log(json))