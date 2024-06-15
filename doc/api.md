# Decks

## Decks endpoints

### [![](https://img.shields.io/badge/GET-/decks/{id}-grey?labelColor=03A972&style=flat-square)]()

#### Description

Get a deck by id (uuid). Returns the deck as JSON or 404 if not found.

#### Input: Dynamic parameters

| Name |         Description          | Type |
| :--: | :--------------------------: | :--: |
| uuid | _The identifier of the deck_ | UUID |

#### Output: Body

|     Name      |    Description     | Type | Status code |
| :-----------: | :----------------: | :--: | :---------: |
|     deck      | _The deck as JSON_ | JSON |     200     |
| error_message |  _Deck not found_  | JSON |     404     |

The returning JSON object would represent the deck with these fields:

|    Name     |         Description          |  Type  |
| :---------: | :--------------------------: | :----: |
|    uuid     | _The identifier of the deck_ |  UUID  |
|    name     |       _The deck name_        | String |
| description |    _The deck description_    | String |

---

---

### [![](https://img.shields.io/badge/GET-/decks-grey?labelColor=03A972&style=flat-square)]()

#### Description

Get all decks. Returns the decks as JSON array.

#### Output: Body

| Name  |        Description        |    Type    | Status code |
| :---: | :-----------------------: | :--------: | :---------: |
| decks | _The decks as JSON array_ | JSON array |     200     |

Each returning JSON object would represent the deck with these fields:

|    Name     |         Description          |  Type  |
| :---------: | :--------------------------: | :----: |
|    uuid     | _The identifier of the deck_ |  UUID  |
|    name     |       _The deck name_        | String |
| description |    _The deck description_    | String |

---

---

### [![](https://img.shields.io/badge/POST-/decks-grey?labelColor=blue&style=flat-square)]()

#### Description

Create a new non-existing deck from body request data. Returns the new deck with 201 successful state code or 422 if there were problems during the deck creation. Also returns 400 in case there are errors in input body request parameters validation.

#### Input: Body JSON

Send Deck object as JSON body with these fields:

|    Name     |      Description       |  Type  |
| :---------: | :--------------------: | :----: |
|    name     |    _The deck name_     | String |
| description | _The deck description_ | String |

#### Output: Body

|     Name      |          Description           | Type | Status code |
| :-----------: | :----------------------------: | :--: | :---------: |
| created_deck  |    _The recent added deck_     | JSON |     201     |
| error_message |  _Deck has not been created_   | JSON |     422     |
| error_message | _Informative validation error_ | JSON |     400     |

The returning JSON object would represent the deck with these fields:

|    Name     |         Description          |  Type  |
| :---------: | :--------------------------: | :----: |
|    uuid     | _The identifier of the deck_ |  UUID  |
|    name     |       _The deck name_        | String |
| description |    _The deck description_    | String |

---

---

### [![](https://img.shields.io/badge/PATCH-/decks/{id}-grey?labelColor=red&style=flat-square)]()

#### Description

Modify partially an existing deck by id (uuid) from body request data. Returns the edited deck, 404 if not found or 400 in case there are errors in input body request parameters validation.

#### Input: Dynamic parameters

| Name |         Description          | Type |
| :--: | :--------------------------: | :--: |
| uuid | _The identifier of the deck_ | UUID |

#### Input: Body

Send Deck object as JSON body with these fields:

|    Name     |         Description          |  Type  |
| :---------: | :--------------------------: | :----: |
|    uuid     | _The identifier of the deck_ |  UUID  |
|    name     |     _The new deck name_      | String |
| description |  _The new deck description_  | String |

#### Output: Body

|     Name      |          Description           | Type | Status code |
| :-----------: | :----------------------------: | :--: | :---------: |
|  edited_deck  |   _The recently edited deck_   | JSON |     200     |
| error_message |        _Deck not found_        | JSON |     404     |
| error_message | _Informative validation error_ | JSON |     400     |

The returning JSON object would represent the deck with these fields:

