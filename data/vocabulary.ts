export interface Term {
  id: string;
  word: string;
  definition: string;
  example: string;
  partOfSpeech: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  emoji: string;
  color: string;
  terms: Term[];
}

export const chapters: Chapter[] = [
  {
    id: "ch9",
    number: 9,
    title: "Effective Business Writing",
    emoji: "✍️",
    color: "from-blue-500 to-cyan-400",
    terms: [
      {
        id: "ch9-01",
        word: "Asynchronous Communication",
        definition: "Communication that occurs at different times, without real-time interaction between participants.",
        example: "E-mail is an asynchronous communication channel — the sender and receiver don't need to be available at the same moment.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-02",
        word: "Channel",
        definition: "The medium or method through which a message travels from sender to receiver.",
        example: "The project manager chose e-mail as the channel to distribute the weekly status update.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-03",
        word: "Feedback",
        definition: "The response or reaction sent by the receiver back to the original sender.",
        example: "After presenting the proposal, she asked for feedback from the board members.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-04",
        word: "Interference (Noise)",
        definition: "Anything that blocks, distorts, or disrupts the communication process.",
        example: "The time-zone difference was a major source of interference that caused them to miss the conference call.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-05",
        word: "Verbal Communication",
        definition: "Communication that involves the specific words chosen to convey a message.",
        example: "Her verbal communication in the report was precise, using industry-standard terminology throughout.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-06",
        word: "Nonverbal Communication",
        definition: "Communication conveyed through means other than words, such as tone, body language, or visual presentation.",
        example: "The professional letterhead and clean layout contributed to the nonverbal communication of credibility.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-07",
        word: "Source",
        definition: "The person or entity that creates and sends a message.",
        example: "As the source of the announcement, the CEO ensured the message was clear and consistent across all departments.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-08",
        word: "Context",
        definition: "The psychological expectations and background circumstances surrounding a communication event.",
        example: "Understanding the cultural context helped the team craft a proposal that resonated with the overseas client.",
        partOfSpeech: "noun",
      },
    ],
  },
  {
    id: "ch10",
    number: 10,
    title: "Writing Preparation",
    emoji: "📋",
    color: "from-violet-500 to-purple-400",
    terms: [
      {
        id: "ch10-01",
        word: "Audience Analysis",
        definition: "The process of identifying and understanding the intended recipients of a message to tailor communication effectively.",
        example: "Before drafting the report, she conducted an audience analysis to determine what level of technical detail was appropriate.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-02",
        word: "Planning Checklist",
        definition: "A structured list of considerations used to prepare a business message before writing.",
        example: "Using a planning checklist helped ensure the proposal addressed the client's goals, timeline, and budget.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-03",
        word: "Primary Research",
        definition: "Original data gathered firsthand through surveys, interviews, or direct observation.",
        example: "The team conducted primary research by interviewing 50 customers about their satisfaction with the product.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-04",
        word: "Secondary Research",
        definition: "Information gathered from existing sources such as publications, reports, and databases.",
        example: "She used secondary research from industry reports to support her market expansion recommendation.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-05",
        word: "Plagiarism",
        definition: "Using another person's words, ideas, or work without proper attribution.",
        example: "Submitting a competitor's strategy document as your own constitutes plagiarism and can have serious legal consequences.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-06",
        word: "Citation",
        definition: "A reference that identifies the source of information used in a document.",
        example: "Every statistic in the business report included a citation linking back to the original research study.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-07",
        word: "Credible Source",
        definition: "A reliable, trustworthy reference from a qualified author or reputable organization.",
        example: "For the investor deck, they used only credible sources such as peer-reviewed journals and government statistics.",
        partOfSpeech: "noun",
      },
    ],
  },
  {
    id: "ch11",
    number: 11,
    title: "Writing Style & Argument",
    emoji: "🖊️",
    color: "from-emerald-500 to-teal-400",
    terms: [
      {
        id: "ch11-01",
        word: "Thesis Statement",
        definition: "A concise sentence that presents the main argument or central point of a document.",
        example: "The executive summary opened with a clear thesis statement: 'Expanding into the Asian market will increase annual revenue by 30%.'",
        partOfSpeech: "noun",
      },
      {
        id: "ch11-02",
        word: "Logical Argument",
        definition: "A structured line of reasoning that uses evidence to support a conclusion.",
        example: "The consultant built a logical argument by presenting sales data, market trends, and competitor analysis.",
        partOfSpeech: "noun",
      },
      {
        id: "ch11-03",
        word: "Paraphrase",
        definition: "Restating someone else's ideas in your own words while preserving the original meaning.",
        example: "Rather than quoting the entire policy document, she paraphrased the key regulations for the team.",
        partOfSpeech: "verb / noun",
      },
      {
        id: "ch11-04",
        word: "Conciseness",
        definition: "The quality of expressing information clearly using as few words as necessary.",
        example: "The memo was praised for its conciseness — it communicated the restructuring plan in just one page.",
        partOfSpeech: "noun",
      },
      {
        id: "ch11-05",
        word: "Tone",
        definition: "The attitude or feeling conveyed through word choice and style in a written message.",
        example: "She adjusted the tone of the e-mail from formal to friendly when writing to a long-standing partner.",
        partOfSpeech: "noun",
      },
      {
        id: "ch11-06",
        word: "Coherence",
        definition: "The logical flow and consistency of ideas throughout a document.",
        example: "The report lacked coherence because each section used different terminology for the same concept.",
        partOfSpeech: "noun",
      },
    ],
  },
  {
    id: "ch12",
    number: 12,
    title: "Revising & Presenting",
    emoji: "🔍",
    color: "from-orange-500 to-amber-400",
    terms: [
      {
        id: "ch12-01",
        word: "Proofreading",
        definition: "The careful review of a document to identify and correct errors in grammar, spelling, and punctuation.",
        example: "She spent an hour proofreading the contract before sending it to the client.",
        partOfSpeech: "noun / verb",
      },
      {
        id: "ch12-02",
        word: "Revision",
        definition: "The process of reviewing and improving a draft by changing content, structure, or clarity.",
        example: "After receiving feedback, he went through three rounds of revision before the report was finalized.",
        partOfSpeech: "noun",
      },
      {
        id: "ch12-03",
        word: "Peer Review",
        definition: "The evaluation of work by colleagues with similar expertise to provide constructive feedback.",
        example: "The marketing copy went through a peer review process before being approved for publication.",
        partOfSpeech: "noun",
      },
      {
        id: "ch12-04",
        word: "Design Evaluation",
        definition: "The assessment of visual elements such as layout, typography, and white space in a document.",
        example: "During design evaluation, the team noticed the dense paragraphs made the annual report hard to read.",
        partOfSpeech: "noun",
      },
      {
        id: "ch12-05",
        word: "Style Revision",
        definition: "Adjustments made to the writing style, including word choice, sentence length, and formality level.",
        example: "The editor suggested a style revision to replace jargon with plain language for a wider audience.",
        partOfSpeech: "noun",
      },
    ],
  },
  {
    id: "ch13",
    number: 13,
    title: "Business Writing in Action",
    emoji: "📬",
    color: "from-rose-500 to-pink-400",
    terms: [
      {
        id: "ch13-01",
        word: "Netiquette",
        definition: "The accepted etiquette and protocols for communication on the internet and in digital environments.",
        example: "Sending an e-mail in all capital letters is a violation of netiquette as it implies you are shouting.",
        partOfSpeech: "noun",
      },
      {
        id: "ch13-02",
        word: "Memorandum (Memo)",
        definition: "A brief internal document used to communicate policies, procedures, or official business within an organization.",
        example: "The HR department sent a memo to all staff explaining the new remote work policy.",
        partOfSpeech: "noun",
      },
      {
        id: "ch13-03",
        word: "Grapevine",
        definition: "The unofficial, informal communication network within an organization, often characterized by rumor and gossip.",
        example: "Managers addressed the restructuring rumors quickly to prevent misinformation spreading through the grapevine.",
        partOfSpeech: "noun",
      },
      {
        id: "ch13-04",
        word: "Salutation",
        definition: "The greeting used at the beginning of a letter or e-mail to address the recipient.",
        example: "She used 'Dear Ms. Johnson:' as the salutation in her formal business letter.",
        partOfSpeech: "noun",
      },
      {
        id: "ch13-05",
        word: "Letterhead",
        definition: "Pre-printed stationery containing an organization's name, logo, and contact information.",
        example: "All official client correspondence was printed on company letterhead to project a professional image.",
        partOfSpeech: "noun",
      },
      {
        id: "ch13-06",
        word: "Call to Action",
        definition: "A statement in a message that requests or directs the reader to take a specific next step.",
        example: "The sales proposal ended with a clear call to action: 'Schedule a 30-minute demo this week.'",
        partOfSpeech: "noun",
      },
      {
        id: "ch13-07",
        word: "Business Proposal",
        definition: "A formal document that presents a plan or offer, typically to solve a problem or win a contract.",
        example: "The agency submitted a business proposal outlining a six-month digital marketing strategy.",
        partOfSpeech: "noun",
      },
      {
        id: "ch13-08",
        word: "External Communication",
        definition: "Messages sent outside the organization to clients, vendors, partners, or the public.",
        example: "Press releases and client letters are examples of external communication.",
        partOfSpeech: "noun",
      },
      {
        id: "ch13-09",
        word: "Internal Communication",
        definition: "Messages exchanged within an organization among employees and departments.",
        example: "Slack messages and company memos are forms of internal communication.",
        partOfSpeech: "noun",
      },
      {
        id: "ch13-10",
        word: "Courtesy Copy (CC)",
        definition: "A copy of a message sent to additional recipients for their information, without requiring a response.",
        example: "She CC'd her manager on the e-mail to keep them informed about the client negotiation.",
        partOfSpeech: "noun",
      },
    ],
  },
  {
    id: "ch3",
    number: 3,
    title: "Word Choice & Vocabulary",
    emoji: "📖",
    color: "from-sky-500 to-blue-400",
    terms: [
      {
        id: "ch3-01",
        word: "Connotation",
        definition: "The implied or associated meaning of a word beyond its literal definition.",
        example: "The word 'cheap' has a negative connotation; use 'cost-effective' in client communications instead.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-02",
        word: "Denotation",
        definition: "The literal, dictionary definition of a word.",
        example: "The denotation of 'contract' is a legally binding agreement, but its connotation implies formality and commitment.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-03",
        word: "Jargon",
        definition: "Specialized technical language used within a specific industry or profession.",
        example: "Avoid using financial jargon like 'EBITDA' in presentations to non-finance stakeholders.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-04",
        word: "Synonym",
        definition: "A word with the same or nearly the same meaning as another word.",
        example: "Replace 'utilize' with its synonym 'use' for clearer, more direct business writing.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-05",
        word: "Antonym",
        definition: "A word with the opposite meaning of another word.",
        example: "In contract negotiations, 'profit' and 'loss' are antonyms that represent opposite financial outcomes.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-06",
        word: "Context Clues",
        definition: "Information in surrounding text that helps the reader determine the meaning of an unfamiliar word.",
        example: "Even without knowing the term 'amortize,' context clues in the loan document made its meaning clear.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-07",
        word: "Idiom",
        definition: "A phrase whose meaning cannot be understood from the literal definition of its individual words.",
        example: "'Touch base' is a common business idiom meaning to make brief contact or check in with someone.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-08",
        word: "Euphemism",
        definition: "A mild or indirect word or phrase used in place of one that may seem too harsh or direct.",
        example: "Companies often use the euphemism 'workforce reduction' instead of 'layoffs' in public announcements.",
        partOfSpeech: "noun",
      },
    ],
  },
  {
    id: "ch7",
    number: 7,
    title: "The Writing Process",
    emoji: "⚙️",
    color: "from-indigo-500 to-violet-400",
    terms: [
      {
        id: "ch7-01",
        word: "Brainstorming",
        definition: "A prewriting technique for generating a large number of ideas without judgment or evaluation.",
        example: "The team used brainstorming to come up with 20 potential product names before narrowing them down.",
        partOfSpeech: "noun / verb",
      },
      {
        id: "ch7-02",
        word: "Outline",
        definition: "A structured plan that organizes the main points and supporting details of a document before writing.",
        example: "Creating an outline saved the consultant hours of work by clarifying the report structure upfront.",
        partOfSpeech: "noun / verb",
      },
      {
        id: "ch7-03",
        word: "Drafting",
        definition: "The process of writing an initial version of a document, focusing on getting ideas down without perfectionism.",
        example: "She spent the morning drafting the executive summary and saved editing for the afternoon.",
        partOfSpeech: "verb / noun",
      },
      {
        id: "ch7-04",
        word: "Editing",
        definition: "The process of reviewing and improving a draft for clarity, accuracy, style, and correctness.",
        example: "After drafting the contract, the legal team spent two days editing it for precision and compliance.",
        partOfSpeech: "verb / noun",
      },
      {
        id: "ch7-05",
        word: "Prewriting",
        definition: "The planning stage before actual writing, including brainstorming, outlining, and research.",
        example: "Effective prewriting cut the time to produce the quarterly report by nearly half.",
        partOfSpeech: "noun",
      },
    ],
  },
];

export const totalTerms = chapters.reduce((sum, ch) => sum + ch.terms.length, 0);

export function getChapterById(id: string): Chapter | undefined {
  return chapters.find((c) => c.id === id);
}

export function getTermById(termId: string): Term | undefined {
  for (const ch of chapters) {
    const t = ch.terms.find((t) => t.id === termId);
    if (t) return t;
  }
  return undefined;
}
