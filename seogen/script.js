const seoForm = document.getElementById("seo-form");
const outputBox = document.getElementById("seo-output");

const funnyTitles = [
  "🥇 World's Worst SEO Title (But Hey, It's Unique!)",
  "📈 Rank #1 on Mars with This Title",
  "🧀 This Title Is Full of Cheese and Clickbait",
  "🐸 Google Said 'No', But We Said 'YOLO'",
  "💀 Warning: May Summon Old MySpace Users",
  "📉 Guaranteed to Tank Your Rankings in 24 Hours",
  "🎩 Top Hat Tips for Mysterious Algorithms",
  "🧪 SEO Tested by a Mad Scientist (No Refunds)",
  "🔥 Clickbait Level: Expert Mode Enabled",
  "🚀 This Title Ranks Somewhere... Probably Pluto"
];

const funnyDescriptions = [
  "This meta description is so optimized, it may cause spontaneous ranking (in your dreams).",
  "Click here to unlock SEO secrets known only to raccoons and wizards.",
  "Crafted by a drunk AI at 3 AM — strangely effective.",
  "Warning: Using this may summon Google bots with attitude.",
  "We asked ChatGPT to do SEO. It cried and gave us this.",
  "May or may not have been inspired by a TikTok guru with zero followers.",
  "This one goes viral in opposite land.",
  "Your competitors will laugh... until they realize you're outranking them.",
  "Google called. They want their algorithm back.",
  "No keywords. No sense. Just vibes."
];

seoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const randomTitle =
    funnyTitles[Math.floor(Math.random() * funnyTitles.length)];
  const randomDesc =
    funnyDescriptions[Math.floor(Math.random() * funnyDescriptions.length)];

  outputBox.innerHTML = `
    <h3>⚠️ Your Totally Legit SEO Output:</h3>
    <p><strong>Title:</strong> ${randomTitle}</p>
    <p><strong>Meta Description:</strong> ${randomDesc}</p>
    <p style="font-size: 0.8em; color: gray;">(Results may or may not destroy your site's reputation.)</p>
  `;
});
