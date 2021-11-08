const renderRoleInfo = (employee) => {
  employee.getRole() == "Manager"
    ? `Office #: ${employee.getOfficeNumber()}`
    : employee.getRole() == "Engineer"
    ? `Github: ${employee.getGithub()}`
    : `School: ${employee.getSchool()}`;
};

module.exports = renderRoleInfo;
