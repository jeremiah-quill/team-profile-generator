const Intern = require("../lib/Intern.js");

describe("Intern Class", () => {
  describe("Initialization", () => {
    it("Creates an intern object with given user inputs", () => {
      const intern = new Intern(
        "John Doe",
        1,
        "johndoe@gmail.com",
        "Penn State"
      );
      expect(intern).toEqual({
        name: "John Doe",
        id: 1,
        email: "johndoe@gmail.com",
        school: "Penn State",
      });
    });
    it("throws an error if school is not a string", () => {
      const cb = () => new Intern("John Doe", 1, "johndoe@gmail.com", 1);
      const err = new Error("Expected parameter 'school' to be a string");
      expect(cb).toThrowError(err);
    });
  });
  describe("getSchool method", () => {
    it("returns intern school", () => {
      const intern = new Intern(
        "John Doe",
        1,
        "johndoe@gmail.com",
        "Penn State"
      );
      expect(intern.getSchool()).toBe("Penn State");
    });
  });
  describe("getRole method", () => {
    it("returns 'Intern", () => {
      const intern = new Intern(
        "John Doe",
        1,
        "johndoe@gmail.com",
        "Penn State"
      );
      expect(intern.getRole()).toBe("Intern");
    });
  });
});
