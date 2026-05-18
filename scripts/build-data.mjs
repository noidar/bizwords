#!/usr/bin/env node
// build-data.mjs — generates data/textbook-parsed.json from embedded content
// Run: node scripts/build-data.mjs

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BASE = "https://saylordotorg.github.io/text_business-english-for-success";

const CHAPTER_META = [
  { id:"ch1",  num:1,  title:"Writing Basics: What Makes a Good Sentence?",               emoji:"✏️",  color:"from-blue-500 to-cyan-400",      slug:"s05-writing-basics-what-makes-a-go" },
  { id:"ch2",  num:2,  title:"Punctuation",                                                emoji:"🔤",  color:"from-violet-500 to-purple-400",  slug:"s06-punctuation" },
  { id:"ch3",  num:3,  title:"Working with Words: Which Word Is Right?",                  emoji:"📖",  color:"from-sky-500 to-blue-400",       slug:"s07-working-with-words-which-word-" },
  { id:"ch4",  num:4,  title:"Help for English Language Learners",                         emoji:"🌍",  color:"from-teal-500 to-emerald-400",   slug:"s08-help-for-english-language-lear" },
  { id:"ch5",  num:5,  title:"Writing Paragraphs: Separating Ideas and Shaping Content",  emoji:"📝",  color:"from-lime-500 to-green-400",     slug:"s09-writing-paragraphs-separating-" },
  { id:"ch6",  num:6,  title:"Refining Your Writing",                                      emoji:"🔧",  color:"from-amber-500 to-yellow-400",   slug:"s10-refining-your-writing-how-do-i" },
  { id:"ch7",  num:7,  title:"The Writing Process: How Do I Begin?",                      emoji:"⚙️",  color:"from-orange-500 to-amber-400",   slug:"s11-the-writing-process-how-do-i-b" },
  { id:"ch8",  num:8,  title:"Writing Essays: From Start to Finish",                       emoji:"📄",  color:"from-rose-500 to-red-400",       slug:"s12-writing-essays-from-start-to-f" },
  { id:"ch9",  num:9,  title:"Effective Business Writing",                                 emoji:"💼",  color:"from-indigo-500 to-blue-400",    slug:"s13-effective-business-writing" },
  { id:"ch10", num:10, title:"Writing Preparation",                                        emoji:"🔬",  color:"from-cyan-500 to-teal-400",      slug:"s14-writing-preparation" },
  { id:"ch11", num:11, title:"Writing",                                                    emoji:"🖊️", color:"from-fuchsia-500 to-pink-400",   slug:"s15-writing" },
  { id:"ch12", num:12, title:"Revising and Presenting Your Writing",                       emoji:"🔍",  color:"from-slate-500 to-gray-400",     slug:"s16-revising-and-presenting-your-w" },
  { id:"ch13", num:13, title:"Business Writing in Action",                                 emoji:"📬",  color:"from-violet-500 to-purple-400",  slug:"s17-business-writing-in-action" },
  { id:"ch14", num:14, title:"APA and MLA Documentation and Formatting",                   emoji:"📚",  color:"from-emerald-500 to-teal-400",   slug:"s18-apa-and-mla-documentation-and-" },
];

// sections array — populated below
const SECTIONS = [];

function s(id, filename, chapterNum, sectionNum, titleStr, slug, objectives, content, keyTerms, exercises, takeaways) {
  SECTIONS.push({ id, filename, chapterNum, sectionNum, title: titleStr,
    url: `${BASE}/${slug}.html`, learningObjectives: objectives, content, keyTerms, exercises, keyTakeaways: takeaways });
}

// ──────────────────────────────────────────────────────────────────────────────
// CHAPTER 1 — Writing Basics
// ──────────────────────────────────────────────────────────────────────────────
s("s05-01","s05-01-sentence-writing", 1, "1.1", "Sentence Writing", "s05-01-sentence-writing",
["Identify the components of a basic sentence.","Identify the four most serious writing errors."],
`Complete sentences require three things: a **subject**, a **verb**, and a **complete idea**. Without all three, the sentence is a fragment.

## Subjects

The **subject** tells *who* or *what* the sentence is about. Subjects are nouns (person, place, thing, idea) or pronouns (I, he, she, it, they, we, you). A **compound subject** has two or more nouns joined by *and*, *or*, or *nor*.

A **prepositional phrase** (in, on, under, near, by, with, about + noun) can never be the subject of a sentence. Always find the true subject by asking *who* or *what* performs the verb.

## Verbs

**Action verbs** connect the subject to an action: *She submits the report.*
**Linking verbs** connect the subject to a description: *The memo is clear.* Common linking verbs: am, is, are, was, were, seem, appear, become, feel, look.
**Helping verbs** work with main verbs to show tense or mood: *He has finished the draft.*

## Sentence Patterns

| Pattern | Example |
|---------|---------|
| S-V | Sales increased. |
| S-LV-N | Maria is a director. |
| S-LV-Adj | The proposal seems solid. |
| S-V-Adv | He spoke confidently. |
| S-V-DO | She sent the invoice. |
| S-V-IO-DO | He gave the client a quote. |

## Fragments

A **fragment** is missing a subject, verb, or complete thought:
- Fragment: *Waiting for the client.* → Complete: *We were waiting for the client.*
- Fragment: *The new policy from HR.* → Complete: *The new policy from HR takes effect Monday.*

## Run-on Sentences

A **fused sentence** joins two independent clauses with no punctuation: *The report was late we missed the deadline.*
A **comma splice** joins them with only a comma: *The report was late, we missed the deadline.*

Fix run-ons four ways:
1. **Period**: *The report was late. We missed the deadline.*
2. **Semicolon**: *The report was late; we missed the deadline.*
3. **Comma + FANBOYS** (*for, and, nor, but, or, yet, so*): *The report was late, so we missed the deadline.*
4. **Dependent word** (*although, because, since, unless*): *Because the report was late, we missed the deadline.*`,
[{term:"Independent clause",definition:"A group of words with subject and verb that can stand alone as a complete thought."},{term:"Fragment",definition:"An incomplete sentence missing a subject, verb, or complete idea."},{term:"Run-on sentence",definition:"Two or more independent clauses incorrectly combined."},{term:"Fused sentence",definition:"Two complete sentences joined with no punctuation."},{term:"Comma splice",definition:"Two complete sentences joined only by a comma."},{term:"Coordinating conjunction",definition:"FANBOYS: for, and, nor, but, or, yet, so — links two independent clauses."},{term:"Prepositional phrase",definition:"Begins with a preposition; cannot be the subject of a sentence."},{term:"Action verb",definition:"Identifies the action the subject performs."},{term:"Linking verb",definition:"Connects the subject to a noun or adjective (is, seem, appear, become)."},{term:"Helping verb",definition:"Works with main verb to describe tense/mood — forms of be, do, have."}],
[{instruction:"Underline subjects and circle prepositional phrases.",items:["The gym closes at nine o'clock tonight.","We went to the store to buy supplies.","The student with the highest grade won the award.","Maya and Tia found a stray cat near the highway."]},{instruction:"Underline the verb twice and name its type (action, linking, or helping).",items:["The memo sounds urgent.","They have not responded yet.","She drafted the proposal in one afternoon."]}],
["A sentence needs a subject, verb, and complete thought.","Prepositional phrases cannot serve as subjects.","Fix fragments by adding missing parts.","Fix run-ons with a period, semicolon, conjunction, or dependent word.","FANBOYS = for, and, nor, but, or, yet, so."]);

s("s05-02","s05-02-subject-verb-agreement", 1, "1.2", "Subject-Verb Agreement", "s05-02-subject-verb-agreement",
["Define subject-verb agreement.","Identify common errors in subject-verb agreement."],
`Subject and verb must **agree in number**: singular subject → singular verb; plural subject → plural verb.

## Regular Verbs

Third-person singular adds *-s*: *She writes.* / *They write.*
Add *-es* after -sh, -x, -ch, -s: *He fixes.* / *She watches.*

## Irregular Verbs

| Verb | I | You | He/She/It | We/They |
|------|---|-----|-----------|---------|
| be | am | are | is | are |
| have | have | have | has | have |
| do | do | do | does | do |

## Compound Subjects

Joined with **and** → plural verb: *Maria and David attend the meeting.*
Joined with **or / nor** → verb agrees with nearest subject: *Neither the manager nor the assistants are available.*

## Indefinite Pronouns

Always singular: *everyone, nobody, each, somebody, everything, anyone.*
*Everyone is invited.* / *Each department submits its own report.*
Some can be singular or plural depending on context: *all, any, none, some.*

## Collective Nouns

**Team, committee, class, group, jury, company** are singular in American English:
*The committee has reached a decision.*

## Subject After Verb

Sentences beginning with *here* or *there*: the subject follows the verb.
*Here are the results.* (results = plural subject)
*There is one problem.* (problem = singular subject)`,
[{term:"Agreement",definition:"Proper grammatical match between subject and verb in number and person."},{term:"Regular verb",definition:"Verb following predictable pattern; third-person singular adds -s."},{term:"Irregular verb",definition:"Verb with unpredictable forms (be, have, do)."},{term:"Compound subject",definition:"Two or more nouns joined by and, or, nor acting as subject."},{term:"Indefinite pronoun",definition:"Refers to unspecified person/thing; most are singular (everyone, each, nobody)."},{term:"Collective noun",definition:"Identifies a group treated as one unit (team, committee, jury) — takes singular verb."}],
[{instruction:"Write the correct present-tense verb form.",items:["I (brush/brushes) my teeth twice a day.","She (watch/watches) the market data closely.","The committee (meet/meets) every Thursday.","Everyone (is/are) required to submit a report."]},{instruction:"Correct the subject-verb agreement errors.",items:["My dog and cat chases each other all day.","Everyone are going to the conference except me.","Here is the proposals you requested.","The team have decided to postpone the launch."]}],
["Singular subjects take singular verbs; plural subjects take plural verbs.","Irregular verbs (be, have, do) must be memorized.","Compound subjects with and take plural verbs.","Collective nouns take singular verbs in American English.","With or/nor, verb agrees with the nearest subject."]);

s("s05-03","s05-03-verb-tense", 1, "1.3", "Verb Tense", "s05-03-verb-tense",
["Use the correct regular verb tense in basic sentences.","Use the correct irregular verb tense in basic sentences."],
`Verb tense identifies **when** an action takes place. Using tense correctly prevents confusion and creates a professional impression.

## Regular Verbs

Add **-ed** or **-d** to form the simple past: *walk → walked*, *close → closed*.
The future uses *will* + base verb: *She will submit the report.*

| Tense | Example |
|-------|---------|
| Simple present | She writes reports daily. |
| Simple past | She wrote the report yesterday. |
| Simple future | She will write the report tomorrow. |

## Irregular Verbs (Selected)

| Present | Past | | Present | Past |
|---------|------|-|---------|------|
| be | was/were | | go | went |
| have | had | | say | said |
| do | did | | take | took |
| see | saw | | give | gave |
| know | knew | | find | found |
| write | wrote | | come | came |
| make | made | | think | thought |

## Consistent Verb Tense

Use the same tense throughout a sentence or paragraph unless a genuine time shift occurs.

**Inconsistent:** *She opened the file and types the data.*
**Consistent:** *She opened the file and typed the data.*

A tense shift is correct when two different time frames are involved:
*Although he worked here for ten years, he will retire next month.*`,
[{term:"Verb tense",definition:"The form of a verb indicating when an action occurs (present, past, future)."},{term:"Regular verb",definition:"Verb forming past tense by adding -ed or -d."},{term:"Irregular verb",definition:"Verb with unpredictable past forms that must be memorized."},{term:"Consistent verb tense",definition:"Using the same tense throughout a sentence or paragraph unless a genuine time shift occurs."}],
[{instruction:"Select the correct verb tense.",items:["The Dust Bowl (is/was/will be) a catastrophic period in the 1930s.","Historians (consider/considered/will consider) it one of the worst weather events in US history.","The worst storm (happens/happened/will happen) on April 14, 1935."]},{instruction:"Correct the inconsistent verb tenses in the paragraph.",items:["In the Middle Ages, most people lived in villages and work as agricultural laborers. Every village has a lord, and the peasants worked on his land."]}],
["Verb tense expresses when events occur.","Regular verbs add -ed or -d for past tense.","Irregular verbs must be memorized.","Consistent verb tense is essential for clarity."]);

s("s05-04","s05-04-capitalization", 1, "1.4", "Capitalization", "s05-04-capitalization",
["Learn the basic rules of capitalization.","Identify common capitalization errors."],
`Using capitalization correctly signals care and professionalism. Texting habits often create bad capitalization habits that bleed into formal writing.

## Rules

**Capitalize the first word of every sentence.**

**Capitalize proper nouns** — specific names of people, places, organizations, events, and titles:
*Amazon River, Dr. Patel, the Renaissance, Smith College, Tuesday, March, Thanksgiving.*

**Do not capitalize common nouns** used generally:
*river* (but *Amazon River*), *doctor* (but *Dr. Patel*), *college* (but *Smith College*).

**Capitalize nationalities, races, languages, religions:**
*American, African American, Spanish, Catholic, Buddhist, Hindu.*

**Capitalize titles before names:**
*President Lincoln, Professor Chen, Director Kim.*
Do not capitalize when used generically: *The president signed the bill.*

**Capitalize days, months, holidays:**
*Monday, January, Independence Day.* (Do not capitalize seasons: *spring, summer.*)

## ALL CAPS = Shouting

In digital communication, ALL CAPS implies yelling. Use standard capitalization instead.

## Common Errors

| Incorrect | Correct |
|-----------|---------|
| the amazon river | the Amazon River |
| dr. johnson | Dr. Johnson |
| i work at a Bank | I work at a bank |
| She is catholic | She is Catholic |`,
[{term:"Capitalization",definition:"Using a capital letter as the first letter of a word."},{term:"Proper noun",definition:"Name of a specific person, place, organization, or event — always capitalized."},{term:"Common noun",definition:"General word for a class of people, places, or things — not capitalized."}],
[{instruction:"Correct capitalization errors in these sentences.",items:["the prince of england enjoys polo.","my physician, dr. alvarez, makes me comfortable.","We visited france, germany, and spain last summer.","the company was founded in chicago in 1984.","I am taking english, history, and biology this semester."]}],
["Capitalize first word of every sentence.","Proper nouns are always capitalized; common nouns are not.","Capitalize nationalities, races, languages, and religions.","Capitalize titles immediately before names.","ALL CAPS implies shouting — avoid in professional writing."]);

s("s05-05","s05-05-pronouns", 1, "1.5", "Pronouns", "s05-05-pronouns",
["Identify pronouns and their antecedents.","Use pronouns and their antecedents correctly."],
`Pronouns replace nouns to avoid repetition. Using them incorrectly creates confusion.

## Pronoun-Antecedent Agreement

A pronoun must agree with its **antecedent** (the noun it replaces) in number and person.

*The manager submitted **her** report on time.* (*her* agrees with singular *manager*)
*The employees completed **their** assignments.* (*their* agrees with plural *employees*)

**Indefinite pronouns** are mostly singular: *everyone, nobody, each, somebody, anyone, everything.*
*Everyone is responsible for **his or her** own timesheet.*

**Collective nouns** (team, class, committee, jury) take singular pronouns in American English:
*The committee reached **its** decision unanimously.*

## Subject vs. Object Pronouns

| Role | Singular | Plural |
|------|----------|--------|
| Subject | I, you, he, she, it | we, you, they |
| Object | me, you, him, her, it | us, you, them |

Subject pronouns perform the action; object pronouns receive it.
**Incorrect:** *Me and Harriet went to the meeting.*
**Correct:** *Harriet and I went to the meeting.*

Tip: Remove the other person and test — *Me went to the meeting* sounds wrong immediately.

## Who vs. Whom

*Who* = subject of a verb: *Who submitted the report?*
*Whom* = object of a verb or preposition: *To whom should I send this?*
Trick: substitute *he* or *him* — if *him* fits, use *whom*.`,
[{term:"Pronoun",definition:"A word that replaces a noun (I, you, he, she, it, we, they, me, him, her, us, them)."},{term:"Antecedent",definition:"The noun that a pronoun refers to."},{term:"Pronoun agreement",definition:"Pronoun must match its antecedent in number and person."},{term:"Indefinite pronoun",definition:"Refers to unspecified person or thing; usually singular (everyone, each, nobody)."},{term:"Subject pronoun",definition:"Pronoun functioning as subject (I, we, you, he, she, it, they)."},{term:"Object pronoun",definition:"Pronoun functioning as object (me, us, you, him, her, it, them)."}],
[{instruction:"Correct pronoun agreement errors.",items:["Everyone should submit their timesheet by Friday.","The team completed their project ahead of schedule.","Neither of the managers have submitted his report."]},{instruction:"Choose the correct subject or object pronoun.",items:["(She/Her) and the director presented the findings.","The award was given to (he/him) and (I/me).","Between you and (I/me), the plan needs revision."]}],
["Pronouns must agree with antecedents in number and person.","Most indefinite pronouns are singular.","Collective nouns take singular pronouns in American English.","Use subject pronouns as subjects; object pronouns as objects.","Who = subject; whom = object."]);

