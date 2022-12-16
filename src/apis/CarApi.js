const URI = "http://localhost:8080/api/cars"

const CarAPI = {

    getCars: (setCarsList, jwt) => {

        // fetch(URI) -> retrieve data at this uri (assume a GET request unless stated otherwise)
        fetch(URI, {
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${jwt}` },
        }

        )
            .then((result) => {      // go here if request successful (200 response)

                console.log("RESULT")
                console.log(result)

                return result.json() // data in next section
            })
            .then((data) => {

                console.log("DATA:")
                console.log(data)

                setCarsList(data)

            })
            .catch((error) => { console.log(error) }); // if fetch fails, go here (400/500 responses)

    },

    getAvailableCars: (setCarsList) => {

        // fetch(URI) -> retrieve data at this uri (assume a GET request unless stated otherwise)
        fetch(URI + "/available")
            .then((result) => {      // go here if request successful (200 response)

                console.log("RESULT")
                console.log(result)

                return result.json() // data in next section
            })
            .then((data) => {

                console.log("DATA:")
                console.log(data)

                setCarsList(data)

            })
            .catch((error) => { console.log(error) }); // if fetch fails, go here (400/500 responses)

    },

    createCars: (carsToCreate, setId) => {

        // fetch( uri for request, request object )
        fetch(URI + "/add", {
            method: "POST", // type of request
            headers: { "Content-Type": "application/json" }, // header of request
            body: JSON.stringify(carsToCreate) // body of request, convert object to json string
        })
            .then(result => result.json())
            .then(data => {
                console.log("CAR CREATED")
                console.log(data)

                setId(data.id)

                // the product was created, so we alert the user
                alert("Your Car was created!" +
                    `\nID: ${data.id}` +
                    `\nMake: ${data.make}` +
                    `\nModel: ${data.model}` +
                    `\nYear: ${data.year}` +
                    `\nColor: ${data.color}`
                )

            })
            .catch((error) => { console.log(error) })

    },

    deleteCar: (carToDelete) => {
        fetch(URI + `/delete/${carToDelete}`, {
            method: "DELETE",
        })
            .then(result => result.json())
            .then(data => {
                console.log("CAR DELETED")
                console.log(data)
                // the product was deleted, so we alert the user
                alert("Car: " + data.id + " was deleted!")

            })
            .catch((error) => { console.log(error) })

    },

    updateCar: (carToUpdate) => {
        fetch(URI + "/update", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(carToUpdate)
        })
            .then(result => result.json())
            .then(data => {
                console.log("CAR UPDATED")
                console.log(data)


                // the product was deleted, so we alert the user
                alert(`Car ${data.id} was upated to: ` +
                    `\nMake: ${data.make}` +
                    `\nModel: ${data.model}` +
                    `\nYear: ${data.year}` +
                    `\nColor: ${data.color}`
                )

            })
            .catch((error) => { console.log(error) })

    }

}

// allows you to use this object outside of this file
export default CarAPI;