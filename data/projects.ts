export type ProjectPreview = "web" | "terminal" | "desktop" | "mobile";

export type Project = {
  slug: string;
  title: string;
  kind: "product" | "open-source";
  category: string;
  /** Short punchy line shown inside the card preview. */
  tagline: string;
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
  year: number;
  featured?: boolean;
  spotlight?: boolean;
  preview: ProjectPreview;
  /** Real screenshot under /public/images/projects; falls back to the coded preview when absent. */
  image?: { src: string; width: number; height: number; alt: string };
  /** Lines rendered inside terminal-style previews. */
  previewLines?: string[];
  links: { demo?: string; repo?: string; docs?: string };
};

export const projects: Project[] = [
  {
    slug: "necom",
    title: "Necom",
    kind: "product",
    category: "E-commerce Platform",
    tagline: "Run an entire store from one backend",
    summary:
      "Full-stack e-commerce platform for products, inventory, orders, customers and day-to-day operations.",
    description:
      "Necom covers the whole commerce loop. Customers browse ~300 products by category, space and collection, filter by price and brand, and check out. Staff process orders, create Giao Hàng Nhanh shipments, manage stock (import, export, transfer, stocktake), moderate reviews and answer customers in realtime chat. Admins additionally manage products, staff, promotions and loyalty-point rules. An AI assistant answers questions about products, policies and the customer's own orders using hybrid BM25 + vector search and LLM function calling.",
    highlights: [
      "AI assistant with hybrid BM25 + vector search",
      "Realtime chat and notifications over STOMP/WebSocket",
      "Role-based access: Admin, Employee, Customer (JWT)",
      "GHN shipping, PayPal and SMTP integrations",
    ],
    stack: [
      "Spring Boot 3",
      "React",
      "MySQL 8",
      "WebSocket",
      "Docker",
      "Nginx",
    ],
    year: 2024,
    featured: true,
    spotlight: true,
    preview: "web",
    image: {
      src: "/images/projects/necom.jpg",
      width: 1207,
      height: 1314,
      alt: "Necom storefront home page",
    },
    links: {
      demo: "https://necom.vnhat.dev",
      repo: "https://github.com/nhatcoi/necom",
    },
  },
  {
    slug: "procman",
    title: "procman",
    kind: "open-source",
    category: "Developer Tool",
    tagline: "One file. Every dev process.",
    summary:
      "Daemonless process manager for local development, written in Rust, with a live TUI dashboard.",
    description:
      "procman runs multi-service development stacks — backend APIs, frontend dev servers, workers and watchers — from a single procman.yaml. It starts in under a millisecond, shows realtime CPU/RAM per process, frees occupied ports, exposes services through Cloudflare quick tunnels with QR codes for mobile testing, and ships an MCP server so AI agents can manage processes too.",
    highlights: [
      "Sub-millisecond startup, no daemon",
      "Interactive TUI with live CPU/RAM",
      "Cloudflare quick tunnels + QR codes",
      "MCP server for AI agents",
    ],
    stack: ["Rust", "TUI", "MCP"],
    year: 2026,
    featured: true,
    preview: "terminal",
    previewLines: [
      "$ procman init",
      "✓ generated procman.yaml (server, web)",
      "$ procman start",
      "● server  :3001  12 MB  0.4%",
      "● web     :3000  88 MB  1.2%",
      "$ procman forward web",
    ],
    links: { repo: "https://github.com/nhatcoi/procman" },
  },
  {
    slug: "jkauto",
    title: "JKAuto",
    kind: "open-source",
    category: "Test Automation IDE",
    tagline: "The test automation IDE that thinks with you",
    summary:
      "Write, run and iterate on test cases across Web, Mobile, Desktop and API — visually, with AI assist.",
    description:
      "JKAuto is a desktop IDE for test automation. Test cases are built in a visual step editor with 15+ built-in keywords and reusable custom keywords. Suites bind to environment profiles and CSV/JSON data files for data-driven runs. API testing is first-class: request editor, JSON-path assertions, request chaining and OpenAPI import. A multi-locator object repository keeps tests resilient, and an AI agent can draft tests for you.",
    highlights: [
      "Visual step editor with 15+ keywords",
      "Data-driven suites with environment profiles",
      "API testing with chaining and OpenAPI import",
      "AI agent that drafts test cases",
    ],
    stack: ["Electron", "TypeScript", "Vue", "Kotlin"],
    year: 2026,
    featured: true,
    preview: "desktop",
    image: {
      src: "/images/projects/jkauto.png",
      width: 1916,
      height: 1052,
      alt: "JKAuto visual test step editor with AI agent panel",
    },
    previewLines: [
      "navigate-to  /login",
      "type-text    #email",
      "click        Sign in",
      "assert-text  Dashboard",
    ],
    links: { repo: "https://github.com/nhatcoi/jkauto" },
  },
  {
    slug: "openpka",
    title: "OpenPKA",
    kind: "product",
    category: "University Management",
    tagline: "Programs, people and finance in one system",
    summary:
      "University management system covering academic programs, HR, organization structure, finance and student records.",
    description:
      "OpenPKA digitises university administration. The training module manages programs, courses, majors, cohorts and a syllabus builder with review-and-approval workflows. The HR module tracks employees, academic titles, contracts, leave and performance reviews. Organization management models the faculty and department hierarchy with role assignments.",
    highlights: [
      "Training programs, courses and syllabus builder",
      "Review & approval workflows",
      "HR: contracts, leave, performance reviews",
      "Hierarchical organization tree",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    year: 2025,
    featured: true,
    preview: "web",
    image: {
      src: "/images/projects/openpka.png",
      width: 1440,
      height: 900,
      alt: "OpenPKA module dashboard",
    },
    links: {
      demo: "https://trasys.vercel.app",
      repo: "https://github.com/nhatcoi/openpka",
    },
  },
  {
    slug: "jink",
    title: "JInk",
    kind: "open-source",
    category: "Desktop Utility",
    tagline: "Type anywhere. Polish with AI. Insert.",
    summary:
      "A floating quick-input popup for every text field on your machine — type, translate, AI-polish or dictate.",
    description:
      "Press a global hotkey anywhere and a small editor appears at your cursor. Type, translate VI⇄EN, fix grammar through any OpenAI-compatible endpoint (OpenAI, Ollama, LM Studio), or dictate by voice — then hit Insert and the text lands in whichever app had focus. Ships for macOS and Linux (deb, rpm, AppImage).",
    highlights: [
      "Global hotkey popup at the cursor",
      "AI rewrite via any OpenAI-compatible API",
      "VI⇄EN translate and voice-to-text",
      "macOS + Linux builds",
    ],
    stack: ["Tauri", "Rust", "TypeScript"],
    year: 2026,
    featured: true,
    preview: "desktop",
    previewLines: [
      "Alt+Space",
      "cảm ơn bạn đã gửi tài liệu",
      "→ Thanks for sending the document.",
      "Insert ⏎",
    ],
    links: { repo: "https://github.com/nhatcoi/JInk" },
  },
  {
    slug: "aegis-flow",
    title: "aegis-flow",
    kind: "open-source",
    category: "Security Research",
    tagline: "Prove the payment flow before it ships",
    summary:
      "Spec-driven security verification for payment flows: CTL model checking, Z3, sanitizers and concolic fuzzing.",
    description:
      "aegis-flow verifies payment-gateway specs in layers. CTL model checking over Kripke structures catches design bugs such as shipping on gateway timeout or double capture on webhook retries. Z3 bounded model checking and SMT find counterexamples; ASan/UBSan and concolic fuzzing find memory and arithmetic bugs in input handlers — including hardcoded backdoors random fuzzing would never hit. Every finding is mapped to a CWE.",
    highlights: [
      "Full CTL parser and model checker",
      "Z3 bounded model checking & SMT",
      "ASan/UBSan + concolic fuzzing",
      "Findings mapped to CWE evidence",
    ],
    stack: ["Python", "Z3", "PyQt6", "C"],
    year: 2026,
    featured: true,
    preview: "terminal",
    image: {
      src: "/images/projects/aegis-flow.png",
      width: 1440,
      height: 900,
      alt: "aegis-flow GUI showing a Kripke model with a highlighted counterexample",
    },
    previewLines: [
      "$ aegis check payment.spec",
      "AG !(captured & refunded)      ✓",
      "AG (timeout -> !shipped)       ✗",
      "  counterexample: 4 steps",
      "  CWE-841 workflow enforcement",
    ],
    links: { repo: "https://github.com/nhatcoi/aegis-flow" },
  },
  {
    slug: "nozie",
    title: "Nozie",
    kind: "product",
    category: "Mobile App",
    tagline: "Discover, save and stream movies",
    summary:
      "Mobile app to discover trending movies, build a wishlist and stream in one place.",
    description:
      "Nozie is a Flutter movie app with Firebase authentication, genre and trending discovery, advanced search, a wishlist, Stripe payments for purchases, a built-in video player, Vietnamese/English localisation, dark mode and in-app notifications. A small Express server handles payments and email.",
    highlights: [
      "Firebase Auth, Firestore and Storage",
      "Stripe payments",
      "Built-in video player",
      "Vietnamese & English, dark mode",
    ],
    stack: ["Flutter", "Riverpod", "Firebase", "Stripe"],
    year: 2025,
    featured: true,
    preview: "mobile",
    links: {
      demo: "https://nozie.nhatcoi.space",
      repo: "https://github.com/nhatcoi/nozie",
    },
  },
  {
    slug: "thesis-hub",
    title: "Thesis Hub",
    kind: "product",
    category: "Academic Platform",
    tagline: "Graduation theses, start to finish",
    summary:
      "Graduation thesis management platform for topic registration, supervision and review.",
    description:
      "Thesis Hub manages the graduation-thesis process for students and lecturers: registering topics, assigning supervisors, tracking progress and running reviews.",
    highlights: [
      "Topic registration",
      "Supervisor assignment",
      "Progress tracking",
      "Review workflow",
    ],
    stack: ["Java", "TypeScript", "Docker"],
    year: 2026,
    preview: "web",
    links: {
      demo: "https://datn.openpka.site",
      repo: "https://github.com/nhatcoi/thesis-hub",
    },
  },
  {
    slug: "kb",
    title: "kb",
    kind: "open-source",
    category: "Knowledge Base",
    tagline: "Your notes, indexed and answerable",
    summary:
      "Local-first personal knowledge base: block editor over plain Markdown, SQLite graph index and RAG.",
    description:
      "kb keeps notes as plain Markdown files edited through a Notion-style block editor (TipTap/BlockNote). A SQLite indexer builds the link graph and mind map, embeddings power semantic search, and an AI assistant CLI answers questions from your own vault.",
    highlights: [
      "Block editor over plain Markdown",
      "SQLite graph index",
      "Vector search & RAG",
      "AI assistant CLI",
    ],
    stack: ["TypeScript", "SQLite", "TipTap"],
    year: 2026,
    preview: "terminal",
    previewLines: [
      '$ kb ask "how does procman free ports?"',
      "→ 3 notes matched (graph + vector)",
      "free_port kills the process on…",
    ],
    links: { repo: "https://github.com/nhatcoi/kb" },
  },
];
