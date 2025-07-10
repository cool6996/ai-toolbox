const seoForm = document.getElementById("seo-form");
const outputBox = document.getElementById("seo-output");

const fakeTitles = [
  "🚨 This Title Is So Good Even Google Blushed",
  "🤯 Boost Traffic (Or At Least Confuse Your Competitors)",
  "🔥 Guaranteed to Rank Somewhere... Maybe",
  "🚀 Rocket Your SEO to the Moon (Or Just Out of the Basement)",
  "🧠 SEO-Enhanced with 98% More Brains",
  "📉 Clickbait Title — Works 12% of the Time Every Time",
  "🦄 Unicorn Approved Meta Magic Inside",
  "⚡ Break Google's Brain (in a good way)",
  "🥷 Ninja-Level Optimization (No Actual Ninjas Used)",
  "👻 Ghostwritten by an AI with Trust Issues"
];

const fakeDescriptions = [
  "This meta description won’t boost your rankings but will make you chuckle.",
  "Perfect for fooling bots and impressing your mom.",
  "SEO pros cried reading this... in a good way.",
  "Click here before your competitors do (or don’t).",
  "This content might go viral. Or not. Who knows?",
  "As seen in zero publications, but still pretty solid.",
  "AI-approved. Human-confused.",
  "Our best description since we fired the intern.",
  "Tuned for algorithms, not common sense.",
  "Meta so good, it should cost money (but it's fake)."
];

seoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = fakeTitles[Math.floor(Math.random() * fakeTitles.length)];
  const desc = fakeDescriptions[Math.floor(Math.random() * fakeDescriptions.length)];

  outputBox.innerHTML = `
    <h3>SEO Output</h3>
    <p><strong>Title:</strong> ${title}</p>
    <p><strong>Meta Description:</strong> ${desc}</p>
    <p style="font-size: 0.8em; color: gray;">(100% fake. 0% ranking power... for now.)</p>
  `;
});
