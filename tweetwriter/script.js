function generateTweet() {
  const tweets = [
    "Me: I'm gonna sleep early tonight. Also me: why do pigeons bob their heads when they walk?",
    "This coffee isn't working. Send emotional support instead.",
    "Adulting is mostly whispering 'what the hell' to yourself every 30 seconds.",
    "If life gives you lemons, ask for coffee instead.",
    "Why use 20 words when you can panic silently?",
    "Mood: aggressively average.",
    "Just saw someone jogging and now I'm tired.",
    "My brain has too many tabs open.",
    "Day 74 of pretending to be productive.",
    "Thinking about starting a podcast where I just scream."
  ];

  const randomIndex = Math.floor(Math.random() * tweets.length);
  const output = document.getElementById("output");
  output.textContent = tweets[randomIndex];
}
