export type Project = {
  title: string;
  category: string;
  summary: string;
  details: string[];
  tags: string[];
  status: string;
  link?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    title: "Investor Assistant RAG (team project)",
    category: "Retrieval-augmented generation",
    summary: "Evaluation work for a team-built retrieval assistant developed as part of RMIT coursework.",
    details: [
      "Authored the retained rag_eval package, including evaluation code, per-query and cohort summaries, plots, and documentation.",
      "Measured generated-answer quality with ROUGE-L and Sentence-BERT cosine similarity across retrieval depths k=1, 3, and 5.",
      "Reported regex-based refusal and non-refusal indicators for out-of-knowledge-base questions; the broader application was team work."
    ],
    tags: ["RAG", "NLP", "ROUGE-L", "Sentence-BERT", "Evaluation"],
    status: "Authored evaluation component of an RMIT team project",
    link: "https://github.com/rmit-ds-investor-assistant/WIL_RAG/tree/main/rag_eval",
    linkLabel: "View my evaluation work"
  },
  {
    title: "Australian NEM demand forecasting",
    category: "Forecasting and energy systems",
    summary: "A reproducible 30-minute-ahead demand-forecasting pipeline using public Australian electricity-market records.",
    details: [
      "Data preparation enforces exact five-minute grid alignment, all six readings per regional half-hour, and complete coverage of all five NEM regions.",
      "Uses leakage-safe chronological evaluation to compare XGBoost and random forest with persistence, previous-day, and previous-week baselines.",
      "Includes pinned Python 3.10 dependencies, synthetic methodological tests, CI, provenance notes, and a per-run manifest covering the data hash, software, and split; no unsupported metric is published without the external data snapshot."
    ],
    tags: ["Energy data", "Forecasting", "Time series", "XGBoost", "Python"],
    status: "Reproducible forecasting pipeline",
    link: "https://github.com/erankawinda/nem-demand-forecasting-australia",
    linkLabel: "View the repository"
  },
  {
    title: "SPEI drought forecasting in Sri Lanka",
    category: "Climate and environmental modelling",
    summary: "A reproducible one-month-ahead SPEI forecasting benchmark for three Sri Lankan locations, reconstructed from undergraduate research.",
    details: [
      "The historical undergraduate study explored multivariate recurrent neural networks, including stacked LSTM architectures, and was presented at ICMAS 2021.",
      "The current benchmark uses hash-bound inputs, nested rolling-origin evaluation, persistence baselines, and paired block-bootstrap uncertainty.",
      "On the common 2000–2019 retrospective panel, SPEI-3 MAE was 0.542 vs 0.638 persistence and SPEI-6 was 0.336 vs 0.440; SPEI-3 drought-event F1 did not improve (0.527 vs 0.561), and no operational or external-validation claim is made."
    ],
    tags: ["SPEI", "LSTM", "Time series", "Leakage-aware evaluation", "Sri Lanka"],
    status: "Historical study and reproducibility benchmark",
    link: "https://github.com/erankawinda/spei-drought-prediction",
    linkLabel: "View the repository"
  }
];
