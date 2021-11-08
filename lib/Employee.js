const invalidEmail = (str) => {
  return str.split("").slice(-4).join("") !== ".com" || !str.includes("@");
};

class Employee {
  constructor(name, id, email) {
    if (typeof name !== "string") {
      throw new Error("Expected parameter 'name' to be a string");
    }
    if (Number.isNaN(id)) {
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
