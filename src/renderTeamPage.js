const renderCard = require("./renderCard");
const fs = require("fs");

const renderTeamPage = (team) => {
  const teamHtml = `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>${
      team.find((member) => member.getRole() == "Manager").name
    }'s Team</title>
</head>

<body>
    <header class="team-header"><h1>${
      team.find((member) => member.getRole() == "Manager").name
    }'s Team</h1></header>
    <div class="card-container">
        ${team.map((member) => renderCard(member)).join("")}
    </div>
</body>

</html>
  `;

  fs.writeFile("./dist/team.html", teamHtml, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = renderTeamPage;