s("s05-06","s05-06-adjectives-and-adverbs", 1, "1.6", "Adjectives and Adverbs", "s05-06-adjectives-and-adverbs",
["Identify adjectives and adverbs.","Use adjectives and adverbs correctly."],
`Descriptive words bring writing to life — but only when used correctly.

## Adjectives

An **adjective** describes a noun or pronoun, answering *which one?*, *what kind?*, or *how many?*
*The **detailed** report impressed the client.*
*She seemed **confident** during the presentation.*

## Adverbs

An **adverb** describes a verb, adjective, or another adverb. Most end in *-ly*.
*She presented **confidently**.* (describes verb *presented*)
*The report was **extremely** thorough.* (describes adjective *thorough*)
*He worked **very** efficiently.* (describes adverb *efficiently*)

## Comparative and Superlative

**Comparative** (comparing 2): add *-er* to one-syllable words, use *more* with two or more syllables.
*faster, more efficient*

**Superlative** (comparing 3+): add *-est* to one-syllable words, use *most* with two or more syllables.
*fastest, most efficient*

| Word | Comparative | Superlative |
|------|-------------|-------------|
| good/well | better | best |
| bad/badly | worse | worst |
| fast | faster | fastest |
| efficient | more efficient | most efficient |

## Good vs. Well / Bad vs. Badly

*Good* and *bad* are **adjectives** (describe nouns): *She gave a **good** presentation.*
*Well* and *badly* are **adverbs** (describe verbs): *She presented **well**.*

**Incorrect:** *She did good on the exam.*
**Correct:** *She did **well** on the exam.*`,
[{term:"Adjective",definition:"A word that describes a noun or pronoun (answers which one, what kind, how many)."},{term:"Adverb",definition:"A word that describes a verb, adjective, or another adverb; often ends in -ly."},{term:"Comparative",definition:"Form comparing two things; add -er or use more."},{term:"Superlative",definition:"Form comparing three or more things; add -est or use most."}],
[{instruction:"Write good, well, bad, or badly to complete each sentence.",items:["She performed ________ under pressure.","The quarterly results looked ________ for investors.","He writes ________ when he plans ahead.","The team handled the crisis ________."]},{instruction:"Write the correct comparative or superlative form.",items:["This proposal is ________ (good) than the last one.","That was the ________ (bad) meeting I have ever attended.","She communicates ________ (well) of all the presenters."]}],
["Adjectives describe nouns; adverbs describe verbs, adjectives, and other adverbs.","Most adverbs are formed by adding -ly to an adjective.","Comparative (-er/more) compares two; superlative (-est/most) compares three or more.","Good and bad are adjectives; well and badly are adverbs."]);

s("s05-07","s05-07-misplaced-and-dangling-modifie", 1, "1.7", "Misplaced and Dangling Modifiers", "s05-07-misplaced-and-dangling-modifie",
["Identify modifiers.","Learn how to correct misplaced and dangling modifiers."],
`Modifiers clarify meaning — but only when placed correctly. Misplaced modifiers produce confusing or unintentionally comic sentences.

## Misplaced Modifiers

A **misplaced modifier** is placed too far from the word it describes.

**Incorrect:** *She wore a helmet on her head that was too large.*
(Was her head too large? No — the helmet was.)
**Correct:** *She wore a helmet that was too large on her head.*

**Incorrect:** *The patient was referred to the doctor with stomach pains.*
(The doctor has stomach pains?)
**Correct:** *The patient with stomach pains was referred to the doctor.*

Simple words like **only, almost, just, nearly, barely** are frequently misplaced:
**Confusing:** *He almost earned fifty dollars.* (Did he earn it or not?)
**Clear:** *He earned almost fifty dollars.*

## Dangling Modifiers

A **dangling modifier** describes something not present in the sentence.

**Incorrect:** *Reviewing the budget, the numbers seemed off.*
(Who was reviewing? The numbers? The sentence doesn't say.)
**Correct:** *Reviewing the budget, she noticed the numbers seemed off.*

**Incorrect:** *Walking to the office, the rain started.*
**Correct:** *Walking to the office, I was caught in the rain.*

Three-step check:
1. Find the -ing or descriptive phrase at the start of the sentence.
2. Underline the first noun after it.
3. Ask: does that noun logically perform the action in the phrase?`,
[{term:"Modifier",definition:"A word, phrase, or clause that clarifies or describes another element in the sentence."},{term:"Misplaced modifier",definition:"A modifier placed too far from the word it is supposed to describe."},{term:"Dangling modifier",definition:"A modifier that describes something not present or identifiable in the sentence."}],
[{instruction:"Rewrite to correct the misplaced modifier.",items:["The young manager was walking the dog on the phone.","I heard about the product recall on the evening news.","We are looking for an assistant for our CEO who doesn't smoke and owns a car.","He spotted the error reviewing the contract quickly."]},{instruction:"Rewrite to correct the dangling modifier.",items:["Riding the elevator, the lobby appeared below us.","Having reviewed all the data, the decision was made.","To qualify for the role, three years of experience is required."]}],
["Misplaced modifiers make sentences awkward or unintentionally funny.","Place modifiers directly next to the words they describe.","Simple words like only, almost, just are frequently misplaced.","Dangling modifiers describe something absent from the sentence — add the missing subject to fix."]);


// ── CH2 Punctuation ───────────────────────────────────────────────────────────
s("s06-01","s06-01-commas", 2, "2.1", "Commas", "s06-01-commas",
["Identify the uses of commas.","Correctly use commas in sentences."],
`A **comma** indicates a pause or separates items. Six main uses:

## 1. After Introductory Word or Phrase
*However, the meeting was postponed.*
*Before the presentation, she rehearsed for an hour.*

## 2. In a List of Items
Put a comma after each item; add *and* before the last:
*We need paper, ink, and envelopes.*

## 3. Coordinating Adjectives Before a Noun
*It was a clear, concise, professional memo.*

## 4. Before Conjunctions in Compound Sentences
*He submitted the report, but the deadline had already passed.*

## 5. Around Interrupting Words
*The CEO, as expected, approved the budget.*
*This policy, however, requires immediate review.*

## 6. In Dates, Addresses, and Letters
- Date: *The contract was signed May 4, 2023, in Boston.*
- Address: *Send it to 100 Main Street, Chicago, Illinois 60601.*
- Letter greeting: *Dear Ms. Johnson,*
- Letter closing: *Sincerely,*`,
[{term:"Comma",definition:"Punctuation mark indicating a pause or separating items in a sentence."},{term:"Coordinating adjectives",definition:"A series of adjectives before a noun, each describing the noun independently — separated by commas."}],
[{instruction:"Add commas to correct these sentences.",items:["Without a doubt hard work pays off.","Monday Tuesday and Wednesday are fully booked.","He missed the deadline but promised to deliver Friday.","The report was thorough well-organized and concise.","Dear Mr. Thompson"]}],
["Use commas after introductory words/phrases.","Commas separate items in a list.","Comma before coordinating conjunction in compound sentence.","Commas surround interrupting words/phrases.","Commas in dates, addresses, and letter greetings."]);

s("s06-02","s06-02-semicolons", 2, "2.2", "Semicolons", "s06-02-semicolons",
["Identify and use semicolons correctly."],
`A **semicolon** links two closely related independent clauses — stronger than a comma, softer than a period.

## Joining Independent Clauses
*The proposal was submitted; the client reviewed it immediately.*

## With Conjunctive Adverbs
Add the conjunctive adverb after the semicolon, followed by a comma:

| Function | Conjunctive Adverb |
|----------|-------------------|
| Addition | furthermore, moreover, also |
| Contrast | however, nevertheless, conversely |
| Cause/effect | therefore, consequently, thus |
| Time | finally, subsequently, then |

*The budget was approved; however, spending limits apply.*
*She worked through the night; consequently, the report was finished on time.*

## In Complex Lists
When list items contain commas, use semicolons to separate them:
*The conference includes Priya Sharma, CFO; David Lee, CTO; and Ana Ruiz, CMO.*`,
[{term:"Semicolon",definition:"Punctuation mark linking two closely related independent clauses."},{term:"Conjunctive adverb",definition:"Word connecting two independent clauses showing their relationship (however, therefore, moreover)."}],
[{instruction:"Join these sentence pairs with a semicolon and conjunctive adverb.",items:["The presentation was excellent. The audience remained skeptical.","We submitted the report on time. The client approved it immediately.","The software upgrade is necessary. It will disrupt work for two days."]}],
["Semicolons link two closely related independent clauses.","Use semicolon + conjunctive adverb + comma to show relationships.","Semicolons separate complex list items that already contain commas."]);

s("s06-03","s06-03-colons", 2, "2.3", "Colons", "s06-03-colons",
["Identify the uses of colons.","Properly use colons in sentences."],
`A **colon (:)** introduces what follows — lists, quotations, examples, or explanations. The clause before the colon must be an independent clause.

## To Introduce a List
*The team will visit three cities: New York, Chicago, and Los Angeles.*

## To Introduce a Quotation
*The CEO's message was direct: "We must cut costs by 15 percent."*

## To Introduce an Explanation
*One thing stood out in the audit: the expense reports were incomplete.*

## In Business Letter Greetings
*Dear Hiring Manager:*
*To: All Staff*

## Capitalization After Colons
Capitalize after a colon when what follows is:
- A proper noun
- A complete independent sentence
- A direct quotation

Do **not** capitalize if what follows is part of the same sentence:
*The recipe needs three things: flour, eggs, and butter.*

## Do NOT Use After "Such As" or "Including"
**Incorrect:** *We offer services such as: design, printing, and delivery.*
**Correct:** *We offer services such as design, printing, and delivery.*`,
[{term:"Colon",definition:"Punctuation mark used to introduce a list, quotation, example, or explanation."},{term:"Block quotation",definition:"A quotation of 40+ words, indented and set off without quotation marks."}],
[{instruction:"Add semicolons or colons where needed.",items:["Don't give up you never know what tomorrow brings.","The boss's message was clear Lateness will not be tolerated.","I have lived in Austin Texas Chicago Illinois and Boston Massachusetts.","Where I come from there are three ways to get to work by car, by bus, and on foot."]}],
["Colon introduces lists, quotations, or explanations.","Clause before colon must be independent.","Do not use colon after 'such as' or 'including'."]);

s("s06-04","s06-04-quotes", 2, "2.4", "Quotes", "s06-04-quotes",
["Identify the uses of quotation marks.","Correctly use quotation marks in sentences."],
`**Quotation marks** enclose direct quotations and titles of short works. They always come in pairs.

## Direct vs. Indirect Quotations
**Direct** (exact words — use quotation marks):
*Carly said, "I'm not going back there."*

**Indirect** (paraphrase — no quotation marks):
*Carly said that she would not go back.*

## Punctuating Direct Quotations
The speaker identification can appear at the beginning, middle, or end:
- *Madison said, "Let's review the numbers."*
- *"Let's review," Madison said, "before the meeting."*
- *"Let's review the numbers," Madison said.*

**Key rules:**
- Commas and periods go **inside** the closing quotation mark.
- Question marks and exclamation points go inside if they're part of the quote; outside if not.

## Quotation Within a Quotation
Use **single quotation marks** (' ') for a quote inside a quote:
*She said, "The client kept asking, 'When will it be ready?'"*

## Titles
Short works (articles, songs, poems, short stories, chapters) → quotation marks: *"The Road Not Taken"*
Long works (books, films, magazines, newspapers) → italics: *The New York Times*`,
[{term:"Direct quotation",definition:"Exact words someone said, enclosed in quotation marks."},{term:"Indirect quotation",definition:"A paraphrase of what someone said; no quotation marks needed."},{term:"Single quotation marks",definition:"Used to enclose a quotation within a quotation."}],
[{instruction:"Add quotation marks where necessary.",items:["Yasmin said, I don't feel like cooking tonight.","I didn't, exclaimed Yasmin. Which poem?","The Road Not Taken, by Robert Frost, is his most famous poem.","Did you hear her say you were the next Picasso?"]}],
["Use quotation marks for direct quotes and short work titles.","Commas and periods always go inside quotation marks.","Single quotes for a quote within a quote.","No quotation marks for indirect quotations."]);

s("s06-05","s06-05-apostrophes", 2, "2.5", "Apostrophes", "s06-05-apostrophes",
["Identify the uses of apostrophes.","Use apostrophes correctly."],
`Apostrophes signal **possession** or mark **contractions**.

## Possessives
- Singular noun → add **'s**: *the manager's report*, *the company's policy*
- Plural noun ending in -s → add **'** only: *the managers' meeting*, *the employees' benefits*
- Plural noun NOT ending in -s → add **'s**: *the children's program*, *the women's team*
- Compound noun → add **'s** to the last word: *the editor-in-chief's decision*

## Contractions
| Full form | Contraction |
|-----------|-------------|
| it is | it's |
| they are | they're |
| you are | you're |
| do not | don't |
| cannot | can't |
| will not | won't |
| have not | haven't |

## Common Errors
- **its** (possessive) vs. **it's** (it is): *The company expanded **its** operations.* / *It's time to review.*
- **their** (possessive) vs. **they're** (they are): *They submitted **their** report.* / *They're on schedule.*
- **your** (possessive) vs. **you're** (you are): *Is this **your** file?* / *You're the lead on this.*
- **Never** use an apostrophe to form a regular plural: *reports* ✓ / *report's* ✗`,
[{term:"Apostrophe",definition:"Punctuation mark used to show possession or to form contractions."},{term:"Possessive",definition:"Form showing ownership; add 's to singular, ' to plural nouns ending in -s."},{term:"Contraction",definition:"Shortened word form using apostrophe to replace omitted letters."}],
[{instruction:"Add apostrophes where needed.",items:["The managers report is due Friday.","Its important to review the clients requirements.","Dont submit until youre satisfied with the draft.","The childrens program starts at noon.","The two companys policies differ significantly."]}],
["Apostrophes form possessives and contractions.","Singular possessive = 's; plural ending in s = s'","Never use apostrophe to form a simple plural.","its = possessive; it's = it is — very common error."]);

s("s06-06","s06-06-parentheses", 2, "2.6", "Parentheses", "s06-06-parentheses",
["Identify the uses of parentheses.","Use parentheses correctly."],
`**Parentheses** ( ) enclose supplementary, nonessential information that adds context without disrupting the main sentence.

## Common Uses
1. **Supplemental information**: *The annual report (published in March) showed strong growth.*
2. **Abbreviations after full terms**: *The American Psychological Association (APA) sets style standards.*
3. **Numbers after written-out numbers in legal/formal documents**: *The project will take twenty (20) business days.*

## Punctuation with Parentheses
- If the parenthetical is mid-sentence, punctuation goes **outside**: *Send the file (as a PDF), please.*
- If the parenthetical is a full sentence standing alone, punctuation goes **inside**: *(See Appendix B for details.)*

## Use Sparingly
Overusing parentheses clutters writing. If the information is important, integrate it; if it's truly nonessential, consider cutting it.`,
[{term:"Parentheses",definition:"Punctuation marks enclosing supplementary or nonessential information in a sentence."}],
[{instruction:"Add parentheses where appropriate.",items:["The new software see the attached manual must be installed by Friday.","The contract expires in thirty 30 days.","The Federal Reserve commonly called the Fed sets interest rates."]}],
["Parentheses enclose nonessential supplementary information.","Punctuation goes outside parentheses mid-sentence; inside for full parenthetical sentences.","Use sparingly to avoid cluttered prose."]);

s("s06-07","s06-07-dashes", 2, "2.7", "Dashes", "s06-07-dashes",
["Identify the uses of dashes.","Use em dashes and en dashes correctly."],
`Two types of dashes serve different purposes in professional writing.

## Em Dash (—)
The em dash is longer and indicates a significant pause or emphasis — stronger than a comma, more informal than a colon.

**Uses:**
1. Set off a parenthetical for emphasis: *The decision — and it was unanimous — surprised everyone.*
2. Introduce a list or explanation: *Three things made the deal fail — price, timing, and trust.*
3. Signal a sudden shift in thought: *She was about to present when — the power went out.*

**Formation**: In most word processors, type two hyphens (--) and the software auto-converts, or use Insert → Symbol.

## En Dash (–)
Shorter than em dash; used for **ranges**:
- Pages: *pp. 10–25*
- Years: *2020–2024*
- Scores: *Final: 3–1*

## Not a Hyphen
Do not substitute hyphens (-) for em dashes in formal writing. Each mark has its own function.`,
[{term:"Em dash",definition:"Long dash (—) indicating a significant pause, emphasis, or parenthetical aside."},{term:"En dash",definition:"Medium dash (–) used for numerical ranges (pages, dates, scores)."}],
[{instruction:"Insert em dashes or en dashes as appropriate.",items:["The report pages 12 28 cover financial projections.","Three factors drove the loss price, quality, and delivery.","She was confident until she saw the numbers they were terrible.","The project ran from 2021 2023 and cost $4.2 million."]}],
["Em dash (—) creates strong pause or emphasis; more casual than colon.","En dash (–) indicates numerical ranges.","Do not substitute hyphens for em dashes in professional writing."]);

