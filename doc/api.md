# Decks

## Decks endpoints

### [![](https://img.shields.io/badge/GET-/decks/{id}-grey?labelColor=03A972&style=flat-square)]()

#### Description

Get a deck by id. Returns the deck as JSON or 404 if not found.

#### Input: Dynamic parameters

| Name | Description | Type |
|:----:|:-----------:|:----:|
| id | *The identifier of the deck* | UUID |

#### Output: Body

| Name | Description | Type | Status code |
|:----:|:-----------:|:----:|:-----------:|
| Deck | *The deck as JSON* | JSON | 200 |
| Error message | *Deck not found* | JSON | 404 |

The returning JSON object would represent the deck with these fields:

| Name | Description | Type |
|:----:|:-----------:|:----:|
| id | *The identifier of the deck* | UUID |
| name | *The deck name* | String |
| description | *The deck description* | String |

---
---

### [![](https://img.shields.io/badge/GET-/decks-grey?labelColor=03A972&style=flat-square)]()

#### Description

Get all decks. Returns the decks as JSON array.

#### Output: Body

| Name | Description | Type | Status code |
|:----:|:-----------:|:----:|:-----------:|
| Decks | *The decks as JSON array* | JSON array | 200 |

Each returning JSON object would represent the deck with these fields:

| Name | Description | Type |
|:----:|:-----------:|:----:|
| id | *The identifier of the deck* | UUID |
| name | *The deck name* | String |
| description | *The deck description* | String |

---
---

### [![](https://img.shields.io/badge/POST-/decks-grey?labelColor=blue&style=flat-square)]()

#### Description

Create a new non-existing deck from body request data. Returns the new deck with 201 successful state code or 422 if there were problems during the deck creation. Also returns 400 in case there are errors in input body request parameters validation.

#### Input: Body JSON

Send Deck object as JSON body with these fields:

| Name | Description | Type |
|:----:|:-----------:|:----:|
| name | *The deck name* | String |
| description | *The deck description* | String |

#### Output: Body

| Name | Description | Type | Status code |
|:----:|:-----------:|:----:|:-----------:|
| Created Deck | *The recent added deck* | JSON | 201 |
| Error message | *Deck has not been created* | JSON | 422 |
| Error message | *Informative validation error* | JSON | 400 |

---
---

### [![](https://img.shields.io/badge/PATCH-/decks/{id}-grey?labelColor=red&style=flat-square)]()

#### Description

Modify partially an existing deck by id from body request data. Returns the edited deck, 404 if not found or 400 in case there are errors in input body request parameters validation.

#### Input: Dynamic parameters

| Name | Description | Type |
|:----:|:-----------:|:----:|
| id | *The identifier of the deck* | UUID |

#### Input: Body

Send Deck object as JSON body with these fields:

| Name | Description | Type |
|:----:|:-----------:|:----:|
| name | *The new deck name* | String |
| description | *The new deck description* | String |

#### Output: Body

| Name | Description | Type | Status code |
|:----:|:-----------:|:----:|:-----------:|
| Edited Deck | *The recently edited deck* | JSON | 200 |
| Error message | *Deck not found* | JSON | 404 |
| Error message | *Informative validation error* | JSON | 400 |

---
---

### [![](https://img.shields.io/badge/DELETE-/decks/{id}-grey?labelColor=yellow&style=flat-square)]()

#### Description

Delete a deck (and consequently the inner cards). Returns a JSON status message with 404 if not found or 400 in case there are errors in input body request parameters validation.

#### Input: Dynamic parameters

| Name | Description | Type |
|:----:|:-----------:|:----:|
| id | *The identifier of the deck* | UUID |

#### Output: Body

| Name | Description | Type | Status code |
|:----:|:-----------:|:----:|:-----------:|
| Sucessful message | *Deck deleted* | JSON | 200 |
| Error message | *Deck not found* | JSON | 400 |








# Cards

## Cards endpoints

### [![](https://img.shields.io/badge/GET-/cards/{id}-grey?labelColor=03A972&style=flat-square)]()

#### Description

Get a card by id. Returns the card as JSON or 404 if not found.

#### Input: Dynamic parameters

| Name | Description | Type |
|:----:|:-----------:|:----:|
| id | *The identifier of the card* | UUID |

#### Output: Body

| Name | Description | Type | Status code |
|:----:|:-----------:|:----:|:-----------:|
| Card | *The card as JSON* | JSON | 200 |
| Error message | *Card not found* | JSON | 404 |

The returning JSON object would represent the card with these fields:

| Name | Description | Type |
|:----:|:-----------:|:----:|
| id | *The identifier of the card* | UUID |
| question | *The card question* | String |
| answer | *The card answer* | String |
| repetitions | *The card repetitions* | Integer |
| easiness | *The card easiness factor* | Double |
| interval | *The card interval* | Integer |
| date to repeat | *The card timestamp to be reviewed* | Timestamp |

