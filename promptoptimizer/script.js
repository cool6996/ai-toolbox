function optimizePrompt() {
  const input = document.getElementById("inputPrompt").value.trim();
  const output = document.getElementById("output");
  const outputBox = document.getElementById("outputContainer");

  if (!input) {
    alert("Enter a prompt first.");
    return;
  }

  output.textContent = "⏳ Optimizing your prompt...";
  outputBox.classList.remove("hidden");

  // Simulated delay
  setTimeout(() => {
    const examples = [
      "Rewrite this to sound more professional and clear: " + input,
      "Enhance this prompt to be more specific and effective: " + input,
      "Make this prompt more creative and detailed: " + input
    ];

    // Pick a random response type
    const result = examples[Math.floor(Math.random() * examples.length)];

    output.textContent = result;
  }, 1200);
}
