// JigsawNote sample content
window.JN_DATA = {
  user: { name: "Priya Anand", email: "priya@jigsawnote.app" },
  notebooks: [
    { id: "nb-work", name: "Work", color: "primary", count: 14 },
    { id: "nb-ideas", name: "Ideas", color: "secondary", count: 9 },
    { id: "nb-life", name: "Personal", color: "success", count: 6 },
    { id: "nb-read", name: "Reading", color: "warning", count: 11 },
  ],
  tags: ["roadmap", "meeting", "draft", "someday", "recipe"],
  notes: [
    { id: "n1", nb: "nb-work", title: "Q3 roadmap draft", tags: ["roadmap"], pinned: true, edited: "2h", color: "primary",
      body: "Three bets for Q3:\n\n1. Connected notes — link any two pieces and surface the graph.\n2. Reminders that actually nudge.\n3. Faster capture from anywhere.\n\nOpen question: do we ship the graph view before or after mobile?" },
    { id: "n2", nb: "nb-work", title: "Sync sprint retro", tags: ["meeting"], pinned: false, edited: "5h", color: "primary",
      body: "What went well: pairing on the merge engine.\nWhat to change: smaller PRs, earlier design review.\nAction: Priya to spec the conflict UI by Thursday." },
    { id: "n3", nb: "nb-ideas", title: "The jigsaw metaphor", tags: ["draft", "someday"], pinned: true, edited: "1d", color: "secondary",
      body: "Every note is a piece. On its own it's a fragment; the value is in the fit. The product should reward connecting, not just collecting." },
    { id: "n4", nb: "nb-life", title: "Trip packing list", tags: [], pinned: false, edited: "1d", color: "success",
      body: "Passport, chargers, the good headphones, a paperback for the plane. Book the airport transfer the night before." },
    { id: "n5", nb: "nb-read", title: "Highlights — Deep Work", tags: ["someday"], pinned: false, edited: "2d", color: "warning",
      body: "Attention residue is real. Batch shallow tasks. Schedule every minute, then adapt. Boredom tolerance is a trainable skill." },
    { id: "n6", nb: "nb-ideas", title: "Recipe: miso greens", tags: ["recipe"], pinned: false, edited: "3d", color: "secondary",
      body: "Blanch greens. Whisk miso, tahini, rice vinegar, a little maple. Toss warm. Top with sesame. Absurdly good." },
  ],
};
