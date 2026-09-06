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
    title: "SPEI drought forecasting in Sri Lanka",
    category: "Climate and environmental modelling",
    summary: "A reproducible benchmark for predicting next month's drought index at three Sri Lankan locations, rebuilt from undergraduate research.",
    details: [
      "SPEI measures wet and dry conditions. This benchmark predicts its three-month and six-month summaries one month ahead; it does not reproduce the wider four-region study presented at ICMAS 2021.",
      "Checks input-file hashes, selects models on earlier time periods, compares with persistence (repeating the latest value), and estimates uncertainty with time-series block resampling.",
      "On the retrospective 2000–2019 panel, ridge regression reduced mean absolute error from 0.638 to 0.542 for SPEI-3 and from 0.440 to 0.336 for SPEI-6. The paired 95% intervals for error reduction were [0.054, 0.137] and [0.076, 0.131], respectively.",
      "F1 balances missed droughts and false alerts. It was 0.527 vs 0.561 for persistence at SPEI-3, and 0.754 vs 0.688 at SPEI-6. A documented correction to fold-level F1 leaves these full-period scores unchanged; SPEI-3 does not show better drought detection.",
      "Reported scores have been checked against the retained predictions. The evaluation period was already inspected, and the recovered SPEI calibration method is unknown, so this is not independent or operational validation."
    ],
    tags: ["Climate data", "SPEI", "Ridge regression", "Time series", "Reproducibility"],
    status: "Historical study and reproducibility benchmark",
    link: "https://github.com/erankawinda/spei-drought-prediction",
    linkLabel: "View the repository"
  },
  {
    title: "Australian electricity demand forecasting",
    category: "Forecasting and energy systems",
    summary: "Predicts measured operational demand for the next half hour across Australia's National Electricity Market (NEM), using public AEMO data.",
    details: [
      "Reads original half-hour measurements, validates timestamps and source records, and requires all five regions before calculating the NEM total.",
      "Compares XGBoost and random forest with persistence, previous-day, and previous-week baselines using training, validation, and test periods in time order.",
      "The October–December 2024 pilot includes saved predictions, error metrics, source hashes, model settings, and automated checks against future-data leakage.",
      "Uses successive one-step historical forecasts, with archived observations assumed available at each interval's end."
    ],
    tags: ["Energy data", "Forecasting", "Time series", "XGBoost", "Python"],
    status: "Measured-demand historical benchmark",
    link: "https://github.com/erankawinda/nem-demand-forecasting-australia",
    linkLabel: "View the repository"
  },
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
  }
];
