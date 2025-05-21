function createScoreboard() {
    const numTeams = document.getElementById('numTeams').value;
    const scoreboardDiv = document.getElementById('scoreboard');
    scoreboardDiv.innerHTML = ''; // Clear previous scoreboard

    if (numTeams < 1) {
        alert("Please enter a valid number of teams");
        return;
    }

    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    const teamHeader = document.createElement('th');
    teamHeader.textContent = 'Team';
    headerRow.appendChild(teamHeader);

    const scoreHeader = document.createElement('th');
    scoreHeader.textContent = 'Score';
    headerRow.appendChild(scoreHeader);

    const actionHeader = document.createElement('th');
    actionHeader.textContent = 'Actions';
    headerRow.appendChild(actionHeader);

    table.appendChild(headerRow);


    for (let i = 1; i <= numTeams; i++) {
        const row = document.createElement('tr');

        const teamCell = document.createElement('td');
        const teamNameInput = document.createElement('input');
        teamNameInput.type = 'text';
        teamNameInput.placeholder = `Team ${i}`;
        teamCell.appendChild(teamNameInput);
        row.appendChild(teamCell);


        const scoreCell = document.createElement('td');
        const scoreSpan = document.createElement('span');
        scoreSpan.textContent = '0';
        scoreSpan.id = `teamScore${i}`;
        scoreCell.appendChild(scoreSpan);
        row.appendChild(scoreCell);


        const actionCell = document.createElement('td');

        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.onclick = () => updateScore(i, 1);
        actionCell.appendChild(addButton);

        const subtractButton = document.createElement('button');
        subtractButton.textContent = '-';
        subtractButton.onclick = () => updateScore(i, -1);
        actionCell.appendChild(subtractButton);

        row.appendChild(actionCell);


        table.appendChild(row);
    }

    scoreboardDiv.appendChild(table);
}

function updateScore(teamNum, amount) {
  const scoreSpan = document.getElementById(`teamScore${teamNum}`);
    let currentScore = parseInt(scoreSpan.textContent);
    currentScore += amount;
    scoreSpan.textContent = currentScore;
}
