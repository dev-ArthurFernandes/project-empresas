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

async function listAllDepartments(token){
    const response = await fetch(`${baseURL}/departments`, {
        'method': "GET",
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(resp => resp.json())
    .then(resp => {
        return resp
    })
    .catch(err => err.error)
    
    return response
}

async function listAllUsers(token){
    const response = await fetch(`${baseURL}/users`, {
        'method': 'GET',
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => console.log(err))

    return response
}

async function getCompany(token,uuid){
    const response = await fetch(`${baseURL}/departments/${uuid}`, {
        'method': "GET",
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => console.log(err.error))
    
    return response
}

async function hire(token, body){
    await fetch(`${baseURL}/departments/hire/`, {
        'method': "PATCH",
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': ` Bearer ${token}`
        },
        'body': JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => console.log(err.error))
}

async function dismiss(token, uuid){
    await fetch(`${baseURL}/departments/dismiss/${uuid}`, {
        'method': "PATCH",
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => console.log(err.error))
}

async function editEmployee(uuid, body, token){
    await fetch(`${baseURL}/admin/update_user/${uuid}`, {
        'method': "PATCH",
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        'body': JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
}

async function editDepartment(uuid, body, token){
    await fetch(`${baseURL}/department/${uuid}`, {
        'method': 'PATCH',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        'body': body
    })
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => console.log(err))
}

async function deleteUser(uuid,token){
    await fetch(`${baseURL}/admin/delete_user/${uuid}`,{
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    .catch(err => console.log(err.error))
}

async function deleteDepartment(uuid, token){
    await fetch(`${baseURL}/departments/${uuid}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    .catch(err => console.log(err.error))
}

async function createDepartement(body, token){
    await fetch(`${baseURL}/departments`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
}

async function getUserDetails(token){
    const response = await fetch(`${baseURL}/users/profile`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => console.log(err))

    return response
}

async function listAllUsersInTheSameDepartments(token){
    const response = await fetch(`${baseURL}/users/departments/coworkers`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => console.log(err))

    return response
}

export {listAllCompanies, Login, AuthorizationUser, register, listAllDepartments, listAllUsers, getCompany, hire, dismiss, editEmployee, editDepartment, deleteUser, deleteDepartment, createDepartement, listAllUsersInTheSameDepartments, getUserDetails}