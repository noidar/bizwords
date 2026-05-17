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
  // ─────────────────────────────────────────────────────────────────────
  // CHAPTER 1 — Communication Fundamentals
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "ch1",
    number: 1,
    title: "Communication Fundamentals",
    emoji: "📡",
    color: "from-blue-500 to-cyan-400",
    terms: [
      {
        id: "ch1-01",
        word: "Source",
        definition: "The person or entity that creates and initiates a message in the communication process.",
        example: "As the source of the company announcement, the CEO ensured the message was accurate and consistent across all departments.",
        partOfSpeech: "noun",
      },
      {
        id: "ch1-02",
        word: "Receiver",
        definition: "The individual or group who receives and interprets a message sent by the source.",
        example: "The marketing team was the intended receiver of the internal strategy memo.",
        partOfSpeech: "noun",
      },
      {
        id: "ch1-03",
        word: "Message",
        definition: "The information, idea, or meaning that the source intends to communicate to the receiver.",
        example: "The core message of the sales pitch was that the product saves clients 30% in operational costs.",
        partOfSpeech: "noun",
      },
      {
        id: "ch1-04",
        word: "Channel",
        definition: "The medium or method through which a message travels from sender to receiver.",
        example: "The project manager chose email as the channel to distribute the weekly status update.",
        partOfSpeech: "noun",
      },
      {
        id: "ch1-05",
        word: "Feedback",
        definition: "The response or reaction sent by the receiver back to the original source, completing the communication loop.",
        example: "After presenting the proposal, she asked for feedback from the board members.",
        partOfSpeech: "noun",
      },
      {
        id: "ch1-06",
        word: "Interference (Noise)",
        definition: "Anything that blocks, distorts, or disrupts the communication process between sender and receiver.",
        example: "The time-zone difference was a major source of interference that caused them to miss the conference call.",
        partOfSpeech: "noun",
      },
      {
        id: "ch1-07",
        word: "Context",
        definition: "The psychological expectations, background circumstances, and environment surrounding a communication event.",
        example: "Understanding the cultural context helped the team craft a proposal that resonated with the overseas client.",
        partOfSpeech: "noun",
      },
      {
        id: "ch1-08",
        word: "Asynchronous Communication",
        definition: "Communication that occurs at different times, without real-time interaction between participants.",
        example: "Email is an asynchronous communication channel — the sender and receiver don't need to be available simultaneously.",
        partOfSpeech: "noun",
      },
      {
        id: "ch1-09",
        word: "Verbal Communication",
        definition: "Communication that uses specific words to convey a message, whether spoken or written.",
        example: "Her verbal communication in the report was precise, using industry-standard terminology throughout.",
        partOfSpeech: "noun",
      },
      {
        id: "ch1-10",
        word: "Nonverbal Communication",
        definition: "Communication conveyed through means other than words, such as tone, body language, font choice, or layout.",
        example: "The professional letterhead and clean layout contributed to the nonverbal communication of credibility.",
        partOfSpeech: "noun",
      },
      {
        id: "ch1-11",
        word: "Fidelity",
        definition: "The accuracy with which a message is transmitted and received, with minimal distortion or misinterpretation.",
        example: "Using plain language and numbered lists improved the fidelity of the technical instructions.",
        partOfSpeech: "noun",
      },
      {
        id: "ch1-12",
        word: "Interpersonal Communication",
        definition: "Direct, face-to-face communication between two or more people allowing for immediate feedback.",
        example: "The manager preferred interpersonal communication for sensitive performance reviews rather than email.",
        partOfSpeech: "noun",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // CHAPTER 2 — Writing Style & Tone
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "ch2",
    number: 2,
    title: "Writing Style & Tone",
    emoji: "🎨",
    color: "from-violet-500 to-purple-400",
    terms: [
      {
        id: "ch2-01",
        word: "Colloquial Language",
        definition: "An informal, conversational style of writing using everyday expressions, slang, and regional phrases.",
        example: "Using colloquial language like 'touch base' is acceptable in internal chats but avoid it in formal client reports.",
        partOfSpeech: "noun",
      },
      {
        id: "ch2-02",
        word: "Formal Language",
        definition: "Professional expression focused on roles, protocol, and precise vocabulary with complex sentence structure.",
        example: "The annual report was written in formal language to convey the company's professionalism to shareholders.",
        partOfSpeech: "noun",
      },
      {
        id: "ch2-03",
        word: "Casual Language",
        definition: "Everyday language used in familiar group contexts, emphasizing relationship over hierarchy.",
        example: "Casual language is fine in a team Slack channel but inappropriate in a proposal to a new client.",
        partOfSpeech: "noun",
      },
      {
        id: "ch2-04",
        word: "Tone",
        definition: "The attitude and feeling conveyed through word choice and writing style that shapes how a message is received.",
        example: "She adjusted the tone of the email from formal to friendly when writing to a long-standing partner.",
        partOfSpeech: "noun",
      },
      {
        id: "ch2-05",
        word: "Syntax",
        definition: "The grammatical arrangement and order of words in a sentence that affects clarity and style.",
        example: "A long, complex syntax in a help article may confuse users — short sentences communicate more clearly.",
        partOfSpeech: "noun",
      },
      {
        id: "ch2-06",
        word: "Vocabulary",
        definition: "The set of words a writer chooses, reflecting education, industry knowledge, and audience awareness.",
        example: "Choosing precise vocabulary is critical when drafting a legal contract — vague terms invite disputes.",
        partOfSpeech: "noun",
      },
      {
        id: "ch2-07",
        word: "Logos (Logic)",
        definition: "The rhetorical appeal to reason and logical argument, using evidence and facts to persuade.",
        example: "The consultant relied on logos by presenting three years of market data to support her recommendation.",
        partOfSpeech: "noun",
      },
      {
        id: "ch2-08",
        word: "Ethos (Credibility)",
        definition: "The rhetorical appeal to the writer's character, expertise, and trustworthiness to build authority.",
        example: "She established her ethos in the opening paragraph by citing her 15 years of experience in the industry.",
        partOfSpeech: "noun",
      },
      {
        id: "ch2-09",
        word: "Pathos (Emotional Appeal)",
        definition: "The rhetorical appeal to the reader's emotions, values, and sympathies to create engagement.",
        example: "The fundraising letter used pathos effectively by sharing a customer's story of overcoming hardship.",
        partOfSpeech: "noun",
      },
      {
        id: "ch2-10",
        word: "Clarity",
        definition: "The quality of being easily understood, with ideas expressed simply, directly, and without ambiguity.",
        example: "The new onboarding guide was praised for its clarity — new hires could follow it without asking questions.",
        partOfSpeech: "noun",
      },
      {
        id: "ch2-11",
        word: "Conciseness",
        definition: "Expressing information using the fewest necessary words while retaining full meaning.",
        example: "The memo was praised for its conciseness — it communicated the restructuring plan in just one page.",
        partOfSpeech: "noun",
      },
      {
        id: "ch2-12",
        word: "Emphasis",
        definition: "The technique of stressing the most important or relevant information in a message to direct the reader's attention.",
        example: "Bold headers and bullet points were used for emphasis to highlight the key deadlines in the project plan.",
        partOfSpeech: "noun",
      },
      {
        id: "ch2-13",
        word: "Credibility",
        definition: "The quality of being trusted and believed based on expertise, reliability, and honesty.",
        example: "Citing peer-reviewed sources throughout the white paper strengthened the author's credibility.",
        partOfSpeech: "noun",
      },
      {
        id: "ch2-14",
        word: "Coherence",
        definition: "The logical flow and consistency of ideas throughout a document, making it easy to follow.",
        example: "The report lacked coherence because each section used different terminology for the same concept.",
        partOfSpeech: "noun",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // CHAPTER 3 — Word Choice & Vocabulary
  // ─────────────────────────────────────────────────────────────────────
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
        definition: "The implied or emotional meaning of a word beyond its literal dictionary definition.",
        example: "The word 'cheap' has a negative connotation; use 'cost-effective' in client communications instead.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-02",
        word: "Denotation",
        definition: "The literal, explicit, dictionary definition of a word, without any emotional or implied meaning.",
        example: "The denotation of 'contract' is a legally binding agreement, but its connotation implies formality and commitment.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-03",
        word: "Abstract Term",
        definition: "A word that refers to an intangible concept or idea that cannot be physically seen or touched.",
        example: "Words like 'efficiency' and 'innovation' are abstract terms — always back them up with concrete examples.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-04",
        word: "Concrete Term",
        definition: "A word that describes something specific and tangible that can be observed or measured.",
        example: "Replace 'we improved performance' with a concrete term: 'we reduced load time from 4s to 1.2s'.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-05",
        word: "Jargon",
        definition: "Specialized technical vocabulary used within a specific industry or profession, unfamiliar to outsiders.",
        example: "Avoid using financial jargon like 'EBITDA' in presentations to non-finance stakeholders.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-06",
        word: "Synonym",
        definition: "A word that has the same or nearly the same meaning as another word.",
        example: "Replace 'utilize' with its synonym 'use' for clearer, more direct business writing.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-07",
        word: "Antonym",
        definition: "A word that has the opposite meaning of another word.",
        example: "In contract negotiations, 'profit' and 'loss' are antonyms representing opposite financial outcomes.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-08",
        word: "Context Clues",
        definition: "Information in surrounding text that helps the reader determine the meaning of an unfamiliar word.",
        example: "Even without knowing 'amortize,' context clues in the loan document made its meaning clear.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-09",
        word: "Idiom",
        definition: "A phrase whose figurative meaning cannot be understood from the literal definitions of its individual words.",
        example: "'Touch base' is a common business idiom meaning to make brief contact or check in with someone.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-10",
        word: "Euphemism",
        definition: "A mild or indirect word or phrase substituted for one that might seem harsh, blunt, or offensive.",
        example: "Companies often use the euphemism 'workforce reduction' instead of 'layoffs' in public announcements.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-11",
        word: "Slang",
        definition: "Very informal words or expressions used in speech, typically within a specific group or subculture.",
        example: "Using slang like 'gonna' and 'ASAP' in a formal client email undermines professionalism.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-12",
        word: "Prefix",
        definition: "A word element added to the beginning of a root word to change its meaning.",
        example: "The prefix 're-' in 'renegotiate' signals that the negotiation will happen again.",
        partOfSpeech: "noun",
      },
      {
        id: "ch3-13",
        word: "Suffix",
        definition: "A word element added to the end of a root word that changes its grammatical function or meaning.",
        example: "Adding the suffix '-tion' to 'negotiate' creates the noun 'negotiation'.",
        partOfSpeech: "noun",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // CHAPTER 4 — The Writing Process
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "ch4",
    number: 4,
    title: "The Writing Process",
    emoji: "⚙️",
    color: "from-indigo-500 to-violet-400",
    terms: [
      {
        id: "ch4-01",
        word: "Prewriting",
        definition: "The planning stage before actual writing, including brainstorming, outlining, and research.",
        example: "Effective prewriting cut the time to produce the quarterly report by nearly half.",
        partOfSpeech: "noun",
      },
      {
        id: "ch4-02",
        word: "Brainstorming",
        definition: "A prewriting technique for generating a large quantity of ideas without judgment or evaluation.",
        example: "The team used brainstorming to come up with 20 potential product names before narrowing them down.",
        partOfSpeech: "noun / verb",
      },
      {
        id: "ch4-03",
        word: "Outline",
        definition: "A structured plan that organizes the main points and supporting details of a document before writing.",
        example: "Creating an outline saved the consultant hours by clarifying the report structure upfront.",
        partOfSpeech: "noun / verb",
      },
      {
        id: "ch4-04",
        word: "Drafting",
        definition: "The process of writing an initial version of a document, focusing on getting ideas down without perfectionism.",
        example: "She spent the morning drafting the executive summary and saved editing for the afternoon.",
        partOfSpeech: "noun / verb",
      },
      {
        id: "ch4-05",
        word: "Revision",
        definition: "The process of reviewing and improving a draft by changing content, structure, or clarity.",
        example: "After receiving feedback, he went through three rounds of revision before the report was finalized.",
        partOfSpeech: "noun",
      },
      {
        id: "ch4-06",
        word: "Editing",
        definition: "The process of reviewing a draft for grammar, spelling, punctuation, and style errors.",
        example: "After drafting the contract, the legal team spent two days editing it for precision and compliance.",
        partOfSpeech: "noun / verb",
      },
      {
        id: "ch4-07",
        word: "Proofreading",
        definition: "The careful final review of a document to identify and correct surface errors before publication.",
        example: "She spent an hour proofreading the contract before sending it to the client.",
        partOfSpeech: "noun / verb",
      },
      {
        id: "ch4-08",
        word: "Critical Thinking",
        definition: "Self-directed, disciplined thinking that evaluates evidence objectively and resists confirmation bias.",
        example: "Critical thinking led the analyst to question the optimistic sales forecast and request supporting data.",
        partOfSpeech: "noun",
      },
      {
        id: "ch4-09",
        word: "Confirmation Bias",
        definition: "The tendency to seek out and favor information that confirms existing beliefs while ignoring contradictory evidence.",
        example: "The manager's confirmation bias led him to ignore negative customer reviews that contradicted his launch plan.",
        partOfSpeech: "noun",
      },
      {
        id: "ch4-10",
        word: "Writer's Block",
        definition: "The feeling of being unable to begin or continue writing, often caused by perfectionism or fear of failure.",
        example: "She overcame writer's block by starting with a rough outline instead of trying to write perfect sentences.",
        partOfSpeech: "noun",
      },
      {
        id: "ch4-11",
        word: "Rough Draft",
        definition: "A preliminary, unpolished version of a document intended to capture ideas before refining them.",
        example: "The rough draft of the proposal had the right ideas but needed significant editing before client review.",
        partOfSpeech: "noun",
      },
      {
        id: "ch4-12",
        word: "Audience-Centered Writing",
        definition: "Writing that prioritizes the reader's needs, knowledge level, and expectations above all else.",
        example: "Audience-centered writing requires asking: 'What does the reader need to know to act on this?'",
        partOfSpeech: "noun",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // CHAPTER 5 — Writing Preparation & Research
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "ch5",
    number: 5,
    title: "Writing Preparation & Research",
    emoji: "🔬",
    color: "from-emerald-500 to-teal-400",
    terms: [
      {
        id: "ch5-01",
        word: "Primary Research",
        definition: "Original data gathered firsthand through surveys, interviews, experiments, or direct observation.",
        example: "The team conducted primary research by interviewing 50 customers about their satisfaction with the product.",
        partOfSpeech: "noun",
      },
      {
        id: "ch5-02",
        word: "Secondary Research",
        definition: "Information gathered from existing sources such as publications, reports, and databases created by others.",
        example: "She used secondary research from industry reports to support her market expansion recommendation.",
        partOfSpeech: "noun",
      },
      {
        id: "ch5-03",
        word: "Credible Source",
        definition: "A reliable reference from a qualified author or reputable organization that can be verified.",
        example: "For the investor deck, they used only credible sources such as peer-reviewed journals and government statistics.",
        partOfSpeech: "noun",
      },
      {
        id: "ch5-04",
        word: "Citation",
        definition: "A reference that identifies the source of information used in a document, ensuring proper attribution.",
        example: "Every statistic in the business report included a citation linking back to the original research study.",
        partOfSpeech: "noun",
      },
      {
        id: "ch5-05",
        word: "Plagiarism",
        definition: "Using another person's words, ideas, data, or work without proper attribution, violating copyright law.",
        example: "Submitting a competitor's strategy document as your own constitutes plagiarism with serious legal consequences.",
        partOfSpeech: "noun",
      },
      {
        id: "ch5-06",
        word: "Thesis Statement",
        definition: "A concise sentence that presents the main argument or central point of a document.",
        example: "The executive summary opened with a clear thesis statement: 'Expanding to Asia will increase revenue by 30%.'",
        partOfSpeech: "noun",
      },
      {
        id: "ch5-07",
        word: "Paraphrase",
        definition: "Restating someone else's ideas in your own words while preserving the original meaning.",
        example: "Rather than quoting the entire policy document, she paraphrased the key regulations for the team.",
        partOfSpeech: "verb / noun",
      },
      {
        id: "ch5-08",
        word: "Audience Analysis",
        definition: "The process of identifying and understanding the intended readers to tailor communication effectively.",
        example: "Before drafting the report, she conducted an audience analysis to determine the right level of technical detail.",
        partOfSpeech: "noun",
      },
      {
        id: "ch5-09",
        word: "Egocentrism",
        definition: "The use of self-centered standards to determine what to believe, limiting objectivity in reasoning.",
        example: "His egocentrism led him to write a proposal that addressed only his own priorities, ignoring the client's needs.",
        partOfSpeech: "noun",
      },
      {
        id: "ch5-10",
        word: "Planning Checklist",
        definition: "A structured list of considerations used to prepare a business message before writing begins.",
        example: "Using a planning checklist ensured the proposal addressed the client's goals, timeline, and budget.",
        partOfSpeech: "noun",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // CHAPTER 6 — Good Writing Principles
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "ch6",
    number: 6,
    title: "Good Writing Principles",
    emoji: "✍️",
    color: "from-orange-500 to-amber-400",
    terms: [
      {
        id: "ch6-01",
        word: "Effectiveness",
        definition: "The quality of writing that successfully accomplishes its intended purpose for the target audience.",
        example: "The effectiveness of the sales letter was measured by a 25% increase in qualified leads.",
        partOfSpeech: "noun",
      },
      {
        id: "ch6-02",
        word: "Efficiency",
        definition: "Producing a high-quality written document with minimal wasted time, words, or effort.",
        example: "Efficiency in report writing means delivering the key findings on page one, not burying them on page ten.",
        partOfSpeech: "noun",
      },
      {
        id: "ch6-03",
        word: "Reader Expectations",
        definition: "The assumptions and standards an audience brings to a document based on its type, industry, or context.",
        example: "Meeting reader expectations means following the standard format for proposals that clients in your industry recognize.",
        partOfSpeech: "noun",
      },
      {
        id: "ch6-04",
        word: "Arrangement",
        definition: "The logical order and hierarchy in which information is presented to guide the reader through a document.",
        example: "The proposal's arrangement — problem, solution, costs, timeline — matched the committee's decision-making process.",
        partOfSpeech: "noun",
      },
      {
        id: "ch6-05",
        word: "Engagement",
        definition: "The ability of writing to capture and hold the reader's interest, creating a sense of involvement.",
        example: "Opening with a striking statistic boosted the engagement of the quarterly newsletter.",
        partOfSpeech: "noun",
      },
      {
        id: "ch6-06",
        word: "Libel",
        definition: "The written form of defamation — a false statement that damages someone's reputation.",
        example: "Claiming a competitor's product is dangerous without proof could expose the company to a libel lawsuit.",
        partOfSpeech: "noun",
      },
      {
        id: "ch6-07",
        word: "Defamation",
        definition: "Making false statements that damage the reputation of a person or organization.",
        example: "The negative press release about a rival firm contained unverified claims, risking a defamation claim.",
        partOfSpeech: "noun",
      },
      {
        id: "ch6-08",
        word: "Copyright",
        definition: "The legal right of an author or creator to control the use and reproduction of their original work.",
        example: "Copying charts from a competitor's report without permission violates their copyright.",
        partOfSpeech: "noun",
      },
      {
        id: "ch6-09",
        word: "Peer Review",
        definition: "The evaluation of a document by colleagues with similar expertise to provide constructive feedback.",
        example: "The marketing copy went through a peer review process before being approved for publication.",
        partOfSpeech: "noun",
      },
      {
        id: "ch6-10",
        word: "Style Revision",
        definition: "Adjustments to word choice, sentence length, and formality to improve readability and tone.",
        example: "The editor suggested a style revision to replace jargon with plain language for a wider audience.",
        partOfSpeech: "noun",
      },
      {
        id: "ch6-11",
        word: "Parallelism",
        definition: "Using the same grammatical structure for related items in a list or series to create consistency.",
        example: "The job posting used parallelism: 'You will analyze data, write reports, and present findings.'",
        partOfSpeech: "noun",
      },
      {
        id: "ch6-12",
        word: "Subordination",
        definition: "Placing less important information in a dependent clause to emphasize the main idea.",
        example: "Using subordination, she wrote: 'Although costs increased, the project delivered a 15% ROI.'",
        partOfSpeech: "noun",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // CHAPTER 7 — Business Emails & Netiquette
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "ch7",
    number: 7,
    title: "Business Emails & Netiquette",
    emoji: "📧",
    color: "from-cyan-500 to-sky-400",
    terms: [
      {
        id: "ch7-01",
        word: "Netiquette",
        definition: "The accepted etiquette and protocols for communication on the internet and in digital environments.",
        example: "Sending an email in all capital letters violates netiquette, as it is perceived as shouting.",
        partOfSpeech: "noun",
      },
      {
        id: "ch7-02",
        word: "Subject Line",
        definition: "A brief, descriptive heading in an email that tells the recipient what the message is about.",
        example: "A clear subject line like 'Q3 Budget Approval Needed by Friday' ensures the email gets read promptly.",
        partOfSpeech: "noun",
      },
      {
        id: "ch7-03",
        word: "Salutation",
        definition: "The formal greeting at the beginning of a letter or email used to address the recipient.",
        example: "She used 'Dear Ms. Johnson:' as the salutation in her formal business letter.",
        partOfSpeech: "noun",
      },
      {
        id: "ch7-04",
        word: "Signature Block",
        definition: "The block of text at the end of an email that automatically includes the sender's name and contact details.",
        example: "His signature block included his name, title, phone number, and company website.",
        partOfSpeech: "noun",
      },
      {
        id: "ch7-05",
        word: "Courtesy Copy (CC)",
        definition: "A copy of a message sent to additional recipients for their information, without requiring a direct response.",
        example: "She CC'd her manager on the email to keep them informed about the client negotiation.",
        partOfSpeech: "noun",
      },
      {
        id: "ch7-06",
        word: "Reply All",
        definition: "An email feature that sends a response to every person who received the original message.",
        example: "Using Reply All for a personal note to the sender is a common netiquette violation in large organizations.",
        partOfSpeech: "verb",
      },
      {
        id: "ch7-07",
        word: "Spam Filter",
        definition: "A tool that automatically identifies and diverts unsolicited or suspicious emails away from the inbox.",
        example: "The large attachment triggered the recipient's spam filter, causing the important proposal to go unread.",
        partOfSpeech: "noun",
      },
      {
        id: "ch7-08",
        word: "Texting (SMS)",
        definition: "Written communication in the form of brief digital messages, typically used for quick informal exchanges.",
        example: "Texting a client '? % dsct on 1K order?' is too casual — a brief, properly worded email is more professional.",
        partOfSpeech: "noun / verb",
      },
      {
        id: "ch7-09",
        word: "Flame War",
        definition: "An online exchange of hostile, aggressive messages between individuals in a public or professional forum.",
        example: "The project manager stepped in to end the flame war in the team chat before it damaged client relationships.",
        partOfSpeech: "noun",
      },
      {
        id: "ch7-10",
        word: "Professionalism",
        definition: "The conduct, behavior, and attitude expected of a person in a business or professional environment.",
        example: "Responding to all emails within 24 hours — even just to acknowledge receipt — demonstrates professionalism.",
        partOfSpeech: "noun",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // CHAPTER 8 — Memos, Letters & Internal Docs
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "ch8",
    number: 8,
    title: "Memos, Letters & Internal Docs",
    emoji: "📬",
    color: "from-rose-500 to-pink-400",
    terms: [
      {
        id: "ch8-01",
        word: "Memorandum (Memo)",
        definition: "A brief internal document used to communicate policies, procedures, or official business within an organization.",
        example: "The HR department sent a memo to all staff explaining the new remote work policy.",
        partOfSpeech: "noun",
      },
      {
        id: "ch8-02",
        word: "Grapevine",
        definition: "The unofficial, informal communication network within an organization, characterized by rumor and gossip.",
        example: "Managers addressed the restructuring rumors quickly to prevent misinformation spreading through the grapevine.",
        partOfSpeech: "noun",
      },
      {
        id: "ch8-03",
        word: "Call to Action",
        definition: "A statement in a message that explicitly requests or directs the reader to take a specific next step.",
        example: "The sales proposal ended with a clear call to action: 'Schedule a 30-minute demo this week.'",
        partOfSpeech: "noun",
      },
      {
        id: "ch8-04",
        word: "Letterhead",
        definition: "Pre-printed stationery containing an organization's name, logo, and contact information.",
        example: "All official client correspondence was printed on company letterhead to project a professional image.",
        partOfSpeech: "noun",
      },
      {
        id: "ch8-05",
        word: "External Communication",
        definition: "Messages sent outside the organization to clients, vendors, partners, or the public.",
        example: "Press releases and client letters are classic examples of external communication.",
        partOfSpeech: "noun",
      },
      {
        id: "ch8-06",
        word: "Internal Communication",
        definition: "Messages exchanged within an organization among employees, teams, and departments.",
        example: "Slack messages, memos, and intranet posts are all forms of internal communication.",
        partOfSpeech: "noun",
      },
      {
        id: "ch8-07",
        word: "Declarative Sentence",
        definition: "A sentence that makes a direct statement, used in memos and reports to announce facts or decisions.",
        example: "A strong declarative sentence opens the memo: 'Effective March 1st, all expense reports require manager approval.'",
        partOfSpeech: "noun",
      },
      {
        id: "ch8-08",
        word: "Enclosure",
        definition: "An additional document included with a letter or memo, noted at the bottom of the message.",
        example: "The cover letter noted 'Enclosure: Résumé, Portfolio' so the recruiter knew what to look for.",
        partOfSpeech: "noun",
      },
      {
        id: "ch8-09",
        word: "Audience Orientation",
        definition: "Writing that is tailored to the knowledge level, role, and expectations of the specific readers.",
        example: "The technical spec needed better audience orientation — the executive summary assumed too much background knowledge.",
        partOfSpeech: "noun",
      },
      {
        id: "ch8-10",
        word: "Objectivity",
        definition: "Presenting information based on facts rather than personal bias, opinion, or emotional involvement.",
        example: "The incident report maintained objectivity by describing only observable events, not speculating on motives.",
        partOfSpeech: "noun",
      },
      {
        id: "ch8-11",
        word: "Block Style Letter",
        definition: "A standard business letter format where all text is aligned to the left margin with no indentation.",
        example: "Most modern business correspondence follows the block style letter format for a clean, professional look.",
        partOfSpeech: "noun",
      },
      {
        id: "ch8-12",
        word: "Closing",
        definition: "The formal sign-off phrase at the end of a business letter, such as 'Sincerely' or 'Best regards'.",
        example: "She ended the letter with 'Sincerely,' followed by her signature and printed name.",
        partOfSpeech: "noun",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // CHAPTER 9 — Business Proposals
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "ch9",
    number: 9,
    title: "Business Proposals",
    emoji: "📄",
    color: "from-lime-500 to-green-400",
    terms: [
      {
        id: "ch9-01",
        word: "Business Proposal",
        definition: "A formal document that presents a persuasive case for a product, service, or solution to meet a client's need.",
        example: "The agency submitted a business proposal outlining a six-month digital marketing strategy.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-02",
        word: "Executive Summary",
        definition: "A one or two paragraph overview of a proposal or report highlighting the key points and recommendations.",
        example: "The executive summary allowed the board to grasp the proposal's value before reading the full document.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-03",
        word: "Solicited Proposal",
        definition: "A proposal written in response to a direct or indirect request from a potential client or organization.",
        example: "The construction company submitted a solicited proposal after the city released a public request for bids.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-04",
        word: "Unsolicited Proposal",
        definition: "A proposal sent without a prior request, intended to introduce a solution or generate interest.",
        example: "The startup sent an unsolicited proposal to three large retailers, hoping to land a pilot partnership.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-05",
        word: "Request for Proposal (RFP)",
        definition: "A formal document issued by an organization inviting vendors to submit proposals for a specific project.",
        example: "The hospital issued an RFP for a new patient management system and received bids from eight vendors.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-06",
        word: "Request for Quotation (RFQ)",
        definition: "A document requesting price and terms from vendors for a specific product or service.",
        example: "The procurement team sent an RFQ to five suppliers before selecting the most competitive offer.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-07",
        word: "Market Analysis",
        definition: "A section of a proposal examining the current marketplace, competition, and how the solution compares.",
        example: "The market analysis showed that no competitor offered same-day delivery, giving them a clear advantage.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-08",
        word: "Cost-Benefit Analysis",
        definition: "A method of evaluating a decision by comparing the total expected costs with the total expected benefits.",
        example: "The cost-benefit analysis showed the automation project would pay for itself within 18 months.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-09",
        word: "Feasibility Study",
        definition: "An analysis that determines whether a proposed project or solution is practical and likely to succeed.",
        example: "The feasibility study concluded that building a second warehouse was viable given current growth projections.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-10",
        word: "Return on Investment (ROI)",
        definition: "A performance measure used to evaluate the efficiency or profitability of an investment.",
        example: "The proposal projected an ROI of 40% within the first year of implementing the new software.",
        partOfSpeech: "noun",
      },
      {
        id: "ch9-11",
        word: "Benchmark",
        definition: "A standard or reference point used to measure and compare performance or quality.",
        example: "They used industry benchmarks to demonstrate that their solution outperformed competitors by 20%.",
        partOfSpeech: "noun",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // CHAPTER 10 — Reports & Documents
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "ch10",
    number: 10,
    title: "Reports & Business Documents",
    emoji: "📊",
    color: "from-fuchsia-500 to-pink-400",
    terms: [
      {
        id: "ch10-01",
        word: "Informational Report",
        definition: "A report that presents facts and details without analysis, designed to inform rather than persuade.",
        example: "The weekly sales report is an informational report — it shows figures without recommending strategy changes.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-02",
        word: "Analytical Report",
        definition: "A report that presents data alongside comprehensive analysis, conclusions, and recommendations.",
        example: "The analytical report on customer churn identified three root causes and recommended corrective actions.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-03",
        word: "Abstract",
        definition: "A brief summary at the beginning of a report or study that highlights key topics, methods, and results.",
        example: "The abstract of the feasibility study gave decision-makers a one-paragraph overview of the findings.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-04",
        word: "Appendix",
        definition: "Supplementary material placed at the end of a document that supports but is not essential to the main text.",
        example: "The full survey data was placed in an appendix, keeping the main report concise.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-05",
        word: "Table of Contents",
        definition: "An organized list of a document's sections with corresponding page numbers, aiding navigation.",
        example: "The 40-page proposal included a table of contents so reviewers could jump directly to the pricing section.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-06",
        word: "Progress Report",
        definition: "A document that tracks the status of a project, noting completed work, current activities, and upcoming steps.",
        example: "The project manager submitted a weekly progress report showing that development was three days behind schedule.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-07",
        word: "Stakeholder",
        definition: "Any individual or group with an interest in the outcome of a project, report, or business decision.",
        example: "The report was written with multiple stakeholders in mind: investors, employees, and regulatory bodies.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-08",
        word: "Visual Aid",
        definition: "A graphic element such as a chart, graph, or table used to represent data and support written content.",
        example: "The visual aid in the annual report made it easy to see that revenue had grown steadily over five years.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-09",
        word: "Résumé",
        definition: "A document summarizing a person's education, work experience, and skills for potential employers.",
        example: "She tailored her résumé for each job application, highlighting the most relevant experience first.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-10",
        word: "Reverse Chronological Order",
        definition: "Listing experiences or events starting with the most recent and working backward in time.",
        example: "Her résumé listed work experience in reverse chronological order, with her current role at the top.",
        partOfSpeech: "noun",
      },
      {
        id: "ch10-11",
        word: "Portable Document Format (PDF)",
        definition: "A file format that preserves document layout and formatting regardless of the software or device used to view it.",
        example: "The proposal was sent as a PDF to ensure the formatting remained intact when opened by the client.",
        partOfSpeech: "noun",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // CHAPTER 11 — Sales Messages & Persuasion
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "ch11",
    number: 11,
    title: "Sales Messages & Persuasion",
    emoji: "🎯",
    color: "from-red-500 to-orange-400",
    terms: [
      {
        id: "ch11-01",
        word: "Sales Message",
        definition: "The central persuasive communication that informs, intrigues, builds desire, and prompts action toward a sale.",
        example: "The sales message led with the product's biggest benefit: saving customers an average of 10 hours per week.",
        partOfSpeech: "noun",
      },
      {
        id: "ch11-02",
        word: "Benefit",
        definition: "What the buyer gains from a product or service — the positive outcome that motivates the purchase decision.",
        example: "The benefit of the CRM software is not its features, but the 30% reduction in customer churn it delivers.",
        partOfSpeech: "noun",
      },
      {
        id: "ch11-03",
        word: "Attention Statement",
        definition: "The opening line or hook in a sales message designed to immediately capture the reader's interest.",
        example: "The attention statement 'What if you never missed a deadline again?' opened the project tool's sales email.",
        partOfSpeech: "noun",
      },
      {
        id: "ch11-04",
        word: "Residual Message",
        definition: "The final impression or takeaway a reader retains after finishing a sales message — the lasting call to action.",
        example: "The residual message was the toll-free number repeated three times so readers remembered how to contact them.",
        partOfSpeech: "noun",
      },
      {
        id: "ch11-05",
        word: "Persuasion",
        definition: "The process of influencing someone's beliefs, attitudes, or actions through logical, emotional, or ethical appeals.",
        example: "Effective persuasion in the pitch combined hard data (logos) with a compelling customer story (pathos).",
        partOfSpeech: "noun",
      },
      {
        id: "ch11-06",
        word: "Unique Selling Proposition (USP)",
        definition: "The distinct feature or benefit that differentiates a product or service from all competitors.",
        example: "Their USP was a lifetime warranty — no competitor in the market offered a comparable guarantee.",
        partOfSpeech: "noun",
      },
      {
        id: "ch11-07",
        word: "Target Audience",
        definition: "The specific group of people a message is designed to reach, defined by demographics, needs, or behaviors.",
        example: "The campaign's target audience was mid-sized B2B companies with more than 50 employees.",
        partOfSpeech: "noun",
      },
      {
        id: "ch11-08",
        word: "Objection Handling",
        definition: "Anticipating and addressing potential concerns or doubts a reader or buyer may have, within the message itself.",
        example: "The proposal included a section on objection handling that preemptively addressed common pricing concerns.",
        partOfSpeech: "noun",
      },
      {
        id: "ch11-09",
        word: "Testimonial",
        definition: "A statement from a satisfied customer or credible source used to build trust in a product or service.",
        example: "The landing page featured a testimonial from a Fortune 500 client to establish credibility with new prospects.",
        partOfSpeech: "noun",
      },
      {
        id: "ch11-10",
        word: "Conversion",
        definition: "The point at which a prospect takes the desired action — signing up, purchasing, or requesting a meeting.",
        example: "The A/B test showed that changing the button text improved conversion by 18%.",
        partOfSpeech: "noun",
      },
      {
        id: "ch11-11",
        word: "Value Proposition",
        definition: "A clear statement explaining how a product solves a problem, delivers specific benefits, and why it is better than alternatives.",
        example: "The value proposition on the homepage was updated to clearly state: 'Cut reporting time by 80% in 30 days.'",
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
