function generateHook() {
  const hooks = [
    "You won't believe what happened next…",
    "This one mistake is costing you views!",
    "I tried this so you don’t have to.",
    "This video could change how you think forever.",
    "I only had 24 hours to pull this off!",
    "Most people are doing this wrong — are you?",
    "Here's what no one tells you about this topic.",
    "This started out normal… until it didn’t.",
    "I failed. And that’s exactly why you should watch this.",
    "Before you scroll — hear this out."
  ];

  const randomIndex = Math.floor(Math.random() * hooks.length);
  const output = document.getElementById("output");
  output.textContent = hooks[randomIndex];
}
