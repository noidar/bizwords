// Full parsed textbook content from:
// "Business English for Success" v1.0
// Source: https://saylordotorg.github.io/text_business-english-for-success/
// Original files also available at: https://dspace.lib.hawaii.edu/
// License: Creative Commons (Saylor Foundation)

export interface KeyTerm {
  term: string;
  definition: string;
}

export interface Exercise {
  instruction: string;
  items?: string[];
}

export interface TextbookSection {
  id: string;
  chapterNum: number;
  sectionNum: string; // e.g. "1.1", "2.1"
  title: string;
  url: string;
  learningObjectives: string[];
  content: string; // main prose, markdown-like
  keyTerms: KeyTerm[];
  exercises: Exercise[];
  keyTakeaways: string[];
}

export interface TextbookChapter {
  id: string;
  num: number;
  title: string;
  url: string;
  emoji: string;
  color: string;
  sections: TextbookSection[];
}

const BASE = "https://saylordotorg.github.io/text_business-english-for-success";

export const textbookChapters: TextbookChapter[] = [
  // ────────────────────────────────────────────────────
  // CHAPTER 1 — Writing Basics
  // ────────────────────────────────────────────────────
  {
    id: "ch1",
    num: 1,
    title: "Writing Basics: What Makes a Good Sentence?",
    url: `${BASE}/s05-writing-basics-what-makes-a-go.html`,
    emoji: "✏️",
    color: "from-blue-500 to-cyan-400",
    sections: [
      {
        id: "1-1",
        chapterNum: 1,
        sectionNum: "1.1",
        title: "Sentence Writing",
        url: `${BASE}/s05-01-sentence-writing.html`,
        learningObjectives: [
          "Identify the components of a basic sentence.",
          "Identify the four most serious writing errors.",
        ],
        content: `Clear communication is important for both students and professionals. Whether you are typing an e-mail or writing a report, it is your responsibility to present your thoughts and ideas clearly and precisely. Writing in complete sentences is one way to ensure that you communicate well.

## Components of a Sentence

Clearly written, complete sentences require key information: a **subject**, a **verb**, and a complete idea. A sentence needs to make sense on its own. Sometimes, complete sentences are also called **independent clauses** — groups of words containing a subject and verb that can stand alone.

## Subjects

When you read a sentence, you may first look for the **subject** — what the sentence is about. The subject usually appears at the beginning of a sentence as a **noun** (a person, place, thing, or idea) or a **pronoun** (a word that replaces a noun). Common pronouns are *I*, *he*, *she*, *it*, *you*, *they*, and *we*.

A **compound subject** contains more than one noun or pronoun, joined by *and*, *or*, or *nor*.

A **prepositional phrase** begins with a preposition (in, on, under, near, by, with, about) and cannot act as the subject of a sentence. For example, in *"Near the building, a car was parked,"* the subject is *car*, not the prepositional phrase *near the building*. Writers frequently make the mistake of identifying a noun inside a prepositional phrase as the sentence's subject — always find the true subject by asking *who* or *what* performs the main action.

## Verbs

A **verb** tells what the subject is doing or links the subject to a describing word. There are three types:

- **Action verbs** — connect the subject to an action: *She writes the report.*
- **Linking verbs** — connect the subject to a descriptor: *The memo is clear.*
- **Helping verbs** — used with a main verb to describe mood or tense: *He has finished the draft.*

Common linking verbs include forms of *be* (am, is, are, was, were), as well as *seem*, *appear*, *become*, *feel*, *look*, *smell*, *sound*, and *taste*. Helping verbs include forms of *be*, *do*, and *have*.

## Sentence Patterns

Recognizing common sentence patterns helps you construct clear sentences and identify structural problems:

| Pattern | Example |
|---------|---------|
| S-V | Birds sing. |
| S-LV-N | Maria is a manager. |
| S-LV-Adj | The proposal seems strong. |
| S-V-Adv | He spoke confidently. |
| S-V-DO | She sent the email. |
| S-V-IO-DO | He gave the client a report. |

## Sentence Structure Errors

### Fragments

**Fragments** are incomplete sentences missing a subject, a verb, or both. They leave the reader waiting for more information.

- Fragment: *Told her about the deadline.* (Missing subject)
- Complete: *I told her about the deadline.*
- Fragment: *The new marketing director from Boston.* (Missing verb)
- Complete: *The new marketing director from Boston attended the meeting.*

Fix fragments by adding the missing subject or verb, or by attaching the fragment to a neighboring sentence.

### Run-on Sentences

**Run-on sentences** incorrectly combine two or more independent clauses. There are two main types:

- **Fused sentence:** Two complete sentences joined with no punctuation at all: *The report was due Monday we missed the deadline.*
- **Comma splice:** Two complete sentences joined only by a comma: *The report was due Monday, we missed the deadline.*

You can fix a run-on sentence in four ways:

1. Add a **period** to create two separate sentences: *The report was due Monday. We missed the deadline.*
2. Use a **semicolon** to show the clauses are closely related: *The report was due Monday; we missed the deadline.*
3. Add a **comma plus a FANBOYS conjunction** (*for, and, nor, but, or, yet, so*): *The report was due Monday, but we missed the deadline.*
4. Add a **dependent word** (*although, because, since, unless*) to subordinate one clause: *Because the report was due Monday, we worked through the weekend.*

Each correction creates a slightly different emphasis. Choose the fix that best reflects the relationship between the ideas.`,
        keyTerms: [
          { term: "Independent clause", definition: "A group of words that contains a subject and a verb and can stand alone as a complete, grammatically correct thought." },
          { term: "Subject", definition: "A word that tells who or what the sentence is about; usually a noun or pronoun." },
          { term: "Compound subject", definition: "A subject containing two or more nouns or pronouns joined by and, or, or nor." },
          { term: "Prepositional phrase", definition: "A group of words beginning with a preposition that modifies another word but cannot act as a subject." },
          { term: "Action verb", definition: "A verb that identifies the action the subject performs." },
          { term: "Linking verb", definition: "A verb that connects or links the subject to a noun or adjective." },
          { term: "Helping verb", definition: "A verb used with a main verb to describe mood or tense; usually a form of be, do, or have." },
          { term: "Fragment", definition: "An incomplete sentence that results when a subject or a verb is missing." },
          { term: "Run-on sentence", definition: "A sentence made up of two or more independent clauses that have been incorrectly combined." },
          { term: "Fused sentence", definition: "A run-on created by two complete sentences combined without any punctuation." },
          { term: "Comma splice", definition: "A run-on created by two complete sentences separated only by a comma." },
          { term: "Coordinating conjunction", definition: "A word that links two independent clauses. The seven are: for, and, nor, but, or, yet, so (FANBOYS)." },
          { term: "Gerund", definition: "A verb form ending in -ing that is used as a noun, such as running or writing." },
          { term: "Infinitive", definition: "A verb form that combines the word to with a verb, such as to buy or to write." },
        ],
        exercises: [
          {
            instruction: "Read the following sentences. Underline the subjects and circle the prepositional phrases.",
            items: [
              "The gym is open until nine o'clock tonight.",
              "We went to the store to get some ice.",
              "The student with the most extra credit will win a homework pass.",
              "Maya and Tia found an abandoned cat by the side of the road.",
              "The driver of that pickup truck skidded on the ice.",
            ],
          },
          {
            instruction: "Copy each sentence and underline the verb(s) twice. Name the type of verb used (action, linking, or helping).",
            items: [
              "The cat sounds ready to come back inside.",
              "We have not eaten dinner yet.",
              "It took four people to move the broken-down car.",
              "The book was filled with notes from class.",
            ],
          },
        ],
        keyTakeaways: [
          "A sentence is complete when it contains both a subject and a verb that makes sense on its own.",
          "A compound subject contains more than one noun; a prepositional phrase cannot be the subject.",
          "Verbs may be action verbs, linking verbs, or helping verbs.",
          "Fragments can be corrected by adding a missing subject or verb.",
          "Run-on sentences can be corrected by adding appropriate punctuation or a coordinating conjunction.",
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // CHAPTER 2 — Punctuation
  // ────────────────────────────────────────────────────
  {
    id: "ch2",
    num: 2,
    title: "Punctuation",
    url: `${BASE}/s06-punctuation.html`,
    emoji: "🔤",
    color: "from-violet-500 to-purple-400",
    sections: [
      {
        id: "2-1",
        chapterNum: 2,
        sectionNum: "2.1",
        title: "Commas",
        url: `${BASE}/s06-01-commas.html`,
        learningObjectives: [
          "Identify the uses of commas.",
          "Correctly use commas in sentences.",
        ],
        content: `A **comma** is a punctuation mark that indicates a pause in a sentence or a separation of items in a list. Knowing when and how to use commas is one of the most important skills in written communication. Incorrect comma usage is among the most common writing errors in professional documents.

## Rule 1 — After an Introductory Word or Phrase

When a sentence begins with an introductory word or phrase, place a comma after that word or phrase to signal where the main clause begins.

- *Personally, I think the project needs more time.*
- *Without spoiling the surprise, we need to tell her to save the date.*
- *After reviewing the proposal, the committee approved the budget.*

The comma prevents the reader from running the introductory material into the main clause and losing the meaning.

## Rule 2 — In a List of Items

When listing three or more items in a sentence, separate them with commas. The comma before the final *and* (called the **Oxford comma** or **serial comma**) is recommended in most professional and academic writing because it prevents ambiguity.

- *We need to buy flour, tomatoes, and cheese at the store.*
- *The report covers sales, marketing, operations, and finance.*

## Rule 3 — Coordinating Adjectives

When two or more adjectives each independently modify the same noun, separate them with commas. To test whether adjectives are coordinating, try inserting *and* between them — if the sentence still makes sense, use a comma.

- *It was a bright, windy, clear day.* (bright and windy and clear — all independently describe *day*)

## Rule 4 — Before Conjunctions in Compound Sentences

When two independent clauses are joined by a coordinating conjunction (*for, and, nor, but, or, yet, so*), place a comma before the conjunction.

- *He missed class today, and he thinks he will be out tomorrow, too.*
- *We submitted the report on time, but the client requested revisions.*

## Rule 5 — Before and After Interrupting Words

Words or phrases that interrupt the flow of a sentence (also called **nonrestrictive elements**) are set off by commas on both sides.

- *An Italian astronomer, Galileo, proved that Earth orbited the sun.*
- *The CEO, who joined the company last year, announced new targets.*

## Rule 6 — In Dates, Addresses, and Letters

- **Dates:** Place a comma after the day and after the year when it appears mid-sentence: *The contract was signed May 4, 2001, in New York.*
- **Addresses:** Place a comma after the street address and after the city: *We moved to 4542 Boxcutter Lane, Hope, Missouri 70832.*
- **Greetings and closings:** *Dear Mrs. Al-Sayf,* ... *Sincerely,*`,
        keyTerms: [
          { term: "Comma", definition: "A punctuation mark that tells the reader when to pause or when a word is part of a list." },
          { term: "Coordinating adjectives", definition: "A series of adjectives that come before the noun they describe, each independently modifying that noun, separated by commas." },
          { term: "Interrupting words", definition: "Words or phrases that describe a noun or add information to a sentence, separated from the rest of the sentence by commas." },
        ],
        exercises: [
          {
            instruction: "Look for the introductory word or phrase. Copy the sentence and add a comma to correct it.",
            items: [
              "Suddenly the dog ran into the house.",
              "In the blink of an eye the kids were ready to go to the movies.",
              "Confused he tried opening the box from the other end.",
              "Every year we go camping in the woods.",
              "Without a doubt green is my favorite color.",
            ],
          },
        ],
        keyTakeaways: [
          "Commas indicate a pause or a list in a sentence.",
          "A comma should be used after an introductory word or phrase.",
          "Commas separate items in a list and coordinating adjectives.",
          "Commas separate two independent clauses when a coordinating conjunction follows.",
          "Commas are used in dates, addresses, and letter greetings and closings.",
          "Interrupting words or phrases are surrounded by commas on both sides.",
        ],
      },
      {
        id: "2-2",
        chapterNum: 2,
        sectionNum: "2.2",
        title: "Semicolons",
        url: `${BASE}/s06-02-semicolons.html`,
        learningObjectives: [
          "Identify and use semicolons correctly.",
        ],
        content: `A **semicolon (;)** is stronger than a comma but weaker than a period. It links two independent clauses that are closely related in thought without using a conjunction. Using a semicolon signals to the reader that the two ideas are connected and should be considered together.

## Semicolons Between Independent Clauses

Use a semicolon to join two complete, related sentences:

- *The report was complete; now we needed to present it.*
- *The new policy went into effect on Monday; most employees were unaware of it.*

A semicolon cannot be used between a dependent and an independent clause — both sides must be able to stand alone.

## Semicolons with Transition Words

Use a semicolon with a **transition word** (also called a **conjunctive adverb**) followed by a comma to show the specific relationship between two clauses:

- *The project was challenging; however, the team finished on time.*
- *Sales declined in Q3; therefore, the team revised its targets for Q4.*
- *She lacked formal credentials; nevertheless, her experience was impressive.*

Common transition words and their relationships:

| Relationship | Transition Words |
|--------------|-----------------|
| Addition | also, furthermore, moreover, in addition |
| Contrast | however, nevertheless, conversely, on the other hand |
| Cause and effect | therefore, consequently, thus, hence, accordingly |
| Emphasis | indeed, certainly, in fact |
| Time | meanwhile, subsequently, then, finally |

## Semicolons in Complex Lists

When list items themselves contain commas, use semicolons to separate the items so the reader can identify each item clearly:

- *The committee included Priya Sharma, CFO; David Lee, CTO; and Maria González, CMO.*
- *We have offices in Austin, Texas; Portland, Oregon; and Burlington, Vermont.*

Without semicolons, these lists would be confusing because the reader could not tell which commas separate list items and which belong within items.

## Common Mistakes to Avoid

- **Do not** use a semicolon before a coordinating conjunction (*and, but, or*) — that requires a comma: *She called, and he answered.*
- **Do not** capitalize the word following a semicolon unless it is a proper noun.
- **Do not** use a semicolon between an independent clause and a dependent clause.`,
        keyTerms: [
          { term: "Semicolon", definition: "A punctuation mark used to link two closely related independent clauses or to separate complex list items that contain internal commas." },
          { term: "Transition word", definition: "A conjunctive adverb that shows the relationship between two clauses, such as however, therefore, or moreover; followed by a comma when used after a semicolon." },
        ],
        exercises: [
          {
            instruction: "Join the following sentence pairs using a semicolon and an appropriate transition word.",
            items: [
              "The presentation was excellent. The audience was still skeptical.",
              "We submitted the report on time. The client approved it immediately.",
              "The new software is powerful. It requires extensive training to use effectively.",
            ],
          },
        ],
        keyTakeaways: [
          "A semicolon can replace a period to show that two independent clauses are closely related.",
          "When using a transitional word after a semicolon, follow it with a comma.",
          "Semicolons can separate complex list items that already contain commas.",
          "Both clauses joined by a semicolon must be able to stand alone as complete sentences.",
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // CHAPTER 3 — Working with Words
  // ────────────────────────────────────────────────────
  {
    id: "ch3",
    num: 3,
    title: "Working with Words: Which Word Is Right?",
    url: `${BASE}/s07-working-with-words-which-word-.html`,
    emoji: "📖",
    color: "from-sky-500 to-blue-400",
    sections: [
      {
        id: "3-3",
        chapterNum: 3,
        sectionNum: "3.3",
        title: "Word Choice",
        url: `${BASE}/s07-03-word-choice.html`,
        learningObjectives: [
          "Identify the reasons why using a dictionary and thesaurus is important when writing.",
          "Identify how to use proper connotations.",
          "Identify how to avoid using slang, clichés, and overly general words in your writing.",
        ],
        content: `Effective writing involves making conscious word choices. The skill and accuracy of your word choice is a major factor in developing your writing style. Using the right word in the right context demonstrates command of the language and builds credibility with your audience.

## Using a Dictionary and Thesaurus

Dictionaries provide spelling, pronunciation, part of speech, definition, synonyms, and etymology. A **thesaurus** gives synonyms (same meaning) and antonyms (opposite meaning) — invaluable for finding exactly the right word. However, never substitute a word from a thesaurus without checking its meaning in a dictionary first. Synonyms carry subtle differences in tone and implication that can change the meaning of a sentence entirely.

## Denotation vs. Connotation

Every word has both a **denotation** (its literal dictionary definition) and a **connotation** (the emotional, cultural, or implied meaning it carries). Skilled writers choose words whose connotations match the tone they intend.

| Word | Connotation |
|------|-------------|
| *Scrawny* | Negative — implies weakness or unhealthy thinness |
| *Skinny* | Slightly negative or neutral — casual description |
| *Slender* | Positive — implies elegance |
| *Lean* | Neutral — plain descriptive, often positive in professional contexts |

When choosing words, consider both what they mean *literally* and what they *suggest* to readers.

## Avoiding Slang

**Slang** is informal, nonstandard language appropriate between friends but out of place in professional or academic writing. Slang varies by region, age group, and culture, which means it is often not understood by all readers. It can also undermine your credibility.

- Slang: *I totally crushed that presentation.*
- Professional: *The presentation was very well received.*

- Slang: *We need to touch base about that ASAP.*
- Professional: *We need to discuss that soon.*

## Avoiding Clichés

**Clichés** are overused expressions that have lost their impact through repetition: *"at the end of the day," "think outside the box," "low-hanging fruit," "move the needle."* They signal lazy writing to readers.

- Clichéd: *Let's circle back to touch base and move the needle.*
- Clear: *Let's meet Thursday to review progress and set next steps.*

Replace clichés with fresh, specific language that actually describes the situation at hand.

## Avoiding Overly General Words

Replace vague general words with specific, concrete ones. General language forces readers to fill in the gaps with their own assumptions, which may not match your meaning.

- General: *The meeting went badly.*
- Specific: *Three key stakeholders left the meeting before the vote, and the proposal failed 7–4.*

- General: *We need to improve our customer service.*
- Specific: *We need to reduce our average response time from 48 hours to 24 hours.*

Specific language builds trust, demonstrates competence, and prevents misunderstanding.`,
        keyTerms: [
          { term: "Denotation", definition: "The literal dictionary definition of a word." },
          { term: "Connotation", definition: "The emotional or cultural meaning attached to a word; can be positive, negative, or neutral." },
          { term: "Slang", definition: "Informal words considered nonstandard English; appropriate in casual speech but not formal writing." },
          { term: "Cliché", definition: "A descriptive expression that has lost its effectiveness because it is overused." },
          { term: "Thesaurus", definition: "A reference tool that provides lists of synonyms and antonyms for words." },
        ],
        exercises: [
          {
            instruction: "Identify the connotation (positive, negative, or neutral) of each word.",
            items: [
              "curious / nosy / interested",
              "lazy / relaxed / slow",
              "courageous / foolhardy / assured",
              "mansion / shack / residence",
            ],
          },
          {
            instruction: "Edit the following paragraph by replacing slang words with formal language.",
            items: [
              "I felt like such an airhead when I got up to give my speech. Man, I felt like such a klutz. I was so stressed out about being up there. I feel like I've been practicing this speech 24/7, and I still bombed.",
            ],
          },
        ],
        keyTakeaways: [
          "Using a dictionary and thesaurus improves word choice.",
          "Connotations of words may be positive, neutral, or negative — choose deliberately.",
          "Slang, clichés, and overly general words should be avoided in academic and professional writing.",
          "Specific language builds credibility and prevents misunderstanding.",
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // CHAPTER 4 — Help for English Language Learners
  // ────────────────────────────────────────────────────
  {
    id: "ch4",
    num: 4,
    title: "Help for English Language Learners",
    url: `${BASE}/s08-help-for-english-language-lear.html`,
    emoji: "🌍",
    color: "from-teal-500 to-emerald-400",
    sections: [
      {
        id: "4-8",
        chapterNum: 4,
        sectionNum: "4.8",
        title: "Slang and Idioms",
        url: `${BASE}/s08-08-slang-and-idioms.html`,
        learningObjectives: [
          "Recognize slang and idioms.",
          "Learn to avoid using slang and idioms in formal writing.",
        ],
        content: `Words are the basis of how a reader or listener judges you. When writing an academic paper or speaking in a business interview, choose words carefully. For English language learners in particular, slang and idioms present a double challenge: they are easy to misuse in writing, and they are often genuinely puzzling when encountered in reading.

## Slang

**Slang** is informal, playful language that changes over time and varies by region and culture. It is casual talk inappropriate for formal contexts.

| Slang Word / Phrase | Formal Equivalent |
|---------------------|-------------------|
| check it out | examine / review |
| all-nighter | studying through the night |
| pro | professional |
| awesome | excellent / outstanding |
| screw up | make a mistake / error |
| cool | good / appropriate |
| pig out | overeat / consume excessively |
| stuff | items / materials / tasks |

**Rule:** Never use slang in business emails, proposals, reports, or interviews. When in doubt, ask yourself: *Would I use this word in a letter to a senior executive I have never met?*

## Idioms

**Idioms** are expressions whose meaning differs from the literal definitions of the words. The phrase *"it's raining cats and dogs"* does not literally describe animals falling from the sky — it means it is raining heavily. Native speakers use idioms constantly without thinking about them, but they can be genuinely confusing for language learners.

| Idiom | Meaning |
|-------|---------|
| a blessing in disguise | something good that you don't recognize at first |
| a piece of cake | easy to do |
| better late than never | it is better to do something late than not at all |
| on pins and needles | very nervous or anxious |
| the sky is the limit | the possibilities are endless |
| pulling your leg | making a joke by tricking someone |
| on top of the world | feeling great |
| not a chance | it will definitely not happen |
| back to the drawing board | starting over after a failure |
| the ball is in your court | it is your turn to take action or make a decision |

## Using Context Clues to Understand Idioms

When you encounter an unknown idiom in reading, use the surrounding text to figure out its meaning:

1. **Definition clue** — an explanation appears right after: *I was on pins and needles — I was so nervous I could barely sit still.*
2. **Restatement clue** — the idiom is simplified or rephrased nearby in the text.
3. **Contrast clue** — a contrasting word (*but, however, although*) signals the opposite meaning: *She thought it would be a piece of cake, but it turned out to be very difficult.*
4. **Inference clue** — use what you know about the topic or situation to guess the meaning from context.

## Why Idioms Don't Belong in Formal Writing

Like slang, idioms carry informal connotations. Additionally, business communications often go to international audiences where idioms may be genuinely unintelligible. Using clear, literal language ensures your message is understood by everyone, regardless of their English background.`,
        keyTerms: [
          { term: "Slang", definition: "A type of informal language that is casual and playful; should be avoided in formal writing." },
          { term: "Idiom", definition: "An expression whose meaning is different from the dictionary definitions of its individual words." },
          { term: "Context clues", definition: "Words or phrases in surrounding text that help clarify the meaning of an unfamiliar word or expression." },
        ],
        exercises: [
          {
            instruction: "Edit the business email by replacing slang with formal language.",
            items: [
              "Dear Ms. O'Connor: I am writing to follow up on my interview from last week. First of all, it was awesome to meet you. You are a really cool lady. I believe I would be a pro at all the stuff you mentioned. I am not a workaholic, but I do work hard and 'take care of business.'",
            ],
          },
        ],
        keyTakeaways: [
          "Informal language is not appropriate in formal writing or speaking contexts.",
          "Slang and idioms may not make logical sense to nonnative speakers of English.",
          "Be aware of slang and idioms so they do not appear in your formal writing.",
          "Use context clues to decode unfamiliar idioms when reading.",
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // CHAPTER 5 — Writing Paragraphs
  // ────────────────────────────────────────────────────
  {
    id: "ch5",
    num: 5,
    title: "Writing Paragraphs: Separating Ideas and Shaping Content",
    url: `${BASE}/s09-writing-paragraphs-separating-.html`,
    emoji: "📝",
    color: "from-lime-500 to-green-400",
    sections: [
      {
        id: "5-1",
        chapterNum: 5,
        sectionNum: "5.1",
        title: "Purpose, Audience, Tone, and Content",
        url: `${BASE}/s09-01-purpose-audience-tone-and-cont.html`,
        learningObjectives: [
          "Identify the four common academic purposes.",
          "Identify how to use purpose, audience, tone, and content to plan and write a paragraph.",
          "Apply purpose, audience, tone, and content to a writing assignment.",
        ],
        content: `Every piece of writing begins with a decision: *Why am I writing this, and who will read it?* Three fundamental elements shape the content of any paragraph or essay: **purpose**, **tone**, and **audience**. Understanding all three before you begin writing will make your drafts more focused and your revisions far easier.

## Purpose

**Purpose** is the reason the writer creates a document. In academic and professional writing, four purposes are most common:

- **Summary** — condenses a longer text into its essential points using the writer's own words. A summary does not include personal opinion; it accurately represents the original source.
- **Analysis** — separates complex material into its component parts and studies how those parts relate to the whole. Analysis asks *how* and *why* questions.
- **Synthesis** — combines ideas from multiple sources to create a new unified point of view. It goes beyond summarizing individual sources to draw connections among them.
- **Evaluation** — judges the value, quality, or effectiveness of something and communicates the writer's informed opinion with supporting justification.

Most real-world writing blends purposes. A business report might summarize data, analyze trends, and evaluate options all in the same document.

## Audience

**Audience** is the individual or group the writer intends to address. Writing aimed at the wrong audience fails even if it is technically correct. Consider the following when identifying your audience:

- **Demographics** — age, ethnicity, gender, and cultural background affect what examples resonate and what references require explanation.
- **Education level** — the vocabulary, complexity of ideas, and amount of background explanation should match the reader's schooling.
- **Prior knowledge** — what does the audience already know about this topic? Avoid over-explaining what they already understand and under-explaining what they don't.
- **Expectations** — what do readers expect from this type of document? A legal brief has different conventions than a sales email.

Writing to a general audience requires simpler, clearer language. Writing to subject-matter experts allows more technical vocabulary and assumes more background knowledge.

## Tone

**Tone** is the writer's attitude toward the subject and audience, communicated through sentence structure, word choice, punctuation, and level of formality. Tone can be:

- Formal or informal
- Serious or lighthearted
- Confident or tentative
- Objective or opinionated

The same information can be delivered in very different tones. *"The quarterly results were disappointing"* is neutral and factual. *"We utterly failed to meet our targets this quarter"* is blunt and self-critical. Choose a tone appropriate to the context and audience.

## Content

**Content** is all the written substance of a document — the examples, statistics, facts, anecdotes, testimonies, and observations that support your main idea. Content must be:

- **Appropriate** — relevant to your purpose and audience
- **Accurate** — drawn from credible sources
- **Interesting** — engaging enough to hold the reader's attention
- **Sufficient** — enough detail to support your point without overwhelming

Weak content leaves claims unsubstantiated. Strong content provides specific evidence that builds credibility and persuades.`,
        keyTerms: [
          { term: "Purpose", definition: "The reason a writer creates a document; the four common academic purposes are summary, analysis, synthesis, and evaluation." },
          { term: "Tone", definition: "The writer's attitude toward the subject and audience, reflected in word choice, sentence structure, and formality." },
          { term: "Audience", definition: "The individual or group the writer intends to address." },
          { term: "Summary", definition: "A condensed version of a longer text that extracts vital information in the writer's own words without adding personal opinion." },
          { term: "Analysis", definition: "Writing that separates complex material into its component parts and studies how those parts relate to the whole." },
          { term: "Synthesis", definition: "Writing that combines ideas from multiple sources to create a new, unified point of view." },
          { term: "Evaluation", definition: "Writing that communicates the writer's informed opinion about a document or topic with justification and supporting evidence." },
          { term: "Content", definition: "All the written substance in a document — the examples, statistics, facts, anecdotes, testimonies, and observations that support the main idea." },
        ],
        exercises: [
          {
            instruction: "Read the following paragraphs about four films and identify the purpose of each: summary, analysis, synthesis, or evaluation.",
            items: [
              "Paragraph A — describes the plot and main characters of a film.",
              "Paragraph B — examines how the director's use of lighting creates a sense of dread.",
              "Paragraph C — compares how three different films from the same year addressed economic inequality.",
              "Paragraph D — argues that the film is the best entry in the franchise and explains why.",
            ],
          },
        ],
        keyTakeaways: [
          "Paragraphs separate ideas into manageable chunks and shape how a reader processes information.",
          "The content of every paragraph is shaped by its purpose, audience, and tone.",
          "The four academic purposes are to summarize, analyze, synthesize, and evaluate.",
          "Audience demographics, education level, prior knowledge, and expectations all affect writing decisions.",
          "Tone creates the relationship between writer and audience and should match the context.",
        ],
      },
      {
        id: "5-2",
        chapterNum: 5,
        sectionNum: "5.2",
        title: "Effective Means for Writing a Paragraph",
        url: `${BASE}/s09-02-effective-means-for-writing-a-.html`,
        learningObjectives: [
          "Identify the characteristics of a good topic sentence.",
          "Identify the three parts of a well-developed paragraph.",
          "Apply knowledge of topic sentences and paragraph structure to an assignment.",
        ],
        content: `A well-constructed paragraph is not simply a group of related sentences. It is a carefully organized unit with a clear beginning, middle, and end. Understanding the three-part structure — **topic sentence**, **body**, and **conclusion** — helps you build paragraphs that are focused, coherent, and persuasive.

## The Three-Part Structure

### Topic Sentence

The **topic sentence** states the main point of the paragraph and controls everything that follows. It combines two elements:

- **Main idea** — the broad subject of the paragraph (e.g., *remote work*)
- **Controlling idea** — the writer's specific stance or angle on that subject (e.g., *increases productivity when managed well*)

Together they form a topic sentence: *Remote work increases productivity when managed well.*

The controlling idea tells readers what to expect and keeps the writer on track. Without it, a paragraph risks drifting across multiple unrelated points.

**Five characteristics of a strong topic sentence:**
1. Accurately indicates what follows in the paragraph
2. Contains both a topic and a controlling idea
3. Is clear and easy to follow
4. Does not include supporting details — those belong in the body
5. Engages the reader with interesting, specific vocabulary

### Body

The **body** of a paragraph consists of **supporting sentences** that explain, prove, or enhance the topic sentence. Supporting sentences use:

- **Reasons** — logical explanations for the controlling idea
- **Facts** — verifiable, objective information
- **Statistics** — numerical data from credible sources
- **Quotations** — direct or paraphrased words from experts
- **Examples** — specific cases that illustrate the point

The body is the longest part of the paragraph. Every supporting sentence must be directly relevant to the topic sentence. If a sentence wanders from the controlling idea, cut it.

### Conclusion

The **concluding sentence** brings the paragraph to a satisfying close. It may:

- Restate the main idea in different words (not word-for-word repetition)
- Summarize the key supporting points
- Draw a logical conclusion based on the evidence presented
- Make a prediction, recommendation, or observation
- Transition naturally to the next paragraph

### Transitions

**Transition words** connect sentences and show the logical relationship between ideas. Use them to guide readers through your argument.

| Function | Example Transitions |
|----------|-------------------|
| Adding information | also, furthermore, moreover, in addition |
| Showing contrast | however, on the other hand, nevertheless, yet |
| Showing cause/effect | therefore, consequently, as a result, thus |
| Concluding | finally, in conclusion, in summary, all in all, thus |
| Giving examples | for example, for instance, specifically |`,
        keyTerms: [
          { term: "Topic sentence", definition: "The sentence that controls the point of the paragraph; typically appears at or near the beginning and contains both a main idea and a controlling idea." },
          { term: "Body", definition: "The middle part of a paragraph consisting of supporting sentences that explain, prove, or enhance the topic sentence." },
          { term: "Conclusion", definition: "The final sentence of a paragraph that summarizes the main point using different words." },
          { term: "Main idea", definition: "The broad subject discussed throughout the paragraph." },
          { term: "Controlling idea", definition: "The writer's specific stance or angle on the main idea; defines the scope and direction of the paragraph." },
          { term: "Supporting sentences", definition: "Sentences in the body of a paragraph that explain, prove, or enhance the topic sentence through reasons, facts, statistics, quotations, or examples." },
          { term: "Concluding sentence", definition: "The final sentence of a paragraph that restates the topic sentence using different words and brings the paragraph to a close." },
          { term: "Transition", definition: "A connecting word or phrase that shows the logical relationship between two ideas." },
        ],
        exercises: [
          {
            instruction: "In each topic sentence, circle the main idea and underline the controlling idea.",
            items: [
              "Daily exercise contributes significantly to mental health and emotional well-being.",
              "Social media use among teenagers has raised serious concerns about self-esteem.",
              "Effective project management requires clear communication at every stage.",
              "The introduction of electric vehicles is transforming the global automotive industry.",
              "Strong writing skills give professionals a measurable advantage in the workplace.",
            ],
          },
          {
            instruction: "Choose the most effective topic sentence from each pair and explain why.",
            items: [
              "A: Dogs make good pets. / B: Training a dog requires patience, consistency, and a willingness to invest time every day.",
              "A: Technology affects education in many ways. / B: Tablet computers in classrooms improve engagement for students with learning differences.",
              "A: Coffee is popular worldwide. / B: The global rise of specialty coffee culture has reshaped how urban professionals begin their workdays.",
              "A: Remote work has pros and cons. / B: Remote work can reduce commuting costs and improve work-life balance when clear boundaries are established.",
            ],
          },
        ],
        keyTakeaways: [
          "A well-developed paragraph has three parts: a topic sentence, a body, and a concluding sentence.",
          "The topic sentence contains a main idea and a controlling idea that sets the direction of the paragraph.",
          "A good topic sentence does not include supporting details — those belong in the body.",
          "Supporting sentences use facts, reasons, statistics, quotations, and examples.",
          "The concluding sentence restates the main point without repeating it word-for-word.",
          "Transition words organize ideas and show logical relationships between sentences.",
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // CHAPTER 6 — Refining Your Writing
  // ────────────────────────────────────────────────────
  {
    id: "ch6",
    num: 6,
    title: "Refining Your Writing: How Do I Improve My Writing Technique?",
    url: `${BASE}/s10-refining-your-writing-how-do-i.html`,
    emoji: "🔧",
    color: "from-amber-500 to-yellow-400",
    sections: [
      {
        id: "6-1",
        chapterNum: 6,
        sectionNum: "6.1",
        title: "Sentence Variety",
        url: `${BASE}/s10-01-sentence-variety.html`,
        learningObjectives: [
          "Identify ways to create variety in sentence structure.",
          "Write and revise sentences by varying the beginning of the sentence.",
          "Write and revise sentences by connecting ideas using modifiers and relative clauses.",
        ],
        content: `**Sentence variety** means using an assortment of sentence patterns, rhythms, and lengths to reduce repetition and keep readers engaged. When every sentence follows the same structure — subject, verb, object — writing becomes monotonous and difficult to read. Strategic variety signals a skilled, confident writer.

## Varying Sentence Beginnings

### Starting with an Adverb

Adverbs modify verbs, adjectives, or other adverbs, and many end in *-ly*. Moving an adverb to the beginning of a sentence shifts emphasis and creates rhythm. Follow an introductory adverb with a comma.

- Standard: *He cautiously unlocked the kennel.*
- Varied: *Cautiously, he unlocked the kennel.*

### Starting with a Prepositional Phrase

Moving a prepositional phrase from the end of a sentence to the beginning shifts the emphasis of the sentence.

- Standard: *A bandaged man waited in the doctor's office.*
- Varied: *In the doctor's office, a bandaged man waited.*

### Using an Inverted Sentence

In an **inverted sentence**, the verb comes before the subject. This structure creates emphasis and variety.

- Standard: *A truck was parked in the driveway.*
- Inverted: *Parked in the driveway was a truck.*

## Connecting Ideas with Modifiers

### The -ing Modifier

An *-ing* participial phrase placed at the beginning of a sentence describes the subject of the main clause and must refer to that subject logically.

- *Checking the computer system, Steve discovered a virus.*

### The -ed Modifier

A past participial phrase (ending in *-ed* or an irregular form) works the same way:

- *Delayed by a traffic jam, the Jones family arrived late.*

### Relative Clauses

A **relative clause** contains its own subject and verb and describes a noun in the main clause. It is introduced by *who*, *which*, or *where*.

- *The managing director, who lives in Seattle, is visiting our office next week.*

### Appositives

An **appositive** is a word or phrase that renames or describes the noun directly beside it, set off by commas.

- *Harland Sanders, "the Colonel," began serving food at a roadside restaurant in 1930.*

## Avoiding Dangling Modifiers

A **dangling modifier** occurs when an introductory phrase does not logically refer to the subject of the main clause. This creates unintentional confusion or humor.

- Dangling: *Jogging across the parking lot, my breath grew ragged.* (The breath is not jogging.)
- Corrected: *Jogging across the parking lot, I felt my breath grow ragged.*

Always make sure the noun that immediately follows an introductory modifier is the one performing the action described in that modifier.`,
        keyTerms: [
          { term: "Sentence variety", definition: "The use of an assortment of sentence patterns, rhythms, and lengths to reduce repetition and improve readability." },
          { term: "Adverb", definition: "A word that describes a verb, adjective, or another adverb; often ends in -ly." },
          { term: "Prepositional phrase", definition: "A group of words beginning with a preposition; can be moved to the beginning of a sentence to create variety." },
          { term: "Inverted sentence", definition: "A sentence in which the verb appears before the subject, used to create emphasis." },
          { term: "Modifier", definition: "A word or phrase that qualifies or describes another element in the sentence." },
          { term: "Dangling modifier", definition: "An introductory modifier that does not logically refer to the subject of the main clause, creating confusion." },
          { term: "Relative clause", definition: "A dependent clause containing a subject and verb that describes a noun; introduced by who, which, or where." },
          { term: "Appositive", definition: "A word or group of words placed beside a noun to describe or rename it, set off by commas." },
        ],
        exercises: [
          {
            instruction: "Combine each set of simple sentences into one compound or complex sentence.",
            items: [
              "The storm knocked out the power. The office was closed for the day.",
              "She finished the report. She sent it immediately.",
              "He was tired. He kept working. He wanted to meet the deadline.",
              "The software update is available. It requires a system restart.",
              "Maria leads the project. She has fifteen years of experience.",
            ],
          },
          {
            instruction: "Rewrite each sentence by moving the adverb to the beginning.",
            items: [
              "He spoke quietly in the meeting.",
              "She carefully reviewed the contract.",
              "They successfully launched the new product.",
              "He patiently answered every question.",
              "The team worked diligently to meet the deadline.",
            ],
          },
          {
            instruction: "Rewrite each sentence as an inverted sentence.",
            items: [
              "A large crowd was gathered outside.",
              "The solution to the problem was found after hours of discussion.",
              "Three new candidates were listed on the ballot.",
              "A proposal for a merger was submitted last week.",
              "The final decision rested with the board.",
            ],
          },
          {
            instruction: "Rewrite each pair of sentences as one sentence using an -ing modifier, -ed modifier, relative clause, or appositive.",
            items: [
              "Alicia is our head of operations. She announced the new policy.",
              "The team was exhausted by the long negotiations. They still reached an agreement.",
              "He reviewed the data. He noticed a significant discrepancy.",
              "The report was published last month. It is already influencing industry standards.",
              "Marcus leads the design team. He won the company's innovation award twice.",
            ],
          },
        ],
        keyTakeaways: [
          "Sentence variety reduces repetition and improves the rhythm and readability of writing.",
          "Vary sentence beginnings with adverbs, prepositional phrases, and inverted structures.",
          "Combine ideas using -ing modifiers, -ed modifiers, relative clauses, and appositives.",
          "Always check that introductory modifiers logically refer to the subject of the main clause to avoid dangling modifiers.",
        ],
      },
      {
        id: "6-2",
        chapterNum: 6,
        sectionNum: "6.2",
        title: "Coordination and Subordination",
        url: `${BASE}/s10-02-coordination-and-subordination.html`,
        learningObjectives: [
          "Identify coordination and subordination.",
          "Combine sentences using coordination.",
          "Combine sentences using subordination.",
        ],
        content: `Writers combine short, choppy sentences into longer, more complex structures to show the logical relationships between ideas. Two key techniques are **coordination** — joining ideas of equal importance — and **subordination** — emphasizing one idea over another.

## Coordination

**Coordination** joins two independent clauses that carry equal logical weight. The two main tools are coordinating conjunctions and conjunctive adverbs.

### Coordinating Conjunctions (FANBOYS)

Use a coordinating conjunction with a comma to join two independent clauses:

| Conjunction | Relationship | Example |
|-------------|-------------|---------|
| **F**or | reason/cause | She left early, *for* she had a long drive ahead. |
| **A**nd | addition | He reviewed the data, *and* she wrote the summary. |
| **N**or | negative addition | He didn't complain, *nor* did he resign. |
| **B**ut | contrast | The plan was approved, *but* funding was delayed. |
| **O**r | alternative | We can delay the launch, *or* we can proceed with fewer features. |
| **Y**et | unexpected contrast | The presentation was brief, *yet* extremely persuasive. |
| **S**o | result | The deadline passed, *so* we requested an extension. |

### Conjunctive Adverbs

Use a semicolon before and a comma after a conjunctive adverb to join two independent clauses:

*The project was challenging; however, the team finished on time.*

| Relationship | Conjunctive Adverbs |
|--------------|-------------------|
| Addition | also, furthermore, moreover |
| Comparison | similarly, likewise |
| Contrast | instead, however, conversely, nevertheless |
| Emphasis | namely, certainly, indeed |
| Cause and effect | accordingly, consequently, hence, thus |
| Time | finally, next, subsequently, then |

## Subordination

**Subordination** joins a main clause with a dependent clause to emphasize the main idea. The dependent clause, introduced by a **subordinating conjunction**, provides supporting context — condition, reason, time, concession, or place.

### Subordinating Conjunctions

| Relationship | Subordinating Conjunctions |
|--------------|--------------------------|
| Concession | although, while, though, even though |
| Condition | if, unless, until, provided that |
| Manner | as if, as though |
| Place | where, wherever |
| Reason | because, since, so that, in order that |
| Time | after, before, while, once, when, whenever, as soon as |

### Punctuation Rule

When the dependent clause comes *first*, place a comma after it:
- *Because the data was incomplete, we delayed the report.*

When the main clause comes *first*, no comma is needed:
- *We delayed the report because the data was incomplete.*`,
        keyTerms: [
          { term: "Coordination", definition: "A technique that joins two related independent clauses of equal importance." },
          { term: "Subordination", definition: "A technique that joins a main clause and a dependent clause to emphasize one idea over the other." },
          { term: "Coordinating conjunction", definition: "A word that links two independent clauses of equal importance; the seven are for, and, nor, but, or, yet, so (FANBOYS)." },
          { term: "Conjunctive adverb", definition: "An adverb that connects two independent clauses and shows their relationship; used with a semicolon and comma." },
          { term: "Main clause", definition: "A clause that contains a subject and verb and can stand alone as a complete sentence." },
          { term: "Dependent clause", definition: "A clause that contains a subject and verb but cannot stand alone; it relies on a main clause to complete its meaning." },
          { term: "Subordinating conjunction", definition: "A word that introduces a dependent clause and shows its relationship to the main clause." },
        ],
        exercises: [
          {
            instruction: "Combine each sentence pair using a coordinating conjunction or a conjunctive adverb. Punctuate correctly.",
            items: [
              "The proposal was well written. The committee rejected it.",
              "She finished the assignment early. She submitted it before the deadline.",
              "He didn't prepare for the interview. He arrived late.",
              "The new system is faster. It is more expensive.",
              "We tried to reach a compromise. Both parties were unwilling to negotiate.",
              "The report contained errors. It was still approved.",
            ],
          },
          {
            instruction: "Combine each sentence pair using an appropriate subordinating conjunction. Punctuate correctly.",
            items: [
              "We will launch the product. The testing is complete.",
              "She left the meeting. The vote had not been taken yet.",
              "The team worked overtime. They wanted to meet the deadline.",
              "The budget was cut. We completed the project.",
              "He checks his email. He arrives at the office.",
            ],
          },
        ],
        keyTakeaways: [
          "Coordination and subordination join related ideas and show their logical relationship.",
          "Coordination gives equal weight to both clauses; subordination emphasizes one clause over the other.",
          "Use FANBOYS with a preceding comma for coordination between independent clauses.",
          "Use a semicolon + conjunctive adverb + comma for coordination with a transitional word.",
          "Subordinating conjunctions introduce dependent clauses; use a comma after a dependent clause that comes first.",
        ],
      },
      {
        id: "6-3",
        chapterNum: 6,
        sectionNum: "6.3",
        title: "Parallelism",
        url: `${BASE}/s10-03-parallelism.html`,
        learningObjectives: [
          "Identify parallel and non-parallel sentences.",
          "Identify ways to create parallelism in writing.",
          "Write and revise using parallelism.",
        ],
        content: `**Parallelism** means using the same grammatical structure for words, phrases, or clauses that are equal in importance. Parallel structure creates rhythm, balance, and clarity. When elements that should be parallel are not, the sentence sounds awkward and the logic is harder to follow — this is called **faulty parallelism**.

## Why Parallelism Matters

Consider these two versions:

- Faulty: *Kelly had to iron, do the washing, and shopping.*
- Parallel: *Kelly had to do the ironing, washing, and shopping.*

The first version mixes an infinitive (*to iron*), a gerund phrase (*do the washing*), and a gerund (*shopping*), creating an uneven structure. The corrected version uses all gerunds.

- Faulty: *Driving a car requires coordination, patience, and to have good eyesight.*
- Parallel: *Driving a car requires coordination, patience, and good eyesight.*

## Creating Parallelism with Coordinating Conjunctions

When two or more items are joined by a coordinating conjunction (*and, but, or*), all items must be in the same grammatical form.

- Nouns: *The project requires time, money, and expertise.*
- Verbs: *She planned the event, coordinated the vendors, and managed the budget.*
- Infinitive phrases: *The goal is to reduce costs, to improve efficiency, and to retain top talent.*

## Creating Parallelism with *than* or *as*

In comparisons using *than* or *as*, both sides of the comparison must be parallel:

- Faulty: *Swimming in the ocean is tougher than a pool.*
- Parallel: *Swimming in the ocean is tougher than swimming in a pool.*

- Faulty: *The report was as long as reading a novel.*
- Parallel: *Reading the report was as time-consuming as reading a novel.*

## Creating Parallelism with Correlative Conjunctions

**Correlative conjunctions** are paired words that connect equal sentence elements. Each pair requires identical grammatical structure on both sides:

| Correlative Conjunction | Example |
|------------------------|---------|
| either … or | *We can either delay the launch or proceed with fewer features.* |
| neither … nor | *We can neither wait for approval nor take unilateral action.* |
| not only … but also | *She not only led the team but also trained new members.* |
| whether … or | *We must decide whether to expand or to consolidate.* |
| both … and | *The report was both thorough and clearly organized.* |
| rather … than | *He chose to negotiate rather than to litigate.* |

The rule is simple: whatever grammatical form follows the first conjunction must also follow the second.`,
        keyTerms: [
          { term: "Parallelism", definition: "The use of the same grammatical structure for words, phrases, or clauses that are equal in importance." },
          { term: "Faulty parallelism", definition: "The failure to use consistent grammatical structures for elements that are logically equal, resulting in awkward sentences." },
          { term: "Correlative conjunction", definition: "A paired conjunction that connects equal grammatical elements; examples include either…or, neither…nor, both…and, and not only…but also." },
        ],
        exercises: [
          {
            instruction: "Revise each sentence to correct the faulty parallelism using coordinating conjunctions.",
            items: [
              "The manager is responsible for planning projects, to assign tasks, and supervision of staff.",
              "The new policy covers hiring, to train employees, and benefit administration.",
              "She likes writing reports, to analyze data, and the presentation of findings.",
              "Good communication involves listening carefully, speaking clearly, and to write with precision.",
              "The audit revealed inefficiencies, some outdated procedures, and that records were incomplete.",
            ],
          },
          {
            instruction: "Revise each sentence to create parallel structure using than or as.",
            items: [
              "Presenting in person is more effective than a video call.",
              "Writing the report took longer than to review it.",
              "Her analysis was as detailed as writing a dissertation.",
              "Training new staff is more time-consuming than experienced workers.",
              "The second draft was clearer than when he wrote the first one.",
            ],
          },
          {
            instruction: "Revise each sentence to correct the faulty parallelism with correlative conjunctions.",
            items: [
              "She not only revised the draft but also the formatting was fixed by her.",
              "We can either postpone the meeting or rescheduling it for next week.",
              "Neither the report was finished nor the presentation prepared.",
              "Both the quality and how fast it gets done matter to the client.",
              "He would rather negotiate the contract than going to court.",
            ],
          },
        ],
        keyTakeaways: [
          "Parallelism creates rhythm and balance by using the same grammatical structure for equal ideas.",
          "Faulty parallelism sounds awkward and can confuse readers.",
          "Use the same grammatical form on both sides of coordinating conjunctions.",
          "Comparisons with than and as require parallel elements on both sides.",
          "Correlative conjunctions require identical grammatical structure after each part of the pair.",
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // CHAPTER 7 — The Writing Process
  // ────────────────────────────────────────────────────
  {
    id: "ch7",
    num: 7,
    title: "The Writing Process: How Do I Begin?",
    url: `${BASE}/s11-the-writing-process-how-do-i-b.html`,
    emoji: "⚙️",
    color: "from-orange-500 to-amber-400",
    sections: [
      {
        id: "7-1",
        chapterNum: 7,
        sectionNum: "7.1",
        title: "Apply Prewriting Models",
        url: `${BASE}/s11-01-apply-prewriting-models.html`,
        learningObjectives: [
          "Use prewriting strategies to choose a topic and narrow the focus.",
        ],
        content: `Writing is not a single act — it is a **process** with distinct stages. Experienced writers know that the words on the final page are the result of many earlier decisions. The five-step writing process is:

1. **Prewriting** — generating and organizing initial ideas
2. **Outlining** — creating a structural plan
3. **Writing a rough draft** — putting ideas into sentences and paragraphs
4. **Revising** — improving content, organization, and clarity
5. **Editing** — correcting grammar, spelling, and punctuation

This section focuses on **prewriting**, the stage that transfers abstract thoughts into words, phrases, and sentences before you begin drafting. Starting with strong prewriting makes every subsequent stage easier.

## Initial Strategies for Generating Ideas

### Using Experience and Observations

Your own experiences and observations are a rich starting point. What events have shaped your thinking? What have you seen at work, in your community, or in your studies that raised questions or revealed patterns?

### Reading

Reading widely exposes you to new ideas and debates. As you read, note what interests, surprises, or challenges you — these reactions often point toward compelling writing topics.

### Freewriting

**Freewriting** means writing freely for a set period (typically 3–5 minutes) without stopping to edit or judge. Keep your pen or keyboard moving even if you feel you have nothing to say. Freewriting bypasses the internal critic and brings subconscious ideas to the surface. After the time is up, review what you wrote and circle interesting phrases or ideas.

### Asking Questions

Before committing to a topic, interrogate it with questions. **5WH questions** — *Who? What? Where? When? Why? How?* — are a systematic way to test whether a topic is fertile enough to develop.

## Narrowing Your Focus

A topic like *technology* is too broad for a single essay. You need to narrow it to something specific and arguable. Three strategies help:

### Brainstorming

List specific items under a general category as quickly as possible without evaluating them. Under *technology*, you might list: social media addiction, remote work tools, AI in hiring, data privacy, gig economy platforms, wearable health devices. Choose the item that interests you most and repeat the process to narrow further.

### Idea Mapping (Clustering)

Write your general topic in the center of a page and draw a circle around it. Add related ideas as circles connected by lines, then branch outward from those. The visual layout reveals connections and clusters that point toward a focused topic.

### Searching the Internet

A quick search reveals how a topic is being discussed publicly — what specific angles have emerged, what questions are current and contested, and what vocabulary writers are using. Look for a subtopic that is specific enough to address in an essay.

## Evaluating a Topic

Use this checklist before committing to a topic:

- Am I genuinely interested in this topic?
- Would my audience find it interesting or useful?
- Do I have prior knowledge, or am I willing to research it?
- Is it specific enough for the required length?
- Does it fit the assignment's purpose?`,
        keyTerms: [
          { term: "Prewriting", definition: "The first stage of the writing process, in which a writer transfers abstract thoughts into words, phrases, and sentences before drafting." },
          { term: "Freewriting", definition: "A prewriting strategy in which a writer writes freely about any topic for a set period, usually 3–5 minutes, without stopping to edit." },
          { term: "5WH questions", definition: "A prewriting strategy using Who, What, Where, When, Why, and How to explore and narrow a topic." },
          { term: "Brainstorming", definition: "A prewriting strategy in which a writer lists specific ideas under a general category as quickly as possible." },
          { term: "Idea mapping", definition: "A visual prewriting strategy using circles, lines, and arrows to show relationships among ideas; also called clustering." },
          { term: "Purpose", definition: "The reason a writer creates a document." },
          { term: "Audience", definition: "The individual or group the writer intends to address." },
        ],
        exercises: [
          {
            instruction: "Freewrite about one event you recently experienced for five minutes. Do not stop writing. Afterward, circle any ideas that interest you.",
          },
          {
            instruction: "Choose a general topic from the list below and answer all five 5WH questions to explore it: education reform, workplace wellness, urban transportation, online privacy, renewable energy.",
          },
          {
            instruction: "Using brainstorming, idea mapping, or an Internet search, narrow one general topic to a specific, focused topic suitable for a two-page essay.",
          },
        ],
        keyTakeaways: [
          "All writers use steps and strategies — professional writing is a process, not a single act.",
          "The five steps of the writing process are prewriting, outlining, drafting, revising, and editing.",
          "Prewriting transfers abstract thoughts to paper through freewriting, brainstorming, idea mapping, or questioning.",
          "A good topic interests both the writer and the audience and fits the assignment's purpose and length.",
          "Narrow from a general topic to a specific, focused one before outlining or drafting.",
        ],
      },
      {
        id: "7-2",
        chapterNum: 7,
        sectionNum: "7.2",
        title: "Outlining",
        url: `${BASE}/s11-02-outlining.html`,
        learningObjectives: [
          "Identify the steps in constructing an outline.",
          "Construct a topic outline and a sentence outline.",
        ],
        content: `An **outline** is a written plan that serves as the skeleton of a paragraph or essay. Creating an outline before writing a draft saves time, prevents writer's block, and ensures that ideas are organized logically before sentences are written.

## Organization Methods

Before constructing an outline, decide how to organize your ideas. The three most common methods are:

### Chronological Order

Arranges ideas according to time. Best used for narratives, historical explanations, and step-by-step processes. *First … then … next … finally* are common transitions.

### Spatial Order

Arranges ideas according to physical location, appearance, or sensory experience. Useful when describing a place, object, or scene. Typical movement: left to right, top to bottom, near to far.

### Order of Importance

Arranges ideas from least important to most important (or vice versa). Most effective for persuasive writing. Saving the strongest argument for last creates a powerful conclusion.

## The Thesis Statement

A **thesis statement** is a single sentence that expresses the controlling idea of an entire essay. It tells readers what to expect and sets the boundaries of the essay.

A **working thesis statement** is a preliminary version written during the planning stage. It can — and often should — be revised as the essay develops. A strong working thesis is:

- **Specific** — focused on a narrow topic, not a broad subject
- **Arguable** — a claim that can be supported with evidence, not a fact
- **Manageable** — appropriate in scope for the assigned length

Example: *Weak:* Social media affects people. *Stronger:* Excessive social media use among adolescents correlates with increased rates of anxiety and reduced sleep quality.

## Formal Outline Structure

A formal outline uses a consistent notation system:

- **Roman numerals** (I, II, III) — main points (one per body paragraph)
- **Capital letters** (A, B, C) — supporting details under each main point
- **Arabic numerals** (1, 2, 3) — subpoints under each supporting detail

Each Roman numeral will become the basis for one body paragraph. The thesis statement appears before Roman numeral I; the conclusion appears after the final Roman numeral.

## Two Types of Outlines

### Topic Outline

Uses single words or short phrases written in parallel grammatical structure. Faster to create and useful for planning.

### Sentence Outline

Uses complete sentences at every level. Takes more time but brings you one step closer to a draft. Each sentence is a potential topic sentence or supporting sentence.

Example structure:

> **Thesis:** Offering flexible work schedules increases employee retention and productivity.
>
> I. Flexible schedules reduce employee turnover.
> &nbsp;&nbsp;&nbsp;&nbsp;A. Employees report higher job satisfaction
> &nbsp;&nbsp;&nbsp;&nbsp;B. Reduced recruitment and training costs for employers
>
> II. Flexible schedules improve productivity.
> &nbsp;&nbsp;&nbsp;&nbsp;A. Employees work during their peak energy hours
> &nbsp;&nbsp;&nbsp;&nbsp;B. Fewer unplanned absences`,
        keyTerms: [
          { term: "Chronological order", definition: "An organizational method that arranges ideas according to time sequence." },
          { term: "Spatial order", definition: "An organizational method that arranges ideas according to physical location or appearance." },
          { term: "Order of importance", definition: "An organizational method that arranges ideas from least to most significant, or vice versa." },
          { term: "Thesis statement", definition: "A single sentence that expresses the controlling idea of an essay and tells readers what to expect." },
          { term: "Working thesis statement", definition: "A preliminary thesis written during the planning stage; may be revised as the essay develops." },
          { term: "Formal outline", definition: "A detailed structural guide using Roman numerals, capital letters, and Arabic numerals to show the hierarchy of ideas." },
          { term: "Topic outline", definition: "An outline using words and phrases rather than complete sentences." },
          { term: "Sentence outline", definition: "An outline using complete sentences at every level, bringing the writer one step closer to a full draft." },
        ],
        exercises: [
          {
            instruction: "Develop a working thesis statement for a two-page essay on one of the following topics: the value of mentoring in the workplace, how sleep affects cognitive performance, or the pros and cons of remote hiring.",
          },
          {
            instruction: "Using your working thesis statement, construct a topic outline with at least three Roman numeral points and two supporting details (capital letters) under each.",
          },
          {
            instruction: "Expand your topic outline into a sentence outline, replacing all words and phrases with complete sentences.",
          },
        ],
        keyTakeaways: [
          "Writers organize ideas using chronological order, spatial order, or order of importance.",
          "A thesis statement expresses the controlling idea of an essay in one sentence.",
          "A working thesis is preliminary and may be revised as the essay develops.",
          "A formal outline uses Roman numerals, capital letters, and Arabic numerals to show hierarchy.",
          "A topic outline uses words and phrases; a sentence outline uses complete sentences.",
          "Each Roman numeral in an outline corresponds to one body paragraph.",
        ],
      },
      {
        id: "7-3",
        chapterNum: 7,
        sectionNum: "7.3",
        title: "Drafting",
        url: `${BASE}/s11-03-drafting.html`,
        learningObjectives: [
          "Identify drafting strategies that improve writing.",
          "Use drafting strategies to prepare a first draft.",
        ],
        content: `**Drafting** is the stage of the writing process where you develop a complete first version of your document. A first draft is not meant to be perfect — it is meant to be *complete*. The goal is to get all of your ideas down in paragraph form so you have something to revise.

## Strategies for Getting Started

Many writers struggle with the blank page. These strategies help:

- **Begin with the section you know most about.** You don't have to write from the beginning. Start with the body paragraph you feel most confident about and work outward.
- **Write one paragraph at a time.** Instead of thinking about the entire essay, focus only on the paragraph at hand.
- **Take short breaks.** Drafting in focused intervals of 20–30 minutes is more productive than staring at a screen for hours.
- **Set reasonable goals.** Aim to draft one paragraph per session rather than expecting a finished draft in one sitting.
- **Keep your audience and purpose in mind.** Every paragraph should move the reader closer to the goal you identified in your outline.

## Components of a First Draft

A complete first draft includes:

### Introduction

The opening paragraph should:
- **Pique the reader's interest** — begin with a compelling question, surprising fact, vivid example, or brief anecdote
- **State the essay's topic** — orient the reader to the subject
- **Motivate reading** — give the reader a reason to continue

The **thesis statement** typically appears at or near the end of the introduction.

### Body Paragraphs

Each body paragraph develops one of the main points from your outline. Every body paragraph should have:
- A **topic sentence** stating the paragraph's controlling idea
- **Supporting sentences** (facts, examples, anecdotes, statistics, quotations) that develop the topic sentence
- A **concluding sentence** that closes the paragraph and transitions to the next

### Conclusion

The closing paragraph should:
- **Reinforce the thesis** — restate the main argument in new words
- **Summarize key points** — briefly recapitulate the main evidence
- **Give a sense of completion** — end with a final thought, recommendation, call to action, or broader implication

## Paragraph Length

There is no universal rule, but consider:
- A paragraph must be longer than one sentence — one sentence is a topic sentence, not a paragraph
- A paragraph should be shorter than one full double-spaced page
- Average professional paragraphs run 100–200 words

## Writing the Introduction and Conclusion Last

Many experienced writers draft the introduction and conclusion *after* completing the body paragraphs. This ensures that the introduction accurately reflects what the essay actually argues, and the conclusion genuinely wraps up what was written — not what was planned.

## The Five-Paragraph Essay

The classic five-paragraph essay structure is a useful scaffold:

1. Introduction (with thesis)
2. Body Paragraph 1
3. Body Paragraph 2
4. Body Paragraph 3
5. Conclusion`,
        keyTerms: [
          { term: "Drafting", definition: "The stage of the writing process in which a writer develops a complete first version of a document." },
          { term: "Introduction", definition: "The opening paragraph that piques the reader's interest, states the essay's topic, and motivates continued reading." },
          { term: "Conclusion", definition: "The closing paragraph that reinforces the thesis, summarizes key points, and provides a sense of completion." },
          { term: "Supporting sentences", definition: "The middle sentences in a body paragraph that explain, prove, or enhance the topic sentence through facts, examples, statistics, quotations, or anecdotes." },
        ],
        exercises: [
          {
            instruction: "Describe your purpose and audience for your essay as specifically as you can. Write 3–5 sentences explaining who your reader is and what you want them to understand or do after reading.",
          },
          {
            instruction: "Find two examples of effective paragraph length: one short paragraph from a professional news article and one longer paragraph from a scholarly or business report. Compare the purpose each length serves.",
          },
          {
            instruction: "Using your sentence outline, write a complete first draft. Begin with the body paragraph you feel most confident about. Write the introduction and conclusion last.",
          },
        ],
        keyTakeaways: [
          "Use drafting strategies to work through the fear of the blank page — start with what you know.",
          "Keep your purpose and audience in mind throughout drafting.",
          "A first draft includes an introduction, body paragraphs, and a conclusion.",
          "The topic sentence of a body paragraph can appear at the beginning, middle, or end.",
          "Paragraph length should be appropriate to the content — not too short, not too long.",
          "Consider writing the introduction and conclusion last for better coherence.",
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // CHAPTER 8 — Writing Essays: From Start to Finish
  // ────────────────────────────────────────────────────
  {
    id: "ch8",
    num: 8,
    title: "Writing Essays: From Start to Finish",
    url: `${BASE}/s12-writing-essays-from-start-to-f.html`,
    emoji: "📄",
    color: "from-rose-500 to-red-400",
    sections: [],
  },

  // ────────────────────────────────────────────────────
  // CHAPTER 9 — Effective Business Writing
  // ────────────────────────────────────────────────────
  {
    id: "ch9",
    num: 9,
    title: "Effective Business Writing",
    url: `${BASE}/s13-effective-business-writing.html`,
    emoji: "💼",
    color: "from-indigo-500 to-blue-400",
    sections: [],
  },

  // ────────────────────────────────────────────────────
  // CHAPTER 10 — Writing Preparation
  // ────────────────────────────────────────────────────
  {
    id: "ch10",
    num: 10,
    title: "Writing Preparation",
    url: `${BASE}/s14-writing-preparation.html`,
    emoji: "🔬",
    color: "from-cyan-500 to-teal-400",
    sections: [],
  },

  // ────────────────────────────────────────────────────
  // CHAPTER 11 — Writing
  // ────────────────────────────────────────────────────
  {
    id: "ch11",
    num: 11,
    title: "Writing",
    url: `${BASE}/s15-writing.html`,
    emoji: "🖊️",
    color: "from-fuchsia-500 to-pink-400",
    sections: [],
  },

  // ────────────────────────────────────────────────────
  // CHAPTER 12 — Revising and Presenting Your Writing
  // ────────────────────────────────────────────────────
  {
    id: "ch12",
    num: 12,
    title: "Revising and Presenting Your Writing",
    url: `${BASE}/s16-revising-and-presenting-your-w.html`,
    emoji: "🔍",
    color: "from-slate-500 to-gray-400",
    sections: [],
  },

  // ────────────────────────────────────────────────────
  // CHAPTER 13 — Business Writing in Action
  // ────────────────────────────────────────────────────
  {
    id: "ch13",
    num: 13,
    title: "Business Writing in Action",
    url: `${BASE}/s17-business-writing-in-action.html`,
    emoji: "📬",
    color: "from-violet-500 to-purple-400",
    sections: [],
  },

  // ────────────────────────────────────────────────────
  // CHAPTER 14 — APA and MLA Documentation and Formatting
  // ────────────────────────────────────────────────────
  {
    id: "ch14",
    num: 14,
    title: "APA and MLA Documentation and Formatting",
    url: `${BASE}/s18-apa-and-mla-documentation-and-.html`,
    emoji: "📚",
    color: "from-emerald-500 to-teal-400",
    sections: [],
  },
];

export function getTextbookChapter(id: string): TextbookChapter | undefined {
  return textbookChapters.find((c) => c.id === id);
}

export function getTextbookSection(chapterId: string, sectionId: string): TextbookSection | undefined {
  return getTextbookChapter(chapterId)?.sections.find((s) => s.id === sectionId);
}

export const totalParsedSections = textbookChapters.reduce((sum, c) => sum + c.sections.length, 0);
