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

async function Login(body){
    console.log(body)
    await fetch(`${baseURL}/auth/login`, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(resp => {
        if(resp.error){
            alert(`${resp.error}`)
        }else if(resp.token){
            localStorage.setItem('@KenzieEmpresas:Token', JSON.stringify(resp.token))
            AuthorizationUser(resp.token)
        }
    })
    .catch(err => console.log(err))
}

async function AuthorizationUser(token){
    await fetch(`${baseURL}/auth/validate_user`, {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(resp => resp.json())
    .then(resp => {
        if(resp.is_admin){
            window.location.assign("/pages/admDashbord/index.html")
        }else{
            window.location.assign('/pages/userDashbord/index.html')
        }
    })
    .catch(err => console.log(err))
}

async function register(body){
    await fetch(`${baseURL}/auth/register`, {
        'method': "POST",
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
}

export {listAllCompanies, Login, AuthorizationUser, register}