### [![](https://img.shields.io/badge/GET-/cards-grey?labelColor=03A972&style=flat-square)]()

#### Description

Get all cards (of all decks). Returns the cards as JSON array.

#### Output: Body

| Name | Description | Type | Status code |
|:----:|:-----------:|:----:|:-----------:|
| Cards | *The cards as JSON array* | JSON array | 200 |

Each returning JSON object would represent the card with these fields:

| Name | Description | Type |
|:----:|:-----------:|:----:|
| id | *The identifier of the card* | UUID |
| question | *The card question* | String |
| answer | *The card answer* | String |
| repetitions | *The card repetitions* | Integer |
| easiness | *The card easiness factor* | Double |
| interval | *The card interval* | Integer |
| date to repeat | *The card timestamp to be reviewed* | Timestamp |

---
---

### [![](https://img.shields.io/badge/GET-/cards%3FdeckId=<deckId>-grey?labelColor=03A972&style=flat-square)]()

#### Description

Get all cards inside a deck by deck id. Returns the cards as JSON array. If `idDeck` dynamic parameter is undefined, It will return all cards of all decks.

#### Input: Query string

| Name | Description | Type |
|:----:|:-----------:|:----:|
| deckId | *The deck id* | UUID |

#### Output: Body

| Name | Description | Type | Status code |
|:----:|:-----------:|:----:|:-----------:|
| Cards | *The cards as JSON array* | JSON array | 200 |

Each returning JSON object would represent the card with these fields:

| Name | Description | Type |
|:----:|:-----------:|:----:|
| id | *The identifier of the card* | UUID |
| question | *The card question* | String |
| answer | *The card answer* | String |
| repetitions | *The card repetitions* | Integer |
| easiness | *The card easiness factor* | Double |
| interval | *The card interval* | Integer |
| date to repeat | *The card timestamp to be reviewed* | Timestamp |

---
---

### [![](https://img.shields.io/badge/POST-/cards-grey?labelColor=blue&style=flat-square)]()

#### Description

Create a new non-existing card inside an existing deck by deck id.

#### Input: Body JSON

Send Card object as JSON body with these fields:

Each returning JSON object would represent the card with these fields:

| Name | Description | Type |
|:----:|:-----------:|:----:|
| question | *The card question* | String |
| answer | *The card answer* | String |

#### Output: Body

| Name | Description | Type | Status code |
|:----:|:-----------:|:----:|:-----------:|
| Created Card | *The recently added card* | JSON | 201 |
| Error message | *Card has not been created* | JSON | 422 |
| Error message | *Informative validation error* | JSON | 400 |

---
---

### [![](https://img.shields.io/badge/PATCH-/cards/{id}-grey?labelColor=red&style=flat-square)]()

#### Description

Modify partially an existing card by id from body request data. Returns the edited card, 404 if not found or 400 in case there are errors in input body request parameters validation.

#### Input: Dynamic parameters

| Name | Description | Type |
|:----:|:-----------:|:----:|
| id | *The identifier of the card* | UUID |

#### Input: Body

This `PATCH` method is used whenever either the user wants to modify the question and/or the answer of a card or the user has played the card.
- In the first case, this `PATCH` method must **only** edit the question and/or answer, and not the metadata (repetitions, easiness, interval and date to repeat), whose values must be kept as before the modification. Therefore, the JSON object would have this content:

  | Name | Description | Type |
  |:----:|:-----------:|:----:|
  | question | *The card question* | String |
  | answer | *The card answer* | String |


- In the second case, this `PATCH` method must **only** edit the metadata (repetitions, easiness, interval and date to repeat), and not the question or answer. Therefore, the JSON object would have this content:

  | Name | Description | Type |
  |:----:|:-----------:|:----:|
  | repetitions | *The card repetitions* | Integer |
  | easiness | *The card easiness factor* | Double |
  | interval | *The card interval* | Integer |
  | date to repeat | *The card timestamp to be reviewed* | Timestamp |

#### Output: Body

| Name | Description | Type | Status code |
|:----:|:-----------:|:----:|:-----------:|
| Edited Card | *The recently edited card* | JSON | 200 |
| Error message | *Card not found* | JSON | 404 |
| Error message | *Informative validation error* | JSON | 400 |

---
---

### [![](https://img.shields.io/badge/DELETE-/cards/{id}-grey?labelColor=yellow&style=flat-square)]()

#### Description

Delete a card. Returns a JSON status message with 404 if not found or 400 in case there are errors in input body request parameters validation.

#### Input: Query string

| Name | Description | Type |
|:----:|:-----------:|:----:|
| id | *The card id* | UUID |

#### Output: Body

| Name | Description | Type | Status code |
|:----:|:-----------:|:----:|:-----------:|
| Sucessful message | *Card deleted* | JSON | 200 |
| Error message | *Card not found* | JSON | 400 |

---
---