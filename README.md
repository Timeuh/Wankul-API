# 🖹 Wankul API
This API / backend is a service to store the data of the Wankul trading card game by Wankil Studio.
The cards are not mine and are the exclusive property of Wankil Studio.
If you're interested in buying theses cards, you can do it
[here](https://wankul.fr/). 

#### I am not affiliated in any way with Wankil Studio or Wankul cards.

# 🪧How to use ?

## 📥 Installation
To use this API / backend, you need to have **Node JS** installed.

Then, simply clone this repository in the directory of your choice with 

```git clone git@github.com:Timeuh/Wankul-API.git```

And install the node dependencies with

```npm install```

You must also have a ```.env``` file with the following properties in order for the program to run :

| *Key*          | Value                                               |
|----------------|-----------------------------------------------------|
| *DATABASE_URL* | Your database URL (I use Neon, a Postgres database) |
| *DIRECT_URL*   | Another key for Neon database                       |
| *JWT_SECRET*   | Secret to encode your jwt with                      |
| *TOKEN_HEADER* | Request header to verify your token                 |

To generate and access the database, I use Prisma ORM.
All tables are declared in ```prisma/schema.prisma``` file. 
You can modify if you want but the architecture is already functional.

If your database is created (empty, no tables) you can run the following command :

```npx prisma migrate dev --name init```

It will create the tables declared in schema file, and a SQL migration file.

Due to the insertion of any new entity being tied to authentication with a jwt, 
I recommend to create a new user before any other entity (type, description, card, artist, etc).

Once you did all of that, you're ready to go !

## 🎬 Execution
To run the app, simply execute the command

```npm run server```

This will start the Node server and watch for every change in the code.
The server will be available at the address

> http://localhost:5000

# 🕮 API Documentation
<details>
<summary>
API routes for artists
</summary>

### Get an artist by id

#### Link

> /api/artist/:id

#### Response exemple

```json
{
    "artist": {
        "id": 1,
        "name": "Léonard Lam"
    },
    "links": {
      "self": "/api/artist/1",
      "all": "/api/artist/",
      "cards": "/api/artist/1/cards"
    }
}
```
---
### Get all artists

#### Link

> /api/artist/

#### Response exemple

```json
{
  "type": "collection",
  "length": 2,
  "artists": [
    {
      "artist": {
        "id": 1,
        "name": "Léonard Lam"
      },
      "links": {
        "self": "/api/artist/1",
        "all": "/api/artist/",
        "cards": "/api/artist/1/cards"
      }
    },
    {
      "artist": {
        "id": 2,
        "name": "Ben Giletti"
      },
      "links": {
        "self": "/api/artist/2",
        "all": "/api/artist/",
        "cards": "/api/artist/2/cards"
      }
    }
  ]
}
```
---
### Get all cards of an artist

#### Link

> /api/artist/:id/cards

#### Response exemple

```json
{
  "artist": {
    "id": 1,
    "name": "Léonard Lam"
  },
  "links": {
    "self": "/api/artist/1",
    "all": "/api/artist/",
    "cards": "/api/artist/1/cards"
  },
  "cards": {
    "type": "collection",
    "length": 2,
    "cards": [
      {
        "card": {
          "id": 1,
          "name": "Navire Pirate",
          "collection": "Origins",
          "image": "navire_pirate.webp",
          "artist": {
            "id": 1,
            "name": "Léonard Lam"
          },
          "description": {
            "id": 1,
            "winner_effect": "... -",
            "looser_effect": "... défausse les 5 cartes du dessus du deck.",
            "special": "Quand ce Terrain entre en jeu, chaque joueur défausse une carte.",
            "effect": "",
            "citation": "",
            "character": {
              "id": -1,
              "name": "NoChar"
            },
            "rarity": {
              "id": 8,
              "name": "Terrain"
            }
          },
          "type": {
            "id": 1,
            "name": "Terrain"
          }
        },
        "links": {
          "self": "/api/card/1",
          "all": "/api/card/",
          "image": "/api/image/navire_pirate.webp"
        }
      },
      {
        "card": {
          "id": 31,
          "name": "Garagiste",
          "collection": "Origins",
          "image": "garagiste_laink.webp",
          "artist": {
            "id": 1,
            "name": "Léonard Lam"
          },
          "description": {
            "id": 31,
            "winner_effect": "",
            "looser_effect": "",
            "special": "",
            "effect": "Piochez une carte. COMBO infini +1 en Force.",
            "citation": "C'est la rotule d'embrayage de la culasse qu'a pété. On sera dans les 5000 balles, ma bonne dame.",
            "character": {
              "id": 1,
              "name": "Laink"
            },
            "rarity": {
              "id": 1,
              "name": "C"
            }
          },
          "type": {
            "id": 2,
            "name": "Personnage"
          }
        },
        "links": {
          "self": "/api/card/31",
          "all": "/api/card/",
          "image": "/api/image/garagiste_laink.webp"
        }
      }
    ]
  }
}
```
---
</details>

<details>
<summary>
API routes for characters
</summary>

### Get a character by id

#### Link

> /api/character/:id

#### Response exemple

```json
{
    "character": {
        "id": 1,
        "name": "Laink"
    },
    "links": {
      "self": "/api/character/1",
      "all": "/api/character/",
      "cards": "/api/character/1/cards"
    }
}
```
---
### Get all characters

#### Link

> /api/character/

#### Response exemple

```json
{
  "type": "collection",
  "length": 2,
  "characters": [
    {
      "character": {
        "id": 1,
        "name": "Laink"
      },
      "links": {
        "self": "/api/character/1",
        "all": "/api/character/",
        "cards": "/api/character/1/cards"
      }
    },
    {
      "character": {
        "id": 2,
        "name": "Terracid"
      },
      "links": {
        "self": "/api/character/2",
        "all": "/api/character/",
        "cards": "/api/character/2/cards"
      }
    }
  ]
}
```
---
### Get all cards of a character

#### Link

> /api/character/:id/cards

#### Response exemple

```json
{
  "character": {
    "id": 1,
    "name": "Laink"
  },
  "links": {
    "self": "/api/character/1",
    "all": "/api/character/",
    "cards": "/api/character/1/cards"
  },
  "cards": {
    "type": "collection",
    "length": 1,
    "cards": [
      {
        "card": {
          "id": 31,
          "name": "Garagiste",
          "collection": "Origins",
          "image": "garagiste_laink.webp",
          "artist": {
            "id": 1,
            "name": "Léonard Lam"
          },
          "description": {
            "id": 31,
            "winner_effect": "",
            "looser_effect": "",
            "special": "",
            "effect": "Piochez une carte. COMBO infini +1 en Force.",
            "citation": "C'est la rotule d'embrayage de la culasse qu'a pété. On sera dans les 5000 balles, ma bonne dame.",
            "character": {
              "id": 1,
              "name": "Laink"
            },
            "rarity": {
              "id": 1,
              "name": "C"
            }
          },
          "type": {
            "id": 2,
            "name": "Personnage"
          }
        },
        "links": {
          "self": "/api/card/31",
          "all": "/api/card/",
          "image": "/api/image/garagiste_laink.webp"
        }
      }
    ]
  }
}
```
---
</details>

<details>
<summary>
API routes for rarities
</summary>

### Get a rarity by id

#### Link

> /api/rarity/:id

#### Response exemple

```json
{
    "rarity": {
        "id": 1,
        "name": "C"
    },
    "links": {
      "self": "/api/rarity/1",
      "all": "/api/rarity/",
      "cards": "/api/rarity/1/cards"
    }
}
```
---
### Get all rarities

#### Link

> /api/rarity/

#### Response exemple

```json
{
  "type": "collection",
  "length": 2,
  "rarities": [
    {
      "rarity": {
        "id": 1,
        "name": "C"
      },
      "links": {
        "self": "/api/rarity/1",
        "all": "/api/rarity/",
        "cards": "/api/rarity/1/cards"
      }
    },
    {
      "rarity": {
        "id": 2,
        "name": "UC"
      },
      "links": {
        "self": "/api/rarity/2",
        "all": "/api/rarity/",
        "cards": "/api/rarity/2/cards"
      }
    }
  ]
}
```
---
### Get all cards of a rarity

#### Link

> /api/rarity/:id/cards

#### Response exemple

```json
{
  "rarity": {
    "id": 1,
    "name": "C"
  },
  "links": {
    "self": "/api/rarity/1",
    "all": "/api/rarity/",
    "cards": "/api/rarity/1/cards"
  },
  "cards": {
    "type": "collection",
    "length": 1,
    "cards": [
      {
        "card": {
          "id": 31,
          "name": "Garagiste",
          "collection": "Origins",
          "image": "garagiste_laink.webp",
          "artist": {
            "id": 1,
            "name": "Léonard Lam"
          },
          "description": {
            "id": 31,
            "winner_effect": "",
            "looser_effect": "",
            "special": "",
            "effect": "Piochez une carte. COMBO infini +1 en Force.",
            "citation": "C'est la rotule d'embrayage de la culasse qu'a pété. On sera dans les 5000 balles, ma bonne dame.",
            "character": {
              "id": 1,
              "name": "Laink"
            },
            "rarity": {
              "id": 1,
              "name": "C"
            }
          },
          "type": {
            "id": 2,
            "name": "Personnage"
          }
        },
        "links": {
          "self": "/api/card/31",
          "all": "/api/card/",
          "image": "/api/image/garagiste_laink.webp"
        }
      }
    ]
  }
}
```
---
</details>

<details>
<summary>
API routes for types
</summary>

### Get a type by id

#### Link

> /api/type/:id

#### Response exemple

```json
{
    "type": {
        "id": 1,
        "name": "Terrain"
    },
    "links": {
      "self": "/api/type/1",
      "all": "/api/type/",
      "cards": "/api/type/1/cards"
    }
}
```
---
### Get all types

#### Link

> /api/type/

#### Response exemple

```json
{
  "type": "collection",
  "length": 2,
  "types": [
    {
      "type": {
        "id": 1,
        "name": "Terrain"
      },
      "links": {
        "self": "/api/type/1",
        "all": "/api/type/",
        "cards": "/api/type/1/cards"
      }
    },
    {
      "type": {
        "id": 2,
        "name": "Personnage"
      },
      "links": {
        "self": "/api/type/2",
        "all": "/api/type/",
        "cards": "/api/type/2/cards"
      }
    }
  ]
}
```
---
### Get all cards of a type

#### Link

> /api/type/:id/cards

#### Response exemple

```json
{
  "type": {
    "id": 1,
    "name": "Terrain"
  },
  "links": {
    "self": "/api/type/1",
    "all": "/api/type/",
    "cards": "/api/type/1/cards"
  },
  "cards": {
    "type": "collection",
    "length": 1,
    "cards": [
      {
        "card": {
          "id": 1,
          "name": "Navire Pirate",
          "collection": "Origins",
          "image": "navire_pirate.webp",
          "artist": {
            "id": 1,
            "name": "Léonard Lam"
          },
          "description": {
            "id": 1,
            "winner_effect": "... -",
            "looser_effect": "... défausse les 5 cartes du dessus du deck.",
            "special": "Quand ce Terrain entre en jeu, chaque joueur défausse une carte.",
            "effect": "",
            "citation": "",
            "character": {
              "id": -1,
              "name": "NoChar"
            },
            "rarity": {
              "id": 8,
              "name": "Terrain"
            }
          },
          "type": {
            "id": 1,
            "name": "Terrain"
          }
        },
        "links": {
          "self": "/api/card/1",
          "all": "/api/card/",
          "image": "/api/image/navire_pirate.webp"
        }
      }
    ]
  }
}
```
---
</details>

<details>
<summary>
API routes for cards
</summary>

### Get a card by id

#### Link

> /api/card/:id

#### Response exemple

```json
{
  "card": {
    "id": 1,
    "name": "Navire Pirate",
    "collection": "Origins",
    "image": "navire_pirate.webp",
    "artist": {
      "id": 1,
      "name": "Léonard Lam"
    },
    "description": {
      "id": 1,
      "winner_effect": "... -",
      "looser_effect": "... défausse les 5 cartes du dessus du deck.",
      "special": "Quand ce Terrain entre en jeu, chaque joueur défausse une carte.",
      "effect": "",
      "citation": "",
      "character": {
        "id": -1,
        "name": "NoChar"
      },
      "rarity": {
        "id": 8,
        "name": "Terrain"
      }
    },
    "type": {
      "id": 1,
      "name": "Terrain"
    }
  },
  "links": {
    "self": "/api/card/1",
    "all": "/api/card/",
    "image": "/api/image/navire_pirate.webp"
  }
}
```
---
### Get all cards

#### Link

> /api/card/

#### Response exemple

```json
{
  "type": "collection",
  "length": 2,
  "cards": [
    {
      "card": {
        "id": 1,
        "name": "Navire Pirate",
        "collection": "Origins",
        "image": "navire_pirate.webp",
        "artist": {
          "id": 1,
          "name": "Léonard Lam"
        },
        "description": {
          "id": 1,
          "winner_effect": "... -",
          "looser_effect": "... défausse les 5 cartes du dessus du deck.",
          "special": "Quand ce Terrain entre en jeu, chaque joueur défausse une carte.",
          "effect": "",
          "citation": "",
          "character": {
            "id": -1,
            "name": "NoChar"
          },
          "rarity": {
            "id": 8,
            "name": "Terrain"
          }
        },
        "type": {
          "id": 1,
          "name": "Terrain"
        }
      },
      "links": {
        "self": "/api/card/1",
        "all": "/api/card/",
        "image": "/api/image/navire_pirate.webp"
      }
    },
    {
      "card": {
        "id": 31,
        "name": "Garagiste",
        "collection": "Origins",
        "image": "garagiste_laink.webp",
        "artist": {
          "id": 1,
          "name": "Léonard Lam"
        },
        "description": {
          "id": 31,
          "winner_effect": "",
          "looser_effect": "",
          "special": "",
          "effect": "Piochez une carte. COMBO infini +1 en Force.",
          "citation": "C'est la rotule d'embrayage de la culasse qu'a pété. On sera dans les 5000 balles, ma bonne dame.",
          "character": {
            "id": 1,
            "name": "Laink"
          },
          "rarity": {
            "id": 1,
            "name": "C"
          }
        },
        "type": {
          "id": 2,
          "name": "Personnage"
        }
      },
      "links": {
        "self": "/api/card/31",
        "all": "/api/card/",
        "image": "/api/image/garagiste_laink.webp"
      }
    }
  ]
}
```
---
</details>

<details>
<summary>
API route for images
</summary>

### Get a card by id

#### Link

> /api/image/:imageName

#### Response exemple
Returns the image file.
</details>

# 🕮 Backend Documentation

No matter the request (except auth), you must put a header in your request with your auth token.
This token can be obtained by login in before any request :

### Login

#### Link

> POST :
> /auth/authenticate

#### Body (json)
```json
{
  "email": "yourmail@mail.com",
  "password": "yourpassword"
}
```

#### Response exemple
```json
{
  "code": 200,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiRnJpIEp1bCAyMSAyMDIzIDE2OjAwOjE1IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSkiLCJ1c2VyIjoidGltZXV1aEBnbWFpbC5jb20iLCJuYW1lIjoidGltb3Row6llIiwibGFzdG5hbWUiOiJicmluZGVqb25jIiwiaWF0IjoxNjg5OTU1MjE1LCJleHAiOjE2ODk5NTg4MTV9.AsZSag3tLAcpRGLFWYG0l2GwHEHTMwB92s5h9eg2V84"
}
```

When you have the token, you must put it in a defined header in each request.
This header name is defined in .env file mentioned above. For my exemple, it will be wankul_api_test.

In your request, put the header :

| *Key*  | Value       |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *wankul_api_test* | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiRnJpIEp1bCAyMSAyMDIzIDE2OjAwOjE1IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSkiLCJ1c2VyIjoidGltZXV1aEBnbWFpbC5jb20iLCJuYW1lIjoidGltb3Row6llIiwibGFzdG5hbWUiOiJicmluZGVqb25jIiwiaWF0IjoxNjg5OTU1MjE1LCJleHAiOjE2ODk5NTg4MTV9.AsZSag3tLAcpRGLFWYG0l2GwHEHTMwB92s5h9eg2V84 |

If you don't put this header, the response will be of this type :
```json
{
  "code": 500,
  "error": "RequestError : you must provide a token !"
}
```

#### The token expires after an hour, so you will have to regenerate it.

---
<details>
<summary>
Backend CRUD routes for artists
</summary>

### Create an artist

#### Link

> POST :
> /artists/new

#### Body exemple (x-www-form-urlencoded)
| *Key*  | Value       |
|--------|-------------|
| *id*   | 1           |
| *name* | Ben Giletti |


#### Response exemple
```json
{
  "code": 200,
  "artist": {
    "id": 1,
    "name": "Léonard Lam"
  }
}
```
---
### Get an artist by id

#### Link

> GET :
> /artists/get

#### Body exemple (json)
```json
{
  "id": 1
}
```

#### Response exemple
```json
{
  "code": 200,
  "artist": {
    "id": 1,
    "name": "Léonard Lam"
  }
}
```
---
### Update an artist

#### Link

> PUT :
> /artists/update

#### Body exemple (json)
```json
{
  "id": 1,
  "name": "Léonard Lam"
}
```

#### Response exemple
```json
{
  "code": 200,
  "newArtist": {
    "id": 1,
    "name": "Léonard Lam"
  }
}
```
---
### Delete an artist

#### Link

> DELETE :
> /artists/delete

#### Body exemple (json)
```json
{
  "id": 1
}
```

#### Response exemple
```json
{
  "code": 200,
  "deletedArtist": {
    "id": 1,
    "name": "Léonard Lam"
  }
}
```
---
</details>

<details>
<summary>
Backend CRUD routes for cards
</summary>

### Create a card

#### Link

> POST :
> /cards/new

#### Body exemple (x-www-form-urlencoded)
| *Key*            | Value              |
|------------------|--------------------|
| *artist_id*      | 1                  |
| *collection*     | Origins            |
| *description_id* | 1                  |
| *id*             | 1                  |
| *image*          | navire_pirate.webp |
| *name*           | Navire Pirate      |
| *type_id*        | 1                  |


#### Response exemple
```json
{
  "code": 200,
  "card": {
    "artist_id": 1,
    "collection": "Origins",
    "description_id": 1,
    "id": 1,
    "image": "navire_pirate.webp",
    "name": "Navire Pirate",
    "type_id": 1
  }
}
```
---
### Get a card by id

#### Link

> GET :
> /cards/get

#### Body exemple (json)
```json
{
  "id": 1
}
```

#### Response exemple
```json
{
  "code": 200,
  "card": {
    "artist_id": 1,
    "collection": "origins",
    "description_id": 1,
    "id": 1,
    "image": "navire_pirate.webp",
    "name": "Navire Pirate",
    "type_id": 1
  }
}
```
---
### Update a card

#### Link

> PUT :
> /cards/update

#### Body exemple (json)
```json
{
  "id": 1,
  "name": "Navire Pirate",
  "collection": "origins",
  "description_id": 1,
  "type_id": 1,
  "artist_id": 1,
  "image": "navire_pirate.png"
}
```

#### Response exemple
```json
{
  "code": 200,
  "newCard": {
    "id": 1,
    "name": "Navire Pirate",
    "collection": "origins",
    "description_id": 1,
    "type_id": 1,
    "artist_id": 1,
    "image": "navire_pirate.png"
  }
}
```
---
### Delete a card

#### Link

> DELETE :
> /cards/delete

#### Body exemple (json)
```json
{
  "id": 1
}
```

#### Response exemple
```json
{
  "code": 200,
  "deletedCard": {
    "id": 1,
    "name": "Navire Pirate",
    "collection": "origins",
    "description_id": 1,
    "type_id": 1,
    "artist_id": 1,
    "image": "navire_pirate.png"
  }
}
```
---
</details>

<details>
<summary>
Backend CRUD routes for characters
</summary>

### Create a character

#### Link

> POST :
> /characters/new

#### Body exemple (x-www-form-urlencoded)
| *Key*            | Value         |
|------------------|---------------|
| *id*             | 1             |
| *name*           | Navire Pirate |

#### Response exemple
```json
{
  "code": 200,
  "character": {
    "id": 1,
    "name": "Laink"
  }
}
```
---
### Get a character by id

#### Link

> GET :
> /characters/get

#### Body exemple (json)
```json
{
  "id": 1
}
```

#### Response exemple
```json
{
  "code": 200,
  "character": {
    "id": 1,
    "name": "Laink"
  }
}
```
---
### Update a character

#### Link

> PUT :
> /characters/update

#### Body exemple (json)
```json
{
  "character": {
    "id": 1,
    "name": "Laink"
  }
}
```

#### Response exemple
```json
{
  "code": 200,
  "newCharacter": {
    "id": 1,
    "name": "Laink"
  }
}
```
---
### Delete a character

#### Link

> DELETE :
> /characters/delete

#### Body exemple (json)
```json
{
  "id": 1
}
```

#### Response exemple
```json
{
  "code": 200,
  "deletedCharacter": {
    "id": 1,
    "name": "Laink"
  }
}
```
---
</details>

<details>
<summary>
Backend CRUD routes for descriptions
</summary>

### Create a description

#### Link

> POST :
> /descriptions/new

#### Body exemple (x-www-form-urlencoded)
| *Key*           | Value                                                            |
|-----------------|------------------------------------------------------------------|
| *character_id*  | -1                                                               |
| *citation*      |                                                                  |
| *effect*        |                                                                  |
| *id*            | 1                                                                |
| *looser_effect* | ... défausse les 5 cartes du dessus du deck.                     |
| *rarity_id*     | 8                                                                |
| *special*       | Quand ce Terrain entre en jeu, chaque joueur défausse une carte. |
| *winner_effect* | ... -                                                            |

#### Response exemple
```json
{
  "code": 200,
  "description": {
    "character_id": -1,
    "citation": "",
    "effect": "",
    "id": 1,
    "looser_effect": "... défausse les 5 cartes du dessus du deck.",
    "rarity_id": 8,
    "special": "Quand ce Terrain entre en jeu, chaque joueur défausse une carte.",
    "winner_effect": "... -"
  }
}
```
---
### Get a description by id

#### Link

> GET :
> /descriptions/get

#### Body exemple (json)
```json
{
  "id": 1
}
```

#### Response exemple
```json
{
  "code": 200,
  "description": {
    "character_id": -1,
    "citation": "",
    "effect": "",
    "id": 1,
    "looser_effect": "... défausse les 5 cartes du dessus du deck.",
    "rarity_id": 8,
    "special": "Quand ce Terrain entre en jeu, chaque joueur défausse une carte.",
    "winner_effect": "... -"
  }
}
```
---
### Update a description

#### Link

> PUT :
> /descriptions/update

#### Body exemple (json)
```json
{
  "character_id": -1,
  "citation": "",
  "effect": "",
  "id": 1,
  "looser_effect": "... défausse les 5 cartes du dessus du deck.",
  "rarity_id": 8,
  "special": "Quand ce Terrain entre en jeu, chaque joueur défausse une carte.",
  "winner_effect": "... -"
}
```

#### Response exemple
```json
{
  "code": 200,
  "newDescription": {
    "character_id": -1,
    "citation": "",
    "effect": "",
    "id": 1,
    "looser_effect": "... défausse les 5 cartes du dessus du deck.",
    "rarity_id": 8,
    "special": "Quand ce Terrain entre en jeu, chaque joueur défausse une carte.",
    "winner_effect": "... -"
  }
}
```
---
### Delete a description

#### Link

> DELETE :
> /descriptions/delete

#### Body exemple (json)
```json
{
  "id": 1
}
```

#### Response exemple
```json
{
  "code": 200,
  "deletedDescription": {
    "character_id": -1,
    "citation": "",
    "effect": "",
    "id": 1,
    "looser_effect": "... défausse les 5 cartes du dessus du deck.",
    "rarity_id": 8,
    "special": "Quand ce Terrain entre en jeu, chaque joueur défausse une carte.",
    "winner_effect": "... -"
  }
}
```
---
</details>

<details>
<summary>
Backend CRUD routes for rarities
</summary>

### Create a rarity

#### Link

> POST :
> /rarities/new

#### Body exemple (x-www-form-urlencoded)
| *Key*  | Value |
|--------|-------|
| *id*   | 1     |
| *name* | C     |

#### Response exemple
```json
{
  "code": 200,
  "rarity": {
    "id": 1,
    "name": "C"
  }
}
```
---
### Get a rarity by id

#### Link

> GET :
> /rarities/get

#### Body exemple (json)
```json
{
  "id": 1
}
```

#### Response exemple
```json
{
  "code": 200,
  "rarity": {
    "id": 1,
    "name": "C"
  }
}
```
---
### Update a rarity

#### Link

> PUT :
> /rarities/update

#### Body exemple (json)
```json
{
  "id": 1,
  "name": "C"
}
```

#### Response exemple
```json
{
  "code": 200,
  "newRarity": {
    "id": 1,
    "name": "C"
  }
}
```
---
### Delete a rarity

#### Link

> DELETE :
> /rarities/delete

#### Body exemple (json)
```json
{
  "id": 1
}
```

#### Response exemple
```json
{
  "code": 200,
  "deletedRarity": {
    "id": 1,
    "name": "C"
  }
}
```
---
</details>

<details>
<summary>
Backend CRUD routes for types
</summary>

### Create a type

#### Link

> POST :
> /types/new

#### Body exemple (x-www-form-urlencoded)
| *Key*  | Value   |
|--------|---------|
| *id*   | 1       |
| *name* | Terrain |

#### Response exemple
```json
{
  "code": 200,
  "type": {
    "id": 1,
    "name": "Terrain"
  }
}
```
---
### Get a type by id

#### Link

> GET :
> /types/get

#### Body exemple (json)
```json
{
  "id": 1
}
```

#### Response exemple
```json
{
  "code": 200,
  "type": {
    "id": 1,
    "name": "Terrain"
  }
}
```
---
### Update a type

#### Link

> PUT :
> /types/update

#### Body exemple (json)
```json
{
  "id": 1,
  "name": "Terrain"
}
```

#### Response exemple
```json
{
  "code": 200,
  "newType": {
    "id": 1,
    "name": "Terrain"
  }
}
```
---
### Delete a type

#### Link

> DELETE :
> /types/delete

#### Body exemple (json)
```json
{
  "id": 1
}
```

#### Response exemple
```json
{
  "code": 200,
  "deletedType": {
    "id": 1,
    "name": "Terrain"
  }
}
```
---
</details>

<details>
<summary>
Backend CRUD routes for users
</summary>

### Create a user

#### Link

> POST :
> /users/new

#### Body exemple (x-www-form-urlencoded)
| *Key*      | Value            |
|------------|------------------|
| *email*    | johndoe@mail.com |
| *name*     | john             |
| *lastname* | doe              |
| *password* | Terrain          |

#### Response exemple
```json
{
  "code": 200,
  "user": {
    "email": "johndoe@mail.com",
    "lastname": "john",
    "name": "doe"
  }
}
```
---
### Get a user by email

#### Link

> GET :
> /users/get

#### Body exemple (json)
```json
{
  "email": "johndoe@mail.com"
}
```

#### Response exemple
```json
{
  "code": 200,
  "user": {
    "email": "johndoe@mail.com",
    "lastname": "john",
    "name": "doe"
  }
}
```
---
### Update a user

#### Link

> PUT :
> /users/update

#### Body exemple (json)
```json
{
  "email": "johndoe@mail.com",
  "lastname": "john",
  "name": "doe",
  "password": "$2y$10$wpf6.oOtNUgpFGs67TY.huV4IvOBk6RyJfnUmFJZNwyJXWQ/MJNP2"
}
```

#### Response exemple
```json
{
  "code": 200,
  "newUser": {
    "email": "johndoe@mail.com",
    "lastname": "john",
    "name": "doe",
    "password": "$2y$10$wpf6.oOtNUgpFGs67TY.huV4IvOBk6RyJfnUmFJZNwyJXWQ/MJNP2"
  }
}
```
---
### Delete a user

#### Link

> DELETE :
> /users/delete

#### Body exemple (json)
```json
{
  "email": "johndoe@mail.com"
}
```

#### Response exemple
```json
{
  "code": 200,
  "deletedUser": {
    "email": "johndoe@mail.com",
    "lastname": "john",
    "name": "doe",
    "password": "$2y$10$wpf6.oOtNUgpFGs67TY.huV4IvOBk6RyJfnUmFJZNwyJXWQ/MJNP2"
  }
}
```
---
</details>

# 🖥️ Technologies
This project is my first backend Javascript project.
I learned a lot while trying to figure out how to do what I wanted.

Here are the technologies I used to build this API / backend app :

![Node Js](https://img.shields.io/badge/Node_JS-Server_Runtime-green?style=for-the-badge&logo=node.js)

![Express](https://img.shields.io/badge/Express-API_Structure-black?style=for-the-badge&logo=express)

![Prisma](https://img.shields.io/badge/Prisma-Javascript_ORM-%231A202C?style=for-the-badge&logo=prisma)

![Neon](https://img.shields.io/badge/Neon-Postgres_database-%2300E699?style=for-the-badge)

![Zod](https://img.shields.io/badge/Zod-Typescript_schema_validation-%233068B7?style=for-the-badge&logo=zod)

![Typescript](https://img.shields.io/badge/Typescript-Javascript_Typing-blue?style=for-the-badge&logo=typescript)

![Eslint](https://img.shields.io/badge/Eslint-Javascript_code_style-%234C32C3?style=for-the-badge&logo=eslint)

# 🎞️ Credits
Once again, all this project is based on Wankul cards, created by Wankil Studio and accessible on [this link](https://wankul.fr/).

This is not in association in any way with the creators of Wankul cards.

As for the author of this project, credits goes to Timeuh.