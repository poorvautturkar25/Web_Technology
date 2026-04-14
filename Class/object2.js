// object singleton
const user = new Object(); 
console.log(user);

const user2 = {}; // non singleton object 
user2.id = 123;
user2.name = "Poorva";
user2.city = "Ichalkaranji";
user2.isLogin = true;
console.log(user2);

// object inside object , nested object 
const regularUser = {
    email:"abv@34gmail.com",
    user: {
        fullName: {
            fname: "poorva",
            lname: "utturkar"
        }
    }
}
console.log(regularUser);
console.log(regularUser.user.fullName.fname);

