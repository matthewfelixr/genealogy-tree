import React, { useState, useCallback } from "react";
import classNames from "classnames";
import css from "./RulerNode.module.css";
// import { Modal } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { useForm } from "react-hook-form";
// import axios from "axios";
import "./FormAddData.css";
// import CardMember from '../Cards/CardMember/CardMember'

const RulerNode = ({
  node,
  isRoot,
  isHover,
  onClick,
  onSubClick,
  style,
  selected,
}) => {

  const [clickedNodeId, setClickedNodeId] = useState(null);
  const clickHandler = useCallback(() => {
    setClickedNodeId(node.id);
    onClick(node.id);
  }, [node.id, onClick]);
  const clickSubHandler = useCallback(
    () => onSubClick(node.id),
    [node.id, onSubClick]
  );


  return (
    <div className={css.root} style={style}>
      <div
        className={classNames(
          css.inner,
          css[node.masa_pemerintahan],
          isRoot && css.isRoot,
          isHover && css.isHover
        )}
        onClick={clickHandler}
      >
        <div className={css.container}>
          <div className={`${css.name} mx-auto fw-bold`}>{node.name}</div>
          <div className={`${css.name} mx-auto`}>{(node.title ?
            <>{`(${node.title})`}</>
            :
            <></>
          )}</div>
          <div className={`${css.name} mx-auto`}>
            {node.serve_start} - {node.serve_end}
          </div>
          {( selected ? <div className={`${css.name} mx-auto`}>ID: {clickedNodeId}</div> : <></>)}
          
        </div>
      </div>
      {node.hasSubTree && (
        <div
          className={classNames(css.sub, css[node.gender])}
          onClick={clickSubHandler}
        />
      )}
    </div>
  );
};

export default RulerNode;
