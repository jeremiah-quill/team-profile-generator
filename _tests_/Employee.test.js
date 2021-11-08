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
    it("throws an error if name is not a string", () => {
      const cb = () => new Employee(1, 1, "johndoe@gmail.com");
      const err = new Error("Expected parameter 'name' to be a string");
      expect(cb).toThrowError(err);
    });
    it("throws an error if id is NaN", () => {
      const cb = () => new Employee("John Doe", NaN, "johndoe@gmail.com");
      const err = new Error("Expected parameter 'id' to be a number");
      expect(cb).toThrowError(err);
    });
    it("throws an error if email is not a string", () => {
      const cb = () => new Employee("John Doe", 1, 1);
      const err = new Error("Expected parameter 'email' to be a string");
      expect(cb).toThrowError(err);
    });
    it("throws an error if email does not contain an @ and end in .com'", () => {
      // test for .com to be last 4 digits
      const cb = () => new Employee("John Doe", 1, "johndoe@gmail");
      // test for @ to be included somewhere in the email string
      const cb2 = () => new Employee("John Doe", 1, "johndoegmail.com");
      const err = new Error("Expected parameter 'email' to be a valid email");
      expect(cb).toThrowError(err);
      expect(cb2).toThrowError(err);
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
    it("returns role as 'Employee'", () => {
      expect(new Employee("John Doe", 1, "johndoe@gmail.com").getRole()).toBe(
        "Employee"
      );
    });
  });
});
