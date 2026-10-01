export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "AI News" | "AI Research" | "AI" | "Engineering" | "Building";
  publishedAt: string;
  status: "published" | "scheduled" | "draft";
  visual: string;
  tags?: string[];
  sections: { heading: string; body: string }[];
  sources: { label: string; url: string }[];
};
export const posts: Post[] = [
  {
    slug: "agents-found-a-new-enzyme-system",
    title: "AI agents helped find a new enzyme system. Its function is still unknown.",
    excerpt:
      "Anthropic reports that Claude agents searched DNA databases and flagged candidates that a lab then characterised.",
    category: "AI News",
    publishedAt: "2026-09-25T06:00:00+07:00",
    status: "published",
    visual: "200k → 20",
    sections: [
      {
        heading: "What was reported",
        body: "Anthropic says a team of Claude agents searched large DNA databases and narrowed more than 200,000 reverse transcriptases down to 20 candidates. One of them was a previously undescribed system, named array-associated reverse transcriptases, found in bacteriophages and showing CRISPR-like repeats. Scientists in Anthropic’s own lab then characterised the protein system biochemically.",
      },
      {
        heading: "What is not known",
        body: "The authors are clear that these are early findings and that the system’s function is not yet known. Its resemblance to programmable biological tools is a reason to study it, not a result in itself.",
      },
      {
        heading: "Why it matters to builders",
        body: "The pattern is worth noticing: agents did wide, cheap screening, and people did the slow, decisive work of testing in a lab. That split of labour, with a model narrowing the search and a human verifying, is a sound design for many products, not only for biology.",
      },
    ],
    sources: [
      {
        label: "Anthropic — Claude discovers a novel enzyme system",
        url: "https://www.anthropic.com/news/claude-discovers-novel-enzyme-system",
      },
    ],
  },
  {
    slug: "independent-evaluators-inside-the-lab",
    title: "Independent evaluators will work inside an AI lab.",
    excerpt:
      "Anthropic and Accenture’s Faculty division announce a partnership on embedded evaluation of frontier models.",
    category: "AI News",
    publishedAt: "2026-09-24T06:00:00+07:00",
    status: "published",
    visual: "inside / out",
    sections: [
      {
        heading: "What was announced",
        body: "Anthropic and Faculty, part of Accenture, plan to build independent evaluation capacity for frontier AI systems. The companies say they expect to invest at least $1 billion over five years. The work covers red-teaming, alignment assessments, safeguard testing, and evaluation of how models are developed and deployed.",
      },
      {
        heading: "What is different",
        body: "Most outside evaluators only see a model through an interface. Here, independent evaluators are described as working inside the company with employee-level access, so they can observe training, decisions and operations, verify safety commitments, and report incidents.",
      },
      {
        heading: "How to read it",
        body: "This is a company’s announcement of its own plan, so the real test is what the evaluators publish and how independent they stay in practice. For anyone shipping AI features, the useful lesson is smaller: evaluation works best when it is built in early, not added after launch.",
      },
    ],
    sources: [
      {
        label: "Anthropic — Partnering with Accenture on embedded evaluation",
        url: "https://www.anthropic.com/news/accenture-embedded-evaluation",
      },
    ],
  },
  {
    slug: "verified-access-for-life-sciences",
    title: "Verified access: AI safeguards that adapt to who is asking.",
    excerpt:
      "Anthropic introduces a program that gives vetted biology teams models with safeguards tuned for their work.",
    category: "AI News",
    publishedAt: "2026-09-23T06:00:00+07:00",
    status: "published",
    visual: "verify → access",
    sections: [
      {
        heading: "What the program is",
        body: "Anthropic’s Life Sciences Verification Program offers academic labs, startups and pharmaceutical teams access to its models with safeguards that are more permissive for biology work. There are two kinds of grant: standard use for routine research, and high-risk use for projects with greater potential for misuse.",
      },
      {
        heading: "The conditions",
        body: "Organisations are reviewed for research credentials, security standards and ethical oversight before they are enrolled. Use is monitored against the stated purpose, data is retained for 30 days, and unauthorised activity has to be reported within agreed timeframes.",
      },
      {
        heading: "The design idea",
        body: "A single, fixed safety setting either blocks legitimate experts or lets too much through. Tying access to verified identity and purpose is a middle path. It is a pattern worth remembering when you decide which AI features in your own product should be open to everyone and which should be gated.",
      },
    ],
    sources: [
      {
        label: "Anthropic — Introducing the Life Sciences Verification Program",
        url: "https://www.anthropic.com/news/life-sciences-verification-program",
      },
    ],
  },
  {
    slug: "attention-is-the-idea",
    title: "Attention is the idea behind modern language models.",
    excerpt:
      "A short read on the 2017 Transformer paper, and what it still means for anyone building with LLMs.",
    category: "AI Research",
    publishedAt: "2026-09-28T06:00:00+07:00",
    status: "published",
    visual: "Q · K · V",
    sections: [
      {
        heading: "What the paper changed",
        body: "Before the Transformer, most sequence models read text one step at a time. The 2017 paper “Attention Is All You Need” replaced that recurrence with self-attention: every token looks at every other token and decides which ones matter. Because the tokens can be processed together, training parallelises well, which is a large part of why models could later be scaled up.",
      },
      {
        heading: "Why it matters when you build",
        body: "Standard attention compares each token with every other token, so cost grows quickly as the context gets longer. That is the practical reason long prompts are slower and more expensive, and why a smaller, well-chosen context often beats a bigger one.",
      },
      {
        heading: "Try this",
        body: "Take one prompt you use often and cut it to the lines that change the answer. Compare quality, latency and cost before and after. The shortest context that still works is usually the best one.",
      },
    ],
    sources: [
      {
        label: "Attention Is All You Need — Vaswani et al., 2017",
        url: "https://arxiv.org/abs/1706.03762",
      },
    ],
  },
  {
    slug: "retrieval-grounds-answers",
    title: "Retrieval is how language models stay grounded.",
    excerpt:
      "What retrieval-augmented generation actually is, and the one habit that makes it work in a product.",
    category: "AI Research",
    publishedAt: "2026-09-27T06:00:00+07:00",
    status: "published",
    visual: "RAG",
    sections: [
      {
        heading: "The idea",
        body: "The 2020 paper on retrieval-augmented generation combines two kinds of memory: the knowledge stored in a model’s weights, and an external index that can be searched at answer time. For knowledge-heavy questions, the model reads retrieved passages first and then writes its answer from them.",
      },
      {
        heading: "Where products go wrong",
        body: "The answer can only be as good as what was retrieved. When a RAG feature disappoints, the cause is usually the search step: poor chunking, missing documents, or a single retrieval method that misses exact terms. Mixing keyword search with vector search is a common way to cover both exact and fuzzy matches.",
      },
      {
        heading: "Try this",
        body: "Log the retrieved passages next to every answer, and read twenty of them. Fixing what gets retrieved is almost always cheaper than changing the model. Show sources to users so they can check the answer too.",
      },
    ],
    sources: [
      {
        label:
          "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks — Lewis et al., 2020",
        url: "https://arxiv.org/abs/2005.11401",
      },
    ],
  },
  {
    slug: "reasoning-out-loud",
    title: "Asking a model to show its steps changes the result.",
    excerpt:
      "Chain-of-thought prompting, in plain terms: when it helps, and why you still have to verify.",
    category: "AI Research",
    publishedAt: "2026-09-26T06:00:00+07:00",
    status: "published",
    visual: "step → step",
    sections: [
      {
        heading: "What the researchers found",
        body: "The 2022 chain-of-thought paper showed that giving a large language model examples that include intermediate reasoning steps improves results on arithmetic, commonsense and symbolic tasks. The effect was reported mainly for large models, not small ones.",
      },
      {
        heading: "A useful habit, not a proof",
        body: "Writing out steps gives the model room to work through a problem instead of jumping to an answer. But the written reasoning is still generated text. It can look convincing and be wrong, so a clean explanation is not evidence that the answer is correct.",
      },
      {
        heading: "Try this",
        body: "For multi-step tasks, ask for the steps and then check the final answer independently: run the code, recompute the number, or compare with a source. Treat the reasoning as a draft to review.",
      },
    ],
    sources: [
      {
        label:
          "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models — Wei et al., 2022",
        url: "https://arxiv.org/abs/2201.11903",
      },
    ],
  },
  {
    slug: "ai-where-you-work",
    title: "AI is more useful where the work already happens.",
    excerpt:
      "A look at JInk, and the idea of bringing a small AI tool into the apps you already use.",
    category: "AI",
    publishedAt: "2026-10-01T06:00:00+07:00",
    status: "published",
    visual: "⌘ + AI",
    sections: [
      {
        heading: "Start with the text field",
        body: "A useful AI interaction does not always need a new destination. Writing an email, translating a sentence, or polishing a short message usually begins inside another application. A small utility can meet that workflow where it is, instead of requiring a separate chat window.",
      },
      {
        heading: "The JInk approach",
        body: "JInk is a desktop quick-input tool. A global hotkey opens a small editor; text can be translated, polished with an OpenAI-compatible endpoint, or dictated, then inserted back into the application that had focus. The interesting product decision is the size of the interaction: one piece of text and a clear finish.",
      },
      {
        heading: "Make the handoff explicit",
        body: "For this kind of tool, the user should be able to inspect a suggestion before it replaces their writing. Provider choice and clear insertion behavior matter just as much as model capability. The product is the whole interaction, including the return to the original task.",
      },
    ],
    sources: [
      {
        label: "JInk — source code and project documentation",
        url: "https://github.com/nhatcoi/JInk",
      },
    ],
  },
  {
    slug: "one-workspace-many-processes",
    title: "One workspace. Many processes. Less friction.",
    excerpt:
      "Why a local process manager belongs in a developer’s everyday toolkit.",
    category: "Engineering",
    publishedAt: "2026-09-30T06:00:00+07:00",
    status: "published",
    visual: ">_",
    sections: [
      {
        heading: "A product is rarely one process",
        body: "A local development environment often has a frontend, an API, and a background worker. Opening terminals is easy. Remembering which process owns a port, which command starts a service, and where a failure appeared takes attention away from the product.",
      },
      {
        heading: "Put the workspace in a file",
        body: "procman is a Rust process manager built around a workspace configuration and a live terminal dashboard. Keeping service commands together makes the development environment easier to understand and repeat. The configuration becomes part of the project rather than a collection of shell-history fragments.",
      },
      {
        heading: "Tools should shorten the feedback loop",
        body: "The useful question is not how many controls a dashboard contains. It is how quickly a developer can see what is running, find the failing service, and get back to work. Logs, process status, and resource usage provide context without requiring a different tool for every question.",
      },
    ],
    sources: [
      {
        label: "procman — source code",
        url: "https://github.com/nhatcoi/procman",
      },
    ],
  },
  {
    slug: "products-are-workflows",
    title: "Build the workflow, not just the screen.",
    excerpt:
      "What commerce and university software have in common: the work between the interfaces.",
    category: "Building",
    publishedAt: "2026-09-29T06:00:00+07:00",
    status: "published",
    visual: "idea → use",
    sections: [
      {
        heading: "Look beyond the first interaction",
        body: "A storefront is only one part of commerce. An order becomes inventory work, shipping work, and customer support. A university course form similarly belongs to a wider process of preparation, review, and approval. A convincing screen is a beginning; a connected workflow is what makes it a product.",
      },
      {
        heading: "Two examples from the portfolio",
        body: "Necom connects product browsing with inventory, orders, customers, and business operations. OpenPKA connects academic programs with HR, organization, finance, and student records. They serve different users, but both depend on clear relationships between parts of the system.",
      },
      {
        heading: "Trace one real task",
        body: "When shaping a product, follow one task from its first input to its final outcome. Identify who acts next, what information they need, and what should happen when a step fails. This gives interface design and engineering a shared object to work on: a task that a person can actually complete.",
      },
    ],
    sources: [
      {
        label: "Necom — project overview",
        url: "https://github.com/nhatcoi/necom",
      },
      {
        label: "OpenPKA — project overview",
        url: "https://github.com/nhatcoi/openpka",
      },
    ],
  },
];
