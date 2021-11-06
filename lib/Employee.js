const invalidEmail = (email) => {
  // return true if email is invalid:
  // needs to contain @
  // needs to end in .com
};

class Employee {
  constructor(name, id, email) {
    if (!name || !id || !email) {
      throw Error;
    }
    if (typeof name !== "string") {
      throw new Error("Expected parameter 'name' to be a string");
    }
    if (typeof id !== "number") {
      throw new Error("Expected parameter 'id' to be a number");
    }
    if (typeof email !== "string") {
      throw new Error("Expected parameter 'email' to be a string");
    }
    if (invalidEmail(email)) {
      throw new Error("Expected parameter 'email' to be a valid email");
    }

    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
