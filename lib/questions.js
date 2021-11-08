const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Provide team manager's name",
  },
  {
    type: "number",
    name: "id",
    message: "Provide team manager's ID",
  },
  {
    type: "input",
    name: "email",
    message: "Provide team manager's email address",
  },
  {
    type: "number",
    name: "officeNumber",
    message: "Provide team manager's office number",
  },
];

const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "Provide a name",
  },
  {
    type: "number",
    name: "id",
    message: "Provide an ID",
  },
  {
    type: "input",
    name: "email",
    message: "Provide an email address",
  },
];

const engineerQuestions = [
  ...employeeQuestions,
  {
    type: "input",
    name: "github",
    message: "Provide engineer's github username",
  },
];

const internQuestions = [
  ...employeeQuestions,
  {
    type: "input",
    name: "school",
    message: "Provide intern's school",
  },
];

const managerMenu = [
  {
    type: "list",
    name: "menu",
    choices: ["New Engineer", "New Intern", "Complete"],
  },
];

module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  managerMenu,
};
