const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    if (typeof github !== "string") {
      throw new Error("Expected parameter 'github' to be a string");
    }
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
