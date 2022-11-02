const baseURL = "http://localhost:6278"

async function listAllCompanies(){
    const response = await fetch(`${baseURL}/companies`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer null"
        }
    })
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => console.log(err))

    return response
}

export {listAllCompanies}