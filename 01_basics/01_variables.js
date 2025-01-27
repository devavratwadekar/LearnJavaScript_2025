const accountId = 1122335566
let accountEmail = "devavrat@google.com"

// Prefer not to use var
// becouse of issue in block scope and functional scope.
var accountPassword = "12345"   

accountCity = "Mumbai"
let accountState;       // undefined

// accountId = 1212      Assignment to constant variable.

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])