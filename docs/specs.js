specs = {
    "swagger": "2.0",
    "info": {
        "title": "Spinitron v2",
        "version": "1.0.0"
    },
    "host": "spinitron.com",
    "schemes": [
        "https",
        "http"
    ],
    "securityDefinitions": {
        "Bearer": {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header"
        }
    },
    "basePath": "/api",
    "produces": [
        "application/json",
        "application/xml"
    ],
    "tags": [
        {
            "name": "Persona"
        },
        {
            "name": "Show"
        },
        {
            "name": "Playlist"
        },
        {
            "name": "Spin"
        }
    ],
    "paths": {
        "/personas": {
            "get": {
                "summary": "Get Personas",
                "tags": [
                    "Persona"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "name": "name",
                        "in": "query",
                        "type": "string",
                        "description": "Filter by Persona name"
                    },
                    {
                        "$ref": "#/parameters/limit"
                    },
                    {
                        "$ref": "#/parameters/page"
                    },
                    {
                        "$ref": "#/parameters/fields"
                    },
                    {
                        "$ref": "#/parameters/expand"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The personas",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/Persona"
                            }
                        }
                    }
                }
            }
        },
        "/personas/{id}": {
            "get": {
                "summary": "Get Persona by id",
                "tags": [
                    "Persona"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "type": "integer"
                    },
                    {
                        "$ref": "#/parameters/fields"
                    },
                    {
                        "$ref": "#/parameters/expand"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The Persona",
                        "schema": {
                            "$ref": "#/definitions/Persona"
                        }
                    },
                    "404": {
                        "description": "Persona not found",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        },
        "/shows": {
            "get": {
                "summary": "Get Shows either by datetime range ({start} - {end} where both are optional) or by {date} to get all items for this date.\nResult may be optionally limited by {limit}.\n",
                "tags": [
                    "Show"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "name": "start",
                        "description": "The datetime starting from items must be returned.\nIf only one of {start} or {end} is provided, it will be used as a starting point to fetch items.\n",
                        "in": "query",
                        "type": "string",
                        "format": "date-time"
                    },
                    {
                        "name": "end",
                        "description": "The ending datetime.\nIf only one of {start} or {end} is provided, it will be used as a starting point to fetch items.\n",
                        "in": "query",
                        "type": "string",
                        "format": "date-time"
                    },
                    {
                        "name": "date",
                        "description": "Filter the items by the provided date.\n",
                        "in": "query",
                        "type": "string",
                        "format": "date"
                    },
                    {
                        "$ref": "#/parameters/limit"
                    },
                    {
                        "$ref": "#/parameters/page"
                    },
                    {
                        "$ref": "#/parameters/fields"
                    },
                    {
                        "$ref": "#/parameters/expand"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The shows",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/Show"
                            }
                        }
                    }
                }
            }
        },
        "/shows/{id}": {
            "get": {
                "summary": "Get a Show by",
                "tags": [
                    "Show"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "type": "integer"
                    },
                    {
                        "$ref": "#/parameters/fields"
                    },
                    {
                        "$ref": "#/parameters/expand"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The Show",
                        "schema": {
                            "$ref": "#/definitions/Show"
                        }
                    },
                    "404": {
                        "description": "Show not found",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        },
        "/shows/datetime/{datetime}": {
            "get": {
                "summary": "Get a Show by date/time",
                "tags": [
                    "Show"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "name": "datetime",
                        "in": "path",
                        "required": true,
                        "type": "string",
                        "format": "date-time"
                    },
                    {
                        "$ref": "#/parameters/fields"
                    },
                    {
                        "$ref": "#/parameters/expand"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The Show",
                        "schema": {
                            "$ref": "#/definitions/Show"
                        }
                    },
                    "400": {
                        "description": "Provided datetime is invalid",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    },
                    "404": {
                        "description": "Show not found",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        },
        "/shows/current": {
            "get": {
                "summary": "Get a current (or most recent past) Show",
                "tags": [
                    "Show"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/fields"
                    },
                    {
                        "$ref": "#/parameters/expand"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The Show",
                        "schema": {
                            "$ref": "#/definitions/Show"
                        }
                    },
                    "404": {
                        "description": "Show not found",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        },
        "/playlists": {
            "get": {
                "summary": "Get Playlists either by datetime range ({start} - {end} where both are optional) or by {date} to get all items for this date.\nResult may be optionally limited by {limit}. Only past Playlists will be returned.\n",
                "tags": [
                    "Playlist"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "name": "start",
                        "description": "The datetime starting from items must be returned.\nIf only one of {start} or {end} is provided, it will be used as a starting point to fetch items.\n",
                        "in": "query",
                        "type": "string",
                        "format": "date-time"
                    },
                    {
                        "name": "end",
                        "description": "The ending datetime.\nIf only one of {start} or {end} is provided, it will be used as a starting point to fetch items.\n",
                        "in": "query",
                        "type": "string",
                        "format": "date-time"
                    },
                    {
                        "name": "date",
                        "description": "Filter the items by the provided date.\n",
                        "in": "query",
                        "type": "string",
                        "format": "date"
                    },
                    {
                        "name": "show_id",
                        "description": "Filter by show",
                        "in": "query",
                        "type": "integer"
                    },
                    {
                        "$ref": "#/parameters/limit"
                    },
                    {
                        "$ref": "#/parameters/page"
                    },
                    {
                        "$ref": "#/parameters/fields"
                    },
                    {
                        "$ref": "#/parameters/expand"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The playlists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/Playlist"
                            }
                        }
                    }
                }
            }
        },
        "/playlists/{id}": {
            "get": {
                "summary": "Get a Playlist by id",
                "tags": [
                    "Playlist"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "type": "integer"
                    },
                    {
                        "$ref": "#/parameters/fields"
                    },
                    {
                        "$ref": "#/parameters/expand"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The playlist",
                        "schema": {
                            "$ref": "#/definitions/Playlist"
                        }
                    },
                    "404": {
                        "description": "Playlist not found",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        },
        "/playlists/datetime/{datetime}": {
            "get": {
                "summary": "Get a Playlist by date/time",
                "tags": [
                    "Playlist"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "name": "datetime",
                        "in": "path",
                        "required": true,
                        "type": "string",
                        "format": "date-time"
                    },
                    {
                        "name": "show_id",
                        "description": "Filter by show",
                        "in": "query",
                        "type": "integer"
                    },
                    {
                        "$ref": "#/parameters/fields"
                    },
                    {
                        "$ref": "#/parameters/expand"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The playlist",
                        "schema": {
                            "$ref": "#/definitions/Playlist"
                        }
                    },
                    "400": {
                        "description": "Provided datetime is invalid",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    },
                    "404": {
                        "description": "Playlist not found",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        },
        "/playlists/current": {
            "get": {
                "summary": "Get a current (or most recent past) Playlist",
                "tags": [
                    "Playlist"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "name": "show_id",
                        "description": "Filter by show",
                        "in": "query",
                        "type": "integer"
                    },
                    {
                        "$ref": "#/parameters/fields"
                    },
                    {
                        "$ref": "#/parameters/expand"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The playlist",
                        "schema": {
                            "$ref": "#/definitions/Playlist"
                        }
                    },
                    "404": {
                        "description": "Playlist not found, if there are no past playlists at all",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        },
        "/spins": {
            "get": {
                "summary": "Get Spins either by datetime range ({start} - {end} where both are optional) or by {date} to get all items for this date.\nResult may be optionally limited by {limit}. Only past Spins will be returned.\n",
                "tags": [
                    "Spin"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "name": "start",
                        "description": "The datetime starting from items must be returned.\nIf only one of {start} or {end} is provided, it will be used as a starting point to fetch items.\n",
                        "in": "query",
                        "type": "string",
                        "format": "date-time"
                    },
                    {
                        "name": "end",
                        "description": "The ending datetime.\nIf only one of {start} or {end} is provided, it will be used as a starting point to fetch items.\n",
                        "in": "query",
                        "type": "string",
                        "format": "date-time"
                    },
                    {
                        "name": "date",
                        "description": "Filter the items by the provided date.\n",
                        "in": "query",
                        "type": "string",
                        "format": "date"
                    },
                    {
                        "name": "playlist_id",
                        "description": "Filter by playlist",
                        "in": "query",
                        "type": "integer"
                    },
                    {
                        "name": "show_id",
                        "description": "Filter by show",
                        "in": "query",
                        "type": "integer"
                    },
                    {
                        "$ref": "#/parameters/limit"
                    },
                    {
                        "$ref": "#/parameters/page"
                    },
                    {
                        "$ref": "#/parameters/fields"
                    },
                    {
                        "$ref": "#/parameters/expand"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The spins",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/Spin"
                            }
                        }
                    }
                }
            },
            "post": {
                "summary": "Log a Spin",
                "tags": [
                    "Spin"
                ],
                "description": "An endpoint for automation systems to log spins into the spin table.",
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "name": "spin_timestamp",
                        "in": "formData",
                        "type": "string",
                        "format": "date-time"
                    },
                    {
                        "name": "spin_duration",
                        "in": "formData",
                        "type": "integer"
                    },
                    {
                        "name": "artist_name",
                        "in": "formData",
                        "type": "string",
                        "required": true
                    },
                    {
                        "name": "release_title",
                        "in": "formData",
                        "type": "string"
                    },
                    {
                        "name": "label_name",
                        "in": "formData",
                        "type": "string"
                    },
                    {
                        "name": "song_name",
                        "in": "formData",
                        "type": "string",
                        "required": true
                    },
                    {
                        "name": "song_composer",
                        "in": "formData",
                        "type": "string"
                    },
                    {
                        "name": "song_isrc",
                        "in": "formData",
                        "type": "string"
                    }
                ],
                "responses": {
                    "201": {
                        "description": "The new created Spin.",
                        "schema": {
                            "$ref": "#/definitions/Spin"
                        }
                    },
                    "422": {
                        "description": "Validation failed.",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/ValidationError"
                            }
                        }
                    },
                    "default": {
                        "description": "Failed to create the object for unknown reason.",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        },
        "/spins/{id}": {
            "get": {
                "summary": "Get a Spin by id",
                "tags": [
                    "Spin"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "type": "integer"
                    },
                    {
                        "$ref": "#/parameters/fields"
                    },
                    {
                        "$ref": "#/parameters/expand"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The spin",
                        "schema": {
                            "$ref": "#/definitions/Spin"
                        }
                    },
                    "404": {
                        "description": "Spin not found",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        },
        "/spins/datetime/{datetime}": {
            "get": {
                "summary": "Get a Spin by date/time",
                "tags": [
                    "Spin"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "name": "datetime",
                        "in": "path",
                        "required": true,
                        "type": "string",
                        "format": "date-time"
                    },
                    {
                        "$ref": "#/parameters/fields"
                    },
                    {
                        "$ref": "#/parameters/expand"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The spin",
                        "schema": {
                            "$ref": "#/definitions/Spin"
                        }
                    },
                    "400": {
                        "description": "Provided datetime is invalid",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    },
                    "404": {
                        "description": "Spin not found",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        },
        "/spins/current": {
            "get": {
                "summary": "Get a current (or most recent past) Spin",
                "tags": [
                    "Spin"
                ],
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/fields"
                    },
                    {
                        "$ref": "#/parameters/expand"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The spin",
                        "schema": {
                            "$ref": "#/definitions/Spin"
                        }
                    },
                    "404": {
                        "description": "Spin not found, if there are no past spins at all",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        }
    },
    "parameters": {
        "limit": {
            "name": "limit",
            "description": "Amount of items to return",
            "in": "query",
            "type": "integer",
            "default": 5,
            "minimum": 1
        },
        "page": {
            "name": "page",
            "description": "Offset, used together with limit",
            "in": "query",
            "type": "integer",
            "minimum": 1
        },
        "fields": {
            "name": "fields",
            "description": "Allows to select only needed fields",
            "in": "query",
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "expand": {
            "name": "expand",
            "description": "Allows to select extra fields",
            "in": "query",
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    },
    "definitions": {
        "Persona": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "name": {
                    "type": "string"
                },
                "role": {
                    "type": "integer",
                    "description": "0 - disabled, 11 - new user, 22 - user, 33 - editor, 44 - admin\n",
                    "enum": [
                        0,
                        11,
                        22,
                        33,
                        44
                    ]
                },
                "bio": {
                    "type": "string"
                },
                "since": {
                    "type": "string",
                    "format": "date"
                },
                "email": {
                    "type": "string"
                },
                "website": {
                    "type": "string"
                },
                "img_profile": {
                    "type": "string"
                },
                "_links": {
                    "type": "object",
                    "properties": {
                        "self": {
                            "$ref": "#/definitions/Link"
                        },
                        "shows": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/Link"
                            }
                        }
                    }
                }
            }
        },
        "Show": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "duration_min": {
                    "type": "integer"
                },
                "category": {
                    "type": "string"
                },
                "title": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "since": {
                    "type": "string",
                    "format": "date",
                    "description": "UTC date, ISO-8601."
                },
                "url": {
                    "type": "string"
                },
                "hide_dj": {
                    "type": "boolean"
                },
                "automation": {
                    "type": "boolean"
                },
                "img_show": {
                    "type": "string"
                },
                "_links": {
                    "type": "object",
                    "properties": {
                        "self": {
                            "$ref": "#/definitions/Link"
                        },
                        "personas": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/Link"
                            }
                        },
                        "playlists": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/Link"
                            }
                        }
                    }
                }
            }
        },
        "Playlist": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "persona_id": {
                    "type": "integer"
                },
                "show_id": {
                    "type": "integer"
                },
                "start": {
                    "type": "string",
                    "format": "date-time",
                    "description": "UTC datetime, ISO-8601."
                },
                "timezone": {
                    "type": "string"
                },
                "duration_min": {
                    "type": "integer"
                },
                "category": {
                    "type": "string"
                },
                "title": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "since": {
                    "type": "string",
                    "format": "date"
                },
                "url": {
                    "type": "string"
                },
                "hide_dj": {
                    "type": "boolean"
                },
                "automation": {
                    "type": "boolean"
                },
                "episode_name": {
                    "type": "string"
                },
                "episode_description": {
                    "type": "string"
                },
                "_links": {
                    "type": "object",
                    "properties": {
                        "self": {
                            "$ref": "#/definitions/Link"
                        },
                        "persona": {
                            "$ref": "#/definitions/Link"
                        },
                        "show": {
                            "$ref": "#/definitions/Link"
                        }
                    }
                }
            }
        },
        "Spin": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "playlist_id": {
                    "type": "integer"
                },
                "spin_timestamp": {
                    "type": "string",
                    "format": "date-time",
                    "description": "UTC datetime, ISO-8601."
                },
                "timezone": {
                    "type": "string"
                },
                "spin_duration": {
                    "type": "integer"
                },
                "artist_name": {
                    "type": "string"
                },
                "release_title": {
                    "type": "string"
                },
                "label_name": {
                    "type": "string"
                },
                "song_name": {
                    "type": "string"
                },
                "song_composer": {
                    "type": "string"
                },
                "song_isrc": {
                    "type": "string"
                },
                "_links": {
                    "type": "object",
                    "properties": {
                        "self": {
                            "$ref": "#/definitions/Link"
                        },
                        "playlist": {
                            "$ref": "#/definitions/Link"
                        }
                    }
                }
            }
        },
        "ValidationError": {
            "type": "object",
            "properties": {
                "field": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            }
        },
        "Error": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "status": {
                    "type": "integer"
                },
                "type": {
                    "type": "string"
                }
            }
        },
        "Link": {
            "type": "object",
            "properties": {
                "href": {
                    "type": "string"
                }
            }
        }
    }
}
