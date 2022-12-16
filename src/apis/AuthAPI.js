const URI = "http://localhost:8080/authenticate"
const AuthAPI = {
    authenticateUser: (credentials, setJWT) => {
        fetch(URI, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
        })
            .then((result) => {      // go here if request successful (200 response)

                console.log("RESULT")
                console.log(result)
                return result.json() /// data in next section

            })
            .then((data) => {
                console.log("DATA:")
                console.log(data)
                
                
                if (data.jwt) { // if we recieve a JWT with our response
                    setJWT(data)
                }

            })
            .catch((error) => {
                console.log("Unable to authenticate user: " + error)
            }); // if fetch fails, go here (400/500 responses)
    }
}
export default AuthAPI