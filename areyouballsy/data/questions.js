/* ---------------------------------------------------------------
   QUESTION BANK
   dir: 'asc'  -> option index 0 scores 1, last option scores 5 (evenly spaced)
        'desc' -> option index 0 scores 5, last option scores 1
        'fixed'-> every option scores the same fixedScore
        'explicit' -> options is [{label, score}] directly
--------------------------------------------------------------- */
export const bank = {
  "Social Courage": [
    { id: "S002", text: "How many times in the past month have you deliberately started a conversation with someone you did not know?", options: ["Very often", "Often", "Neutral", "Rarely", "Very rarely"], dir: "desc", weight: 4, difficulty: 3 },
    { id: "S003", text: "When was the last time you did something social alone?", options: ["Never", "Monthly", "Weekly", "Daily"], dir: "asc", weight: 3, difficulty: 2 },
    { id: "S004", text: "How often do you skip social events because staying home feels safer?", options: ["Very often", "Often", "Neutral", "Rarely", "Very rarely"], dir: "asc", weight: 2, difficulty: 3 },
    { id: "S005", text: "How often do you think, 'I should go over and talk to them,' but do not?", options: ["Very often", "Often", "Neutral", "Rarely", "Very rarely"], dir: "asc", weight: 3, difficulty: 2 },
    { id: "S006", text: "Even when I am afraid of looking foolish, I ask questions when I need answers.", options: ["Very often", "Often", "Neutral", "Rarely", "Very rarely"], dir: "desc", weight: 4, difficulty: 3 },
    { id: "S007", text: "Even when I feel nervous, I take the initiative to introduce myself.", options: ["Very often", "Often", "Neutral", "Rarely", "Very rarely"], dir: "desc", weight: 5, difficulty: 4 },
    { id: "S008", text: "How often do you attend events where you do not know anyone beforehand?", options: ["Very often", "Often", "Neutral", "Rarely", "Very rarely"], dir: "desc", weight: 4, difficulty: 3 },
  ],
  "Conflict Courage": [
    { id: "K002", text: "Have you ever lost respect for yourself because you didn't speak up?", options: ["Very often", "Often", "Neutral", "Rarely", "Very rarely"], dir: "asc", weight: 4, difficulty: 2 },
    { id: "K003", text: "Do you often end up in confrontations or conflicts?", options: ["Very often", "Often", "Neutral", "Rarely", "Very rarely"], dir: "asc", weight: 2, difficulty: 2 },
    { id: "K004", text: "How likely are you to speak up if someone cuts in front of you in a queue?", options: ["Very unlikely", "Unlikely", "Neither likely nor unlikely", "Likely", "Very likely"], dir: "asc", weight: 3, difficulty: 2 },
    { id: "K005", text: "I address problems directly with the person involved, even when it feels uncomfortable.", options: ["Very often", "Often", "Neutral", "Rarely", "Very rarely"], dir: "desc", weight: 5, difficulty: 2 },
    { id: "K006", text: "I set clear boundaries.", options: [{ label: "Yes", score: 5 }, { label: "No", score: 1 }], dir: "explicit", weight: 5, difficulty: 1 },
    { id: "K007", text: "I try to avoid conflict by going along with what others want.", options: ["Very often", "Often", "Neutral", "Rarely", "Very rarely"], dir: "asc", weight: 4, difficulty: 3 },
    {
      id: "K008", text: "A colleague takes credit for your work. What do you do?", options: [
        { label: "I do nothing.", score: 1 },
        { label: "I get annoyed but let it pass.", score: 2 },
        { label: "I discuss it with other colleagues, but not with the person.", score: 3 },
        { label: "I address it privately with the colleague afterwards.", score: 4 },
        { label: "I calmly and professionally speak up right away.", score: 5 },
      ], dir: "explicit", weight: 5, difficulty: 5
    },
    {
      id: "K009", text: "A friend makes a demeaning comment about you in front of others. What do you do?", options: [
        { label: "I let it pass, even though it bothers me.", score: 1 },
        { label: "I laugh it off, but think about it afterwards.", score: 2 },
        { label: "I say nothing at the time, but bring it up later.", score: 3 },
        { label: "I calmly say that the comment is not okay.", score: 4 },
        { label: "I set a clear boundary respectfully right then.", score: 5 },
      ], dir: "explicit", weight: 5, difficulty: 4
    },
  ],
  "Career Courage": [
    { id: "KA001", text: "I apply for positions even when I do not meet all the requirements.", options: [{ label: "Yes", score: 5 }, { label: "No", score: 1 }], dir: "explicit", weight: 5, difficulty: 4 },
    { id: "KA004", text: "I can hold a strong opinion on an issue even when I am unsure whether I am right.", options: [{ label: "Yes", score: 5 }, { label: "No", score: 1 }], dir: "explicit", weight: 2, difficulty: 1 },
    { id: "KA005", text: "It is not important for me to promote myself; I would rather let others shine.", options: ["Very often", "Often", "Neutral", "Rarely", "Very rarely"], dir: "asc", weight: 2, difficulty: 1 },
    { id: "KA007", text: "Have you ever stayed in a job primarily because it felt safe?", options: [{ label: "Yes", score: 1 }, { label: "No", score: 5 }], dir: "explicit", weight: 4, difficulty: 3 },
    {
      id: "KA011", text: "Your dream job is posted. You meet about 70% of the requirements. What do you do?", options: [
        { label: "I don't apply because I don't meet all the requirements.", score: 1 },
        { label: "I consider applying, but probably won't.", score: 2 },
        { label: "I submit an application, but without high expectations.", score: 3 },
        { label: "I apply and clearly explain why I'm a good fit for the role.", score: 4 },
        { label: "I actively apply, highlight my strengths, and follow up on the application.", score: 5 },
      ], dir: "explicit", weight: 5, difficulty: 4
    },
    {
      id: "KA012", text: "You post something you're proud of and get negative feedback. How do you react?", options: [
        { label: "I delete the content and regret sharing it.", score: 1 },
        { label: "I'm strongly affected and think about it a lot afterward.", score: 2 },
        { label: "I'm disappointed, but I don't let it stop me.", score: 3 },
        { label: "I consider whether the criticism has value, and move on.", score: 4 },
        { label: "I stand by what I shared and don't let negative feedback control me.", score: 5 },
      ], dir: "explicit", weight: 5, difficulty: 4
    },
  ],
  "Adventure Seeking": [
    { id: "E001", text: "I am happy to try new activities.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 2, difficulty: 1 },
    { id: "E002", text: "I enjoy spontaneous experiences.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 1, difficulty: 1 },
    { id: "E003", text: "I do things without knowing exactly how they will turn out.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 4, difficulty: 4 },
    { id: "E004", text: "I actively seek out new experiences.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 4, difficulty: 3 },
    { id: "E005", text: "I often choose the familiar over the unfamiliar.", options: ["Strongly agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Strongly disagree"], dir: "desc", weight: 4, difficulty: 3 },
    { id: "E006", text: "I like challenging my routines.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 3, difficulty: 2 },
    { id: "E007", text: "What would you do next week if you cared 50% less about what others think?", options: ["Nothing different", "A little different", "A few concrete things", "Several things I've been putting off", "I would do something I've long been afraid of"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "E008", text: "When was the last time you did something that made you feel foolish?", options: ["Can't remember", "More than 1 year ago", "In the past 12 months", "In the past 3 months", "In the past 30 days"], dir: "asc", weight: 4, difficulty: 4 },
    { id: "E009", text: "What are you afraid people will find out about you?", options: ["Nothing", "A few small things", "Certain weaknesses", "Several sides of myself", "Something I actively hide"], dir: "desc", weight: 5, difficulty: 5 },
    { id: "E010", text: "I often say yes to opportunities on the spur of the moment.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 3, difficulty: 2 },
    { id: "E011", text: "I am motivated by what is new and unfamiliar.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 3, difficulty: 2 },
    { id: "E012", text: "I thrive when plans change spontaneously.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 2, difficulty: 2 },
    { id: "E013", text: "I seek out experiences that make me a little nervous.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 5, difficulty: 4 },
    { id: "E014", text: "When was the last time you did something for the first time?", options: ["Can't remember", "More than 1 year ago", "In the past 12 months", "In the past 3 months", "In the past 30 days"], dir: "asc", weight: 5, difficulty: 4 },
    { id: "E015", text: "How often do you say no to new experiences because they feel uncomfortable?", options: ["Very often", "Often", "Sometimes", "Rarely", "Never"], dir: "asc", weight: 4, difficulty: 4 },
    { id: "E016", text: "What have you postponed trying because of uncertainty?", options: ["Nothing", "Something small", "One thing", "Several things", "Something I really want to do"], dir: "desc", weight: 5, difficulty: 5 },
    { id: "E017", text: "How far would you travel alone without a detailed plan?", options: ["Wouldn't travel alone", "Within my own city", "Within my own country", "Europe", "Anywhere in the world"], dir: "asc", weight: 4, difficulty: 4 },
    { id: "E018", text: "Have you ever let fear stop you from an experience you wanted?", options: ["Many times", "Several times", "Sometimes", "Rarely", "Never"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "E019", text: "Would you trade a safe weekend for an unknown adventure?", options: ["Never", "Rarely", "Maybe", "Gladly", "Absolutely"], dir: "asc", weight: 4, difficulty: 3 },
    { id: "E020", text: "What is the most spontaneous decision you have made in the past year?", options: ["Nothing in particular", "A minor spontaneous act", "A spontaneous activity", "A spontaneous trip or experience", "A major life decision made spontaneously"], dir: "asc", weight: 4, difficulty: 3 },
    { id: "E021", text: "How often do you choose safety over authenticity?", options: ["Very often", "Often", "Sometimes", "Rarely", "Never"], dir: "asc", weight: 5, difficulty: 5 },
  ],
  "Physical Courage": [
    { id: "F001", text: "I enjoy physical challenges.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 3, difficulty: 2 },
    { id: "F002", text: "I feel comfortable in my body and like showing myself off.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 3, difficulty: 3 },
    { id: "F006", text: "I regularly challenge myself physically.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 4, difficulty: 3 },
    { id: "F007", text: "I avoid activities that seem risky.", options: ["Strongly agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Strongly disagree"], dir: "asc", weight: 4, difficulty: 4 },
    { id: "F008", text: "Would you try something that made you nervous?", options: ["Never", "Rarely", "Maybe", "Probably", "Definitely"], dir: "asc", weight: 5, difficulty: 4 },
    { id: "F009", text: "I would try an extreme sport.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 3, difficulty: 4 },
  ],
  "Emotional Courage": [
    { id: "EM001", text: "I dare to show vulnerability.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "EM002", text: "I admit when I am wrong.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 4, difficulty: 4 },
    { id: "EM003", text: "How much of your life do you live for yourself?", options: ["Very little", "Little", "About half", "A lot", "Almost all"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "EM004", text: "What would you do differently if no one could judge you?", options: ["Almost everything", "Quite a lot", "Some", "A little", "Nothing"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "EM005", text: "I avoid doing things because I am afraid of looking foolish.", options: ["Strongly agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Strongly disagree"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "EM006", text: "I think a lot about what other people think of me.", options: ["Strongly agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Strongly disagree"], dir: "asc", weight: 5, difficulty: 4 },
    { id: "EM007", text: "Criticism affects me for a long time.", options: ["Strongly agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Strongly disagree"], dir: "asc", weight: 4, difficulty: 4 },
    { id: "EM008", text: "I cannot tolerate others pointing out my weaknesses.", options: ["Strongly agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Strongly disagree"], dir: "asc", weight: 4, difficulty: 4 },
  ],
  "Romantic Courage": [
    { id: "KJ001", text: "I dare to show romantic interest.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 5, difficulty: 4 },
    { id: "KJ002", text: "I take initiative when dating.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 5, difficulty: 4 },
    { id: "KJ003", text: "Do you actually want to end a relationship but are afraid to because of uncertainty?", options: ["Yes, absolutely", "Partly", "Unsure", "Probably not", "No"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "KJ004", text: "Are you honest with a partner about your own dreams?", options: ["Never", "Rarely", "Sometimes", "Often", "Always"], dir: "asc", weight: 4, difficulty: 4 },
    { id: "KJ005", text: "Are you more afraid of rejection or of never trying?", options: ["Much more afraid of rejection", "Slightly more afraid of rejection", "Equally afraid of both", "Slightly more afraid of never trying", "Much more afraid of never trying"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "KJ006", text: "Is there someone you wish you had been more honest with?", options: ["Many people", "Several people", "One person", "Maybe", "No one"], dir: "asc", weight: 4, difficulty: 4 },
    { id: "KJ007", text: "You meet someone you are interested in. What do you do?", options: ["Do nothing", "Hope the person takes the initiative", "Flirt cautiously", "Ask for their contact info", "Ask them out"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "KJ008", text: "How many times have you refrained from showing interest in someone because you feared rejection?", options: ["Very many", "Many", "Some", "A few", "None"], dir: "asc", weight: 5, difficulty: 5 },
  ],
  "Biology/Physiology": [
    { id: "B001", text: "Do you avoid situations that increase your heart rate?", options: ["Always", "Often", "Sometimes", "Rarely", "Never"], dir: "asc", weight: 4, difficulty: 4 },
    { id: "B002", text: "Do you often experience stress symptoms?", options: ["Very often", "Often", "Sometimes", "Rarely", "Never"], dir: "asc", weight: 3, difficulty: 2 },
    { id: "B004", text: "How do you respond to fear?", options: ["Withdraw", "Delay taking action", "Think it over", "Act carefully", "Act despite the fear"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "B005", text: "Do you enjoy social situations?", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 3, difficulty: 2 },
    { id: "B007", text: "How often do you experience anxiety in normal situations?", options: ["Very often", "Often", "Sometimes", "Rarely", "Never"], dir: "asc", weight: 4, difficulty: 3 },
  ],
  "Moral Courage": [
    { id: "P001", text: "I stand up for others.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 5, difficulty: 4 },
    { id: "P002", text: "I speak up when I see injustice.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 5, difficulty: 4 },
    { id: "P003", text: "Have you ever witnessed something you believed was wrong without intervening?", options: ["Many times", "Several times", "Sometimes", "Rarely", "Never"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "P004", text: "How much social risk are you willing to take to stand up for what you believe in?", options: ["None", "A little", "Moderate", "Significant", "Whatever it takes"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "P005", text: "Have you ever stood alone on an issue you considered important?", options: ["Never", "Once", "Sometimes", "Several times", "Many times"], dir: "asc", weight: 5, difficulty: 5 },
  ],
  "Life Courage": [
    { id: "L001", text: "Would you change careers if it felt right?", options: ["Never", "Probably not", "Maybe", "Probably", "Absolutely"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "L003", text: "How long have you known you need to make a change but haven't acted on it?", options: ["Less than 1 month", "1–6 months", "6–12 months", "1–3 years", "Over 3 years"], dir: "desc", weight: 4, difficulty: 4 },
    { id: "L004", text: "What does it cost you to do nothing?", options: ["Nothing", "A little", "Some", "A lot", "A great deal"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "L005", text: "Are you more afraid of change or of staying where you are?", options: ["Much more afraid of change", "Slightly more afraid of change", "Equally afraid of both", "Slightly more afraid of stagnation", "Much more afraid of stagnation"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "L006", text: "Dare you to start over?", options: ["Never", "Probably not", "Maybe", "Probably", "Absolutely"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "L007", text: "You get the opportunity to start completely over. New city. New job. New people. What do you feel first?", options: ["Fear", "Resistance", "Uncertain curiosity", "Excitement", "Enthusiasm"], dir: "asc", weight: 4, difficulty: 4 },
    { id: "L009", text: "What would the people closest to you say you are afraid of?", options: ["Don't know", "One small thing", "Several small things", "One big thing", "Something that's holding me back"], dir: "desc", weight: 4, difficulty: 5 },
  ],
  "Fear Profile": [
    { id: "FP001", text: "What do you fear most?", options: ["Rejection", "Criticism", "Loneliness", "Failure", "Loss of control"], dir: "fixed", fixedScore: 3, weight: 5, difficulty: 5 },
    { id: "FP002", text: "Rejection doesn't scare me.", options: ["Strongly agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Strongly disagree"], dir: "desc", weight: 5, difficulty: 5 },
    { id: "FP003", text: "Criticism doesn't scare me.", options: ["Strongly agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Strongly disagree"], dir: "desc", weight: 5, difficulty: 5 },
    { id: "FP004", text: "Loneliness doesn't scare me.", options: ["Strongly agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Strongly disagree"], dir: "desc", weight: 4, difficulty: 4 },
    { id: "FP005", text: "Failure doesn't scare me.", options: ["Strongly agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Strongly disagree"], dir: "desc", weight: 5, difficulty: 5 },
    { id: "FP006", text: "I do not need other people's approval to act.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "FP007", text: "I am comfortable with not being liked by everyone.", options: ["Strongly disagree", "Somewhat disagree", "Neutral", "Somewhat agree", "Strongly agree"], dir: "asc", weight: 5, difficulty: 5 },
    { id: "FP008", text: "How much of your life is controlled by other people's expectations?", options: ["Almost everything", "A lot", "Some", "A little", "Almost nothing"], dir: "asc", weight: 5, difficulty: 5 },
  ],
};

// The 10 official Ballsy Types, one per category. Fear Profile is a
// diagnostic category (what you're afraid of), not a type-defining one —
// it's excluded from the type ranking but still shown in the breakdown.
export const archetypes = {
  "Social Courage": "Connector",
  "Conflict Courage": "Warrior",
  "Career Courage": "Strategist",
  "Adventure Seeking": "Explorer",
  "Physical Courage": "Challenger",
  "Emotional Courage": "Idealist",
  "Romantic Courage": "Pathfinder",
  "Biology/Physiology": "Maverick",
  "Moral Courage": "Guardian",
  "Life Courage": "Pioneer",
};

export const typeDescriptions = {
  Connector: "You build courage through people — starting conversations, showing up, putting yourself out there socially.",
  Warrior: "You build courage by facing friction head-on — conflict doesn't scare you off, it's where you show up.",
  Strategist: "You build courage by betting on yourself professionally — applying, pitching, and backing your own case.",
  Explorer: "You build courage by chasing the unfamiliar — new places, new experiences, plans that change on the fly.",
  Challenger: "You build courage physically — pushing your body past what feels safe or comfortable.",
  Idealist: "You build courage by staying true to yourself — vulnerability and authenticity over approval.",
  Pathfinder: "You build courage in matters of the heart — taking initiative, risking rejection, being honest about what you want.",
  Maverick: "You build courage by overriding instinct — acting despite what your body's fear response tells you.",
  Guardian: "You build courage by standing up for others — speaking against injustice, defending what's right.",
  Pioneer: "You build courage by starting over — changing paths, careers, or lives when it's the right call.",
};

export const tiers = [
  { max: 30, name: "Church Mouse", desc: "Fear usually wins the argument before you act. That's not a life sentence — it just means most of your growth is still waiting on the other side of a few small, scary moves." },
  { max: 50, name: "Toe-Dipper", desc: "You'll wade in, but you're watching the depth the whole time. The fear is there and you act anyway sometimes — the occasional leap just needs a running start." },
  { max: 70, name: "Steady Hand", desc: "You feel the fear and act anyway more often than not. You don't need an audience to do the uncomfortable thing — that's most of what Ballsy actually is." },
  { max: 85, name: "Certified Daredevil", desc: "Front row, full portion, counter-offer — fear shows up and you move first anyway. Most people's limit is your starting line." },
  { max: 101, name: "Unhinged Legend", desc: "You quit the job, ate the mystery food, and spoke up before anyone else in the room did. Ballsy isn't a trait for you, it's a lifestyle." },
];

// Challenges by category, one per difficulty (1-3 stars). Biology/Physiology
// and Fear Profile are diagnostic categories with no challenge set.
// "Achievement" isn't a scored quiz category — it's a bonus track always offered.
export const challengeBank = {
  "Social Courage": [
    "Say hi to a stranger.",
    "Start a conversation and keep it going for 2 minutes.",
    "Go to an event alone, or ask someone out on a date.",
  ],
  "Conflict Courage": [
    "Say no to something you don't actually want to do.",
    "Bring up a small frustration with someone instead of sitting on it.",
    "Have the difficult conversation you've been putting off.",
  ],
  "Career Courage": [
    "Share an idea you've been sitting on.",
    "Ask someone for honest feedback.",
    "Present an idea to leadership.",
  ],
  "Adventure Seeking": [
    "Visit somewhere you've never been.",
    "Try a new activity.",
    "Travel alone on a short trip somewhere unfamiliar.",
  ],
  "Physical Courage": [
    "Take an ice-cold shower.",
    "Push through a hard group workout.",
    "Do something physical that genuinely scares you.",
  ],
  "Emotional Courage": [
    "Share something personal with someone you trust.",
    "Ask for help with something.",
    "Have an honest conversation about a difficult topic.",
  ],
  "Romantic Courage": [
    "Give someone a genuine compliment.",
    "Show interest in someone instead of holding back.",
    "Ask someone you like out for coffee or a date.",
  ],
  "Moral Courage": [
    "Share an honest opinion, even if it's not the popular one.",
    "Defend a viewpoint you believe in.",
    "Speak up about an injustice you see.",
  ],
  "Life Courage": [
    "Write down one change you know you need to make.",
    "Take the first concrete step toward it.",
    "Follow through on a decision you've been putting off.",
  ],
};

export const achievementChallenges = [
  "Do the one thing you've been putting off.",
  "Enter a competition.",
  "Take on a demanding project.",
];

/* ---------------------------------------------------------------
   SCORING HELPERS
--------------------------------------------------------------- */
export function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function scoreForIndex(q, idx) {
  if (q.dir === "explicit") return q.options[idx].score;
  if (q.dir === "fixed") return q.fixedScore;
  const n = q.options.length;
  if (q.dir === "asc") return Math.round(1 + (idx * 4) / (n - 1));
  return Math.round(5 - (idx * 4) / (n - 1)); // desc
}

export function optionLabel(q, idx) {
  return q.dir === "explicit" ? q.options[idx].label : q.options[idx];
}

export const starsFor = (p) => (p < 34 ? 1 : p < 67 ? 2 : 3);

// Builds one random 33-question run: 3 questions from each of the 11
// categories, drawn fresh and interleaved so it doesn't feel blocky.
export function buildRun() {
  let questions = [];
  const catMax = {};
  Object.keys(bank).forEach((cat) => {
    catMax[cat] = 0;
    const picks = shuffle(bank[cat]).slice(0, 3);
    picks.forEach((q) => questions.push({ ...q, cat }));
  });
  questions = shuffle(questions);

  let maxScore = 0;
  questions.forEach((q) => {
    const potential = 5 * q.weight * q.difficulty;
    maxScore += potential;
    catMax[q.cat] += potential;
  });

  const catSubtotals = {};
  Object.keys(bank).forEach((cat) => (catSubtotals[cat] = 0));

  return { questions, catMax, maxScore, catSubtotals };
}