s("s06-08","s06-08-hyphens", 2, "2.8", "Hyphens", "s06-08-hyphens",
["Identify the uses of hyphens.","Use hyphens correctly."],
`A **hyphen (-)** connects parts of words. It is shorter than an en dash or em dash and serves different functions.

## Compound Adjectives Before a Noun
Hyphenate when two or more words act together as a single adjective **before** the noun:
*a well-written report*, *an up-to-date spreadsheet*, *a full-time position*

Do **not** hyphenate when the adjective follows a linking verb:
*The report was well written.* / *The spreadsheet is up to date.*

## Compound Numbers
Hyphenate all written-out numbers from twenty-one through ninety-nine:
*thirty-five employees*, *forty-two percent*

## Prefixes
Hyphenate when a prefix attaches to a proper noun or to avoid confusion:
*anti-American*, *post-World War II*
*re-cover* (cover again) vs. *recover* (get better)
*re-sign* (sign again) vs. *resign* (quit)

## Self- Compounds
Almost always hyphenated: *self-confident*, *self-employed*, *self-assessment*`,
[{term:"Hyphen",definition:"Punctuation mark (-) connecting parts of compound words or adjectives."},{term:"Compound adjective",definition:"Two or more words functioning as a single adjective before a noun — usually hyphenated."}],
[{instruction:"Add or remove hyphens as appropriate.",items:["She is a well known consultant in the field.","The consultant is well known in her field.","We hired twenty five new staff members.","The self assessment results were positive.","He needed to re sign the amended contract."]}],
["Hyphenate compound adjectives before a noun; not after a linking verb.","Hyphenate written numbers from twenty-one to ninety-nine.","Self- compounds are almost always hyphenated."]);


// ── CH3 Working with Words ────────────────────────────────────────────────────
s("s07-01","s07-01-commonly-confused-words", 3, "3.1", "Commonly Confused Words", "s07-01-commonly-confused-words",
["Identify commonly confused words.","Use commonly confused words correctly."],
`Many words sound alike but have completely different meanings. Using the wrong one undermines credibility.

## High-Frequency Pairs

| Word | Meaning | Example |
|------|---------|---------|
| accept | to receive | *She accepted the offer.* |
| except | to exclude | *Everyone attended except Marco.* |
| affect | verb — to influence | *The news affected the stock price.* |
| effect | noun — result | *The effect was immediate.* |
| their | possessive | *They submitted their report.* |
| there | place/introduces | *There is an error on page 3.* |
| they're | they are | *They're reviewing the contract.* |
| its | possessive | *The company expanded its operations.* |
| it's | it is | *It's time to finalize the proposal.* |
| your | possessive | *Is this your file?* |
| you're | you are | *You're the lead on this project.* |
| then | time sequence | *Review the draft, then submit it.* |
| than | comparison | *This version is clearer than the last.* |
| who | subject | *Who submitted the report?* |
| whom | object | *To whom should I address this?* |
| lay | to place (takes object) | *Lay the documents on the table.* |
| lie | to recline (no object) | *She needs to lie down.* |
| farther | physical distance | *The office is farther than expected.* |
| further | degree/figurative | *We need to discuss this further.* |`,
[{term:"Homophones",definition:"Words that sound the same but have different spellings and meanings."},{term:"Affect vs. effect",definition:"Affect is usually a verb (to influence); effect is usually a noun (result)."}],
[{instruction:"Select the correct word.",items:["The budget cuts will (affect/effect) every department.","(Their/There/They're) proposal was the strongest we reviewed.","Please send the invoice to the person (who/whom) signed the contract.","This version is far better (than/then) the previous draft.","(Its/It's) critical that we meet the deadline."]}],
["Affect = verb (to influence); effect = noun (result).","Their/there/they're and its/it's are among the most common errors.","Who = subject; whom = object.","Then = time; than = comparison."]);

s("s07-02","s07-02-spelling", 3, "3.2", "Spelling", "s07-02-spelling",
["Apply basic spelling rules.","Identify and correct common spelling errors."],
`Spelling errors in professional documents signal carelessness. Spell-check helps but misses homophone errors and context-dependent mistakes.

## Key Spelling Rules

**i before e, except after c** (or when sounding like 'ay'):
*believe, receive, achieve, neighbor, weigh*

**Doubling the final consonant** before -ed/-ing:
One-syllable word ending in consonant-vowel-consonant → double: *run → running*, *stop → stopped*
Two-syllable word with stress on final syllable: *begin → beginning*, *occur → occurred*

**Silent e**:
Drop before vowel suffix: *write → writing*, *make → making*
Keep before consonant suffix: *safe → safely*, *love → lovely*

**Changing y to i**:
Consonant + y → change to i before suffix: *story → stories*, *carry → carried*
Vowel + y → keep y: *play → played*, *enjoy → enjoying*

## Commonly Misspelled Business Words
*accommodate, achieve, committee, independent, necessary, occurrence, privilege, recommend, receive, separate, February, definitely, existence, maintenance, relevant, conscientious*`,
[{term:"Spelling rules",definition:"Patterns governing correct letter order in words."},{term:"Silent e rule",definition:"Drop silent e before vowel suffix; keep it before consonant suffix."}],
[{instruction:"Correct the misspelled words.",items:["The commitee will reconvene on Febuary 14th.","We need to accomodate the clients needs.","It is neccesary to recieve approval before proceeding.","The occurance was totaly unexpected."]}],
["i before e except after c has exceptions (neighbor, weigh).","Double final consonant in CVC words before vowel suffixes.","Drop silent e before vowel suffix; keep before consonant suffix.","Spell-check won't catch homophone errors — proofread carefully."]);

s("s07-03","s07-03-word-choice", 3, "3.3", "Word Choice", "s07-03-word-choice",
["Use a dictionary and thesaurus effectively.","Apply proper connotations.","Avoid slang, clichés, and overly general words."],
`Precise word choice is the difference between writing that communicates and writing that merely fills space.

## Dictionary and Thesaurus

A **dictionary** provides spelling, pronunciation, part of speech, definition, and etymology.
A **thesaurus** lists synonyms and antonyms — invaluable for finding the exact right word or avoiding repetition.

Use both together: the thesaurus finds options; the dictionary confirms the precise meaning before you commit.

## Denotation vs. Connotation

**Denotation** = the literal dictionary definition.
**Connotation** = the emotional or cultural meaning a word carries.

| Word | Denotation | Connotation |
|------|-----------|-------------|
| *cheap* | low in cost | negative — implies low quality |
| *economical* | low in cost | neutral/positive |
| *scrawny* | very thin | negative — implies weakness |
| *lean* | lacking fat | neutral/positive |

In business writing, choose words whose connotations match your intent.

## Avoiding Slang

Slang is informal and often generational. *"Let's circle back on this"* has become so overused it often signals vague thinking. In client-facing documents, avoid slang entirely.

## Avoiding Clichés

Clichés are expressions so worn they've lost impact: *think outside the box, low-hanging fruit, move the needle, at the end of the day.* Replace them with specific language:
**Clichéd:** *We need to move the needle on customer satisfaction.*
**Specific:** *We need to increase customer satisfaction scores by 10 points this quarter.*

## Avoiding Vague Language

Replace general words with specific ones:
**Vague:** *The meeting went badly.*
**Specific:** *The client rejected all three pricing proposals and ended the meeting early.*`,
[{term:"Denotation",definition:"The literal dictionary definition of a word."},{term:"Connotation",definition:"The emotional or cultural meaning attached to a word beyond its literal definition."},{term:"Slang",definition:"Informal, nonstandard language appropriate in casual speech but not in professional writing."},{term:"Cliché",definition:"An overused expression that has lost its impact and originality."}],
[{instruction:"Replace the clichés with specific, original language.",items:["We need to think outside the box on this one.","Let's touch base before the end of the day.","The ball is in their court now.","We hit it out of the park with that presentation."]},{instruction:"Identify the connotation (positive/negative/neutral) of each word.",items:["stubborn vs. persistent vs. determined","cheap vs. economical vs. frugal","pushy vs. assertive vs. confident"]}],
["Use a dictionary alongside a thesaurus — confirm meaning before using a synonym.","Denotation is literal meaning; connotation is emotional meaning.","Avoid slang in formal business writing.","Replace clichés with specific, concrete language."]);

s("s07-04","s07-04-prefixes-and-suffixes", 3, "3.4", "Prefixes and Suffixes", "s07-04-prefixes-and-suffixes",
["Identify prefixes and suffixes.","Use knowledge of affixes to expand vocabulary."],
`Understanding word parts unlocks the meaning of thousands of unfamiliar words.

## Prefixes (Added to Beginning)

| Prefix | Meaning | Example |
|--------|---------|---------|
| un- | not | unreliable, unclear |
| re- | again | renegotiate, resubmit |
| pre- | before | preview, prerequisite |
| mis- | wrong | misunderstand, misinform |
| dis- | not/opposite | disagree, discontinue |
| over- | excess | overestimate, overdue |
| under- | insufficient | underperform, underestimate |
| inter- | between | international, interconnect |
| co- | together | coauthor, coworker |
| post- | after | post-merger, postpone |

## Suffixes (Added to End)

| Suffix | Function | Example |
|--------|----------|---------|
| -tion/-sion | noun | negotiation, revision |
| -ment | noun | agreement, management |
| -ness | noun | effectiveness, awareness |
| -ful | adjective | successful, meaningful |
| -less | adjective | careless, resourceless |
| -ly | adverb | professionally, efficiently |
| -er/-or | person/agent | manager, supervisor |
| -able/-ible | capable of | negotiable, responsible |
| -ize | make into | prioritize, finalize |`,
[{term:"Prefix",definition:"Word element added to the beginning of a root word to change its meaning."},{term:"Suffix",definition:"Word element added to the end of a root word to change its grammatical function or meaning."},{term:"Root word",definition:"The base word carrying the core meaning to which affixes are added."}],
[{instruction:"Identify the prefix or suffix and explain how it changes the meaning.",items:["disagree","renegotiate","overestimate","management","unreliable","finalize"]},{instruction:"Build three words using each prefix.",items:["re-","un-","pre-"]}],
["Prefixes change the meaning of root words.","Suffixes change the grammatical function of root words.","Knowing common prefixes and suffixes helps decode unfamiliar vocabulary."]);

s("s07-05","s07-05-synonyms-and-antonyms", 3, "3.5", "Synonyms and Antonyms", "s07-05-synonyms-and-antonyms",
["Identify synonyms and antonyms.","Use synonyms and antonyms to improve writing."],
`Synonyms add variety; antonyms clarify contrast. Both require careful attention to connotation.

## Synonyms

A **synonym** has the same or similar meaning as another word. Use synonyms to avoid repetition and add nuance.

*begin → start, commence, initiate, launch*

But note: synonyms are rarely perfectly interchangeable. *Commence* is formal; *start* is neutral; *kick off* is casual. Always match the synonym to the register of your document.

## Antonyms

An **antonym** has the opposite meaning. Antonyms clarify contrast in comparisons:
*profit ↔ loss, approve ↔ reject, formal ↔ informal, increase ↔ decrease*

## Using a Thesaurus Well

1. Look up the word you have.
2. Consider several synonym options.
3. Check the exact definition and connotation of each candidate in a dictionary.
4. Choose the one that fits your meaning and your audience.

**Bad practice:** Opening a thesaurus to make simple words sound impressive. *Utilize* is not better than *use*; it is just longer.`,
[{term:"Synonym",definition:"A word that has the same or similar meaning as another word."},{term:"Antonym",definition:"A word that has the opposite meaning of another word."},{term:"Register",definition:"The level of formality appropriate for a specific context or audience."}],
[{instruction:"Replace the underlined word with a more precise synonym.",items:["The report was *good* and covered the key points.","We need to *fix* the errors before submitting.","The new policy will *change* how we handle expenses."]},{instruction:"Write three antonyms for each word.",items:["approve","increase","formal","complex"]}],
["Synonyms vary writing and add nuance.","Antonyms clarify contrast.","Always verify connotation and register before substituting a synonym.","Longer synonyms are not inherently better."]);

s("s07-06","s07-06-using-context-clues", 3, "3.6", "Using Context Clues", "s07-06-using-context-clues",
["Identify types of context clues.","Use context clues to determine word meaning."],
`When you encounter an unfamiliar word, the surrounding text often reveals its meaning — if you know how to read the clues.

## Four Types of Context Clues

### 1. Definition/Explanation Clue
The author defines the word immediately:
*The CFO, or Chief Financial Officer, oversees all financial operations.*

### 2. Restatement/Synonym Clue
A nearby phrase restates the meaning in simpler terms:
*The plan was feasible — workable and achievable within current constraints.*

### 3. Contrast/Antonym Clue
A contrasting word or phrase (signaled by *but, however, although, unlike, whereas*) implies the opposite:
*While the first proposal was verbose, the revised version was concise.*
(*verbose* = the opposite of *concise* → wordy)

### 4. Inference/General Context Clue
The broader context implies meaning:
*After the merger, the company had to divest several of its subsidiaries, selling off non-core business units.*
(*divest* → to sell off, implied by the rest of the sentence)

## Why Context Clues Matter in Business

Technical documents, contracts, and reports often contain specialized or legal vocabulary. Being able to infer meaning from context allows you to read efficiently without stopping to look up every term.`,
[{term:"Context clues",definition:"Words, phrases, or sentences surrounding an unfamiliar word that help reveal its meaning."},{term:"Definition clue",definition:"An explanation of the unfamiliar word provided immediately in the text."},{term:"Contrast clue",definition:"An antonym or contrasting idea nearby that reveals the word's meaning through opposition."}],
[{instruction:"Use context clues to determine the meaning of the underlined word.",items:["The contract was *null and void* — it had no legal force and could not be enforced.","Although the audit showed minor *discrepancies*, or inconsistencies, they were easily corrected.","The CEO was *candid* in her address; unlike her usual careful phrasing, she spoke with complete honesty.","The team needed to *allocate* resources — distributing budget and personnel to each project."]}],
["Four types of context clues: definition, restatement, contrast, inference.","Definition clues provide the meaning immediately after the word.","Contrast clues use signal words like but, however, unlike.","Context clues speed up reading of technical and business documents."]);


// ── CH4 ELL ───────────────────────────────────────────────────────────────────
s("s08-01","s08-01-word-order", 4, "4.1", "Word Order", "s08-01-word-order",
["Understand standard English word order.","Recognize and correct word order errors."],
`English follows a strict **Subject-Verb-Object (SVO)** word order. Departing from it creates confusion.

## Basic SVO Pattern
*The manager [S] reviewed [V] the proposal [O].*
NOT: *The proposal the manager reviewed.*

## Adjectives Before Nouns
Adjectives precede the nouns they describe:
*an important meeting* — not *a meeting important*

## Multiple Adjectives: Fixed Order
When several adjectives precede a noun, they follow a strict sequence:
**Opinion → Size → Age → Shape → Color → Origin → Material → Purpose + Noun**
*a brilliant small antique round mahogany conference table*

## Adverbs of Frequency
Place adverbs of frequency (*always, usually, often, sometimes, rarely, never*) **before** the main verb, but **after** the verb *be*:
*She always submits reports early.*
*The data is rarely inaccurate.*

## Questions
Questions invert the subject and auxiliary verb:
*She is available.* → *Is she available?*
*They have submitted.* → *Have they submitted?*`,
[{term:"SVO",definition:"Subject-Verb-Object — the standard English sentence order."},{term:"Adjective order",definition:"Fixed sequence for multiple adjectives: opinion-size-age-shape-color-origin-material-purpose."}],
[{instruction:"Reorder the scrambled words into correct English sentences.",items:["report / the / submitted / manager / yesterday / the","always / on time / the / are / clients / invoices / pay","meeting / important / small / a / team / held / last / was / Tuesday"]}],
["English SVO order is mandatory for clarity.","Adjectives precede nouns.","Multiple adjectives follow a fixed order.","Adverbs of frequency go before the main verb, after be."]);

s("s08-02","s08-02-negative-statements", 4, "4.2", "Negative Statements", "s08-02-negative-statements",
["Form negative statements correctly.","Avoid double negatives."],
`Forming negatives correctly is essential for precise business communication.

## With Auxiliary Verbs
Add *not* after the auxiliary verb:
*She is not available.* / *They have not submitted the report.* / *We will not proceed.*

## Without an Auxiliary (do/does/did + not)
*She does not agree.* / *They did not attend.* / *I do not understand.*

## Common Contractions
*isn't, aren't, wasn't, weren't, won't, can't, couldn't, shouldn't, don't, doesn't, didn't, haven't, hasn't*

## Neither/Nor
*Neither the report nor the invoice was submitted on time.*
The verb agrees with the subject nearest to it (*invoice → was*).

## Double Negatives — Avoid
Two negatives in one clause cancel each other out and create nonstandard English:
**Incorrect:** *We don't have no budget for this.*
**Correct:** *We don't have any budget for this.* OR *We have no budget for this.*

**Incorrect:** *She didn't say nothing.*
**Correct:** *She didn't say anything.* OR *She said nothing.*`,
[{term:"Auxiliary verb",definition:"A helping verb (be, do, have, can, will) used to form negatives, questions, and tenses."},{term:"Double negative",definition:"Using two negative words in one clause — nonstandard and incorrect in formal English."}],
[{instruction:"Rewrite as a negative statement.",items:["She agrees with the proposal.","They submitted the budget on time.","We can proceed without approval."]},{instruction:"Correct the double negatives.",items:["We don't have no alternative.","He didn't say nothing about the changes.","They haven't received no confirmation yet."]}],
["Negatives use not after auxiliary verbs, or do/does/did + not without one.","Double negatives are nonstandard — avoid them in all formal writing.","Neither/nor: verb agrees with nearest subject."]);

