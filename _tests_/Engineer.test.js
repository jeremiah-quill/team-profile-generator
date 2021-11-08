const Engineer = require("../lib/Engineer.js");

describe("Engineer class", () => {
  describe("Initialization", () => {
    it("Creates an engineer object with given user inputs", () => {
      const engineer = new Engineer(
        "John Doe",
        1,
        "johndoe@gmail.com",
        "john-doe"
      );
      expect(engineer).toEqual({
        name: "John Doe",
        id: 1,
        email: "johndoe@gmail.com",
        github: "john-doe",
      });
    });
    it("throws an error if github is not a string", () => {
      const cb = () => new Engineer("John Doe", 1, "johndoe@gmail.com", 1);
      const err = new Error("Expected parameter 'github' to be a string");
      expect(cb).toThrowError(err);
    });
  });
  describe("getGithub method", () => {
    it("returns engineer github", () => {
      expect(
        new Engineer("John Doe", 1, "johndoe@gmail.com", "john-doe").getGithub()
      ).toBe("john-doe");
    });
  });
  describe("getRole method", () => {
    it("returns role as 'Engineer'", () => {
      expect(
        new Engineer("John Doe", 1, "johndoe@gmail.com", "john-doe").getRole()
      ).toBe("Engineer");
    });
  });
});
