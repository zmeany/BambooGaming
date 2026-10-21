const vantaTeamsData = [
    {
        teamBadge: "TEAM 1",
        teamName: "Bambus Exotic",
        gameName: "ROCKET LEAGUE",
        description: "Das offizielle Rocket League Main Team von Vanta E-Sports.",
        stats: [
            { label: "MMR", value: "1.448" },
            { label: "Gegründet", value: "21.10.2026" },
            { label: "Suche", value: "Champ 3 - Grandchamp 1", isHighlight: true }
        ],
        roster: [
            { name: "BimBim", roleBadge: "CAPTAIN", trackerUrl: "https://rocketleague.tracker.network/rocket-league/profile/epic/NachwuchS823/overview" },
            { name: "zmeany", roleBadge: "", trackerUrl: "https://rocketleague.tracker.network/rocket-league/profile/steam/zmeanyrl/overview" }
        ]
    }

];

function renderVantaTeams() {
    const container = document.getElementById('dynamic-roster-container');
    if (!container) return;

    container.innerHTML = "";

    vantaTeamsData.forEach(team => {

        const teamCard = document.createElement('div');
        teamCard.className = 'team-dashboard-card';


        const leftColumn = document.createElement('div');
        leftColumn.className = 'dashboard-left';

        let statsHTML = '';
        team.stats.forEach(stat => {
            const valueClass = stat.isHighlight ? 'stat-value highlight-blue' : 'stat-value';
            statsHTML += `
                <div class="stat-row">
                    <span class="stat-label">${stat.label}</span>
                    <span class="${valueClass}">${stat.value}</span>
                </div>
            `;
        });

        leftColumn.innerHTML = `
            <span class="team-badge-top">${team.teamBadge}</span>
            <h2 class="team-main-title">${team.teamName}</h2>
            <span class="game-subtitle">${team.gameName}</span>
            <div class="team-stats-box">${statsHTML}</div>
        `;


        const rightColumn = document.createElement('div');
        rightColumn.className = 'dashboard-right';


        rightColumn.innerHTML = `
            <span class="section-title-small">TEAM BESCHREIBUNG</span>
            <p class="team-desc-text">${team.description}</p>
            <span class="section-title-small" style="margin-top: 30px;">ROSTER</span>
        `;


        const rosterListBox = document.createElement('div');
        rosterListBox.className = 'roster-list-box';


        team.roster.forEach(player => {

            const playerRow = document.createElement('a');
            playerRow.className = 'roster-player-row';
            playerRow.href = player.trackerUrl;
            playerRow.target = '_blank';
            playerRow.rel = 'noopener noreferrer';

            const badgeHTML = player.roleBadge ? `<span class="player-role-badge">${player.roleBadge}</span>` : '';

            playerRow.innerHTML = `
                <div class="player-meta-left">
                    <span class="player-name-text">${player.name}</span>
                    ${badgeHTML}
                </div>
                <span class="row-arrow">↗</span>
            `;
            rosterListBox.appendChild(playerRow);
        });

        rightColumn.appendChild(rosterListBox);


        teamCard.appendChild(leftColumn);
        teamCard.appendChild(rightColumn);
        container.appendChild(teamCard);
    });
}

document.addEventListener('DOMContentLoaded', renderVantaTeams);