s("s08-03","s08-03-count-and-noncount-nouns-and-a", 4, "4.3", "Count and Noncount Nouns and Articles", "s08-03-count-and-noncount-nouns-and-a",
["Distinguish count and noncount nouns.","Use articles a, an, and the correctly."],
`Articles and noun types work together — get one wrong and the other falls with it.

## Count Nouns
Can be counted; have singular and plural forms:
*one report → two reports*, *a client → several clients*

## Noncount Nouns
Cannot be counted; no plural form:
*information, advice, feedback, equipment, furniture, software, research, money, staff, knowledge*

**Incorrect:** *She gave me three feedbacks.*
**Correct:** *She gave me three pieces of feedback.*

## Articles

| Article | Use | Example |
|---------|-----|---------|
| **a** | first mention of singular count noun (consonant sound) | *Submit a report by Friday.* |
| **an** | first mention of singular count noun (vowel sound) | *She is an analyst.* |
| **the** | specific or previously mentioned noun | *The report she submitted was excellent.* |
| (none) | plural or noncount nouns in general | *Reports are due Friday. / Information is power.* |

## A vs. An — Sound, Not Letter
Before vowel sound: *an hour* (h is silent), *an MBA*
Before consonant sound: *a university* (sounds like "yoo"), *a European*`,
[{term:"Count noun",definition:"A noun that can be counted and has both singular and plural forms."},{term:"Noncount noun",definition:"A noun that cannot be counted and has no plural form (information, advice, equipment)."},{term:"Definite article",definition:"The word 'the' — used before specific or previously mentioned nouns."},{term:"Indefinite article",definition:"The words 'a' or 'an' — used before nonspecific singular count nouns."}],
[{instruction:"Add the correct article (a, an, the, or nothing).",items:["She submitted ___ report yesterday. ___ report was approved.","Please provide ___ feedback on the attached draft.","He has ___ MBA from Harvard.","___ software we use tracks ___ project milestones automatically.","We need ___ equipment before ___ training begins."]}],
["Count nouns have plurals; noncount nouns do not.","Use a/an for first-mention singular count nouns.","Use the for specific or previously mentioned nouns.","A/an choice depends on sound, not letter."]);

s("s08-06","s08-06-modal-auxiliaries", 4, "4.6", "Modal Auxiliaries", "s08-06-modal-auxiliaries",
["Identify modal auxiliary verbs.","Use modal verbs correctly for ability, permission, and obligation."],
`Modal verbs add shades of meaning — ability, permission, possibility, obligation — that plain verbs cannot.

## Modal Verbs
*can, could, may, might, shall, should, will, would, must, ought to*

**Rules:** Modals never add -s/-ed. Always followed by the **base form** of the verb:
*She can write.* ✓ / *She cans write.* ✗ / *She can wrote.* ✗

## Meanings

| Meaning | Modal | Example |
|---------|-------|---------|
| Ability (present) | can | *I can finalize this today.* |
| Ability (past) | could | *She could see the error immediately.* |
| Permission (formal) | may | *May I reschedule the meeting?* |
| Permission (informal) | can | *Can I take Friday off?* |
| Possibility | might/may | *The client might request changes.* |
| Strong obligation | must | *You must sign before proceeding.* |
| Advice/recommendation | should | *You should review the contract carefully.* |
| Polite request | could/would | *Could you send the file by noon?* |

## Must Not vs. Don't Have To
These are **NOT** the same:
- *must not* = prohibition: *You must not share the password.*
- *don't have to* = not necessary: *You don't have to attend if you're busy.*`,
[{term:"Modal auxiliary",definition:"A verb (can, could, may, might, shall, should, will, would, must) expressing ability, permission, possibility, or obligation."},{term:"Base form",definition:"The infinitive form of a verb without 'to' — always used after a modal."}],
[{instruction:"Complete each sentence with the correct modal verb.",items:["___ I see the draft before it's submitted? (permission — formal)","You ___ back up your data before the update. (strong obligation)","The client ___ request revisions — we're not sure yet. (possibility)","___ you send me the budget figures? (polite request)","You ___ worry — the deadline has been extended. (not necessary)"]}],
["Modal verbs never change form; always precede base verb.","must not = prohibition; don't have to = not necessary — very different meanings.","Use may for formal permission; can for informal."]);

s("s08-08","s08-08-slang-and-idioms", 4, "4.8", "Slang and Idioms", "s08-08-slang-and-idioms",
["Recognize slang and idioms.","Avoid slang and idioms in formal writing."],
`Slang and idioms can derail business communication, especially across cultures.

## Slang

**Slang** is informal language that changes quickly and varies by region, generation, and group. In business writing, slang creates an unprofessional impression.

| Slang | Professional equivalent |
|-------|------------------------|
| awesome | excellent, outstanding |
| screw up | error, mistake |
| guys | team, colleagues, everyone |
| ASAP | as soon as possible |
| totally | completely, entirely |
| kill it | perform exceptionally well |

## Idioms

**Idioms** have meanings that cannot be understood from their individual words. They cause confusion for non-native English speakers and in cross-cultural communication.

| Idiom | Meaning |
|-------|---------|
| a blessing in disguise | something good that initially seems bad |
| a piece of cake | very easy to do |
| on pins and needles | very nervous/anxious |
| the sky is the limit | possibilities are endless |
| pull someone's leg | make a joke by tricking someone |
| on top of the world | feeling great |
| better late than never | doing something late is better than not at all |

## Context Clues for Idioms
When you encounter an unknown idiom, look for: definition clues, restatement clues, or contrast clues nearby.`,
[{term:"Slang",definition:"Informal nonstandard language appropriate in casual speech but not in professional writing."},{term:"Idiom",definition:"An expression whose meaning differs from the literal meanings of its individual words."}],
[{instruction:"Rewrite this business email replacing all slang with professional language.",items:["Hey team! Just wanted to touch base — our Q3 numbers are totally awesome. We totally killed it this quarter. Let's grab some time to chat about how we can keep killing it going forward. ASAP would be great."]}],
["Slang creates an unprofessional impression in business writing.","Idioms confuse non-native speakers and cross-cultural audiences.","Replace slang with direct, professional equivalents.","Use context clues to decode unfamiliar idioms."]);


// ── CH5–CH14 condensed but complete ──────────────────────────────────────────
s("s09-01","s09-01-purpose-audience-tone-and-cont", 5, "5.1", "Purpose, Audience, Tone, and Content", "s09-01-purpose-audience-tone-and-cont",
["Identify the four common academic purposes.","Identify audience, tone, and content."],
`Three elements shape every paragraph: **purpose**, **audience**, and **tone**.

## Four Academic Purposes

**Summary** — condenses a larger text into the essential points in the writer's own words. No analysis; just accurate, concise overview.

**Analysis** — takes a text or situation apart, examining how its components relate. Identifies patterns, contradictions, and implications.

**Synthesis** — combines ideas from two or more sources to create a new point not present in either source alone. Goes beyond summary to build original understanding.

**Evaluation** — judges value, quality, or effectiveness, presenting an opinion supported by evidence and reasoning. Incorporates summary, analysis, and synthesis.

## Identifying Your Audience

Consider: **Demographics** (age, background), **Education** (level of knowledge), **Prior knowledge** (what they already know about the topic), **Expectations** (what format/depth they expect).

## Selecting Tone

Tone is the writer's attitude toward the subject and audience — conveyed through word choice, sentence structure, and level of formality. Match tone to context: warm and direct for a colleague, formal and objective for an executive report.

## Content

Content = everything written in the document: examples, statistics, facts, anecdotes, testimonies, observations. All content must be appropriate for audience, purpose, and tone.`,
[{term:"Purpose",definition:"The reason a writer creates a document — to summarize, analyze, synthesize, or evaluate."},{term:"Tone",definition:"The writer's attitude toward subject and audience, conveyed through word and sentence choices."},{term:"Audience",definition:"The intended readers of a document."},{term:"Summary",definition:"Condenses a text to essential points using the writer's own words."},{term:"Analysis",definition:"Separates a text into components and examines how they relate."},{term:"Synthesis",definition:"Combines ideas from multiple sources to create a new point."},{term:"Evaluation",definition:"Judges value or quality of something, supported by evidence and reasoning."}],
[{instruction:"Identify the purpose of each paragraph (summary, analysis, synthesis, or evaluation).",items:["This film runs twenty minutes too long. Most scenes after the midpoint repeat earlier emotional beats without adding new information, suggesting the director lacked confidence in the audience's memory.","The report covers quarterly revenue, cost structure, staffing levels, and market share. Total revenue increased 12% year-over-year, while operating costs rose 18%.","Both Smith (2021) and Lee (2022) find that remote workers report higher job satisfaction, but Smith attributes this to autonomy while Lee attributes it to commute elimination — suggesting the relationship is multifactored."]}],
["The four academic purposes are summarize, analyze, synthesize, and evaluate.","Know your audience's demographics, education, prior knowledge, and expectations.","Tone is conveyed through word choice and sentence structure.","Content must match audience, purpose, and tone."]);

s("s09-02","s09-02-effective-means-for-writing-a-", 5, "5.2", "Effective Means for Writing a Paragraph", "s09-02-effective-means-for-writing-a-",
["Identify characteristics of a good topic sentence.","Identify the three parts of a developed paragraph."],
`A strong paragraph has three parts: **topic sentence**, **body**, and **concluding sentence**.

## Topic Sentence

The **topic sentence** states the paragraph's main idea. It combines a **main idea** (what you're discussing) with a **controlling idea** (your specific stance).

**Weak:** *This paper is about rising tuition.* (no controlling idea)
**Strong:** *Rising tuition is pricing qualified students out of higher education at an alarming rate.*

Five characteristics of an effective topic sentence:
1. Accurately indicates what the paragraph will cover
2. Contains both a main idea and a controlling idea
3. Is clear and easy to follow
4. Does not include supporting details
5. Uses engaging vocabulary

## Supporting Sentences

Supporting sentences develop the topic sentence by providing: facts, statistics, quotations, examples, reasons, or anecdotes.

## Concluding Sentence

The concluding sentence restates the main point in different words, summarizes key evidence, draws a conclusion, or makes a prediction — without introducing new ideas.

## Transitions

Transitions connect sentences and paragraphs, showing logical relationships:

| Function | Examples |
|----------|---------|
| Addition | also, furthermore, moreover, in addition |
| Contrast | however, nevertheless, on the other hand |
| Cause/effect | therefore, consequently, as a result |
| Sequence | first, next, then, finally |
| Summary | in conclusion, in summary, overall |`,
[{term:"Topic sentence",definition:"The sentence controlling the main point of a paragraph — usually at the beginning."},{term:"Controlling idea",definition:"The writer's specific stance or claim within the topic sentence."},{term:"Supporting sentences",definition:"Sentences in the paragraph body that develop, explain, or prove the topic sentence."},{term:"Concluding sentence",definition:"The final sentence that summarizes the main point without introducing new ideas."},{term:"Transition",definition:"A connecting word or phrase showing logical relationships between ideas."}],
[{instruction:"Identify the main idea and controlling idea in each topic sentence.",items:["Social media has fundamentally damaged the quality of political discourse.","Remote work increases productivity but requires clear management structures.","Effective onboarding reduces employee turnover in the first year."]},{instruction:"Choose the more effective topic sentence.",items:["a) I will discuss the effects of poor communication. b) Poor internal communication costs companies millions of dollars in lost productivity annually.","a) Customer service is important. b) Exceptional customer service is the single most powerful driver of brand loyalty."]}],
["Topic sentence = main idea + controlling idea.","Supporting sentences develop the topic sentence with evidence.","Concluding sentence restates main point without introducing new ideas.","Transitions guide readers through logical relationships."]);

s("s10-01","s10-01-sentence-variety", 6, "6.1", "Sentence Variety", "s10-01-sentence-variety",
["Identify ways to vary sentence structure.","Vary sentence beginnings and connections."],
`Repeating the same sentence pattern makes writing monotonous. Varied structure keeps readers engaged.

## Why Variety Matters

A paragraph of short, identical sentences feels choppy:
*I wrote the report. I reviewed it. I submitted it. It was approved.*

Varied:
*After reviewing the draft for two hours, I submitted the report — which the client approved the same day.*

## Starting with an Adverb
Move the adverb to the front, followed by a comma:
*Confidently, she presented the quarterly findings.*

## Starting with a Prepositional Phrase
*During the merger negotiations, all non-disclosure agreements must be signed.*

## Inverting Subject and Verb
*Attached is the revised proposal.* (subject = *proposal*, follows verb *attached*)
*Here are the results of the audit.*

## Connecting Ideas with Modifiers
**-ing modifier:** *Reviewing the budget, the CFO found three discrepancies.*
**-ed modifier:** *Exhausted by the negotiations, the team agreed to reconvene Monday.*
**Relative clause:** *The analyst, who joined last quarter, produced the best model.*
**Appositive:** *Sarah Chen, our lead designer, presented the new identity system.*`,
[{term:"Sentence variety",definition:"Using different sentence lengths, patterns, and structures to improve readability."},{term:"Modifier",definition:"A word or phrase qualifying the meaning of another element in the sentence."},{term:"Relative clause",definition:"A clause beginning with who, which, or that that describes a nearby noun."},{term:"Appositive",definition:"A noun phrase placed next to another noun to rename or describe it."}],
[{instruction:"Combine each pair into a single varied sentence using the technique indicated.",items:["(appositive) Mariam Tahir is our CFO. She presented the annual budget.","(-ing modifier) He reviewed the proposal. He found several inconsistencies.","(relative clause) The contract was signed in March. It expires next year.","(inverted) The full breakdown is enclosed."]}],
["Varied sentence structure prevents monotony.","Start sentences with adverbs, prepositional phrases, or inverted order.","Combine sentences using -ing/-ed modifiers, relative clauses, or appositives."]);

s("s10-02","s10-02-coordination-and-subordination", 6, "6.2", "Coordination and Subordination", "s10-02-coordination-and-subordination",
["Combine sentences using coordination.","Combine sentences using subordination."],
`Two ways to join related sentences: **coordination** (equal ideas) and **subordination** (one idea more important).

## Coordination

Joins two independent clauses of **equal importance**.

**Coordinating conjunctions (FANBOYS)** — preceded by comma:
*The report was complete, but the presentation needed revision.*

| Conjunction | Relationship | Example |
|-------------|-------------|---------|
| and | addition | The data is accurate, and the charts are clear. |
| but | contrast | The plan is bold, but the risks are high. |
| or | alternative | We can expand now, or we can wait. |
| so | result | The client was unhappy, so we revised the proposal. |
| yet | contrast | The budget is tight, yet the team delivered. |
| for | reason | She left early, for she had a flight to catch. |
| nor | negative | He didn't call, nor did he email. |

**Conjunctive adverbs** with semicolons:
*The project is behind schedule; however, the quality is excellent.*

## Subordination

Joins clauses of **unequal importance** — emphasizes one over the other.

*Although the report was late, the data was accurate.* (lateness is subordinated; accuracy is emphasized)

Common subordinating conjunctions: *although, because, since, unless, if, when, while, after, before, even though, whereas*

**Punctuation:** Comma after dependent clause when it comes first; no comma when it comes after the main clause.`,
[{term:"Coordination",definition:"Joining two independent clauses of equal importance using FANBOYS or a conjunctive adverb."},{term:"Subordination",definition:"Joining a dependent clause to a main clause to show unequal importance."},{term:"Coordinating conjunction",definition:"FANBOYS: for, and, nor, but, or, yet, so — join equal independent clauses."},{term:"Subordinating conjunction",definition:"Joins a dependent clause to a main clause (although, because, since, unless, when)."}],
[{instruction:"Join each pair using a coordinating conjunction or conjunctive adverb.",items:["The client approved the concept. Production can begin immediately.","The report was thorough. The recommendations were too vague.","He didn't attend the kickoff. He wasn't briefed on the project goals."]},{instruction:"Join each pair using a subordinating conjunction.",items:["The merger failed. The regulatory approval was denied.","You must submit expense reports by Friday. The system will close for month-end.","The new software is powerful. It requires three weeks of training."]}],
["Coordination gives equal weight to two clauses.","Subordination emphasizes one clause over another.","FANBOYS conjunctions preceded by comma; conjunctive adverbs preceded by semicolon.","Comma after subordinate clause when it comes first."]);

