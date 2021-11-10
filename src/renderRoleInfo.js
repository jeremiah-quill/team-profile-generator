const renderRoleInfo = (employee) => {
  if (employee.getRole() == "Manager") {
    return `Office #: ${employee.officeNumber}`;
  } else if (employee.getRole() == "Engineer") {
    return `Github: <a target="_blank" href=https://github.com/${employee.github}>${employee.github}</a>`;
  } else {
    return `School: ${employee.school}`;
  }
};

module.exports = renderRoleInfo;
