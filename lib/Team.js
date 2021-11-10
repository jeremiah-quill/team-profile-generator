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
const renderTeamPage = require("../src/renderTeamPage");

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
    inquirer
      .prompt(managerMenu)
      .then((answers) => {
        const { menu } = answers;
        menu == "New Engineer"
          ? this.engineerPrompt()
          : menu == "New Intern"
          ? this.internPrompt()
          : renderTeamPage(this.teamMembers);
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

  engineerPrompt() {
    inquirer
      .prompt(engineerQuestions)
      .then((answers) => {
        const { name, id, email, github } = answers;
        this.teamMembers.push(new Engineer(name, id, email, github));
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
  internPrompt() {
    inquirer
      .prompt(internQuestions)
      .then((answers) => {
        const { name, id, email, school } = answers;
        this.teamMembers.push(new Intern(name, id, email, school));
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
}

module.exports = Team;
