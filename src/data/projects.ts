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
    summary: "A team-built retrieval assistant for company information, developed as part of RMIT coursework.",
    details: [
      "Contributed to document retrieval, answer generation, and the evaluation workflow.",
      "Used measures including ROUGE, BERTScore, and ranking metrics to inspect answer quality and retrieval relevance.",
      "Worked with the team to make generated answers easier to trace back to their source documents."
    ],
    tags: ["RAG", "NLP", "Retrieval", "Evaluation", "Streamlit"],
    status: "RMIT team project",
    link: "https://github.com/rmit-ds-investor-assistant/WIL_RAG",
    linkLabel: "View the team repository"
  },
  {
    title: "Australian NEM demand forecasting",
    category: "Forecasting and energy systems",
    summary: "An exploratory project using Australian electricity-market data to study data preparation and short-horizon demand forecasting.",
    details: [
      "Built scripts to assemble regional demand and generation data for the National Electricity Market.",
      "Explored persistence-style baselines alongside tree-based models such as random forests and XGBoost.",
      "The current revision focuses on reproducible aggregation, chronological evaluation, and clearly stated limitations; it does not make operational or causal claims."
    ],
    tags: ["Energy data", "Forecasting", "Time series", "XGBoost", "Python"],
    status: "Exploratory modelling project",
    link: "https://github.com/erankawinda/nem-demand-forecasting-australia",
    linkLabel: "View the repository"
  },
  {
    title: "Deep learning for drought prediction in Sri Lanka",
    category: "Climate and environmental modelling",
    summary: "Undergraduate research exploring meteorological drought prediction in Sri Lanka using climate time-series data.",
    details: [
      "Worked with multivariate recurrent neural networks, including stacked LSTM architectures.",
      "Studied drought-index prediction using climate-related time-series signals.",
      "Presented this research at ICMAS 2021."
    ],
    tags: ["Deep learning", "LSTM", "Time series", "Climate", "Sri Lanka"],
    status: "Undergraduate research",
    link: "https://github.com/erankawinda/spei-drought-prediction",
    linkLabel: "View the repository"
  }
];