|    Name     |         Description          |  Type  |
| :---------: | :--------------------------: | :----: |
|    uuid     | _The identifier of the deck_ |  UUID  |
|    name     |       _The deck name_        | String |
| description |    _The deck description_    | String |

---

---

### [![](https://img.shields.io/badge/DELETE-/decks/{id}-grey?labelColor=yellow&style=flat-square)]()

#### Description

Delete a deck (and consequently the inner cards) by id (uuid). Returns a JSON status message with 404 if not found or 400 in case there are errors in input body request parameters validation.

#### Input: Dynamic parameters

| Name |         Description          | Type |
| :--: | :--------------------------: | :--: |
| uuid | _The identifier of the deck_ | UUID |

#### Output: Body

|       Name        |   Description    | Type | Status code |
| :---------------: | :--------------: | :--: | :---------: |
| sucessful_message |  _Deck deleted_  | JSON |     200     |
|   error_message   | _Deck not found_ | JSON |     400     |

# Cards

## Cards endpoints

### [![](https://img.shields.io/badge/GET-/cards/{id}-grey?labelColor=03A972&style=flat-square)]()

#### Description

Get a card by id (uuid). Returns the card as JSON or 404 if not found.

#### Input: Dynamic parameters

| Name |         Description          | Type |
| :--: | :--------------------------: | :--: |
| uuid | _The identifier of the card_ | UUID |

#### Output: Body

|     Name      |    Description     | Type | Status code |
| :-----------: | :----------------: | :--: | :---------: |
|     card      | _The card as JSON_ | JSON |     200     |
| error_message |  _Card not found_  | JSON |     404     |

The returning JSON object would represent the card with these fields:

|      Name      |             Description             |   Type    |
| :------------: | :---------------------------------: | :-------: |
|      uuid      |    _The identifier of the card_     |   UUID    |
|    question    |         _The card question_         |  String   |
|     answer     |          _The card answer_          |  String   |
|  repetitions   |       _The card repetitions_        |  Integer  |
|    easiness    |     _The card easiness factor_      |  Double   |
| interval_days  |         _The card interval_         |  Integer  |
| date_to_repeat | _The card timestamp to be reviewed_ | Timestamp |

### [![](https://img.shields.io/badge/GET-/cards-grey?labelColor=03A972&style=flat-square)]()

#### Description

Get all cards (of all decks). Returns the cards as JSON array.

#### Output: Body

| Name  |        Description        |    Type    | Status code |
| :---: | :-----------------------: | :--------: | :---------: |
| cards | _The cards as JSON array_ | JSON array |     200     |

The returning JSON object would represent the card with these fields:

|      Name      |             Description             |   Type    |
| :------------: | :---------------------------------: | :-------: |
|      uuid      |    _The identifier of the card_     |   UUID    |
|    question    |         _The card question_         |  String   |
|     answer     |          _The card answer_          |  String   |
|  repetitions   |       _The card repetitions_        |  Integer  |
|    easiness    |     _The card easiness factor_      |  Double   |
| interval_days  |         _The card interval_         |  Integer  |
| date_to_repeat | _The card timestamp to be reviewed_ | Timestamp |

---

---

### [![](https://img.shields.io/badge/GET-/cards%3FdeckId=<deckId>-grey?labelColor=03A972&style=flat-square)]()

#### Description

Get all cards inside a deck by deck id (uuid). Returns the cards as JSON array. If `deckId` dynamic parameter is undefined, It will return all cards of all decks.

#### Input: Query string

| Name |         Description          | Type |
| :--: | :--------------------------: | :--: |
| uuid | _The identifier of the deck_ | UUID |

#### Output: Body

| Name  |        Description        |    Type    | Status code |
| :---: | :-----------------------: | :--------: | :---------: |
| cards | _The cards as JSON array_ | JSON array |     200     |

The returning JSON object would represent the card with these fields:

|      Name      |             Description             |   Type    |
| :------------: | :---------------------------------: | :-------: |
|      uuid      |    _The identifier of the card_     |   UUID    |
|    question    |         _The card question_         |  String   |
|     answer     |          _The card answer_          |  String   |
|  repetitions   |       _The card repetitions_        |  Integer  |
|    easiness    |     _The card easiness factor_      |  Double   |
| interval_days  |         _The card interval_         |  Integer  |
| date_to_repeat | _The card timestamp to be reviewed_ | Timestamp |

