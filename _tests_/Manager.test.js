const Manager = require("../lib/Manager.js");

describe("Manager class", () => {
  describe("Initialization", () => {
    it("Creates a manager object with given user inputs", () => {
      const manager = new Manager("John Doe", 1, "johndoe@gmail.com", 1);
      expect(manager).toEqual({
        name: "John Doe",
        id: 1,
        email: "johndoe@gmail.com",
        officeNumber: 1,
      });
    });
    it("throws an error if office number is NaN", () => {
      const cb = () => new Manager("John Doe", 1, "johndoe@gmail.com", NaN);
      const err = new Error("Expected parameter 'officeNumber' to be a number");
      expect(cb).toThrowError(err);
    });
  });
  describe("getOfficeNumber method", () => {
    it("returns officeNumber", () => {
      expect(
        new Manager("John Doe", 1, "johndoe@gmail.com", 1).getOfficeNumber()
      ).toBe(1);
    });
  });
  describe("getRole method", () => {
    it("returns role as 'Manager'", () => {
      expect(new Manager("John Doe", 1, "johndoe@gmail.com", 1).getRole()).toBe(
        "Manager"
      );
    });
  });
});
