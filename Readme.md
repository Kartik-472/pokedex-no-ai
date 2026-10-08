# Pokédex

A simple Pokémon search web application built with **HTML, CSS, and JavaScript** using the [PokéAPI](https://pokeapi.co/).

## Features

* Search for Pokémon by name
* Display Pokémon image
* Display Pokémon type
* Display height and weight
* Convert API height and weight values into readable units
* Handle invalid Pokémon names
* Prevent empty searches
* Responsive layout for smaller screens

## Tech Stack

* **HTML5** - Page structure
* **CSS3** - Styling and responsive layout
* **JavaScript** - Application logic and DOM manipulation
* **PokéAPI** - Pokémon data and images

## API

This project uses **PokéAPI**, a free and open RESTful Pokémon API that does not require authentication.

API endpoint used:

```text
https://pokeapi.co/api/v2/pokemon/{name}
```

## How It Works

1. Enter a Pokémon name in the search box.
2. JavaScript validates the input.
3. The application sends a request to PokéAPI.
4. The API returns Pokémon data in JSON format.
5. JavaScript extracts the required information.
6. The Pokémon details are dynamically displayed on the page.

## Project Structure

```text
pokedex/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## What I Learned

This project was built to practice the fundamentals of web development, including:

* DOM selection and manipulation
* Event listeners and form handling
* Fetching data from a REST API
* Working with JSON responses
* Handling API errors
* Input validation
* Working with arrays and nested objects
* Basic responsive web design

## Future Improvements

* Display multiple Pokémon types
* Add Pokémon stats
* Add loading states
* Improve error messages
* Add Pokémon search suggestions
* Add a Pokémon list or full Pokédex view

## Credits

Pokémon data provided by **PokéAPI**.

Pokémon and Pokémon character names are trademarks of Nintendo. This project is made for educational purposes.
