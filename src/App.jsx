import { use, useState } from "react";
import "./App.css";

function App() {
  const maxsave = 10;
  const [colors, SetColors] = useState(["#ffffff"]);
  const [items, Setitems] = useState([]);
  const [selected, Setselected] = useState(null);

  const add_color = () => {
    SetColors([...colors, "#ffffff"]);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const Generate = () => {
    SetColors(colors.map((x) => getRandomColor()));
  };

  const Save = () => {
    if (colors.length == 0) {
      alert("Add at least 1 color.");
    } else if (items.length < maxsave) {
      Setitems([...items, colors]);
    } else {
      alert("Maximum save limit reached.");
    }
  };

  const ColorDel = (color) => {
    let x = [...colors];
    x.splice(x.indexOf(color), 1);
    SetColors(x);
  };

  const ClearAll = () => {
    Setitems([]);
  };

  const ItemDel = (index) => {
    let x = [...items];
    x.splice(index, 1);
    Setitems(x);
  };

  const Select = (index) => {
    if (selected == index) {
      Setselected(-1);
    } else {
      Setselected(index);
    }
  };

  return (
    <div className="app">
      <div className="logo">
        <img src="./logo-1.png" alt="" />
      </div>
      <div className="app-funs">
        <div className="list">
          <div className="l-hd">
            <div className="clear" onClick={ClearAll}>
              Clear all
            </div>
          </div>
          <div className="l-bd">
            {items.map((x, i) => (
              <div key={i} className="item" onClick={() => Select(i)}>
                <div className="hd">
                  <p>Color {i + 1}</p>
                  <div className="remove" onClick={() => ItemDel(i)}></div>
                </div>
                <div
                  className="by"
                  style={{ display: selected == i ? "flex" : "none" }}
                >
                  {x.map((x, i) => (
                    <div key={i} className="i-color">
                      <div
                        className="prev"
                        style={{ backgroundColor: x }}
                      ></div>
                      <div className="i-code">{x}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="board">
          <p>Generate Pro Colors</p>
          <div className="colors-gens">
            {colors.map((x, index) => (
              <div key={index} className="color">
                <div className="c-pre" style={{ backgroundColor: x }}></div>
                <div class="c-code">
                  {x} <div class="remove" onClick={() => ColorDel(x)}></div>
                </div>
              </div>
            ))}
            <div className="add" onClick={add_color}>
              +
            </div>
          </div>
          <div className="btns">
            <button className="gen" onClick={Generate}>
              GENERATE
            </button>
            <button className="save" onClick={Save}>
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