s("s10-03","s10-03-parallelism", 6, "6.3", "Parallelism", "s10-03-parallelism",
["Identify parallel and non-parallel structures.","Create parallel structures in writing."],
`**Parallelism** uses the same grammatical structure for related elements. It creates rhythm, clarity, and balance.

## Why Parallelism Matters

**Faulty:** *The manager is responsible for hiring staff, to train new employees, and budget oversight.*
**Parallel:** *The manager is responsible for hiring staff, training new employees, and overseeing the budget.*

All three items now use -ing gerunds — balanced and easy to read.

## With Coordinating Conjunctions
Both sides of *and/but/or* must use matching grammatical forms:
**Faulty:** *She likes writing reports and to present findings.*
**Parallel:** *She likes writing reports and presenting findings.*

## In Lists
All items in a list must share the same grammatical form:
**Faulty:** *The proposal includes: a market analysis, competitive pricing, and how to implement it.*
**Parallel:** *The proposal includes: a market analysis, a competitive pricing model, and an implementation plan.*

## With Comparisons (than/as)
Both sides of *than* or *as* must be grammatically equal:
**Faulty:** *Working remotely is more productive than to commute.*
**Parallel:** *Working remotely is more productive than commuting.*

## With Correlative Conjunctions
Both parts of *either…or, neither…nor, not only…but also, both…and* must match:
**Faulty:** *We can either reduce costs or increasing revenue.*
**Parallel:** *We can either reduce costs or increase revenue.*`,
[{term:"Parallelism",definition:"Using the same grammatical structure for related elements in a sentence or list."},{term:"Faulty parallelism",definition:"Inconsistent grammatical structures in a list or paired construction."},{term:"Correlative conjunctions",definition:"Paired conjunctions (either…or, neither…nor, not only…but also, both…and) requiring parallel structures."}],
[{instruction:"Correct the faulty parallelism.",items:["The new system will improve accuracy, reduce costs, and the team will work faster.","She not only manages the budget but also is responsible for hiring.","We can either postpone the launch or we could reduce the feature set.","The report was praised for its clarity, being concise, and accurate."]}],
["Parallelism creates rhythm and clarity.","Items in lists and paired clauses must use matching grammatical forms.","Correlative conjunctions require parallel structures on both sides."]);

s("s11-01","s11-01-apply-prewriting-models", 7, "7.1", "Apply Prewriting Models", "s11-01-apply-prewriting-models",
["Use prewriting strategies to choose a topic.","Narrow a broad topic to a specific focus."],
`Writing is a **process** with five steps: Prewriting → Outlining → Drafting → Revising → Editing.

## What Is Prewriting?

Prewriting transfers abstract thoughts into concrete language before drafting begins. It's the stage where ideas get explored without the pressure of producing a polished product.

## Six Prewriting Strategies

**1. Using Experience and Observations** — start with what you know. Personal experience often generates the most authentic and engaged writing.

**2. Reading** — reading on your topic before writing builds vocabulary, reveals what has already been said, and helps you find your angle.

**3. Freewriting** — write continuously for 3–5 minutes without stopping, correcting, or judging. The goal is volume, not quality. Patterns and ideas emerge that structured thinking suppresses.

**4. Asking Questions (5WH)** — Who? What? Where? When? Why? How? Answering each generates angles and sub-topics.

**5. Brainstorming** — list every idea related to your topic as fast as possible. No evaluation yet. Then look for patterns, clusters, and promising directions.

**6. Idea Mapping (Clustering)** — draw your topic in a circle at center; branch out with related ideas; connect related clusters. Visual thinkers often find this reveals relationships that lists miss.

**7. Internet Research** — run preliminary searches to see what's currently discussed, who's writing, and what's contested.

## Narrowing Focus

A good topic: interests the writer, appeals to the audience, fits the assignment length, and is specific enough to cover thoroughly in the available space.`,
[{term:"Prewriting",definition:"The stage of transferring abstract thoughts into concrete ideas before drafting."},{term:"Freewriting",definition:"Writing continuously for a set time without stopping or editing — generates raw ideas."},{term:"Brainstorming",definition:"Rapidly listing all ideas about a topic without evaluation."},{term:"Idea mapping",definition:"Visually clustering related ideas using circles, lines, and arrows."},{term:"5WH questions",definition:"Who, What, Where, When, Why, How — questions used to explore a topic."}],
[{instruction:"Choose a business topic and complete a 5-minute freewrite. Then identify three potential specific essay angles from what you wrote.",items:[]},{instruction:"Create an idea map for one of: remote work, business email communication, or workplace diversity.",items:[]}],
["Writing is a process: prewriting, outlining, drafting, revising, editing.","Prewriting generates ideas before the pressure of drafting.","Freewriting bypasses internal censorship to surface raw material.","Narrowing from broad to specific topic is essential before outlining."]);

s("s11-02","s11-02-outlining", 7, "7.2", "Outlining", "s11-02-outlining",
["Identify steps in constructing an outline.","Construct a topic outline and a sentence outline."],
`An outline is the skeleton of your document — it organizes ideas before you build them out.

## Three Organization Methods

| Method | When to Use | Transitions |
|--------|------------|------------|
| Chronological | History, processes, narratives | first, then, next, finally |
| Spatial | Descriptions of place or objects | above, below, beside, across |
| Order of Importance | Persuasive writing, ranking | most importantly, primarily, above all |

## Thesis Statement

The **thesis statement** presents the essay's controlling idea — usually one sentence, specific and arguable. Every section of the outline should connect back to it.

A **working thesis** is your starting point. Refine it as your outline develops.

## Formal Outline Structure

- **Roman numerals (I, II, III)** = main points (become body paragraphs)
- **Capital letters (A, B, C)** = supporting details
- **Arabic numerals (1, 2, 3)** = sub-details

Rule: Every level must have at least two entries — no lone I without II, no lone A without B.

## Two Types

**Topic outline** uses words/phrases in parallel structure — faster to build.
**Sentence outline** uses complete sentences — one step closer to a draft, ensures logical flow.`,
[{term:"Outline",definition:"A structured plan organizing main points and supporting details before drafting."},{term:"Thesis statement",definition:"One sentence presenting the essay's controlling idea and the writer's position."},{term:"Working thesis",definition:"A preliminary thesis used to guide outlining; refined as writing progresses."},{term:"Chronological order",definition:"Arranges ideas by time sequence."},{term:"Order of importance",definition:"Arranges ideas by their significance, most or least important first."}],
[{instruction:"Write a working thesis for each of these topics.",items:["The impact of remote work on team communication","Why business emails are often misunderstood","The value of plain language in professional writing"]},{instruction:"Build a topic outline for a 500-word business memo using chronological order.",items:[]}],
["Choose organization (chronological, spatial, importance) based on purpose.","Thesis statement controls every section of the outline.","Every outline level must have at least two entries.","Sentence outlines are closer to drafts than topic outlines."]);

s("s11-03","s11-03-drafting", 7, "7.3", "Drafting", "s11-03-drafting",
["Identify drafting strategies that improve writing.","Write an effective first draft."],
`A first draft is a **complete but unpolished** version of your document. Its goal is to get all ideas onto the page — not to be perfect.

## Strategies for Drafting

- **Start with the section you know best** — momentum matters more than order.
- **Write one section at a time** — complete each before moving on.
- **Don't edit while drafting** — silencing the internal critic during drafting dramatically increases output.
- **Keep purpose and audience visible** — write notes to yourself about your reader and goal; consult them when you lose direction.
- **Take strategic breaks** — short breaks refresh focus; long breaks destroy momentum.

## Elements of a First Draft

Every first draft should contain:
1. **Introduction** — hook + context + thesis
2. **Body paragraphs** — each with topic sentence, supporting sentences, concluding sentence
3. **Conclusion** — restate thesis, synthesize main points, provide closure
4. **Title** — drafted last, after you know what you actually wrote

## Topic Sentence Placement

Topic sentences can appear at the beginning (most common), middle, or end of a paragraph. In professional documents, putting topic sentences first is the clearest approach — busy readers skim.

## Paragraph Length

Aim for paragraphs between 100–200 words. Too short = underdeveloped. Too long = hard to scan. In business documents, shorter paragraphs (3–5 sentences) are preferred.`,
[{term:"Draft",definition:"A complete but unpolished version of a document — not the final product."},{term:"Introduction",definition:"Opening paragraph containing a hook, context, and thesis statement."},{term:"Conclusion",definition:"Closing paragraph restating the thesis and providing closure without new arguments."}],
[{instruction:"Using your outline from Section 7.2, write one body paragraph with topic sentence, three supporting sentences, and a concluding sentence.",items:[]},{instruction:"Write an opening paragraph (hook + context + thesis) for a business memo proposing a new remote work policy.",items:[]}],
["First drafts are complete but unpolished — don't edit while drafting.","Keep purpose and audience in mind throughout.","Every draft needs: introduction, body paragraphs, conclusion.","Business documents benefit from short paragraphs and front-loaded topic sentences."]);

s("s11-04","s11-04-revising-and-editing", 7, "7.4", "Revising and Editing", "s11-04-revising-and-editing",
["Distinguish revising from editing.","Apply revision and editing strategies."],
`**Revising** and **editing** are distinct stages — do revision first, editing second.

## Revising (Big Picture)

Revising means reconsidering content, structure, argument, and clarity.

**ARMS strategy:**
- **A**dd — missing information, evidence, transitions
- **R**emove — redundant, irrelevant, or off-topic content
- **M**ove — restructure paragraphs or sections for better logic
- **S**ubstitute — weak words, vague claims, unsupported assertions

**Revision checklist:**
- Does the introduction engage the reader and clearly state the thesis?
- Does each paragraph have a clear topic sentence?
- Is the evidence sufficient, specific, and relevant?
- Do transitions guide the reader smoothly?
- Does the conclusion synthesize rather than just summarize?

## Editing (Surface Level)

Editing corrects grammar, spelling, punctuation, and style after revision is complete.

**Editing checklist:** grammar, spelling, punctuation, capitalization, word choice, sentence variety, formatting consistency.

## Reading Aloud

Reading your draft aloud catches awkward phrasing, run-on sentences, and missing transitions that the eye skips over silently.

## Peer Review

An outside reader provides perspective you cannot give yourself. Ask them to summarize your main point — if they can't, the argument needs clarifying.`,
[{term:"Revising",definition:"Making substantive changes to content, structure, and argument — the big-picture stage."},{term:"Editing",definition:"Correcting surface errors in grammar, spelling, punctuation, and style."},{term:"ARMS strategy",definition:"Add, Remove, Move, Substitute — a systematic approach to revision."},{term:"Peer review",definition:"Having another person read your draft to provide objective feedback."}],
[{instruction:"Apply the ARMS strategy to a paragraph you have written. Identify one change in each category.",items:[]},{instruction:"Proofread this memo paragraph for errors. List all errors you find.",items:["The quarterly report have been completed and is attach to this email. Please review it before our meeting on Thursday April 14th. If you have question or concern please dont hesitate contact me."]}],
["Revise for content and structure before editing for surface errors.","ARMS = Add, Remove, Move, Substitute.","Read aloud to catch problems invisible to the eye.","Peer review provides the outside perspective authors cannot give themselves."]);


// ── CH8–CH14 ──────────────────────────────────────────────────────────────────
s("s12-01","s12-01-developing-a-strong-clear-thes", 8, "8.1", "Developing a Strong, Clear Thesis Statement", "s12-01-developing-a-strong-clear-thes",
["Develop an effective thesis statement.","Distinguish strong from weak thesis statements."],
`A **thesis statement** is the spine of your essay — every paragraph should connect back to it.

## What Makes a Strong Thesis?

A strong thesis is **specific**, **arguable**, and **supportable**:
- Specific: narrow enough to be fully developed in the assigned length
- Arguable: a claim someone could reasonably disagree with
- Supportable: provable with evidence

**Weak** (too broad): *Technology affects how we communicate.*
**Strong**: *The rise of asynchronous messaging tools has reduced spontaneous collaboration, increasing productivity but decreasing team cohesion.*

## Working vs. Final Thesis

A **working thesis** guides your outline. Expect it to change. As you gather evidence, you may discover a more nuanced or accurate claim. The final thesis should reflect what you actually proved.

## Placement

The thesis typically appears at the **end of the introduction**, where it serves as a bridge between opening context and the body of the document.

## Common Thesis Errors

- **Too obvious**: *Shakespeare used literary devices in his plays.* (unargued)
- **Announcement**: *In this essay, I will explain…* (weak — state the claim directly)
- **Question** (not a statement): *Should companies adopt remote work policies?*
- **Too broad**: covers more ground than the document can support`,
[{term:"Thesis statement",definition:"A specific, arguable sentence presenting the essay's controlling idea."},{term:"Working thesis",definition:"A preliminary thesis guiding the outline; refined as writing progresses."},{term:"Arguable claim",definition:"An assertion someone could reasonably dispute — not a fact or obvious observation."}],
[{instruction:"Evaluate each thesis as weak or strong. Improve the weak ones.",items:["Social media has changed communication.","Mandatory diversity training does not reduce workplace bias; evidence from 20 years of studies shows it can entrench resentment instead.","This essay will discuss the problems with open-plan offices.","Open-plan offices reduce deep work by 15% by exposing employees to constant ambient noise and visual interruptions."]}],
["Thesis must be specific, arguable, and supportable.","Working thesis guides drafting; final thesis reflects what you proved.","Avoid: too-broad claims, announcements, and obvious observations.","Thesis goes at the end of the introduction."]);

s("s12-02","s12-02-writing-body-paragraphs", 8, "8.2", "Writing Body Paragraphs", "s12-02-writing-body-paragraphs",
["Structure effective body paragraphs.","Use PIE to develop paragraphs with evidence."],
`Each body paragraph develops one main point that supports the thesis. Use the **PIE structure** to ensure each paragraph is complete.

## PIE Structure

**P — Point** (Topic Sentence): State the paragraph's main argument explicitly.
**I — Illustration** (Evidence): Provide specific evidence — a fact, statistic, example, expert quote, or anecdote.
**E — Explanation** (Analysis): Explain *why* the evidence supports your point and connects to the thesis.

**Example:**
*P: Remote workers report higher job satisfaction than office workers.*
*I: A 2023 Stanford study found that remote employees were 13% more productive and 50% less likely to quit.*
*E: This data suggests that autonomy — not just location — drives both output and retention, reinforcing the case for flexible work policies.*

## Types of Evidence

| Type | Example |
|------|---------|
| Statistics | 73% of employees prefer hybrid schedules |
| Expert quotation | Dr. Lee argues that "distributed teams outperform collocated ones when..." |
| Case study | When Salesforce adopted flex schedules, turnover dropped 22% |
| Analogy | Like a machine that runs better at optimal temperature, employees perform best in their preferred environment |

## Transitions Between Paragraphs

End each body paragraph by hinting at what comes next, or begin the next paragraph with a transition that connects the two ideas.`,
[{term:"PIE structure",definition:"Point (topic sentence), Illustration (evidence), Explanation (analysis) — framework for developing body paragraphs."},{term:"Evidence",definition:"Specific facts, statistics, quotations, examples, or case studies supporting a claim."},{term:"Analysis",definition:"The explanation of why evidence supports the argument — the 'E' in PIE."}],
[{instruction:"Write a PIE paragraph on one of: the value of plain language in business, why proofreading matters, or the impact of email overload.",items:[]},{instruction:"Identify P, I, and E in this paragraph. What is missing or underdeveloped?",items:["Organizations should invest in employee wellness programs. Many companies offer gym memberships and healthy food options. These programs make employees feel valued."]}],
["Each body paragraph develops one main point.","PIE: Point (claim), Illustration (evidence), Explanation (analysis).","Evidence must be specific and sourced.","Analysis is the most important and most often missing element."]);

s("s12-03","s12-03-organizing-your-writing", 8, "8.3", "Organizing Your Writing", "s12-03-organizing-your-writing",
["Select appropriate organizational patterns.","Use transitions to signal organization."],
`Organization determines whether readers can follow your argument — or get lost in it.

## Three Main Patterns

**Chronological** — arrange by time. Best for: narratives, histories, how-to processes, describing a sequence of events.
*Transitions: first, then, next, after, subsequently, finally*

**Spatial** — arrange by physical location or structure. Best for: describing a place, object, or layout.
*Transitions: above, below, beside, across, in front of, beyond*

**Order of Importance** — arrange from most to least important (or least to most for a building-argument structure). Best for: persuasive writing, rankings, recommendations.
*Transitions: most importantly, above all, primarily, in addition, finally*

## Choosing the Right Pattern

Ask: How do these ideas naturally connect?
- Time-based? → Chronological
- Space-based? → Spatial
- Priority-based? → Order of importance

## Mixed Organization

Longer documents often use different patterns in different sections. A business report might use chronological order for background, order of importance for recommendations, and spatial order for a facility description.`,
[{term:"Chronological order",definition:"Organizing ideas by time sequence."},{term:"Spatial order",definition:"Organizing ideas by physical arrangement or location."},{term:"Order of importance",definition:"Organizing ideas from most to least significant, or vice versa."}],
[{instruction:"Identify the organizational pattern and explain why it was chosen.",items:["The new office layout places reception at the entrance, private offices along the north wall, open workstations in the center, and the break room at the rear.","To process a purchase order: first, complete the PO form; then submit it to your manager for approval; next, the approved PO goes to procurement; finally, procurement places the order.","The most critical issue is cash flow. Secondary concerns include staffing and vendor terms."]},{instruction:"Which organizational pattern would you choose for each document? Explain.",items:["A business case for adopting new project management software","Instructions for submitting a reimbursement request","A description of your company's office space for a facilities report"]}],
["Choose organization based on the natural relationship between ideas.","Chronological = time; spatial = place; order of importance = priority.","Transitions signal which organizational pattern you're using.","Mixed organization is appropriate in longer documents."]);

