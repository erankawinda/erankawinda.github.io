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
    title: "Investor Assistant RAG",
    category: "Retrieval-augmented generation",
    summary: "A retrieval-based assistant for company information, focused on grounded answers, source traceability, and evaluation.",
    details: [
      "Worked with document retrieval, embeddings, answer generation, and Streamlit-style interfaces.",
      "Used evaluation ideas such as ROUGE, BERTScore, and ranking metrics to inspect answer quality and retrieval relevance.",
      "The important question was not only whether the system could answer, but whether the answer could be traced and checked."
    ],
    tags: ["RAG", "NLP", "Retrieval", "Evaluation", "Streamlit"],
    status: "Coursework and applied research project",
    link: "https://github.com/rmit-ds-investor-assistant",
    linkLabel: "GitHub organisation"
  },
  {
    title: "GridAI — Australian energy analytics",
    category: "Forecasting and energy systems",
    summary: "Analysis and forecasting work using Australian electricity market data, with attention to temporal validation and interpretable baselines.",
    details: [
      "Worked with demand and dispatch-style datasets connected to the National Electricity Market.",
      "Explored classical machine-learning models such as random forests and XGBoost as practical forecasting baselines.",
      "Focused on reproducible pipelines, temporal splits, and avoiding leakage in time-series evaluation."
    ],
    tags: ["Energy data", "Forecasting", "Time series", "XGBoost", "Python"],
    status: "Applied modelling work"
  },
  {
    title: "Deep learning for drought prediction in Sri Lanka",
    category: "Climate and environmental modelling",
    summary: "Undergraduate research on meteorological drought forecasting for ungauged areas in Sri Lanka using global meteorological data.",
    details: [
      "Studied multivariate recurrent neural network approaches, including stacked LSTM architectures.",
      "Worked with drought index prediction and climate-related time-series signals.",
      "Presented this research at ICMAS 2021."
    ],
    tags: ["Deep learning", "LSTM", "Time series", "Climate", "Sri Lanka"],
    status: "Undergraduate research"
  },
  {
    title: "UBT / PIR private retrieval notes",
    category: "Privacy-aware information access",
    summary: "Exploratory work around private retrieval, access patterns, and verification ideas for blockchain-related systems.",
    details: [
      "Studied PIR-style query patterns, UBT-style structures, subtree reasoning, and hashing choices such as BLAKE3.",
      "Focused on the trade-off between privacy, verification cost, and usable system design.",
      "This is an active research-learning thread, not a finished product."
    ],
    tags: ["PIR", "UBT", "Privacy", "Blockchain", "Protocols"],
    status: "Exploratory research-learning thread"
  }
];
