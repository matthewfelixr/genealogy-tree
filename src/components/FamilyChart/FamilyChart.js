import React from "react";
import f3 from "family-chart"; // npm i family-chart
import "./family-chart.css"; // create file 'family-chart.css' in same directory, copy/paste css from examples/create-tree

export default class FamilyTree extends React.Component {
  cont = React.createRef();

  componentDidMount() {
    if (!this.cont.current) return;

    const store = f3.createStore({
        data: data(),
        node_separation: 250,
        level_separation: 150
      }),
      view = f3.d3AnimationView({
        store,
        cont: document.querySelector("#FamilyChart")
      }),
      Card = f3.elements.Card({
        store,
        svg: view.svg,
        card_dim: {
          w: 220,
          h: 70,
          text_x: 75,
          text_y: 15,
          img_w: 60,
          img_h: 60,
          img_x: 5,
          img_y: 5
        },
        card_display: [
          (d) => `${d.data["first name"] || ""} ${d.data["last name"] || ""}`,
          (d) => `${d.data["birthday"] || ""}`
        ],
        mini_tree: true,
        link_break: false
      });

    view.setCard(Card);
    store.setOnUpdate((props) => view.update(props || {}));
    store.update.tree({ initial: true });

    function data() {
      return [
        {
          id: "bd56a527-b613-474d-9f38-fcac0aae218b",
          data: {
            gender: "F",
            "first name": "Yva",
            "last name": "",
            birthday: "",
            avatar: ""
          },
          rels: {
            spouses: ["12a9bddf-855a-4583-a695-c73fa8c0e9b2"],
            children: ["0fa5c6bc-5b58-40f5-a07e-d787e26d8b56"]
          }
        }
      ];
    }
  }

  render() {
    return <div className="f3" id="FamilyChart" ref={this.cont}></div>;
  }
}