s("s12-04","s12-04-writing-introductory-and-concl", 8, "8.4", "Writing Introductory and Concluding Paragraphs", "s12-04-writing-introductory-and-concl",
["Write effective introductory paragraphs.","Write effective concluding paragraphs."],
`Introductions and conclusions frame your document — they create the first and last impressions.

## Introduction: Three Parts

**Hook** → **Context** → **Thesis**

### Hook Strategies
- **Startling statistic**: *Businesses lose $37 billion annually to poorly written communication.*
- **Provocative question**: *What if your next email cost you a client?*
- **Vivid anecdote**: A brief story that illustrates the problem
- **Bold claim**: A strong, contestable assertion
- **Relevant quotation**: From an authority in the field

### What to Avoid
- *"In this essay, I will discuss…"* — announce, don't narrate
- *"Since the beginning of time…"* — overly broad opener
- *"Webster's dictionary defines…"* — clichéd in professional writing

## Conclusion: Three Parts

**Thesis restatement** (in new words) → **Summary of main points** → **Closing move**

### Closing Move Strategies
- Broader significance: What does this mean beyond this document?
- Call to action: What should the reader do next?
- Prediction: What will happen if this is ignored or adopted?
- Memorable image or final thought

### What to Avoid
- Introducing new arguments
- Simply copying the introduction
- Apologetic endings: *"While I may not have covered everything…"*`,
[{term:"Hook",definition:"The opening device that captures reader attention — statistic, question, anecdote, or bold claim."},{term:"Bookend structure",definition:"Conclusion echoes the introduction's imagery or idea, giving the document a sense of completeness."}],
[{instruction:"Write an effective introduction (hook + context + thesis) for a proposal recommending plain language in corporate communications.",items:[]},{instruction:"Write a conclusion for the same proposal that restates the thesis, synthesizes main points, and ends with a call to action.",items:[]}],
["Introduction: hook + context + thesis (in that order).","Hook strategies: statistic, question, anecdote, bold claim, quotation.","Conclusion: restate thesis + synthesize points + closing move.","Never introduce new arguments in the conclusion."]);

s("s13-01","s13-01-oral-versus-written-communicat", 9, "9.1", "Oral versus Written Communication", "s13-01-oral-versus-written-communicat",
["Explain similarities and differences between oral and written communication."],
`Both oral and written communication share the same eight elements of the communication process, but they operate differently in practice.

## Eight Elements of Communication

| Element | Oral Example | Written Example |
|---------|-------------|----------------|
| Source | Speaker making a call | Writer drafting an email |
| Receiver | Listener | Reader |
| Message | Spoken words | Written text |
| Channel | Phone, video | Email, letter, report |
| Feedback | Immediate verbal response | Reply email, comment |
| Environment | Conference room | Home office |
| Context | Psychological expectations | Assumptions about document type |
| Interference | Background noise, poor connection | Ambiguous wording, spam filter |

## The Key Difference: Asynchronous

Written communication is typically **asynchronous** — the sender and receiver are not present at the same time. This means:
- No immediate feedback
- Words must stand alone without vocal tone, facial expressions, or gestures
- The writer must anticipate the reader's questions, reactions, and interpretations

## Implications for Business Writing

Because you are often not present when your writing is read, every document represents you in your absence. Clarity, precision, and professionalism are not optional — they are the only impression you make.`,
[{term:"Asynchronous communication",definition:"Communication occurring at different times, without real-time interaction between sender and receiver."},{term:"Channel",definition:"The medium through which a message travels from source to receiver."},{term:"Interference",definition:"Anything that blocks, distorts, or disrupts the communication process."}],
[{instruction:"For each communication scenario, identify: source, channel, likely interference.",items:["A manager emails a remote team member about a deadline change.","An executive leaves a voicemail for a client.","A company publishes a press release on its website."]}],
["Oral and written communication share the same eight elements.","Written communication is typically asynchronous — no immediate feedback.","In writing, words must stand alone without nonverbal cues.","Every document represents you in your absence."]);

s("s13-03","s13-03-good-writing", 9, "9.3", "Good Writing", "s13-03-good-writing",
["Identify qualities of good business writing.","Apply rhetorical elements and cognate strategies."],
`Good business writing follows rules, is easy to read, and attracts the reader.

## Six Qualities of Good Writing

1. **Follows the rules** — correct grammar, spelling, and punctuation establish credibility
2. **Is easy to read** — clear vocabulary, appropriate complexity for the audience
3. **Attracts the reader** — engages with relevant hooks and "what's in it for me" value
4. **Meets reader expectations** — matches genre conventions (email looks like email; report looks like report)
5. **Is clear and concise** — eliminates ambiguity and unnecessary words
6. **Is efficient and effective** — accomplishes its purpose in the minimum space

## Rhetorical Elements

**Logos** — logical appeal: facts, evidence, structured reasoning
**Ethos** — ethical/credibility appeal: expertise, reliability, demonstrated trustworthiness
**Pathos** — emotional appeal: connection to reader values, interests, and concerns

## Cognate Strategies

| Strategy | Focus | Example |
|----------|-------|---------|
| Clarity | Clear understanding | Short sentences, defined terms |
| Conciseness | Key points only | Cut filler words |
| Arrangement | Logical order | Main point first, then evidence |
| Credibility | Trust | Cite sources, acknowledge limits |
| Tone | Appropriate expression | Formal for executives, warm for clients |
| Emphasis | What matters most | Bolded key points, short paragraphs |`,
[{term:"Logos",definition:"Rhetorical appeal to logic and reason — using evidence and structured argument."},{term:"Ethos",definition:"Rhetorical appeal to credibility and character — demonstrating trustworthiness."},{term:"Pathos",definition:"Rhetorical appeal to emotion — connecting to reader values and interests."},{term:"Cognate strategies",definition:"Ways of framing and expressing a message to promote understanding (clarity, conciseness, arrangement, credibility, tone, emphasis)."}],
[{instruction:"Identify whether each sentence primarily uses logos, ethos, or pathos.",items:["Studies across 15 countries show that clear communication reduces project failure rates by 30%.","As a 20-year veteran of supply chain management, I can say with confidence that this approach works.","Imagine explaining to your client why the shipment is six weeks late — again."]}],
["Good writing: follows rules, easy to read, attracts reader, meets expectations, clear and concise, efficient.","Logos = reason, ethos = credibility, pathos = emotion.","Balance all three rhetorical appeals for maximum persuasion."]);

s("s13-04","s13-04-style-in-written-communication", 9, "9.4", "Style in Written Communication", "s13-04-style-in-written-communication",
["Describe colloquial, casual, and formal writing styles.","Choose the appropriate style for a given context."],
`Matching writing style to context is as important as content itself.

## Three Styles

**Colloquial** — informal, conversational, uses slang and regional expressions. Appropriate only between close colleagues who know each other well. *"OMG this project is killing me lol"*

**Casual** — everyday language, friendly, personal. Appropriate for internal messages to trusted colleagues, team chats. *"Hey — just wanted to check where we are on the Henderson proposal?"*

**Formal** — professional vocabulary, complete sentences, objective tone, third person. Required for: client correspondence, reports, proposals, any external document. *"I am writing to follow up on the Henderson account proposal submitted on March 15."*

## Internal vs. External Communication

As a general rule:
- **Internal** (within organization): can tolerate more casual register
- **External** (clients, vendors, public): requires formal register

## Active vs. Passive Voice

**Active:** *The manager approved the budget.* — clear, direct, takes ownership
**Passive:** *The budget was approved by the manager.* — diffuses agency, sometimes appropriate for diplomacy

Use active voice as the default. Passive voice is appropriate when the action matters more than who did it: *The data was corrupted during the transfer.*`,
[{term:"Colloquial language",definition:"Informal, conversational writing using slang and regional expressions."},{term:"Formal language",definition:"Professional expression focusing on protocol, complete sentences, and precise vocabulary."},{term:"Active voice",definition:"The subject of the sentence performs the action."},{term:"Passive voice",definition:"The subject of the sentence receives the action."}],
[{instruction:"Rewrite each colloquial/casual sentence in formal style.",items:["Hey — we totally dropped the ball on this one, sorry.","Can you guys send over the stuff we talked about ASAP?","FYI the meeting's been pushed back cuz Dave's out sick."]},{instruction:"Convert passive voice to active voice.",items:["The report was completed by the analyst last Friday.","Mistakes were made in the budget calculation.","The contract was signed by both parties."]}],
["Match style (colloquial/casual/formal) to audience and context.","External communication generally requires formal register.","Active voice is clearer and more direct than passive voice.","Use passive voice deliberately, not by default."]);

s("s13-05","s13-05-principles-of-written-communic", 9, "9.5", "Principles of Written Communication", "s13-05-principles-of-written-communic",
["Understand rules governing language.","Understand the legal implications of business writing."],
`Words are powerful — they carry legal and reputational consequences in business contexts.

## Words Are Inherently Abstract

Even concrete words (*table, chair, report*) carry assumptions. Abstract words (*efficiency, quality, fairness*) mean different things to different people. In business writing, choose **concrete, specific language** to minimize misinterpretation.

**Vague:** *We will improve customer service.*
**Specific:** *We will reduce average call wait time from 4 minutes to 90 seconds by Q3.*

## Words Are Governed by Rules

Language rules extend beyond grammar — they include social norms, professional conventions, industry standards, and legal requirements. A contract term that seems clear to one party may be legally ambiguous.

## Legal Responsibility in Business Writing

**Libel** — the written form of defamation. Making false statements that damage someone's reputation can result in lawsuits. This includes: negative statements about competitors, claims about individuals' conduct, and statements of "fact" that are actually unverified opinions.

**Copyright and Plagiarism** — using others' writing without attribution violates copyright law and can expose your organization to legal liability. Always cite sources; never present others' work as your own.

**Best practice:** When in doubt about a statement's accuracy or legality, consult legal counsel before publishing or distributing.`,
[{term:"Libel",definition:"The written form of defamation — a false statement that damages someone's reputation."},{term:"Defamation",definition:"Making false statements that damage the reputation of a person or organization."},{term:"Copyright",definition:"The legal right of an author to control the use and reproduction of their original work."}],
[{instruction:"Identify which of these statements could expose a company to libel claims. Rewrite them to be safe.",items:["Our competitor's product has caused injuries that the company is covering up.","In our opinion, our service outperforms others in the market.","Their customer satisfaction ratings have declined for three consecutive quarters — you can verify this in their public filings."]}],
["Use concrete, specific language to minimize misinterpretation.","Business writing carries legal consequences — libel, copyright, and contract liability.","State opinions as opinions, not facts.","Always cite sources to avoid plagiarism claims."]);

s("s13-06","s13-06-overcoming-barriers-to-effecti", 9, "9.6", "Overcoming Barriers to Effective Written Communication", "s13-06-overcoming-barriers-to-effecti",
["Identify barriers to written communication.","Apply strategies to overcome them."],
`Even well-written documents fail when barriers block the message from reaching the reader.

## Types of Barriers

**Physical barriers** — noise, interruptions, poor document formatting, small font, dense paragraphs

**Language barriers** — jargon, technical terms unfamiliar to the reader, cultural idioms, acronyms without definitions

**Emotional barriers** — stress, defensiveness, assumptions, reader fatigue, distrust of the sender

**Organizational barriers** — information siloes, wrong distribution list, bureaucratic delays

## Strategies

- **Write for your reader** — use vocabulary and depth they can process, not the maximum you know
- **Define terms** — the first time you use an acronym or technical term, define it: *Enterprise Resource Planning (ERP)*
- **Use plain language** — prefer common words: *use* not *utilize*, *buy* not *procure*, *show* not *demonstrate* (when simpler works)
- **Proofread** — errors are barriers; they make readers doubt the content
- **Confirm receipt and understanding** — for critical messages, follow up

## Cross-Cultural Writing

Avoid idioms, region-specific cultural references, and assumptions about shared context. Write with global readers in mind: be direct, be explicit, define your terms.`,
[{term:"Communication barriers",definition:"Anything that prevents a message from being received and understood as intended."},{term:"Plain language",definition:"Clear, direct writing that avoids unnecessary complexity — preferred in most professional contexts."}],
[{instruction:"Rewrite this paragraph to remove language barriers. It is being sent to a non-specialist client.",items:["We need to finalize the SOW for the ERP implementation before we can proceed with the UAT phase. The PM will loop in the SMEs to ensure alignment with the KPIs established in the SLA."]}],
["Barriers include physical, language, emotional, and organizational.","Plain language and defined terms overcome most language barriers.","Proofread — errors undermine credibility.","Write for global audiences: avoid idioms, be explicit."]);

s("s17-01","s17-01-text-e-mail-and-netiquette", 13, "13.1", "Text, E-mail, and Netiquette", "s17-01-text-e-mail-and-netiquette",
["Discuss the role of text messaging in business.","Write effective business emails.","Demonstrate appropriate netiquette."],
`Digital communication is the primary medium of business — using it professionally is non-negotiable.

## Texting in Business

Use texting for: brief, time-sensitive, informal exchanges between people who know each other well.
Avoid texting for: complex information, sensitive topics, anything requiring a paper trail.

## Business Email Best Practices

**Subject line** — specific, brief, informative: *"Q3 Budget Approval Needed by Friday"* not *"Important"*

**Salutation** — match formality to relationship: *Dear Ms. Johnson:* (external), *Hi David,* (internal colleague)

**Body** — lead with the main point; use short paragraphs; no more than three paragraphs for most emails

**Closing** — standard business closings: *Sincerely, Best regards, Thank you*

**Signature block** — name, title, company, phone, email — automatically appended

**Key rules:**
- Reply within 24 hours, even just to acknowledge
- Never send in anger — draft, wait, reread
- Use "Reply All" only when everyone genuinely needs your response
- Never use ALL CAPS
- Test all links before sending
- Check attachment before clicking send

## Netiquette

**Netiquette** = internet etiquette. Core principle: treat others online as you would face to face. The permanence of digital communication means: never write what you would not want read publicly or by your employer.`,
[{term:"Netiquette",definition:"Accepted etiquette and protocols for communication on the internet and in digital environments."},{term:"Subject line",definition:"Brief, descriptive heading in an email that communicates the message's purpose."},{term:"Signature block",definition:"Automatically appended block containing name, title, and contact information."}],
[{instruction:"Rewrite this email professionally.",items:["hey!! just wanted to touch base real quick about the johnson thing. i STILL havent heard back from them which is super annoying lol. can u follow up?? asap would be gr8. thx"}},{instruction:"Evaluate this subject line and suggest an improvement.",items:["Subject: hi","Subject: Following up","Subject: IMPORTANT PLEASE READ"]}],
["Use email for slightly-more-than-text communications requiring a record.","Subject lines must be specific and informative.","Reply within 24 hours; never send in anger.","Netiquette: treat digital communication with the same care as face-to-face."]);

s("s17-02","s17-02-memorandums-and-letters", 13, "13.2", "Memorandums and Letters", "s17-02-memorandums-and-letters",
["Discuss the purpose and format of a memo.","Describe the fifteen parts of a standard business letter."],
`Memos and letters are foundational business documents with specific format conventions.

## Memos

A **memo (memorandum)** communicates policies, procedures, or official information **internally**. It broadcasts to an audience rather than conversing.

**Format:**
- Header: TO: / FROM: / DATE: / SUBJECT:
- Declaration (main point stated immediately)
- Discussion (details, context, evidence)
- Summary (action required or conclusion)

**Best practices:**
- Always direct format — state purpose in the first sentence
- Objective tone — no personal opinions
- Audience orientation — define terms unfamiliar to any recipient
- Clear subject line that names the specific topic

**Memos are permanent records** — they often carry legal standing as evidence of policy communication.

## Business Letters

Letters are external documents — formal, representing the organization, typically on letterhead.

**Fifteen elements of a standard letter:**
1. Return address / letterhead | 2. Date | 3. Reference (Re:) | 4. Delivery method | 5. Recipient note | 6. Salutation | 7. Introduction | 8. Body | 9. Conclusion | 10. Complimentary close | 11. Signature | 12. Typed name/title | 13. Preparation line | 14. Enclosures | 15. CC

**Key guidance:**
- Salutation colon for business (*Dear Ms. Kim:*), comma for personal (*Dear Aunt Rosa,*)
- Close: *Sincerely,* or *Best regards,* for most business letters
- One or two pages maximum`,
[{term:"Memorandum (Memo)",definition:"A brief internal document communicating policies, procedures, or official business within an organization."},{term:"Grapevine",definition:"The unofficial informal communication network within an organization, characterized by rumor."},{term:"Letterhead",definition:"Pre-printed stationery displaying an organization's name, logo, and contact information."},{term:"Complimentary close",definition:"The formal sign-off phrase before the signature (Sincerely, Best regards)."}],
[{instruction:"Write a one-paragraph memo informing staff that the office will close at noon on Friday for a company event. Include all four header elements.",items:[]},{instruction:"List the elements you would include in a letter declining a vendor's proposal. Place them in correct order.",items:[]}],
["Memos for internal communication; letters for external.","Memos: direct format — state purpose first.","Letters have up to 15 elements; learn the mandatory ones.","Both represent the organization and may have legal standing."]);

