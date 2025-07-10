function generateCaption() {
  const funnyCaptions = [
    "Proof I touched grass today.",
    "Still no idea what I'm doing, but here's a picture.",
    "If you're reading this, send snacks.",
    "Just pretending life’s not chaotic.",
    "Tried to be productive, ended up taking this photo.",
    "This is my influencer era (kind of).",
    "Yes, I took 78 photos to post this one.",
    "Smiling through the confusion.",
    "Caught in 4K doing absolutely nothing.",
    "I made this post while avoiding responsibilities."
  ];

  const randomIndex = Math.floor(Math.random() * funnyCaptions.length);
  const output = document.getElementById("output");
  output.textContent = funnyCaptions[randomIndex];
}
