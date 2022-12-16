const URI = "http://localhost:8080/api/user"

const UserAPI = {

    getUsers: (setUserList, JWT) => {

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

                setUserList(data)

            })
            .catch((error) => { console.log(error) }); // if fetch fails, go here (400/500 responses)

    },

    getUser: (userToGet, JWT) => {

        // fetch -> promise based library within JS that helps you make API calls

        // fetch(URI) -> retrieve data at this uri (assume a GET request unless stated otherwise)
        fetch(URI + `/${userToGet}`, {
            method: "GET", // type of request
        })
            .then((result) => {      // go here if request successful (200 response)

                console.log("RESULT")
                console.log(result)

                return result.json() // data in next section
            })
            .then((data) => {

                console.log("DATA:")
                console.log(data)

                setUserList(data)

            })
            .catch((error) => { console.log(error) }); // if fetch fails, go here (400/500 responses)

    },

    createUser: (userToCreate, setId) => {

        // fetch( uri for request, request object )
        fetch(URI, {
            method: "POST", // type of request
            body: JSON.stringify(userToCreate) // body of request, convert object to json string
        })
            .then(result => result.json())
            .then(data => {
                console.log("USER CREATED")
                console.log(data)

                setId(data.id)

                // the product was created, so we alert the user
                alert("User was created!" +
                    `\nID: ${data.id}` +
                    `\nUsername: ${data.username}` +
                    `\nRole: ${data.role}` +
                    `\nEmail: ${data.email}`
                )

            })
            .catch((error) => { console.log(error) })

    },

    deleteUser: (userToDelete) => {
        fetch(URI + `/delete/${userToDelete}`, {
            method: "DELETE",
        })
            .then(result => result.json())
            .then(data => {
                console.log("CAR DELETED")
                console.log(data)
                // the product was deleted, so we alert the user
                alert("User: " + data.id + " was deleted!")

            })
            .catch((error) => { console.log(error) })

    },

    updateUser: (userToUpdate) => {
        fetch(URI, {
            method: "PUT",
            body: JSON.stringify(userToUpdate)
        })
            .then(result => result.json())
            .then(data => {
                console.log("CAR UPDATED")
                console.log(data)

                setId(data.id)

                // the product was deleted, so we alert the user
                alert( `User ${data.id} was upated to: ` +
                `\nID: ${data.id}` +
                `\nUsername: ${data.username}` +
                `\nRole: ${data.role}` +
                `\nEmail: ${data.email}`
            )

            })
            .catch((error) => { console.log(error) })
        
    }

}

// allows you to use this object outside of this file
export default UserAPI;