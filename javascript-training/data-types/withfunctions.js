// Test case1:verify the home page.
console.log("**********************Test case 1 :Verify the home page********************");
loginIntoApplication("edge")
logoutAndclosebrowser()

// Test case2:Verify the account balance
console.log("*******************Test Case 2: Verify the account balance*******************");
loginIntoApplication("chrome")
getBalance();
console.log("Varify the account balance dispalyed as " + getBalance());

logoutAndclosebrowser()

// Test Case 3: Verify the account statement
console.log("*******************Test Case 2: Verify the account statement*******************");
loginIntoApplication("fireFox")

console.log("Navigate to the account statement page");
console.log("verify the account statement is dispalyed with the following details");
logoutAndclosebrowser()

// Function with parameter
function loginIntoApplication(browserName)
{
     console.log(`Launch the ${browserName} Browser`);
console.log("Enter the URL : https://www.qa.icici.com/");
console.log("Enter the username as 'Govindu' and the password as 'welcome123#'");
console.log("Click the login button");
console.log("Verify the home page is displayed");
}
// function without parameter
function logoutAndclosebrowser()
{
  console.log("Logout from the application");
console.log("clsoe the browser");  
}

function getBalance()
{
    console.log("navigate to the account balancepage");
    let accountBalance=100000;
    return accountBalance;
}


// 4.Set==> set repregents a collection of unique values.
let empId = new Set();
empId.add(1234);
empId.add(1345);
empId.add(1234);
console.log(empId);

// Map==> map repregents a  collection of key-value pairs.(map wont allow duplicate keys,but always duplicate values are allowed. )
let empData=new Map();
empData.set(123,"Govindu");
empData.set(134,"Sarath");
empData.set(145,"Raju");
empData.set(123,"bharath");
empData.set(156,"Govindu");
console.log(empData);



// Date==> Date repregents a specific point in time 