s("s17-03","s17-03-business-proposal", 13, "13.3", "Business Proposal", "s17-03-business-proposal",
["Describe the basic elements of a business proposal.","Write an effective business proposal."],
`A **business proposal** persuades an audience to accept a solution, award a contract, or take a specific action.

## Solicited vs. Unsolicited

**Solicited** — written in response to an RFP (Request for Proposal), RFQ (Request for Quotation), or IFB (Invitation for Bid)
**Unsolicited** — a "cold call" in writing; must work harder to establish relevance and credibility

## Standard Proposal Structure

| Section | Purpose |
|---------|---------|
| Cover Page | Title, author, date, RFP reference |
| Executive Summary | 1–2 paragraph overview; why you are the best choice |
| Background | History, relationship, relevant experience |
| Proposal | The idea: who, what, where, when, why, how |
| Market Analysis | Competitive landscape; your differentiation |
| Benefits | Specific value to the client — immediate, short-term, long-term |
| Timeline | Milestones with specific dates |
| Budget/Finance | Costs, revenue projections, ROI |
| Conclusion | Restate key strengths; clear call to action |

## Ethos, Pathos, and Logos in Proposals

Every effective proposal uses all three:
- **Ethos**: credentials, case studies, references
- **Pathos**: connect to client's pain points and aspirations
- **Logos**: data, evidence, logical reasoning

*"The one-page proposal has been one of the keys to my business success."* — Adnan Khashoggi`,
[{term:"Business proposal",definition:"A document designed to persuade an audience to accept a solution or award a contract."},{term:"Request for Proposal (RFP)",definition:"A formal document inviting vendors to submit proposals for a specific project."},{term:"Executive Summary",definition:"A 1–2 paragraph overview summarizing key points and the value proposition."}],
[{instruction:"Write an executive summary (2 paragraphs) for a proposal to implement a new internal communication platform for a 200-person company.",items:[]},{instruction:"What section of a business proposal would contain each of the following? Match them.",items:["A Gantt chart showing development milestones","Three client testimonials and case studies","A breakdown of monthly subscription costs","The specific problem the client is facing and how your solution addresses it"]}],
["Effective proposals use ethos, pathos, and logos.","Executive summary is the most-read section — make it compelling.","Solicited proposals respond to RFPs; unsolicited must work harder.","Be specific: vague claims lose proposals."]);

s("s17-04","s17-04-report", 13, "13.4", "Report", "s17-04-report",
["Discuss the main parts of a report.","Understand informational vs. analytical reports."],
`Reports document, record, and analyze information for specific audiences and purposes.

## Two Main Types

**Informational report** — presents facts without analysis. Example: accident report, sales figures.
*Just the facts — no conclusions drawn.*

**Analytical report** — presents data *and* analysis: conclusions, recommendations, or predictions.
*The CDC field report on disease outbreak: facts + analysis + recommendations.*

## Types of Reports

| Type | Purpose |
|------|---------|
| Progress report | Track project status against milestones |
| Feasibility study | Analyze whether a project is practical |
| Financial report | Communicate financial status and trends |
| Research report | Present findings from systematic investigation |
| Case study | Analyze a specific situation and extract lessons |
| Compliance report | Document adherence to standards |
| Cost-benefit analysis | Compare costs and benefits of a decision |

## Standard Report Structure

1. Cover / Title Page
2. Table of Contents
3. Abstract or Executive Summary
4. Introduction
5. Body (Background, Methodology, Results, Analysis, Recommendations)
6. Conclusion
7. References
8. Appendices

## Six Questions Every Report Answers

Who? What? Where? When? Why? How? — Structure your report to address each that is relevant to your stakeholders.`,
[{term:"Informational report",definition:"A report presenting facts without analysis — no conclusions or recommendations."},{term:"Analytical report",definition:"A report presenting data plus analysis, conclusions, and recommendations."},{term:"Feasibility study",definition:"Analysis determining whether a proposed project is practical and likely to succeed."},{term:"Abstract",definition:"Brief summary at the beginning of a report highlighting key topics, methods, and findings."}],
[{instruction:"Classify each as informational or analytical. Explain why.",items:["A weekly sales summary showing units sold by region.","A study analyzing why sales fell 20% in Q2, identifying three causes, and recommending corrective action.","A transcript of all customer service calls from last month.","An assessment of whether to open a second warehouse, including cost projections and risk analysis."]},{instruction:"List the five most essential elements for a one-page progress report. Justify each.",items:[]}],
["Informational reports present facts; analytical reports add analysis and recommendations.","All reports answer: who, what, where, when, why, how.","Abstract summarizes key findings for executive readers.","Standard structure: title, abstract, introduction, body, conclusion, references."]);

s("s17-05","s17-05-resume", 13, "13.5", "Résumé", "s17-05-resume",
["Describe types of résumés.","Write an effective résumé."],
`A **résumé** summarizes education, skills, and experience for potential employers. It has one purpose: get you an interview.

## Three Résumé Functions

1. Represent professional information in writing
2. Demonstrate fit with the employer's specific needs
3. Earn an interview by showing you meet minimum qualifications

## Main Parts

**Contact information** — legal name, address, professional email, phone, LinkedIn
**Objective/Summary** — 1–2 sentences tailored to the specific role
**Education** — reverse chronological; school, degree, GPA (if strong), relevant coursework
**Work Experience** — reverse chronological; employer, title, dates, 3–5 bullet accomplishments per role
**Skills** — technical skills, certifications, languages

## Five Types of Résumés

| Type | Focus | Best for |
|------|-------|---------|
| Reverse chronological | Work history | Steady career progression |
| Functional | Skills | Career changers, employment gaps |
| Combination | Skills + history | Experienced professionals |
| Targeted | Customized per role | Highly competitive positions |
| Scannable | Keyword-optimized | Large companies using ATS |

## Scannable Résumé Tips

Most large companies use Applicant Tracking Systems (ATS) to filter résumés before humans read them. Mirror the job description's exact language; use standard fonts (Arial, Times New Roman); no tables, boxes, or graphics.`,
[{term:"Résumé",definition:"Document summarizing education, skills, and experience for potential employers."},{term:"Reverse chronological",definition:"Listing experiences starting with the most recent and working backward."},{term:"Scannable résumé",definition:"A résumé formatted to be read by software (ATS) — no graphics, standard fonts, keyword-optimized."}],
[{instruction:"Write three strong accomplishment bullets for a customer service representative role. Use action verbs and include metrics.",items:[]},{instruction:"The same experience is described two ways. Which is stronger and why?",items:["a) Responsible for handling customer complaints. b) Resolved 95% of customer complaints within 24 hours, achieving highest satisfaction score in the department (Q2 2023)."]}],
["Résumé goal: earn an interview — not get a job.","Use reverse chronological order for most situations.","Mirror job description language for ATS optimization.","Accomplishment bullets should be specific and quantified."]);

s("s17-06","s17-06-sales-message", 13, "13.6", "Sales Message", "s17-06-sales-message",
["Discuss the purpose of a sales message.","Structure an effective sales message."],
`A **sales message** intrigues, informs, persuades, calls to action, and closes. Every sentence must earn its place.

## Five-Part Structure

| Part | Function |
|------|---------|
| **Attention Statement** | Hook the reader immediately — humor, surprise, bold claim, compelling question |
| **Introduction** | Build interest; appeal to a recognized need or desire; establish relevance |
| **Body** | Establish credibility; present specific features and benefits; handle objections preemptively |
| **Conclusion** | Summarize value and present a clear, specific call to action |
| **Residual Message** | The final thought — what you want them to remember and do |

## Benefit vs. Feature

**Feature:** *The platform has 99.9% uptime.*
**Benefit:** *You will never miss a client deadline because of a system outage.*

Readers buy benefits, not features. Always translate features into what the reader gains.

## Four Success Strategies

1. **Lead with your strongest benefit** — readers remember the first and last things
2. **One message at a time** — multiple products or calls to action dilute attention
3. **Know your audience** — the more specific your message, the more it converts
4. **Lead with emotion, follow with reason** — grab attention emotionally; justify with logic`,
[{term:"Sales message",definition:"Persuasive communication designed to move a reader toward a purchase or action."},{term:"Benefit",definition:"What the buyer gains from a product or service — the outcome that motivates purchase."},{term:"Call to action",definition:"A specific, clear request directing the reader to take a next step."}],
[{instruction:"Convert these features into benefits.",items:["Our software processes requests in 0.3 seconds.","The contract includes 24/7 phone support.","The material is rated for temperatures from -40°F to 250°F."]},{instruction:"Write a 100-word sales email for a business writing workshop, using the five-part structure.",items:[]}],
["Five-part structure: attention, introduction, body, conclusion, residual message.","Sell benefits, not features — buyers want outcomes.","Lead with strongest benefit; one call to action per message.","Balance emotion (engage) and reason (justify)."]);

s("s18-01","s18-01-formatting-a-research-paper", 14, "14.1", "Formatting a Research Paper", "s18-01-formatting-a-research-paper",
["Understand APA and MLA formatting requirements.","Apply correct formatting to a research paper."],
`Research papers follow strict formatting conventions. Using the wrong format, or using it inconsistently, undermines credibility.

## APA Format (Social Sciences)

- 12pt Times New Roman, double-spaced, 1-inch margins
- **Running head**: abbreviated title + page number in header
- **Title page**: title, author name, institutional affiliation, date
- **Abstract**: 150–250 words summarizing purpose, methods, results, conclusions
- **In-text citations**: (Author, Year, p. XX) or (Author, Year) for paraphrase
- **References page** at end (title centered, hanging indent, alphabetical)

## MLA Format (Humanities)

- 12pt Times New Roman, double-spaced, 1-inch margins
- **Header**: last name + page number (top right)
- **Heading** (top left): student name, professor name, course, date
- **Title**: centered, no special formatting
- **No separate title page** for most assignments
- **In-text citations**: (Author Page) — e.g., (Smith 45)
- **Works Cited page** at end

## Chicago Style (History/Humanities)

- Uses **footnotes or endnotes** for citations
- Full citation in first footnote; shortened in subsequent
- **Bibliography** at end`,
[{term:"APA",definition:"American Psychological Association — citation style used in social sciences."},{term:"MLA",definition:"Modern Language Association — citation style used in humanities."},{term:"Running head",definition:"Abbreviated title appearing at the top of each APA page."},{term:"Abstract",definition:"150–250 word summary at beginning of APA papers."}],
[{instruction:"Format the following in both APA and MLA style.",items:["A book: The Elements of Style by William Strunk Jr. and E.B. White, published by Pearson in 2000.","A journal article: Sarah Kim, 'Plain Language in Healthcare,' published in Journal of Business Communication, Vol. 58, No. 2, 2021, pp. 140–155, DOI: 10.1177/abc123"]},{instruction:"What are the three most important formatting differences between APA and MLA?",items:[]}],
["APA: social sciences; MLA: humanities; Chicago: history/arts.","APA requires abstract and title page; MLA does not.","APA in-text: (Author, Year); MLA: (Author Page).","Both use double-spacing, 1-inch margins, and hanging indent for bibliography."]);

s("s18-02","s18-02-citing-and-referencing-techniq", 14, "14.2", "Citing and Referencing Techniques", "s18-02-citing-and-referencing-techniq",
["Use in-text citations correctly.","Write accurate reference entries."],
`Every time you use information from a source — quoted, paraphrased, or summarized — you must cite it.

## Why We Cite

- **Give credit** to original creators
- **Allow verification** — readers can check your sources
- **Establish credibility** — cited claims are stronger than bare assertions
- **Avoid plagiarism** — failure to cite is plagiarism regardless of intent

## In-Text Citations

**APA:** (Author, Year, p. XX) for direct quotes; (Author, Year) for paraphrases
*"Communication barriers cost businesses millions" (Lee, 2022, p. 47).*

**MLA:** (Author Page)
*"Communication barriers cost businesses millions" (Lee 47).*

## Signal Phrases

Integrate sources smoothly with signal phrases:
*According to Lee (2022), ...*
*Lee argues that ...*
*Research by Kim and Park (2021) demonstrates ...*

## Block Quotations

APA: 40+ words → indent 0.5 inches, no quotation marks, citation after final punctuation.
MLA: 4+ lines → indent 1 inch, no quotation marks, citation in parentheses after final punctuation.

## What Must Be Cited

- Direct quotations
- Paraphrased ideas
- Statistics and data
- Images, charts, tables from other sources
- Specific arguments or interpretations`,
[{term:"In-text citation",definition:"A parenthetical reference within the paper body pointing to the full entry in the bibliography."},{term:"Signal phrase",definition:"A phrase introducing a source (According to..., Smith argues..., Research shows...)."},{term:"Block quotation",definition:"A lengthy quotation formatted separately: indented, no quotation marks."}],
[{instruction:"Write an in-text citation for each scenario in both APA and MLA formats.",items:["Direct quote from page 23 of a book by Wilson published in 2020.","Paraphrase of ideas from a 2019 article by Santos and Torres.","Statistics from a government website with no author, published 2022."]},{instruction:"Which of these requires a citation? Explain.",items:["Water boils at 100°C at sea level.","Remote work increases productivity by 13% (Stanford, 2015).","You should always proofread before sending.","According to your own original analysis of the data..."]}],
["Cite direct quotes, paraphrases, statistics, and specific arguments.","APA: (Author, Year, p. XX); MLA: (Author Page).","Signal phrases integrate citations smoothly.","Block quotations for long quotes: indented, no quotation marks."]);

s("s18-03","s18-03-creating-a-references-section", 14, "14.3", "Creating a References Section", "s18-03-creating-a-references-section",
["Create APA References and MLA Works Cited pages."],
`The reference list gives readers everything they need to find your sources.

## APA References Page

- Title: **References** (centered, bold)
- Alphabetical by author last name
- Double-spaced throughout
- **Hanging indent** (first line flush, remaining lines indented 0.5")

**Book:** Author, A. A. (Year). *Title of work*. Publisher.
*Strunk, W., & White, E. B. (2000). The elements of style. Pearson.*

**Journal article:** Author, A. A. (Year). Title of article. *Name of Journal, Volume*(Issue), pages. DOI
*Lee, S. (2022). Plain language in business writing. Journal of Communication, 15*(3), 45–62. https://doi.org/10.xxxx

**Website:** Author, A. A. (Year, Month Day). *Title of page*. Site Name. URL

## MLA Works Cited Page

- Title: **Works Cited** (centered)
- Alphabetical by author last name
- Double-spaced
- Hanging indent

**Book:** Author Last, First. *Title of Book*. Publisher, Year.
*Strunk, William, and E. B. White. The Elements of Style. Pearson, 2000.*

**Journal article:** Author. "Article Title." *Journal Name*, vol. #, no. #, Year, pp. #–#.

**Website:** Author (if known). "Page Title." *Website Name*, date, URL.`,
[{term:"References page",definition:"APA bibliography at the end of a paper — alphabetical, hanging indent."},{term:"Works Cited",definition:"MLA bibliography at the end of a paper — alphabetical, hanging indent."},{term:"Hanging indent",definition:"Formatting where the first line is flush left and all subsequent lines are indented."},{term:"DOI",definition:"Digital Object Identifier — a permanent URL for academic journal articles."}],
[{instruction:"Format the following in APA References format.",items:["Book: Writing for Results by Sally Jones, published by McGraw-Hill in 2019.","Journal article: M. Park, 'Clarity in Corporate Communication', Business Writing Quarterly, Volume 12, Issue 4, 2021, pages 88–102, DOI: 10.1080/xyz789."]},{instruction:"What are three differences between APA References and MLA Works Cited?",items:[]}],
["APA = References; MLA = Works Cited — both alphabetical with hanging indent.","APA capitalizes only first word of article/book titles (and proper nouns).","MLA capitalizes all major words in titles.","DOI preferred for journal articles in APA."]);

