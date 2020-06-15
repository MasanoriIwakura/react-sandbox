import React from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

const GridLayout = () => {
  return (
    <ReactGridLayout>
      {[...Array(10)].map((v: number, index: number) => {
        return (
          <div key={index}>
            <div>
              <h2>Header{index}</h2>
              <div>
                <p>Body{index}</p>
              </div>
            </div>
          </div>
        )
      })}
    </ReactGridLayout>
  );
};

export default GridLayout;
