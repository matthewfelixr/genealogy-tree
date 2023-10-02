import React, {useState, useMemo } from "react";
import Navbar from "../../components/Navbar/Navbar";
import RulerDetail from "../../components/FamilyTrees/RulerDetail";
import RulerNode from "../../components/FamilyTrees/RulerNode";
import { RulerCanvas } from "../../components/Canvas/RulerCanvas";
import ReactFamilyTree from "react-family-tree";
import css from "../../components/FamilyTrees/FamilyTrees.module.css";
import rulerData from '../../components/FamilyChart/rulerData.json'
import Dropdown from "react-bootstrap/Dropdown";


function RulerTree() {
  
  // console.log(rulerData)
  const [nodes, setNodes] = useState();
  const [selectId, setSelectId] = useState("");
  const [rootId, setRootId] = useState();
  const WIDTH = 350;
  const HEIGHT = 200;

  useMemo(() => {
    setNodes(rulerData)
    if (nodes && nodes.length > 0) {
      setRootId(nodes[0].id);
    } else {
      return 0;
    }
  }, [nodes]);

  const selected = useMemo(() => {
    if (nodes && nodes.length > 0) {
      return nodes.find((item) => item.id === selectId);
    } else {
      return 0;
    }
  }, [nodes, selectId]);

  const rooted = useMemo(() => {
    if (nodes && nodes.length > 0) {
      return nodes.find((item) => item.id === rootId);
    } else {
      return 0;
    }
  }, [nodes, rootId]);
  
  const handleReset = () => {
    if (nodes && nodes.length > 0) {
      setSelectId(nodes[0].id);
      setRootId(nodes[0].id);
    }
  };

  return (
    <>
      <Navbar />
      <div className="py-3">
        <div className="container tree-container">
          <h2>Penguasa Kerajaan Sumedang Larang dari Generasi ke Generasi</h2>
          <div className="d-flex gap-2 mb-1">
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                {rooted ? `[ ${rooted.id} ]  ${rooted.name} `  : "Pilih Anggota"}
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{ maxHeight: '200px', overflowY: 'scroll'}}
              >
                {nodes &&
                  nodes.length > 0 &&
                  nodes.map((node) => (
                    <Dropdown.Item
                      key={node.id}
                      onClick={() => {
                        setSelectId(node.id);
                        setRootId(node.id);
                      }}
                    >
                      {`[ ${node.id} ]  ${node.name} `}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <button className="btn btn-warning" onClick={handleReset}>
              Atur Ulang
            </button>
          </div>
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {nodes ? (
                <>
                  {nodes.length !== 0 ? (
                    <div className={css.root}>
                      <RulerCanvas
                        min={0.05}
                        max={2.5}
                        captureWheel
                        className={`${css.wrapper} overflow-scroll` }
                      >
                        <ReactFamilyTree
                          nodes={nodes}
                          rootId={rootId}
                          width={WIDTH}
                          height={HEIGHT}
                          className={css.tree}
                          onSubClick={setRootId}
                          renderNode={(node) => (
                            <RulerNode
                              isRoot={node.id === rootId}
                              onClick={setSelectId}
                              onSubClick={setRootId}
                              key={node.id}
                              node={node}
                              selected={node.id === selectId}
                              style={{
                                width: WIDTH,
                                height: HEIGHT,
                                transform: `translate(${node.left * (WIDTH / 2)}px, ${node.top * (HEIGHT / 2)}px)`,
                            }}
                            />
                          )}
                        />
                      </RulerCanvas>
                      {selected && (
                        <RulerDetail
                          className={css.details}
                          node={selected}
                          onSelect={setSelectId}
                        />
                      )}
                    </div>
                  ) : (
                    <div>
                      <h3>
                        Data masih kosong, silahkan tunggu data di inputkkan
                        oleh pengelola
                      </h3>
                    </div>
                  )}
                </>
              ) : (
                <div>
                  <h3>loading..</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RulerTree;
