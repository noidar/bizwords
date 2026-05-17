export interface Section {
  title: string;
  url: string;
}

export interface Resource {
  id: string;
  chapter: number | null; // null = front matter
  title: string;
  url: string;
  sections: Section[];
}

const BASE = "https://saylordotorg.github.io/text_business-english-for-success";

export const resources: Resource[] = [
  {
    id: "license",
    chapter: null,
    title: "Licensing Information",
    url: `${BASE}/s00-license.html`,
    sections: [],
  },
  {
    id: "preface",
    chapter: null,
    title: "Preface",
    url: `${BASE}/s04-preface.html`,
    sections: [],
  },
  {
    id: "ch1",
    chapter: 1,
    title: "Writing Basics: What Makes a Good Sentence?",
    url: `${BASE}/s05-writing-basics-what-makes-a-go.html`,
    sections: [
      { title: "Sentence Writing", url: `${BASE}/s05-01-sentence-writing.html` },
      { title: "Subject-Verb Agreement", url: `${BASE}/s05-02-subject-verb-agreement.html` },
      { title: "Verb Tense", url: `${BASE}/s05-03-verb-tense.html` },
      { title: "Capitalization", url: `${BASE}/s05-04-capitalization.html` },
      { title: "Pronouns", url: `${BASE}/s05-05-pronouns.html` },
      { title: "Adjectives and Adverbs", url: `${BASE}/s05-06-adjectives-and-adverbs.html` },
      { title: "Misplaced and Dangling Modifiers", url: `${BASE}/s05-07-misplaced-and-dangling-modifie.html` },
      { title: "End-of-Chapter Exercises", url: `${BASE}/s05-08-writing-basics-end-of-chapter-.html` },
    ],
  },
  {
    id: "ch2",
    chapter: 2,
    title: "Punctuation",
    url: `${BASE}/s06-punctuation.html`,
    sections: [
      { title: "Commas", url: `${BASE}/s06-01-commas.html` },
      { title: "Semicolons", url: `${BASE}/s06-02-semicolons.html` },
      { title: "Colons", url: `${BASE}/s06-03-colons.html` },
      { title: "Quotes", url: `${BASE}/s06-04-quotes.html` },
      { title: "Apostrophes", url: `${BASE}/s06-05-apostrophes.html` },
      { title: "Parentheses", url: `${BASE}/s06-06-parentheses.html` },
      { title: "Dashes", url: `${BASE}/s06-07-dashes.html` },
      { title: "Hyphens", url: `${BASE}/s06-08-hyphens.html` },
      { title: "End-of-Chapter Exercises", url: `${BASE}/s06-09-punctuation-end-of-chapter-exe.html` },
    ],
  },
  {
    id: "ch3",
    chapter: 3,
    title: "Working with Words: Which Word Is Right?",
    url: `${BASE}/s07-working-with-words-which-word-.html`,
    sections: [
      { title: "Commonly Confused Words", url: `${BASE}/s07-01-commonly-confused-words.html` },
      { title: "Spelling", url: `${BASE}/s07-02-spelling.html` },
      { title: "Word Choice", url: `${BASE}/s07-03-word-choice.html` },
      { title: "Prefixes and Suffixes", url: `${BASE}/s07-04-prefixes-and-suffixes.html` },
      { title: "Synonyms and Antonyms", url: `${BASE}/s07-05-synonyms-and-antonyms.html` },
      { title: "Using Context Clues", url: `${BASE}/s07-06-using-context-clues.html` },
      { title: "End-of-Chapter Exercises", url: `${BASE}/s07-07-working-with-words-end-of-chap.html` },
    ],
  },
  {
    id: "ch4",
    chapter: 4,
    title: "Help for English Language Learners",
    url: `${BASE}/s08-help-for-english-language-lear.html`,
    sections: [
      { title: "Word Order", url: `${BASE}/s08-01-word-order.html` },
      { title: "Negative Statements", url: `${BASE}/s08-02-negative-statements.html` },
      { title: "Count and Noncount Nouns and Articles", url: `${BASE}/s08-03-count-and-noncount-nouns-and-a.html` },
      { title: "Pronouns", url: `${BASE}/s08-04-pronouns.html` },
      { title: "Verb Tenses", url: `${BASE}/s08-05-verb-tenses.html` },
      { title: "Modal Auxiliaries", url: `${BASE}/s08-06-modal-auxiliaries.html` },
      { title: "Prepositions", url: `${BASE}/s08-07-prepositions.html` },
      { title: "Slang and Idioms", url: `${BASE}/s08-08-slang-and-idioms.html` },
      { title: "End-of-Chapter Exercises", url: `${BASE}/s08-09-help-for-english-language-lear.html` },
    ],
  },
  {
    id: "ch5",
    chapter: 5,
    title: "Writing Paragraphs: Separating Ideas and Shaping Content",
    url: `${BASE}/s09-writing-paragraphs-separating-.html`,
    sections: [
      { title: "Purpose, Audience, Tone, and Content", url: `${BASE}/s09-01-purpose-audience-tone-and-cont.html` },
      { title: "Effective Means for Writing a Paragraph", url: `${BASE}/s09-02-effective-means-for-writing-a-.html` },
      { title: "End-of-Chapter Exercises", url: `${BASE}/s09-03-writing-paragraphs-end-of-chap.html` },
    ],
  },
  {
    id: "ch6",
    chapter: 6,
    title: "Refining Your Writing: How Do I Improve My Writing Technique?",
    url: `${BASE}/s10-refining-your-writing-how-do-i.html`,
    sections: [
      { title: "Sentence Variety", url: `${BASE}/s10-01-sentence-variety.html` },
      { title: "Coordination and Subordination", url: `${BASE}/s10-02-coordination-and-subordination.html` },
      { title: "Parallelism", url: `${BASE}/s10-03-parallelism.html` },
      { title: "End-of-Chapter Exercises", url: `${BASE}/s10-04-refining-your-writing-end-of-c.html` },
    ],
  },
  {
    id: "ch7",
    chapter: 7,
    title: "The Writing Process: How Do I Begin?",
    url: `${BASE}/s11-the-writing-process-how-do-i-b.html`,
    sections: [
      { title: "Apply Prewriting Models", url: `${BASE}/s11-01-apply-prewriting-models.html` },
      { title: "Outlining", url: `${BASE}/s11-02-outlining.html` },
      { title: "Drafting", url: `${BASE}/s11-03-drafting.html` },
      { title: "Revising and Editing", url: `${BASE}/s11-04-revising-and-editing.html` },
      { title: "End-of-Chapter Exercises", url: `${BASE}/s11-05-the-writing-process-end-of-cha.html` },
    ],
  },
  {
    id: "ch8",
    chapter: 8,
    title: "Writing Essays: From Start to Finish",
    url: `${BASE}/s12-writing-essays-from-start-to-f.html`,
    sections: [
      { title: "Developing a Strong, Clear Thesis Statement", url: `${BASE}/s12-01-developing-a-strong-clear-thes.html` },
      { title: "Writing Body Paragraphs", url: `${BASE}/s12-02-writing-body-paragraphs.html` },
      { title: "Organizing Your Writing", url: `${BASE}/s12-03-organizing-your-writing.html` },
      { title: "Writing Introductory and Concluding Paragraphs", url: `${BASE}/s12-04-writing-introductory-and-concl.html` },
      { title: "End-of-Chapter Exercises", url: `${BASE}/s12-05-writing-essays-end-of-chapter-.html` },
    ],
  },
  {
    id: "ch9",
    chapter: 9,
    title: "Effective Business Writing",
    url: `${BASE}/s13-effective-business-writing.html`,
    sections: [
      { title: "Chapter Introduction", url: `${BASE}/s13-00-effective-business-writing.html` },
      { title: "Oral versus Written Communication", url: `${BASE}/s13-01-oral-versus-written-communicat.html` },
      { title: "How Is Writing Learned?", url: `${BASE}/s13-02-how-is-writing-learned.html` },
      { title: "Good Writing", url: `${BASE}/s13-03-good-writing.html` },
      { title: "Style in Written Communication", url: `${BASE}/s13-04-style-in-written-communication.html` },
      { title: "Principles of Written Communication", url: `${BASE}/s13-05-principles-of-written-communic.html` },
      { title: "Overcoming Barriers to Effective Written Communication", url: `${BASE}/s13-06-overcoming-barriers-to-effecti.html` },
      { title: "Additional Resources", url: `${BASE}/s13-07-additional-resources.html` },
    ],
  },
  {
    id: "ch10",
    chapter: 10,
    title: "Writing Preparation",
    url: `${BASE}/s14-writing-preparation.html`,
    sections: [
      { title: "Chapter Introduction", url: `${BASE}/s14-00-writing-preparation.html` },
      { title: "Think, Then Write: Writing Preparation", url: `${BASE}/s14-01-think-then-write-writing-prepa.html` },
      { title: "A Planning Checklist for Business Messages", url: `${BASE}/s14-02-a-planning-checklist-for-busin.html` },
      { title: "Research and Investigation: Getting Started", url: `${BASE}/s14-03-research-and-investigation-get.html` },
      { title: "Ethics, Plagiarism, and Reliable Sources", url: `${BASE}/s14-04-ethics-plagiarism-and-reliable.html` },
      { title: "Completing Your Research and Investigation", url: `${BASE}/s14-05-completing-your-research-and-i.html` },
      { title: "Reading and Analyzing", url: `${BASE}/s14-06-reading-and-analyzing.html` },
      { title: "Additional Resources", url: `${BASE}/s14-07-additional-resources.html` },
    ],
  },
  {
    id: "ch11",
    chapter: 11,
    title: "Writing",
    url: `${BASE}/s15-writing.html`,
    sections: [
      { title: "Chapter Introduction", url: `${BASE}/s15-00-writing.html` },
      { title: "Organization", url: `${BASE}/s15-01-organization.html` },
      { title: "Writing Style", url: `${BASE}/s15-02-writing-style.html` },
      { title: "Making an Argument", url: `${BASE}/s15-03-making-an-argument.html` },
      { title: "Paraphrase and Summary versus Plagiarism", url: `${BASE}/s15-04-paraphrase-and-summary-versus-.html` },
      { title: "Additional Resources", url: `${BASE}/s15-05-additional-resources.html` },
    ],
  },
  {
    id: "ch12",
    chapter: 12,
    title: "Revising and Presenting Your Writing",
    url: `${BASE}/s16-revising-and-presenting-your-w.html`,
    sections: [
      { title: "Chapter Introduction", url: `${BASE}/s16-00-revising-and-presenting-your-w.html` },
      { title: "General Revision Points to Consider", url: `${BASE}/s16-01-general-revision-points-to-con.html` },
      { title: "Specific Revision Points to Consider", url: `${BASE}/s16-02-specific-revision-points-to-co.html` },
      { title: "Style Revisions", url: `${BASE}/s16-03-style-revisions.html` },
      { title: "Evaluating the Work of Others", url: `${BASE}/s16-04-evaluating-the-work-of-others.html` },
      { title: "Proofreading and Design Evaluation", url: `${BASE}/s16-05-proofreading-and-design-evalua.html` },
      { title: "Additional Resources", url: `${BASE}/s16-06-additional-resources.html` },
    ],
  },
  {
    id: "ch13",
    chapter: 13,
    title: "Business Writing in Action",
    url: `${BASE}/s17-business-writing-in-action.html`,
    sections: [
      { title: "Chapter Introduction", url: `${BASE}/s17-00-business-writing-in-action.html` },
      { title: "Text, E-mail, and Netiquette", url: `${BASE}/s17-01-text-e-mail-and-netiquette.html` },
      { title: "Memorandums and Letters", url: `${BASE}/s17-02-memorandums-and-letters.html` },
      { title: "Business Proposal", url: `${BASE}/s17-03-business-proposal.html` },
      { title: "Report", url: `${BASE}/s17-04-report.html` },
      { title: "Résumé", url: `${BASE}/s17-05-resume.html` },
      { title: "Sales Message", url: `${BASE}/s17-06-sales-message.html` },
      { title: "Additional Resources", url: `${BASE}/s17-07-additional-resources.html` },
    ],
  },
  {
    id: "ch14",
    chapter: 14,
    title: "APA and MLA Documentation and Formatting",
    url: `${BASE}/s18-apa-and-mla-documentation-and-.html`,
    sections: [
      { title: "Formatting a Research Paper", url: `${BASE}/s18-01-formatting-a-research-paper.html` },
      { title: "Citing and Referencing Techniques", url: `${BASE}/s18-02-citing-and-referencing-techniq.html` },
      { title: "Creating a References Section", url: `${BASE}/s18-03-creating-a-references-section.html` },
      { title: "Using Modern Language Association (MLA) Style", url: `${BASE}/s18-04-using-modern-language-associat.html` },
      { title: "End-of-Chapter Exercises", url: `${BASE}/s18-05-apa-and-mla-documentation-and-.html` },
    ],
  },
];

export const bookMeta = {
  title: "Business English for Success",
  version: "1.0",
  url: "https://saylordotorg.github.io/text_business-english-for-success/",
  publisher: "Saylor Foundation / Lardbucket Open Textbooks",
  totalChapters: 14,
  totalSections: resources.reduce((sum, r) => sum + r.sections.length, 0),
};

export function getResourceById(id: string): Resource | undefined {
  return resources.find((r) => r.id === id);
}

export function getChapterResources(): Resource[] {
  return resources.filter((r) => r.chapter !== null);
}
