const Employee = require("./Employee.js");
class Intern extends Employee {
  constructor(name, id, email, school) {
    if (typeof school !== "string") {
      throw new Error("Expected parameter 'school' to be a string");
    }
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
