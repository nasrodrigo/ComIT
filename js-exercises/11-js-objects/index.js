let user = {
    name : "Batman",
    password : "hunter2",
    login : function(){
        if(this.password == "*******"){
            return "Access Granted";
        }else{
            return "Access Denied";
        }
    }
};
console.log(user);
console.log(user.login());

user.password = "*******";
console.log(user);
console.log(user.login());

let newUser = {
    name : "wonderwoman",
    password : "123123",
    greet : function(){
        return `Hello, I am ${this.name}`;
    },
    setName : function(name){
        this.name = String(name);
    } 
};

console.log(newUser.greet());

newUser.setName(50);
console.log(typeof newUser.name);
console.log(newUser.greet());





