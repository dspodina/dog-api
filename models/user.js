// import modules and dependencies
import {v4 as Id} from "uuid"

const users = [
    {
        id: Id(),
        email: "daria1234@gmail.com",
        password: "User1234!",
    }
]

class User {
    static getByEmail(email) {
        return users.find((user => user.email === email))
    }
    static addUser(user) {
        const newUser = {
            id: Id(), 
            ...user
        }
        users.push(newUser)
        return newUser
    }
}

export default User;