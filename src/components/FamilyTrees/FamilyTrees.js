import React, { useState, useEffect, useMemo } from "react";
import ReactFamilyTree from "react-family-tree";
import FamilyNode from "./FamilyNode";
import { PinchZoomPan } from "../Canvas/PinchZoomPan";
import css from './FamilyTrees.module.css'
import { getNodeStyle } from "./utils";
import FamilyDetail from "./FamilyDetail";
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const FamilyTrees = ({tree}) => {

  
  const token = localStorage.getItem('token')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      if (!data.tanggal_wafat || isNaN(Date.parse(data.tanggal_wafat))) {
        data.tanggal_wafat = null; // Set death date to null if it's empty or invalid
      }
      if (!data.tanggal_lahir || isNaN(Date.parse(data.tanggal_lahir))) {
        data.tanggal_lahir = null; // Set death date to null if it's empty or invalid
      }
  
      const response = await axios.post('http://localhost:3030/people', data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
          // other headers if needed
        },
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  

  // const SOURCE = "average-tree.json"
  const [nodes, setNodes] = useState(null);
  const [selectId, setSelectId] = useState('');
  const [rootId, setRootId] = useState();
  useEffect(() => {
    if (tree !== null) {
      setNodes(tree.data);
    } else {
      setNodes(null);
    }
  }, [tree]);

  useMemo(() => {
    if (nodes && nodes.length > 0) {
      setRootId(nodes[0].id);
    } else {
      return 0;
    }
  }, [nodes]);

  const selected = useMemo(() => {
    if (nodes && nodes.length > 0) {
      return nodes.find(item => item.id === selectId);
    } else {
      return 0;
    }
  }, [nodes, selectId]);

  return (
    <>
    <div className="container">
      <div style={{ display: "flex", flexDirection: "row" }}>
        {nodes ? 
        <>
        {nodes.length !== 0 ? 
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
              onSelect = {setSelectId}
            />
          )}
        </div>
        : <div>
            <h3>Data masih kosong, silahkan tambah data pertama</h3>
            <button className="btn btn-success" onClick={handleShow}>Tambahkan Anggota</button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Tambahkan Data Anggota</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <p className="form-label">Nama</p>
                <input className="form-basic-data" type="text" placeholder="Nama Lengkap" {...register("nama", {required: true})} />
                <p className="form-label">Alias</p>
                <input className="form-basic-data" type="text" placeholder="Alias" {...register("alias", {required: true})} />
                <p className="form-label">Nama Kecil</p>
                <input className="form-basic-data" type="text" placeholder="Nama Kecil" {...register("nama_kecil", {required: true})} />
                <p className="form-label">Jabatan</p>
                <input className="form-basic-data" type="text" placeholder="Jabatan" {...register("jabatan", {required: true})} />
                <p className="form-label">Tahun Awal Menjabat</p>
                <input className="form-basic-data" type="text" placeholder="Cth:1822" {...register("awal_jabatan", {required: true})} />
                <p className="form-label">Tahun Akhir Menjabat</p>
                <input className="form-basic-data" type="text" placeholder="Cth:1830" {...register("akhir_jabatan", {required: true})} />
                <div>
                  <p className="form-label">Jenis Kelamin</p>
                  <label>Laki-laki</label>
                  <input {...register("gender", { required: true })} type="radio" value="male" />
                  <label>Perempuan</label>
                  <input {...register("gender", { required: true })} type="radio" value="female" />
                </div>
                <p className="form-label"> Alamat </p>
                <input className="form-basic-data" type="text" placeholder="Alamat" {...register("address", {required: true, maxLength: 80})} />
                <div className="container m-0 p-0 d-flex">
                  <div className="w-50 p-1">
                    <p className="form-label">Tanggal Lahir</p>
                    <input className="form-basic-data" type="date" placeholder="Tanggal Lahir" {...register("tanggal_lahir", {})} />
                  </div>
                  <div className="w-50 p-1">
                    <p className="form-label">Tanggal Wafat</p>
                    <input className="form-basic-data" type="date" placeholder="Tanggal Wafat" {...register("tanggal_wafat", {})} />
                  </div>
                </div>
                <p className="form-label">Alamat Makam</p>
                <input className="form-basic-data" type="text" placeholder="Alamat Makam" {...register("alamat_makam", {})} />

                <input className="btn-submit" type="submit" />
              </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Tutup
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Simpan Draft
                </Button>
              </Modal.Footer>
            </Modal>
          </div>} 
        </> : <div>
                <h3>
                  loading..
                </h3>
              </div>} 
        
      </div>
    </div>
    </>
  );
};

export default FamilyTrees;
