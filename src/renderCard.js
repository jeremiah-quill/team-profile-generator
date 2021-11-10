const renderRoleInfo = require("./renderRoleInfo");

const renderCard = (employee) => {
  return `
    <div class="card">
    <header class="card-header">
      <h2>${employee.name}</h2>
      <div class="role-container">
      <img class="role-icon" src="../dist/images/${employee.getRole()}.png">
        <div class="role-name">${employee.getRole()}</div>
      </div>
    </header>
    <div class="card-body">
    <div class="card-content">
      <div class="employeeID">ID: ${employee.id}</div>
      <div class="employeeEmail">Email: <a href="mailto:${employee.email}">${
    employee.email
  }</a></div>
      <div class="employee-specific-info">${renderRoleInfo(employee)}</div>
      </div>
    </div>
  </div>
    `;
};

module.exports = renderCard;
