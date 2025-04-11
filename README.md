# 🎴 Pokémon Card Generator

A fun, interactive Pokémon card generator built with **HTML**, **CSS**, and **JavaScript** using the [PokeAPI](https://pokeapi.co). Click the **"Generate"** button to get a random Pokémon card with its name, image, types, HP, and stats like attack, defense, and speed.

---

## 🚀 Features

- 🔄 Generates a new Pokémon every time you click the "Generate" button
- 🖼 Displays Pokémon image, HP, name, and stats
- 🎨 Type-based color theming for card background and tags
- 📱 Responsive, minimal card-style UI

---

## 📦 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- [PokeAPI](https://pokeapi.co) for live Pokémon data

---

## 🧠 How It Works

1. On load or button click, a random Pokémon ID (1–150) is selected.
2. A request is sent to the PokeAPI to fetch data for that Pokémon.
3. The card is populated with the Pokémon's:
   - HP (from `stats[0]`)
   - Image (`sprites.other.dream_world.front_default`)
   - Name
   - Types (e.g., fire, water)
   - Base stats: Attack, Defense, and Speed
4. The background color is dynamically styled based on the primary type.

---

## 📂 Project Structure

