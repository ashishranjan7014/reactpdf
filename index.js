import React from "react";
import { render } from "react-dom";
import { renderToString } from "react-dom/server";
import Hello from "./Hello";
import jsPDF from "jspdf";
require("jspdf-autotable");

const WorkEffort = ({ a }) => (
  <div>
    <h3>{a}</h3>
    <p>
      ABCXYZ program is getting executed in XYZ Agile following Scrum
      Methodology focused on developing <br /> the features of POY Connect
      prioritized by ABN Product Owner.
    </p>
    <p>
      The Scope of work will be prioritized by the POE Product Owner on every
      Release/Sprint basis and Infosys <br /> team will take over in planning
      and executing the sprint to meet the needs of the program
    </p>
  </div>
);

const print = () => {
  const pdf = new jsPDF("p", "mm", "a4");
  const workEffortString = renderToString(<WorkEffort a="some text" />);
  pdf.fromHTML(workEffortString, 10, 120);
  pdf.save("pdf");
};

const App = () => (
  <div>
    <Hello name="Mannir React PDF" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <button onClick={print}>print</button>
  </div>
);

render(<App />, document.getElementById("root"));
