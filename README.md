# Global Football Tracker - Treasure Hunt Project

Welcome to the Global Football Tracker! This project is a fully functional, interactive frontend web application designed as a live football match center. 

However, it serves a dual purpose: **It is a Web Developer Treasure Hunt.**

## The Secret Riddle
Hidden within the CSS classes and HTML structure of this project is a secret riddle. 

**The Riddle:** *"I offer plates but serve no meals."* *(Answer: A Gym / Weightlifting equipment)*

**How it's hidden:**
If you inspect the code, specifically the layout structure linking the `body`, `header`, `main`, `footer`, and the player list, you will notice the class names don't use standard BEM notation (like `header-container` or `main-wrapper`). Instead, reading the core structural CSS classes in order from top to bottom reveals the sentence:
`.I`, `.offer`, `.plates`, `.but`, `.serve`, `.no`, `.meals`.

---

## File Structure

The project is divided strictly into separate files for clean architecture, as requested:

1. **`index.html`** (Minimum 100 lines)
   - Contains the semantic HTML structure.
   - Houses the scoreboard, match stats, and player cards.
   - Links to the external CSS and JS files.
   - Contains the hidden riddle classes.

2. **`style.css`** (Minimum 100 lines)
   - Contains all styling, utilizing CSS variables for easy theming.
   - Includes animations (like the live pulse indicator).
   - Fully responsive design using Flexbox and CSS Grid.
   - The hidden riddle classes are defined here to shape the layout.

3. **`script.js`**
   - Contains the logic for the match simulator.
   - Handles DOM manipulation, updating scores, match time, and match statistics dynamically.
   - Generates a history log of match events.

4. **`README.md`** (Minimum 100 lines)
   - The documentation file you are currently reading.

---

## How to Run the Project

Running this project is incredibly simple as it relies entirely on vanilla web technologies (HTML, CSS, JS) with no build steps or dependencies.

### Option 1: Direct File Opening
1. Extract the downloaded ZIP file to a folder on your computer.
2. Open that folder.
3. Double-click the `index.html` file.
4. It will open in your default web browser (Chrome, Firefox, Safari, Edge, etc.).

### Option 2: Using a Local Server (Recommended for developers)
If you are using an editor like VS Code:
1. Open the extracted folder in VS Code.
2. Install the "Live Server" extension if you haven't already.
3. Right-click on `index.html` and select "Open with Live Server".
4. This will serve the files over a local HTTP server and automatically refresh when you make changes.

---

## Usage Guide

### The Live Match Simulator
When you load the page, you will see a live dashboard for the "Championship Finals" between the Red Devils and Blue Eagles. The match is currently paused at half-time (45:00).

1. Click the **"Simulate 2nd Half Event"** button.
2. The match clock will advance by a few minutes.
3. A random event will occur. This could be:
   - A goal for the home team.
   - A goal for the away team.
   - A tactical event (yellow card, substitution, VAR check).
4. Watch the Score, Match Clock, Shots on Target, and Event History update dynamically in real-time.
5. Once the clock hits 90 minutes, the match will end, and the button will disable.

### Customization Guide

If you want to use this code for your own purposes, it is highly customizable:

**Changing Teams:**
- Open `index.html`.
- Find the `<div class="team-name">Red Devils</div>` and change the text.
- Change the badge colors by modifying the placeholder image URL parameters (e.g., `e74c3c` is the hex code for red).

**Changing Colors:**
- Open `style.css`.
- Look at the `:root` pseudo-class at the very top.
- Change `--primary-color`, `--home-color`, or `--away-color` to instantly re-theme the entire application.

**Adding Custom Events:**
- Open `script.js`.
- Locate the `const events = [...]` array.
- Add your own custom text strings and types to the array to make the commentary funnier or more realistic.

---

## Technical Details & Constraints Met

This project was built adhering to strict constraints:
- **Separation of Concerns:** HTML, CSS, and JS are strictly separated into different files. No inline styles or inline script tags were used.
- **Line Count Constraints:** - `index.html` exceeds 100 lines.
  - `style.css` exceeds 100 lines.
  - `README.md` exceeds 100 lines.
  - `script.js` was written cleanly to be functional without artificial bloating.
- **Thematic Goal:** It successfully masquerades as a football dashboard while harboring the secret riddle in the CSS architecture.

---

##  Credits

**Author:** Mobaison Oinam
**Date:** May 2026


Enjoy the hunt!