s("s18-04","s18-04-using-modern-language-associat", 14, "14.4", "Using Modern Language Association (MLA) Style", "s18-04-using-modern-language-associat",
["Apply MLA formatting and citation style.","Format a Works Cited page in MLA."],
`MLA (Modern Language Association) style is standard in literature, language, and the humanities.

## Document Formatting

- 12pt font (Times New Roman standard)
- Double-spaced throughout
- 1-inch margins on all sides
- Header: last name + page number (top right)
- Top-left heading (name, professor, course, date)
- Title centered — no bold, no underline, no larger font

## In-Text Citations

Format: **(Author Page)** — no comma between author and page.
*"The memo must be direct and objective" (McLean 247).*

If author is named in signal phrase, only page number in parentheses:
*McLean argues that "the memo must be direct" (247).*

## Works Cited Entries — MLA 9th Edition

The 9th edition introduced the **"container" concept**: every source exists within a larger container (a journal, anthology, or website). Cite the container as well.

**Core elements (in order):**
Author. "Title of Source." *Title of Container*, Other Contributors, Version, Number, Publisher, Publication Date, Location (page or URL).

**Example — Article:**
*Kim, Sarah. "Plain Language in Business." Business Writing Today, vol. 4, no. 2, 2021, pp. 12–18.*

**Example — Website:**
*U.S. Department of Labor. "Plain Language Guidelines." DOL.gov, 15 Mar. 2022, www.dol.gov/plain.*`,
[{term:"MLA style",definition:"Citation format used in humanities — in-text (Author Page), Works Cited bibliography."},{term:"Container",definition:"In MLA 9th edition: the larger publication holding a source (journal, anthology, website)."},{term:"Works Cited",definition:"MLA bibliography listing all sources cited in the paper."}],
[{instruction:"Write MLA Works Cited entries for each source.",items:["A chapter titled 'The Business Letter' by David Chen, in the anthology Professional Writing Today, edited by Maria Santos, published by Riverside Press in 2020, pages 45–67.","A webpage titled 'Grammar in the Workplace' on the Plain Language.gov website, last updated June 10, 2023."]},{instruction:"Convert this APA citation to MLA format.",items:["APA: Brown, J. (2019). Effective email communication. Business Communication Quarterly, 45(2), 100–115."]}],
["MLA in-text: (Author Page) — no comma.","Works Cited uses container concept: source within its larger publication.","MLA capitalizes all major words in titles.","No separate title page in most MLA assignments."]);


// ── Writing Preparation sections ─────────────────────────────────────────────
s("s14-02","s14-02-a-planning-checklist-for-busin", 10, "10.2", "A Planning Checklist for Business Messages", "s14-02-a-planning-checklist-for-busin",
["Use a planning checklist before writing."],
`Planning before writing prevents wasted effort and ensures your message achieves its purpose.

## The Planning Checklist

Before writing any business message, ask:

1. **What is my purpose?** — inform, persuade, request, confirm, apologize?
2. **Who is my primary audience?** — what do they know, need, and expect?
3. **Who is my secondary audience?** — who else might read this?
4. **What information does the reader need?** — no more, no less
5. **What action do I want the reader to take?**
6. **What format is appropriate?** — email, memo, letter, report, proposal?
7. **What tone is appropriate?** — formal, neutral, warm, urgent?
8. **What is the deadline and how does that affect length/depth?**

## Why Plan First

Planning time = saved revision time. Documents written without planning tend to:
- Bury the main point
- Include irrelevant information
- Miss critical information
- Misjudge audience needs
- Choose the wrong format

A two-minute checklist prevents two hours of revision.`,
[{term:"Planning checklist",definition:"A structured set of questions answered before writing to ensure the message is purposeful and appropriate."}],
[{instruction:"Complete the planning checklist for this scenario: You need to tell your team that the project deadline has moved up by one week.",items:[]}],
["Answer all planning questions before drafting.","Define purpose, audience, action, format, and tone.","Planning prevents revision."]);

s("s14-04","s14-04-ethics-plagiarism-and-reliable", 10, "10.4", "Ethics, Plagiarism, and Reliable Sources", "s14-04-ethics-plagiarism-and-reliable",
["Avoid plagiarism.","Evaluate source reliability."],
`Ethical writing requires honesty about the origins of your ideas and the quality of your sources.

## Types of Plagiarism

**Direct plagiarism** — copying word for word without quotation marks and citation
**Mosaic plagiarism** — patching together phrases from a source with minor word changes
**Paraphrase without citation** — restating someone's idea in your words without crediting them
**Self-plagiarism** — submitting the same work for multiple assignments

All are violations, regardless of intent.

## Avoiding Plagiarism

- Cite any idea that is not your original thinking
- Cite all direct quotes, paraphrases, and summaries
- When in doubt, cite
- Keep careful notes with source information from the start

## Evaluating Sources: The CRAAP Test

| Letter | Question |
|--------|---------|
| **C**urrency | How recent is the information? Does recency matter for this topic? |
| **R**elevance | Does it address your specific topic and audience? |
| **A**uthority | Who wrote it? What are their credentials? Is the publisher reputable? |
| **A**ccuracy | Is the information verifiable? Are claims supported by evidence? |
| **P**urpose | Why was it written — to inform, sell, persuade, entertain? |

**Most reliable:** peer-reviewed journals, government publications (.gov), educational institutions (.edu), reputable news organizations with editorial standards.`,
[{term:"Plagiarism",definition:"Presenting another person's words or ideas as your own without attribution."},{term:"CRAAP test",definition:"Currency, Relevance, Authority, Accuracy, Purpose — a framework for evaluating source credibility."},{term:"Peer-reviewed",definition:"Scholarly articles evaluated by expert peers before publication — the gold standard for academic sources."}],
[{instruction:"Apply the CRAAP test to evaluate these sources for a paper on workplace communication.",items:["A 2023 article in the Harvard Business Review by a communication researcher.","A personal blog post from 2019 with no author listed: 'Why Email is Ruining Business.'","A government white paper from the Plain Language Advisory Council, published 2022."]},{instruction:"Identify which type of plagiarism each scenario represents.",items:["You copy three sentences from a report and change two words.","You submit a paper you wrote for another class last year.","You paraphrase a researcher's argument without citation."]}],
["Cite all ideas not your own — direct quotes, paraphrases, and summaries.","CRAAP test: Currency, Relevance, Authority, Accuracy, Purpose.","Peer-reviewed sources are most credible for academic work.","All plagiarism types are violations, regardless of intent."]);

s("s15-01","s15-01-organization", 11, "11.1", "Organization", "s15-01-organization",
["Organize writing logically.","Use organizational patterns effectively."],
`Organization transforms a collection of ideas into a coherent argument. Without it, even excellent ideas fail to persuade.

## Document-Level Organization

Every document needs: **introduction** (context + thesis) → **body** (main points with evidence) → **conclusion** (synthesis + closure).

## Paragraph-Level Organization

Each paragraph: **topic sentence** → **supporting evidence** → **concluding/transition sentence**.

## Deductive vs. Inductive

**Deductive**: thesis first, then evidence. Most common in business writing — busy readers need the main point immediately.
*Recommendation: We should adopt a four-day work week. Evidence follows: productivity data, employee satisfaction scores, competitive benchmarking.*

**Inductive**: evidence first, conclusion last. Useful when the audience might resist the conclusion before seeing the evidence.

## Logical Flow

Each sentence should connect to the one before it and lead to the one after. If a sentence or paragraph can be moved without disturbing meaning, it probably doesn't belong where it is.

**Test**: Cover your conclusion and try to predict it from the body alone. If you can, your organization is working.`,
[{term:"Deductive organization",definition:"General-to-specific structure: thesis first, then supporting evidence."},{term:"Inductive organization",definition:"Specific-to-general structure: evidence first, then conclusion."},{term:"Logical flow",definition:"Smooth, coherent progression from one idea to the next throughout a document."}],
[{instruction:"Reorganize these jumbled sentences into a coherent paragraph.",items:["This resulted in a 22% reduction in employee turnover.","One proven approach is structured onboarding.","Organizations that invest in retention strategies outperform those that don't.","The company implemented a 90-day onboarding program for new hires in 2022.","Retaining talented employees is one of the highest-leverage investments a company can make."]},{instruction:"Should this document use deductive or inductive organization? Explain.",items:["A proposal recommending outsourcing to a CEO who strongly prefers in-house operations.","A quarterly performance update to a board that expects summaries first."]}],
["Good organization guides readers through an argument.","Deductive: thesis first (use in most business documents).","Inductive: evidence builds to conclusion (use when audience resistance is expected).","Every paragraph connects to thesis; every sentence connects to the next."]);

s("s15-03","s15-03-making-an-argument", 11, "11.3", "Making an Argument", "s15-03-making-an-argument",
["Structure a logical argument.","Support claims with appropriate evidence."],
`Every business document that recommends, proposes, or analyzes is making an argument. Learning to construct one rigorously is a core professional skill.

## Elements of a Strong Argument

**Claim** — the central assertion you are making (your thesis)
**Evidence** — specific, verifiable facts supporting the claim
**Reasoning** — the logical explanation of *why* the evidence supports the claim
**Acknowledgment of counterarguments** — shows intellectual honesty; strengthens credibility
**Rebuttal** — explains why the counterarguments don't override your claim

## The Toulmin Model

| Element | Definition | Example |
|---------|-----------|---------|
| Claim | What you assert | Remote work improves productivity |
| Grounds | Evidence | 13% productivity increase (Stanford, 2015) |
| Warrant | Why evidence supports claim | Autonomy reduces cognitive load and interruptions |
| Backing | Support for warrant | Neuroscience research on attention and environment |
| Qualifier | Limits of claim | For knowledge workers with reliable internet |
| Rebuttal | Counterargument + response | Some collaboration suffers, but async tools mitigate this |

## Logical Fallacies to Avoid

- **Ad hominem**: attacking the person, not the argument
- **Straw man**: misrepresenting the opposing view
- **False dichotomy**: presenting only two options when more exist
- **Appeal to authority**: citing someone famous rather than evidence`,
[{term:"Claim",definition:"The central assertion of an argument — what you are arguing is true."},{term:"Evidence",definition:"Specific, verifiable information supporting a claim."},{term:"Toulmin model",definition:"Framework: Claim + Grounds (evidence) + Warrant (reasoning) + Qualifier + Rebuttal."},{term:"Logical fallacy",definition:"An error in reasoning that invalidates an argument."}],
[{instruction:"Apply the Toulmin model to this claim: 'Our company should adopt plain language standards for all external communications.'",items:[]},{instruction:"Identify the logical fallacy in each example.",items:["We can either reduce costs or lose the company — there's no other option.","The CEO said this approach is best, so it must be right.","They're arguing for a four-day work week because they just want less work."]}],
["Strong arguments: claim + evidence + reasoning + rebuttal.","The Toulmin model provides a rigorous framework for argument construction.","Address counterarguments — it strengthens, not weakens, your position.","Avoid logical fallacies: ad hominem, straw man, false dichotomy."]);

s("s16-01","s16-01-general-revision-points-to-con", 12, "12.1", "General Revision Points to Consider", "s16-01-general-revision-points-to-con",
["Apply macro-revision strategies.","Use a revision checklist."],
`Revision is not proofreading. Revision is rethinking — at the level of argument, structure, and clarity.

## Macro vs. Micro Revision

**Macro revision** (do first): content, structure, argument, logic
**Micro revision** (do second): paragraphs, sentences, word choice
**Editing** (do last): grammar, spelling, punctuation

## General Revision Checklist

- Does the document fulfill its stated purpose?
- Does the thesis/main point appear clearly and early?
- Is the organizational structure logical and consistent?
- Does each section/paragraph connect to the main point?
- Is the evidence sufficient, specific, and reliable?
- Are transitions present and logical between sections?
- Is the tone appropriate for the audience?
- Does the conclusion synthesize, not merely repeat?

## Gaining Distance Before Revising

Put the draft aside — even for 30 minutes — before revising. Writers who revise immediately after drafting tend to read what they *intended* to write, not what they actually wrote.

## Reading for Logic

Cover the conclusion and ask: can I predict it from the body? If not, either the body or the conclusion needs work. Test each paragraph: does it answer "so what?" — if not, it may need to be cut or restructured.`,
[{term:"Macro-revision",definition:"Big-picture revision addressing content, structure, and argument."},{term:"Micro-revision",definition:"Sentence-level revision addressing paragraph construction, word choice, and flow."},{term:"Revision checklist",definition:"Structured questions used to evaluate a draft systematically before finalizing."}],
[{instruction:"Apply the macro revision checklist to a business document you have written. Identify two specific changes at the macro level.",items:[]},{instruction:"This paragraph needs revision. Identify what is wrong and rewrite it.",items:["Communication is very important in business. A lot of companies have problems because of this. We should all try to communicate better. There are many ways to do this. In conclusion, communication matters a lot."]}],
["Revise macro (content/structure) before micro (sentences/words).","Create distance between drafting and revising.","Test each paragraph for relevance to the main point.","The revision checklist prevents structural problems from surviving to the final draft."]);

s("s16-05","s16-05-proofreading-and-design-evalua", 12, "12.5", "Proofreading and Design Evaluation", "s16-05-proofreading-and-design-evalua",
["Proofread effectively.","Evaluate document design."],
`Proofreading is the last stage — but errors found here prevent the most embarrassing professional mistakes.

## Proofreading Strategies

1. **Read aloud** — the ear catches what the eye skips: awkward phrasing, run-ons, missing words
2. **Read backward** — go sentence by sentence from end to beginning; breaks content flow and forces attention to each sentence
3. **Print it** — errors are more visible on paper than screen
4. **Take a break first** — fresh eyes catch more
5. **Use spell-check as a starting point only** — it misses homophone errors (*their/there*, *its/it's*)

## Common Proofreading Targets

- Spelling errors (especially in names and technical terms)
- Missing or extra words
- Inconsistent numbers (write out one–nine; use numerals for 10+)
- Punctuation errors (missing commas, incorrect apostrophes)
- Capitalization errors
- Formatting inconsistencies (mixed fonts, inconsistent heading styles)

## Design Evaluation

After proofreading content, evaluate the visual presentation:
- **Font**: 11–12pt for body; consistent throughout
- **White space**: adequate margins and spacing prevent visual fatigue
- **Headers**: logical hierarchy (H1 > H2 > H3); consistent formatting
- **Alignment**: left-aligned body text is easiest to read
- **Page numbers**: required for multi-page documents`,
[{term:"Proofreading",definition:"Final check for surface errors in grammar, spelling, punctuation, and formatting — after all revisions are complete."},{term:"Design evaluation",definition:"Assessment of a document's visual presentation: typography, spacing, headers, and layout."},{term:"White space",definition:"Blank space on a page that improves readability and visual clarity."}],
[{instruction:"Proofread this business email and list all errors.",items:["Dear Ms johnson Thank you for you're email regarding the contract. I have reviewed it's terms and have a few concern. Their are three clauses that needs to be revised before we can proceede. I will send you are proposed changes by Wendsday. Regards, Michael chen"]},{instruction:"Evaluate and improve the design of a document you have written.",items:[]}],
["Proofread after all revisions — not before.","Reading aloud catches what silent reading misses.","Spell-check misses homophone errors — read carefully.","Design affects credibility: consistent formatting, appropriate fonts, adequate white space."]);

// ── Finalize and write output ─────────────────────────────────────────────────
const chapterMap = {};
for (const sec of SECTIONS) {
  const ch = sec.chapterNum;
  if (!chapterMap[ch]) chapterMap[ch] = [];
  chapterMap[ch].push(sec);
}

const chapters = CHAPTER_META.map(meta => ({
  ...meta,
  url: `${BASE}/${meta.slug}.html`,
  sections: (chapterMap[meta.num] || [])
    .sort((a,b) => (a.sectionNum||"").localeCompare(b.sectionNum||"")),
})).map(ch => { const { slug, ...rest } = ch; return rest; });

const totalKeyTerms = SECTIONS.reduce((s, x) => s + x.keyTerms.length, 0);
const totalExercises = SECTIONS.reduce((s, x) => s + x.exercises.length, 0);
const totalSections = SECTIONS.length;

const output = {
  generatedAt: new Date().toISOString(),
  source: "https://saylordotorg.github.io/text_business-english-for-success/",
  license: "Creative Commons (Saylor Foundation)",
  stats: {
    parsedSections: totalSections,
    chapters: 14,
    sectionsWithContent: totalSections,
    totalKeyTerms,
    totalExercises,
  },
  chapters,
};

const OUT = new URL("../data/textbook-parsed.json", import.meta.url).pathname;
fs.writeFileSync(OUT, JSON.stringify(output, null, 2));

console.log("\n✅  textbook-parsed.json written!");
console.log(`   Sections:   ${totalSections}`);
console.log(`   Key terms:  ${totalKeyTerms}`);
console.log(`   Exercises:  ${totalExercises}`);
console.log(`   Chapters:   ${chapters.filter(c=>c.sections.length>0).length} with content`);
console.log(`   File size:  ${(fs.statSync(OUT).size/1024/1024).toFixed(2)} MB`);
console.log(`\n   → open http://localhost:3000/textbook to view\n`);

