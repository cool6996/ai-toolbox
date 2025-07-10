function generateEmail() {
  const funnyEmails = [
    "Subject: Let’s pretend we’ve met before\n\nHey there, I’m [Your Name]. You don’t know me, but I Googled you and figured I’d say hi anyway. Interested in a slightly awkward but productive partnership?",
    "Subject: Totally not spam\n\nHi, I’m reaching out because I have a slightly desperate offer and a lot of optimism. Let's talk!",
    "Subject: Business-ish Proposal\n\nHey, you seem important. I’m trying to be important too. Let’s join forces and confuse everyone.",
    "Subject: Just a stranger with a pitch\n\nHi there, thought you might love unsolicited emails. If not, I apologize… but hear me out.",
    "Subject: One shot at greatness (maybe)\n\nHi, it’s me, not your usual inbox disaster. Quick idea: you, me, and a small chance at glory. Thoughts?",
    "Subject: Professional and slightly needy\n\nHello, I'm not a bot (yet). I think we could benefit from chatting. Maybe.",
    "Subject: Icebreaker email you didn’t ask for\n\nHi! Let’s connect and pretend this cold email was warm and fuzzy.",
    "Subject: This could be something\n\nHey, hope this email stands out in the sea of pitches. If not, I'll blame the algorithm.",
    "Subject: Possible win-win (or mild regret)\n\nHi there, I have an idea that might be good. If not, we can laugh about it later.",
    "Subject: Inbox roulette\n\nHello! Just spinning the cold email wheel today. Maybe we hit jackpot?"
  ];

  const randomIndex = Math.floor(Math.random() * funnyEmails.length);
  const output = document.getElementById("output");
  output.textContent = funnyEmails[randomIndex];
}
