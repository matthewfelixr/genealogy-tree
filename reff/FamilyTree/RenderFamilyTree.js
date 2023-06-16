import PinchZoomPan from "pinch-zoom-pan";
import React , { useState } from "react";
import ReactFamilyTree from "react-family-tree";
import nodes from './prins.json'
import FamilyNode from "./FamilyNode/FamilyNode";
import styles from "./RenderFamilyTree.module.css";

const myID = "0";
const WIDTH = 260;
const HEIGHT = 280;
function RenderFamilyTree() {

    const [rootId, setRootId] = useState(myID); 
  return (
    <>
      <PinchZoomPan 
      captureWheel 
      min={0.2} 
      max={2.5}
      key={rootId}
      className={styles.wrapper}>
        <ReactFamilyTree
        nodes={nodes}
        rootId={rootId}
        width={WIDTH}
        height={HEIGHT}
        renderNode={ node => (
            <FamilyNode
            key={node.id}
            node={node}
            isRoot={node.id === 0}
            onSubClick={setRootId}
            openDialog={''}
            markHolucost={''}
            style={{width: WIDTH,
                height: HEIGHT,
                transform: `translate(${node.left *
                  (WIDTH / 2)}px, ${node.top * (HEIGHT / 2)}px)`}}
            ></FamilyNode>
        ) }
        />
      </PinchZoomPan>
    </>
  );
}

export default RenderFamilyTree;
