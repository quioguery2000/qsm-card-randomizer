# qsm-card-randomizer

A custom frontend wrapper and logic bridge built for a WordPress site using the Quiz and Survey Master (QSM) plugin. 

This project transforms a standard quiz form into an interactive, 3D card-pulling experience while solving specific AJAX submission issues within the WordPress environment.

## Features
* **Progressive Randomizer:** A Vanilla JavaScript bridge that selects a random card from the available QSM radio button choices.
* **0-Point Pull Prevention:** Limits the randomizer to completed cards to ensure valid user outcomes.
* **Delayed Submission State:** Provides visual feedback ("Shuffling Card Deck...") before triggering the form submission, preventing abrupt transitions.
* **3D CSS Transforms:** Uses realistic 3D flipping animations (`rotateX`, `rotateY`, `perspective`) to simulate dealing and flipping cards.
* **Responsive Design:** Mobile-optimized scaling and absolute positioning.

## Tech Stack
* Vanilla JavaScript
* CSS3 (Animations & Transforms)
* HTML / WordPress QSM Plugin

## File Structure
* `qsm-logic.js` - The JavaScript bridge handling the randomizer and form submission delay.
* `card-pull-page.css` - The layout, responsive styling, and 3D flip animations for the card interface.
* `card-global.css` - Global theme overrides, typography, and utility classes for the WordPress environment.

## Visual Demo
<img width="1020" height="547" alt="ezgif-40d9e5d51e9f9d34" src="https://github.com/user-attachments/assets/b8ecb692-8211-4545-81e1-b35853aff02b" />
<img width="1479" height="680" alt="ezgif-41f49a61bbae2bbf" src="https://github.com/user-attachments/assets/ff44e4fc-96b0-4cd8-b05e-1d2c6cce851e" />
<img width="1630" height="681" alt="ezgif-4154837bedfa40a8" src="https://github.com/user-attachments/assets/67fce657-59c7-4010-98fe-ef21e6f59b74" />
