// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

const Employee = require("../lib/Employee.js");

describe("Employee class", () => {
  describe("Initialization", () => {
    it("Creates an employee object with given user inputs", () => {
      const employee = new Employee("John Doe", 1, "johndoe@gmail.com");
      expect(employee).toEqual({
        name: "John Doe",
        id: 1,
        email: "johndoe@gmail.com",
      });
    });
    it("throws an error if missing any arguments", () => {
      const cb = () => new Employee();
      expect(cb).toThrow();
    });
    it("throws an error if name is not a string", () => {
      const cb = () => new Employee(1, 1, "johndoe@gmail.com");
      const err = new Error("Expected parameter 'name' to be a string");
      expect(cb).toThrowError(err);
    });
    it("throws an error if id is not a number", () => {
      const cb = () => new Employee("John Doe", "1", "johndoe@gmail.com");
      const err = new Error("Expected parameter 'id' to be a number");
      expect(cb).toThrowError(err);
    });
    it("throws an error if email is not a string", () => {
      const cb = () => new Employee("John Doe", 1, 1);
      const err = new Error("Expected parameter 'email' to be a string");
      expect(cb).toThrowError(err);
    });
    it("throws an error if email does not end in '@someemaildomain.com'", () => {
      const cb = () => new Employee("John Doe", "1", "johndoe@gmai");
      const err = new Error("Expected parameter 'email' to be a valid email");
      expect(cb).toThrowError(err);
    });
  });
  describe("getName method", () => {
    it("returns employee name", () => {
      expect(new Employee("John Doe", 1, "johndoe@gmail.com").getName()).toBe(
        "John Doe"
      );
    });
  });
  describe("getId method", () => {
    it("returns employee id", () => {
      expect(new Employee("John Doe", 1, "johndoe@gmail.com").getId()).toBe(1);
    });
  });
  describe("getEmail method", () => {
    it("returns employee email", () => {
      expect(new Employee("John Doe", 1, "johndoe@gmail.com").getEmail()).toBe(
        "johndoe@gmail.com"
      );
    });
  });
  describe("getRole method", () => {
    it("returns employee email", () => {
      expect(new Employee("John Doe", 1, "johndoe@gmail.com").getRole()).toBe(
        "Employee"
      );
    });
  });
});