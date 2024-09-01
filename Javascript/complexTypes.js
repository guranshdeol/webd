function greet(users) {
    for (let i = 0; i < users.length; i++) {
        
        
        if(users[i].age >=18 || users[i].gender=="Male"){
           console.log(users[i].fname);
        }
    }
}

let users = [{
    fname: "Guransh",
    age: 20,
    gender: "Male"
},
{
    fname: "Sabby",
    age: 20,
    gender: "Male"
},
{
    fname: "huihui",
    age: 10,
    gender: "Female"
}];
greet (users);