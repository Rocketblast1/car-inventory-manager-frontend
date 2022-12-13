const URI = "http://localhost:8080/api/product"

const CarAPI = {
    getCars: (setProductList) => {

        // fetch -> promise based library within JS that helps you make API calls

        // fetch(URI) -> retrieve data at this uri (assume a GET request unless stated otherwise)
        fetch(URI)
            .then((result) => {      // go here if request successful (200 response)

                console.log("RESULT")
                console.log(result)

                return result.json() // data in next section
            })
            .then((data) => {

                console.log("DATA:")
                console.log(data)

                setProductList(data)

            })
            .catch((error) => { console.log(error) }); // if fetch fails, go here (400/500 responses)

    },

    createCars: (productToCreate, setId) => {

        // fetch( uri for request, request object )
        fetch(URI, {
            method: "POST", // type of request
            headers: { "Content-Type": "application/json" }, // header of request
            body: JSON.stringify(productToCreate) // body of request, convert object to json string
        })
            .then(result => result.json())
            .then(data => {
                console.log("PRODUCT CREATED")
                console.log(data)

                setId(data.id)

                // the product was created, so we alert the user
                alert("Your product was created!" +
                    `\nID: ${data.id}` +
                    `\nName: ${data.name}` +
                    `\nPrice: ${data.price}` +
                    `\nQuantity: ${data.qty}`
                )

            })
            .catch((error) => { console.log(error) })

    },

    // TODO
    deleteCars: () => {

    },

    updateCars: () => {

    }

}

// allows you to use this object outside of this file
export default ProductApi;