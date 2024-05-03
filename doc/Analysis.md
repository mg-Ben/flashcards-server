# 1. Introduction

The aim of this project is to build a web application that allows users to create decks composed of cards. These cards will consist of a question and an answer, and based on the user's difficulty in answering the question, the cards will be shown at a determined frequency using the Supermemo 2 algorithm. This algorithm is designed to help users effectively learn the terms they wish to learn.

# 2. Functional Requirements

## 2.1.1. Decks

- [ ] The user can create decks.
- [ ] Decks will consist of:
  - [ ] Name
  - [ ] Description
  - [ ] Cards
- [ ] The user can modify deck fields.
- [ ] The user can delete decks.
- [ ] The user can practice the cards in a deck when it's their turn.
- [ ] The user can practice an entire deck whenever they want.
- [ ] The user can practice all decks whenever they want.
- [ ] The user can export a deck to a .csv file with study data.
- [ ] The user can export a deck to a .csv file without study data.
- [ ] The user can import a deck from a .csv file (with or without data, as applicable).
- [ ] The fields of the .csv file to export or import are:
  - [ ] Deck name
  - [ ] Deck description
  - [ ] Cards with their fields, one per row (with or without practice data as chosen).
- [ ] The format of the .csv file to export or import is as follows:

```
[Name];[Description];
[Card_1];
[Card_2];
[Card_3];
...
[Card_N];
```

## 2.1.2. Cards

- [ ] The user can create cards within decks.
- [ ] Cards will consist of:
  - [ ] Question: Card question.
  - [ ] Answer: Card answer.
  - [ ] Repetition (number): Repetitions of answers.
  - [ ] Easiness (number): Easiness of answers.
  - [ ] Interval (number): Days interval to ask the question again.
  - [ ] Memorized (boolean): Check if card is memorized.
- [ ] The user can modify the Question and the Answer of the card.
- [ ] The user can delete cards.

## 2.1.3. Practice

- [ ] The algorithm to use is Supermemo 2.
- [ ] The user will have a limit of 20 maximum new cards to practice per day.
- [ ] The user will have a limit of 80 cards to review maximum per day.
- [ ] The user cannot change the minimum and maximum number of cards to practice per day per deck.
- [ ] The types of cards based on whether they need to be asked or not are:
  - [ ] New: User has not practiced them yet.
  - [ ] Scheduled: Cards that the user has already learned on another day and needs to review again on this day.
  - [ ] Learning: Cards that the user failed the last time they were asked.
- [ ] The priority of card types to ask is:
  - [ ] New < Scheduled < Learning
- [ ] When a user practices a deck, they are asked cards one by one.
- [ ] At the time of card questioning, the following process is followed:
  - [ ] The user only sees the question.
  - [ ] The user submits to see the answer.
  - [ ] The user is shown 4 buttons (Very Hard, Hard, Easy, Very Easy).
  - [ ] The user presses one of the 4 buttons and moves to the next card automatically.
  - [ ] The process is repeated until practice is finished or the user exits. If the user completes all cards in the practice, they will automatically return to the main screen.
- [ ] The user can press a back button while studying a deck to go back to the previous card.

## 2.2. Possible Future Requirements

- Add a remote database so that any user can use the application anytime without importing or exporting information. This would require login, data encryption, and use of a database server (e.g., Turso).
- If a remote database with different users is included, perform a daily backup of the database.
- To avoid cards with repeated questions, it is recommended that when adding a new card, the word is autocompleted so that the user knows if that card is already in the deck.
- To avoid decks with repeated titles, it is recommended that when adding a new deck, the word is autocompleted so that the user knows if that title already exists.
- Ability to search for cards within a deck or across all decks, indicating which deck it belongs to.
- Ability to search for decks by name.
- Ability to move a card from one deck to another.
- Ability to copy a card from one deck to another.
- It should have an intuitive and simple graphical interface: oriented to folders and cards that can be dragged from one place to another?
- View performance metrics:
  - Top X questions that the user finds most difficult
  - How long does it take the user to answer a question (histogram) to see which questions made them think the most.
- Ability to insert images/audio in cards for pronunciation practice.
- Ability to choose decks together to practice.
- Ability to practice decks in reverse order if chosen or randomly.

# 3. Non-functional Requirements

## 3.1. Interface and Usability Requirements

- [ ] Use Material UI package for design.
- [ ] Review mockup designs.

## 3.2. Documentation Requirements

- [ ] All documentation in English.
- [ ] Project explanation, installation, and execution instructions in README.md.

## 3.3. Security Requirements

- [ ] Only Aitor can touch the main branch of the repository.
- [ ] No passwords or important data can be uploaded to the repository. .env files (for environment variables) should not be included, except for a template of the same without compromised information.

## 3.4. Maintainability and Portability Requirements

- [ ] Follow code design patterns when organizing files and folders.

## 3.5. Resource Requirements

- [ ] Vercel for web app deployment.
- [ ] A local computer to run the app with a database in your own environment.

## 3.6. Performance Requirements

- [ ] No part of the application should require a load time of more than 5 seconds.

## 3.9. Availability Requirements

- [ ] Internet connection is required to use the web app.
- [ ] A computer and configured database are required to use the application locally.

## 3.10. Support Requirements

- [ ] All installation and usage information for the application will be found in README.md.

# 4. Product Validation Checklist

The following checklist of requirements defined throughout this document must be fully checked off at the end of the project to validate it:

- [ ] All deck requirements are met.
- [ ] All card requirements are met.
- [ ] All practice requirements are met.
- [ ] Interface and usability requirements are met.
- [ ] Documentation requirements are met.
- [ ] Security requirements are met.
- [ ] Maintainability and portability requirements are met.
- [ ] Resource requirements are met.
- [ ] Performance requirements are met.
- [ ] Availability requirements are met.
- [ ] Support requirements are met.
