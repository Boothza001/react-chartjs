// ScatterPlot.js
import React, { Component } from "react";
import { Chart } from "react-google-charts";

class ScatterPlot extends Component {
  render() {
    const data = [
      ["X", "Y"],
      [0, 0],
      [-5, 0],
      [5, 0],
      [0, 5],
      [-5, 5],
      [5, 5],
      [5, 5],
      [5, -5],
      [0, -5],
      [-5, -5],
    ];

    const options = {
      title: "Scatter Plot Example",
      hAxis: { title: "X-axis" },
      vAxis: { title: "Y-axis" },
    };

    return (
      <div className="scatter-plot-container">
        <Chart
          chartType="ScatterChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default ScatterPlot;
