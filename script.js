// ==========================================================================
// Match Simulation Logic
// ==========================================================================

// Initial Match State
let homeScore = 0;
let awayScore = 0;
let minute = 45; // Starting at the second half
let homeShots = 4;
let awayShots = 6;

// Array of possible match events for simulation
const events = [
    { text: "Incredible diving save by the Blue Eagles goalkeeper!", type: "save", team: "away" },
    { text: "Yellow card issued to the Red Devils midfielder for a late tackle.", type: "card", team: "home" },
    { text: "Corner kick awarded to the Red Devils.", type: "corner", team: "home" },
    { text: "Foul outside the penalty box. Dangerous free kick to Blue Eagles.", type: "foul", team: "away" },
    { text: "Substitution: Striker comes off, defensive midfielder comes on.", type: "sub", team: "neutral" },
    { text: "Offside! The flag goes up just as the ball hits the back of the net.", type: "offside", team: "neutral" },
    { text: "Brilliant run down the wing, but the final cross is intercepted.", type: "chance", team: "neutral" },
    { text: "VAR check in progress for a potential penalty... No penalty awarded.", type: "var", team: "neutral" },
    { text: "The referee plays advantage after a heavy challenge in the midfield.", type: "referee", team: "neutral" }
];

// Wait for DOM content to load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    const btnSimulate = document.getElementById('btn-simulate');
    if (btnSimulate) {
        btnSimulate.addEventListener('click', simulateMatchEvent);
    }
    console.log("Football Tracker initialized. System is running perfectly.");
});

function simulateMatchEvent() {
    // End the match if we reach 90 minutes
    if (minute >= 90) {
        document.getElementById('event-log').innerText = "FULL TIME! The referee blows the final whistle.";
        document.getElementById('event-log').style.color = "#2c3e50";
        document.getElementById('btn-simulate').disabled = true;
        document.getElementById('btn-simulate').innerText = "Match Ended";
        document.getElementById('btn-simulate').style.backgroundColor = "#95a5a6";
        return;
    }

    // Increment time
    minute += Math.floor(Math.random() * 4) + 1; 
    if (minute > 90) minute = 90;
    
    document.getElementById('match-clock').innerText = `${minute}:00`;

    const randomChance = Math.random();
    const logElement = document.getElementById('event-log');
    const historyElement = document.getElementById('event-history');
    
    let eventText = "";
    
    // 20% chance for a goal, 80% chance for a random tactical match event
    if (randomChance > 0.8) {
        if (Math.random() > 0.5) {
            // Home Goal
            homeScore++;
            homeShots++;
            document.getElementById('score-home').innerText = homeScore;
            document.getElementById('shots-home').innerText = homeShots;
            eventText = "⚽ GOAL for Red Devils! Absolute stunner from outside the box!";
            logElement.style.color = "#e74c3c";
        } else {
            // Away Goal
            awayScore++;
            awayShots++;
            document.getElementById('score-away').innerText = awayScore;
            document.getElementById('shots-away').innerText = awayShots;
            eventText = "⚽ GOAL for Blue Eagles! A beautiful header from the corner!";
            logElement.style.color = "#3498db";
        }
    } else {
        // Random Event
        const randomEvent = events[Math.floor(Math.random() * events.length)];
        eventText = "⏱️ " + randomEvent.text;
        logElement.style.color = "#2c3e50";
        
        // Update shots if it was a chance
        if (randomEvent.type === 'save' || randomEvent.type === 'chance') {
            if (Math.random() > 0.5) {
                homeShots++;
                document.getElementById('shots-home').innerText = homeShots;
            } else {
                awayShots++;
                document.getElementById('shots-away').innerText = awayShots;
            }
        }
    }

    // Update the main log
    logElement.innerText = eventText;

    // Add to history (top of list)
    const li = document.createElement('li');
    li.innerHTML = `<strong>${minute}'</strong> - ${eventText.replace('⏱️ ', '').replace('⚽ ', '')}`;
    historyElement.insertBefore(li, historyElement.firstChild);
    
    // Keep history clean (max 8 items)
    if (historyElement.children.length > 8) {
        historyElement.removeChild(historyElement.lastChild);
    }
}