---

---

### [![](https://img.shields.io/badge/POST-/cards-grey?labelColor=blue&style=flat-square)]()

#### Description

Create a new non-existing card inside an existing deck by deck id (uuid).

#### Input: Body JSON

Send Card object as JSON body with these fields:

|   Name   |     Description     |  Type  |
| :------: | :-----------------: | :----: |
| question | _The card question_ | String |
|  answer  |  _The card answer_  | String |

#### Output: Body

|     Name      |          Description           | Type | Status code |
| :-----------: | :----------------------------: | :--: | :---------: |
| created_card  |   _The recently added card_    | JSON |     201     |
| error_message |  _Card has not been created_   | JSON |     422     |
| error_message | _Informative validation error_ | JSON |     400     |

The returning JSON object would represent the card with these fields:

|      Name      |             Description             |   Type    |
| :------------: | :---------------------------------: | :-------: |
|      uuid      |    _The identifier of the card_     |   UUID    |
|    question    |         _The card question_         |  String   |
|     answer     |          _The card answer_          |  String   |
|  repetitions   |       _The card repetitions_        |  Integer  |
|    easiness    |     _The card easiness factor_      |  Double   |
| interval_days  |         _The card interval_         |  Integer  |
| date_to_repeat | _The card timestamp to be reviewed_ | Timestamp |

---

---

### [![](https://img.shields.io/badge/PATCH-/cards/{id}-grey?labelColor=red&style=flat-square)]()

#### Description

Modify partially an existing card by id (uuid) from body request data. Returns the edited card, 404 if not found or 400 in case there are errors in input body request parameters validation.

#### Input: Dynamic parameters

| Name |         Description          | Type |
| :--: | :--------------------------: | :--: |
| uuid | _The identifier of the card_ | UUID |

#### Input: Body

The JSON object must have this content:

|      Name      |             Description             |   Type    |
| :------------: | :---------------------------------: | :-------: |
|    question    |         _The card question_         |  String   |
|     answer     |          _The card answer_          |  String   |
|  repetitions   |       _The card repetitions_        |  Integer  |
|    easiness    |     _The card easiness factor_      |  Double   |
| interval_days  |         _The card interval_         |  Integer  |
| date_to_repeat | _The card timestamp to be reviewed_ | Timestamp |

#### Output: Body

|     Name      |          Description           | Type | Status code |
| :-----------: | :----------------------------: | :--: | :---------: |
|  edited_card  |   _The recently edited card_   | JSON |     200     |
| error_message |        _Card not found_        | JSON |     404     |
| error_message | _Informative validation error_ | JSON |     400     |

The returning JSON object would represent the card with these fields:

|      Name      |             Description             |   Type    |
| :------------: | :---------------------------------: | :-------: |
|      uuid      |    _The identifier of the card_     |   UUID    |
|    question    |         _The card question_         |  String   |
|     answer     |          _The card answer_          |  String   |
|  repetitions   |       _The card repetitions_        |  Integer  |
|    easiness    |     _The card easiness factor_      |  Double   |
| interval_days  |         _The card interval_         |  Integer  |
| date_to_repeat | _The card timestamp to be reviewed_ | Timestamp |

---

---

### [![](https://img.shields.io/badge/DELETE-/cards/{id}-grey?labelColor=yellow&style=flat-square)]()

#### Description

Delete a card by id (uuid). Returns a JSON status message with 404 if not found or 400 in case there are errors in input body request parameters validation.

#### Input: Query string

| Name |  Description  | Type |
| :--: | :-----------: | :--: |
| uuid | _The card id_ | UUID |

#### Output: Body

|       Name        |   Description    | Type | Status code |
| :---------------: | :--------------: | :--: | :---------: |
| sucessful_message |  _Card deleted_  | JSON |     200     |
|   error_message   | _Card not found_ | JSON |     400     |

---

---
