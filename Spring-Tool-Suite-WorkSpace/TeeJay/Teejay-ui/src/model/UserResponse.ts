export class UserResponse{

    loginId:string;
    userName:string;
    userEmail:string
    userMobile:number
    lastLogin!:string
    userId:number
    constructor(...params:any){
        console.log(params)
        this.loginId = params[0].loginId
        this.userName = params[0].username
        this.userEmail = params[0].userEmail
        this.userMobile = params[0].userMobile
        this.lastLogin =  params[0].lastLogin
        this.userId =  params[0].userId
    }
}

// isActive: "Y"
// lastLogin: "02/01/22 05:55:19"
// loginId: "tjest5"
// password: "We2zS6+CR/Q="
// userEmail: "sandy@gmail.com"
// userId: 5
// userLevel: 1
// userMobile: 979797
// username: "TestOne"