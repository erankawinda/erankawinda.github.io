export type ProjectStory = {
  projectId: string;
  sections: {
    title: string;
    paragraphs: string[];
    table?: {
      caption: string;
      headers: string[];
      rows: string[][];
    };
    figure?: {
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    };
  }[];
  evidenceLink?: { href: string; label: string };
  sourceLink?: { href: string; label: string };
};

export const projectStories: ProjectStory[] = [
  {
    projectId: "autogate-qlora",
    sections: [
      {
        title: "The question",
        paragraphs: [
          "Can a language model generate a short advertising headline and description from a landing-page URL while training only a small number of parameters? My master’s project explores this task using example ads as training labels. The input is the URL text itself; the model does not retrieve the page."
        ]
      },
      {
        title: "What I built",
        paragraphs: [
          "The pipeline prepares and validates examples, trains several adapter methods, generates structured headlines and descriptions, and evaluates the outputs. Adapters are small trainable additions to a largely frozen language model. QLoRA combines them with a quantized base model.",
          "Examples from the same URL stay together when the data are split. Generated text is checked for format, completeness, and duplication, with results summarised by output field and URL group."
        ]
      },
      {
        title: "A fair comparison",
        paragraphs: [
          "The current experiment asks whether selecting particular adapter sites helps more than choosing sites at random. Both methods begin with the same checkpoint, retain exactly the same adapter cost and number of sites, and receive the same further training. These controls separate the effect of site selection from differences in the starting model or training budget."
        ]
      },
      {
        title: "Findings and next steps",
        paragraphs: [
          "The exploratory study found closer matches to the example ads than training with shuffled targets. Output completeness was assessed separately from text-matching scores.",
          "The newer adapter-site selection protocol is implemented and has passed CPU tests. Its full GPU comparison is the next step in testing whether learned selection adds value beyond equally sized random selections.",
          "The research code is private. I can discuss the project’s methods and current direction through the contact page."
        ]
      }
    ]
  },
  {
    projectId: "spei-drought-prediction",
    sections: [
      {
        title: "The question",
        paragraphs: [
          "How well can past observations predict next month’s drought index at three Sri Lankan locations? SPEI measures wet and dry conditions. This benchmark predicts SPEI-3 and SPEI-6, which describe the water balance over three- and six-month windows, one month ahead."
        ]
      },
      {
        title: "From the original study to a reproducible benchmark",
        paragraphs: [
          "My 2021 undergraduate research explored recurrent neural networks for drought prediction. The current repository rebuilds the analysis using recovered data from Buttala, Padaviya, and Tissamaharama. It contains data checks, forecasting code, model comparisons, saved predictions, and uncertainty estimates.",
          "The evaluation moves forward through time: each model is selected using earlier data before being tested on the following period. Persistence, which repeats the latest observed value, provides a simple reference point."
        ]
      },
      {
        title: "Results",
        paragraphs: [
          "Across the 2000–2019 retrospective panel, ridge regression reduced mean absolute error for both targets. These scores average the three locations equally; lower values indicate more accurate predictions of the index."
        ],
        table: {
          caption: "One-month-ahead mean absolute error in SPEI units",
          headers: ["Target", "Persistence", "Ridge regression"],
          rows: [
            ["SPEI-3", "0.638", "0.542"],
            ["SPEI-6", "0.440", "0.336"]
          ]
        }
      },
      {
        title: "What the comparison shows",
        paragraphs: [
          "Predicting the index more accurately did not always improve drought detection. At the drought threshold of SPEI ≤ −1, ridge improved the drought F1 score for SPEI-6 but scored below persistence for SPEI-3. F1 balances missed droughts and false alerts.",
          "This is a historical benchmark on a previously inspected dataset. The recovered inputs do not fully reproduce the original four-region study, and their SPEI calibration details are incomplete. The results therefore describe the present three-location analysis; performance with newly arriving observations remains to be tested."
        ]
      }
    ],
    evidenceLink: {
      href: "https://github.com/erankawinda/spei-drought-prediction/blob/main/results/robustness_v1/REPORT.md",
      label: "Read the results and uncertainty analysis"
    }
  },
  {
    projectId: "nem-demand-forecasting",
    sections: [
      {
        title: "The question",
        paragraphs: [
          "How accurately can recent demand and calendar information predict electricity demand for the next half hour? This project forecasts measured operational demand across Australia’s National Electricity Market (NEM), using public data from the Australian Energy Market Operator (AEMO). Operational demand excludes electricity supplied by sources such as household rooftop solar."
        ]
      },
      {
        title: "What I built",
        paragraphs: [
          "The pipeline downloads monthly measurements, checks timestamps and regional coverage, builds features from completed intervals, and compares random forest and XGBoost with three baselines. It saves the predictions, errors, model settings, and source records needed to inspect the run.",
          "The target uses original half-hour measured values, without adding operational-demand adjustments or estimates of wholesale demand response. A NEM total is calculated only when all five regions are present. Valid negative regional measurements are retained, and the evaluation follows the order of the observations."
        ]
      },
      {
        title: "Historical pilot results",
        paragraphs: [
          "The October–December 2024 dataset contains 4,416 complete half hours. The final test contains 612 forecasts issued between 19 and 31 December. Both machine-learning models achieved lower mean absolute error than the three baselines on this test."
        ],
        table: {
          caption: "Mean absolute error across 612 test forecasts; lower is better",
          headers: ["Method", "Error (MW)"],
          rows: [
            ["Persistence", "487.30"],
            ["Previous day", "1,026.53"],
            ["Previous week", "2,134.83"],
            ["XGBoost", "183.37"],
            ["Random forest", "177.94"]
          ]
        },
        figure: {
          src: "/images/projects/nem-forecast-sample.png",
          alt: "Observed NEM demand, the persistence baseline, and XGBoost forecasts over the final seven test days, showing the daily demand cycle in megawatts.",
          caption: "Final seven days of successive half-hour forecasts. The chart compares observed demand, persistence, and XGBoost; random forest is included in the table above. Demand is in MW, and times mark the end of each half hour in fixed AEST (UTC+10). Source: AEMO measured operational-demand archives; analysis and chart from this project.",
          width: 2380,
          height: 1077
        }
      },
      {
        title: "What comes next",
        paragraphs: [
          "This pilot covers one quarter, with a test period near its end. The historical evaluation assumes completed measurements are available immediately and uses archived values, including later revisions. Testing other seasons and realistic publication delays would show how well the approach transfers to ongoing forecasting."
        ]
      }
    ],
    evidenceLink: {
      href: "https://github.com/erankawinda/nem-demand-forecasting-australia/tree/main/results/operational_demand_2024q4",
      label: "Inspect the pilot results and protocol"
    },
    sourceLink: {
      href: "https://www.aemo.com.au/energy-systems/electricity/national-electricity-market-nem/data-nem/operational-demand-data",
      label: "AEMO data definitions"
    }
  }
];
