// Write your solution in this file!
const employee = {
    name: "Angela Pace",
    streetAddress: "29 Doreen Drive"
}
function updateEmployeeWithKeyAndValue(employee, streetAddress){
    const newEmployee = { ...employee}
        newEmployee[streetAddress] = "11 Broadway";
    
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee){
    employee.streetAddress = "12 Broadway";
    return employee
}

function deleteFromEmployeeByKey(newEmployee, key){
   const newerEmployee = { ...employee}
    delete newerEmployee[key]

    return newerEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]

    return employee
}