const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  managerMenu,
} = require("./questions");
const renderTeam = require("../src/renderTeam");

// const getProfile = async (githubUsername) => {
//   const data = await fetch(`https://api.github.com/users/${githubUsername}`, {
//     method: "GET",
//   });
//   console.log(data);
//   return data;
// };

class Team {
  constructor() {
    this.teamMembers = [];
  }
  startTeam() {
    inquirer
      .prompt(managerQuestions)
      .then((answers) => {
        const { name, id, email, officeNumber } = answers;
        this.teamMembers.push(new Manager(name, id, email, officeNumber));
      })
      .then(() => {
        this.showManagerMenu();
      })
      .catch((error) => {
        if (error.isTtyError) {
          throw new Error(
            "Prompt couldn't be rendered in the current environment"
          );
        } else {
          console.log(error);
        }
      });
  }

  showManagerMenu() {
    inquirer.prompt(managerMenu).then((answers) => {
      const { menu } = answers;
      menu == "New Engineer"
        ? this.engineerPrompt()
        : menu == "New Intern"
        ? this.internPrompt()
        : renderTeam(this.teamMembers);
    });
  }

  engineerPrompt() {
    inquirer.prompt(engineerQuestions).then((answers) => {
      const { name, id, email, github } = answers;
      this.teamMembers.push(new Engineer(name, id, email, github));
      this.showManagerMenu();
    });
  }
  internPrompt() {
    inquirer.prompt(internQuestions).then((answers) => {
      const { name, id, email, school } = answers;
      this.teamMembers.push(new Intern(name, id, email, school));
      this.showManagerMenu();
    });
  }
}

module.exports = Team;
