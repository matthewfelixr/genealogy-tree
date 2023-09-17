import React, { useEffect, useState, useMemo } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FamilyDetail from "../../components/FamilyTrees/FamilyDetail";
import FamilyNode from "../../components/FamilyTrees/FamilyNode";
import { PinchZoomPan } from "../../components/Canvas/PinchZoomPan";
import { getNodeStyle } from "../../components/FamilyTrees/utils";
import ReactFamilyTree from "react-family-tree";
import css from "../../components/FamilyTrees/FamilyTrees.module.css";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";

function FamilyTree() {
  const [nodes, setNodes] = useState(null);
  const [selectId, setSelectId] = useState("");
  const [rootId, setRootId] = useState();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get(`https://gen-tree-backend-fe240a55091e.herokuapp.com/api/v1/people`)
      .then((res) => {
        setNodes(res.data.data);
        setLoaded(true);
      })
      .catch(setNodes(null));
  }, [loaded]);

  useMemo(() => {
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
          <h1>Silsilah Keluarga Kerajaan Sumedang Larang</h1>
          <h6>Diambil dari masa pemerintahan Pangeran Kornel (Rd. A. A. Soerianagara)</h6>
          <div className="d-flex gap-2 mb-1">
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                {rooted ? `[ ${rooted.id} ]  ${rooted.nama} `  : "Pilih Anggota"}
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
                      {`[ ${node.id} ]  ${node.nama} `}
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
                      <PinchZoomPan
                        min={0.05}
                        max={2.5}
                        captureWheel
                        className={css.wrapper}
                      >
                        <ReactFamilyTree
                          nodes={nodes}
                          rootId={rootId}
                          width={300}
                          height={200}
                          className={css.tree}
                          onSubClick={setRootId}
                          renderNode={(node) => (
                            <FamilyNode
                              isRoot={node.id === rootId}
                              onClick={setSelectId}
                              onSubClick={setRootId}
                              key={node.id}
                              node={node}
                              selected={node.id === selectId}
                              style={getNodeStyle(node)}
                            />
                          )}
                        />
                      </PinchZoomPan>
                      {selected && (
                        <FamilyDetail
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

export default FamilyTree;
