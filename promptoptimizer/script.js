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
    const response = await fetch("https://api-inference.huggingface.co/models/mrm8488/t5-base-finetuned-common_gen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: "rephrase this prompt to make it more effective: " + input
      })
    });

    const data = await response.json();
    if (Array.isArray(data) && data.length > 0 && data[0].generated_text) {
  output.textContent = data[0].generated_text;
} else if (data.generated_text) {
  output.textContent = data.generated_text;
} else {
  output.textContent = "❌ Could not optimize. Try again.";
}
  } catch (err) {
    output.textContent = "❌ Error connecting to free API.";
  }
}
