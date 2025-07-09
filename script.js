:root {
  --bg: #f5f5f5;
  --text: #222;
  --card-bg: white;
  --card-shadow: rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] {
  --bg: #121212;
  --text: #f5f5f5;
  --card-bg: #1e1e1e;
  --card-shadow: rgba(255, 255, 255, 0.05);
}

body {
  font-family: sans-serif;
  background: var(--bg);
  color: var(--text);
  margin: 0;
  padding: 0;
}

header {
  text-align: center;
  padding: 3rem 1rem 2rem;
  background: var(--card-bg);
  box-shadow: 0 1px 5px var(--card-shadow);
  position: relative;
}

.dark-toggle {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  background: none;
  border: none;
  color: var(--text);
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

header p {
  color: var(--text);
  font-size: 1.1rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1000px;
  margin: auto;
}

.card {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 3px 10px var(--card-shadow);
  transition: all 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px var(--card-shadow);
}

.card h2 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 0.95rem;
  color: var(--text);
}
