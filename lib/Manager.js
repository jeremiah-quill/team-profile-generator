const Employee = require("./Employee.js");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    if (Number.isNaN(officeNumber)) {
      throw new Error("Expected parameter 'officeNumber' to be a number");
    }
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
