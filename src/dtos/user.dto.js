export default class UserDto {
    constructor(user, cart){
        this.full_name  = `${user.first_name} ${user.last_name}`
        this.first_name = user.first_name
        this.last_name  = user.last_name
        this.email      = user.email
        this.password = user.password
        this.role = user.role
        this.cart = cart
    }
}