# <span align="center"><samp>Movie Flix</samp></span>

Mobile app for discovering and exploring movies. Browse trending and latest movies, search for titles, view detailed information, and track your favorite films. Features trending movies based on popular searches tracked via Appwrite backend.

## Demo

![app view](docs/demo.png)

## Features

- **Browse & Discover**: Trending movies algorithm powered by search analytics, latest releases
- **Smart Search**: Real-time movie search with search tracking and trending rankings
- **Rich Details**: Comprehensive movie information with ratings, budgets, production details
- **Cross-Platform**: Native iOS, Android, and Web support via Expo

## Tech Stack

- **React Native** with **Expo** (~54.0) – cross-platform mobile development
- **Expo Router** (~6.0) – file-based routing
- **NativeWind** (v4.2) – TailwindCSS for React Native styling
- **TypeScript** – type-safe development
- **TMDB API** – movie data (The Movie Database)
- **Appwrite** – backend for tracking search trends and analytics

## Screens

- `/` – Home: Trending movies and latest releases
- `/search` – Search movies with real-time results
- `/saved` – Saved movies
- `/profile` – User profile
- `/movies/:id` – Movie details page

## Project structure

```bash
app/
├─ (tabs)/
│  ├─ index.tsx          # Home screen
│  ├─ search.tsx         # Search screen
│  ├─ saved.tsx          # Saved movies
│  ├─ profile.tsx        # User profile
│  └─ _layout.tsx        # Tab navigation layout
├─ movies/
│  └─ [id].tsx           # Movie details page
└─ _layout.tsx           # Root layout

components/              # Reusable UI components
services/                # API connections & data fetching
constants/               # App constants
interfaces/              # TypeScript type definitions
```

## Installation

```bash
# 1. Clone
git clone https://github.com/zeglicz/movie-flix.git
cd movie-flix

# 2. Install
npm install

# 3. Env
cp .env.example .env   # fill values

# 4. Start development server
npm start

# 5. Run on specific platform (optional)
npm run ios           # iOS simulator
npm run android       # Android emulator
npm run web           # Web browser
```
