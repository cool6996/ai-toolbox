async function optimizePrompt() {
  const input = document.getElementById("inputPrompt").value.trim();
  const output = document.getElementById("output");
  const outputBox = document.getElementById("outputContainer");

  if (!input) {
    alert("Enter a prompt first.");
    return;
  }

  output.textContent = "⏳ Optimizing your prompt...";
  outputBox.classList.remove("hidden");

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-small", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: "Improve this prompt: " + input
      })
    });

    const data = await response.json();

    if (Array.isArray(data) && data[0]?.generated_text) {
      output.textContent = data[0].generated_text;
    } else {
      output.textContent = "❌ Could not optimize. Try again.";
    }

  } catch (err) {
    output.textContent = "❌ Error connecting to free API.";
  }
}
