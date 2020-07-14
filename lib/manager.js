// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./app");

class Manager extends Employee {
  constructor(name, id, email, officePhone){
    this.super(name, id, email);
    this.officePhone = officePhone;
  }


  getRole() {
    return "Manager";
}

getOfficePhone() {
    return this.officePhone
}
}
module.exports = Manager;

