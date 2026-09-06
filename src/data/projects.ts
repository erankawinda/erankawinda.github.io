export const projectGroups = [
  { id: "research", title: "Research and machine learning" },
  { id: "applications", title: "Applications and visualisation" }
] as const;

export type Project = {
  id: string;
  group: typeof projectGroups[number]["id"];
  title: string;
  category: string;
  summary: string;
  details: string[];
  tags: string[];
  status: string;
  featured?: boolean;
  caseStudyHref?: string;
  links: { href: string; label: string }[];
};

export const projects: Project[] = [
  {
    id: "autogate-qlora",
    group: "research",
    title: "AutoGate-QLoRA: URL-only ad generation",
    category: "Language models and efficient fine-tuning",
    summary: "Master’s research on generating short advertising headlines and descriptions from a landing-page URL while training only a small part of a language model.",
    details: [
      "Built a pipeline for data preparation, adapter training, structured generation, and evaluation. The model uses the URL text without reading the page.",
      "The current adapter-selection protocol is implemented and tested on CPU; the full GPU comparison is the next research step."
    ],
    tags: ["Python", "PyTorch", "QLoRA", "NLP", "Evaluation"],
    status: "Master’s research · Private research code",
    featured: true,
    caseStudyHref: "/projects/autogate-qlora/",
    links: [
      { href: "/projects/autogate-qlora/", label: "Read project" },
      { href: "/contact", label: "Discuss this research" }
    ]
  },
  {
    id: "spei-drought-prediction",
    group: "research",
    title: "SPEI drought forecasting in Sri Lanka",
    category: "Climate and environmental modelling",
    summary: "A benchmark for predicting next month’s drought index at three Sri Lankan locations, rebuilt from undergraduate research.",
    details: [
      "Rebuilt the analysis around chronological evaluation, simple baselines, saved predictions, and uncertainty estimates.",
      "Ridge regression reduced average forecasting error for both drought indices in the historical benchmark. Drought-detection results differed between the two targets."
    ],
    tags: ["Climate data", "SPEI", "Ridge regression", "Time series"],
    status: "Undergraduate research and reproducibility study",
    featured: true,
    caseStudyHref: "/projects/spei-drought-prediction/",
    links: [
      { href: "/projects/spei-drought-prediction/", label: "Read project" },
      { href: "https://github.com/erankawinda/spei-drought-prediction", label: "View repository" }
    ]
  },
  {
    id: "nem-demand-forecasting",
    group: "research",
    title: "Australian electricity demand forecasting",
    category: "Forecasting and energy systems",
    summary: "Predicts measured operational demand for the next half hour across Australia’s National Electricity Market (NEM), using public AEMO data.",
    details: [
      "Checks measured demand from all five NEM regions and compares random forest and XGBoost with three simple baselines.",
      "On 612 test forecasts from the October–December 2024 pilot, random forest achieved a mean absolute error of 177.94 MW, compared with 487.30 MW for persistence."
    ],
    tags: ["Energy data", "Forecasting", "XGBoost", "Python"],
    status: "Measured-demand historical benchmark",
    featured: true,
    caseStudyHref: "/projects/nem-demand-forecasting/",
    links: [
      { href: "/projects/nem-demand-forecasting/", label: "Read project" },
      { href: "https://github.com/erankawinda/nem-demand-forecasting-australia", label: "View repository" }
    ]
  },
  {
    id: "investor-assistant-rag",
    group: "research",
    title: "Investor Assistant RAG",
    category: "Retrieval-augmented generation",
    summary: "Evaluation work for a team-built retrieval assistant developed during RMIT coursework.",
    details: [
      "Authored the retained rag_eval package, including evaluation code, per-query and cohort summaries, plots, and documentation.",
      "Compared generated answers using ROUGE-Lsum text-overlap scores and Sentence-BERT similarity across retrieval depths of 1, 3, and 5 documents.",
      "Reported refusal indicators for questions outside the knowledge base. My contribution covered evaluation; the broader application was team work."
    ],
    tags: ["RAG", "NLP", "Sentence-BERT", "Evaluation"],
    status: "RMIT team project · Evaluation contribution",
    featured: true,
    links: [{ href: "https://github.com/rmit-ds-investor-assistant/WIL_RAG/tree/main/rag_eval", label: "View my evaluation work" }]
  },
  {
    id: "global-energy-transition",
    group: "applications",
    title: "Global Energy Transition Dashboard",
    category: "Interactive data visualisation",
    summary: "An R Shiny dashboard exploring how national electricity mixes changed from 2000 to 2024.",
    details: [
      "Combines country maps, time-series charts, country comparisons, and regional summaries in an interactive interface.",
      "Uses a documented Our World in Data snapshot, with source definitions and reproducible data transformations. Coverage varies by country, year, and indicator."
    ],
    tags: ["R", "Shiny", "Energy data", "Data visualisation"],
    status: "Data visualisation coursework",
    links: [
      { href: "https://01976317-6787-6e0a-0975-c8b07e3a7905.share.connect.posit.cloud/", label: "Open dashboard" },
      { href: "https://github.com/erankawinda/global-energy-transition-dashboard", label: "View repository" }
    ]
  },
  {
    id: "fashion-store-ai-reviews",
    group: "applications",
    title: "Fashion Store Review App",
    category: "Applied machine learning",
    summary: "A Flask application for browsing clothing reviews and predicting whether a review recommends an item.",
    details: [
      "Connects a saved text classifier to a web interface and JSON API, with category search, review browsing, and input validation.",
      "The local demonstration stores newly added reviews in memory. The repository documents the retained dataset, model, API, and application tests."
    ],
    tags: ["Python", "Flask", "Text classification", "API"],
    status: "Application coursework",
    links: [{ href: "https://github.com/erankawinda/fashion-store-ai-reviews", label: "View repository" }]
  }
];
