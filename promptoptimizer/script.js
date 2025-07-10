const promptForm = document.getElementById("prompt-form");
const outputBox = document.getElementById("prompt-output");

const fakeOptimizations = [
  "Rewritten Prompt: Explain quantum physics like you're Gordon Ramsay yelling at a potato.",
  "Rewritten Prompt: Describe the economy as if you're a pirate searching for buried treasure.",
  "Rewritten Prompt: Write a motivational speech about AI as a retired WWE wrestler.",
  "Rewritten Prompt: Summarize AI ethics using 90s cartoon characters.",
  "Rewritten Prompt: Explain ChatGPT as if you're trying to sell it on a late-night infomercial.",
  "Rewritten Prompt: Make this prompt sound like it's written by Shakespeare... if he was on Twitter.",
  "Rewritten Prompt: Turn this into a heist plan led by robots with British accents.",
  "Rewritten Prompt: Convert this to Gen Z slang and throw in 3 TikTok references.",
  "Rewritten Prompt: Format this like an ancient prophecy discovered on a USB drive.",
  "Rewritten Prompt: Reframe the topic as a dramatic breakup letter to humanity from AI."
];

promptForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const randomFake =
    fakeOptimizations[Math.floor(Math.random() * fakeOptimizations.length)];

  outputBox.innerHTML = `
    <h3>Optimized Prompt</h3>
    <p>${randomFake}</p>
    <p style="font-size: 0.8em; color: gray;">(100% optimized for entertainment)</p>
  `;
});
