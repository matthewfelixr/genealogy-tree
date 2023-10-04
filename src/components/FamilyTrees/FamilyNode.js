import React, { useState,useCallback } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import css from './FamilyNode.module.css';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './FormAddData.css';

// import CardMember from '../Cards/CardMember/CardMember'

const FamilyNode = ({ node, isRoot, isHover, onClick, onSubClick, style, selected }) => {
  const token = localStorage.getItem('token')
  const [clickedNodeId, setClickedNodeId] = useState(null);
  const [loading,setLoading] = useState(false);
  const clickHandler = useCallback(() => {
    setClickedNodeId(node.id);
    onClick(node.id);
  }, [node.id, onClick]);
  const clickSubHandler = useCallback(() => onSubClick(node.id), [node.id, onSubClick]);
  
  const {
    register: registerForm,
    formState: { errors: errorsForm },
    handleSubmit: handleSubmitForm,
  } = useForm();

  const {
    register: registerEditForm,
    formState: { errors: errorsEditForm },
    handleSubmit: handleSubmitEditForm,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true)
    // console.log(loading)
    try {
      const requestData = { ...data, existing_id: clickedNodeId }; // Include existing_id in the request data
      if (!requestData.tanggal_wafat || isNaN(Date.parse(requestData.tanggal_wafat))) {
        requestData.tanggal_wafat = null; // Set tanggal date to null if it's empty or invalid
      }
      if (!requestData.tanggal_lahir || isNaN(Date.parse(requestData.tanggal_lahir))) {
        requestData.tanggal_lahir = null; // Set death date to null if it's empty or invalid
      }

      const response = await axios.post(
        'https://gen-tree-backend-fe240a55091e.herokuapp.com/api/v1/people/addWithRelation',
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        }
      );
      // console.log(response.data);
      window.location.reload()
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
    
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const tanggal_wafat = new Date(node?.tanggal_wafat).toISOString().split("T")[0];
  const tanggal_lahir =new Date(node?.tanggal_lahir).toISOString().split("T")[0];
  const onSubmit2 = async (data) => {
    console.log(data)
    setLoading(true)
    try {
      const requestData = { ...data, id: clickedNodeId }; // Include existing_id in the request data
      if (!requestData.tanggal_wafat || isNaN(Date.parse(requestData.tanggal_wafat))) {
        requestData.tanggal_wafat = null; // Set tanggal date to null if it's empty or invalid
      }
      if (!requestData.tanggal_lahir || isNaN(Date.parse(requestData.tanggal_lahir))) {
        requestData.tanggal_lahir = null; // Set death date to null if it's empty or invalid
      }

      const response = await axios.put(
        'https://gen-tree-backend-fe240a55091e.herokuapp.com/api/v1/people/updateBiodata',
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        }
      );
      // console.log(response.data);
      window.location.reload()
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
    
  };
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  return (
    <div className={css.root} style={style}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambahkan Data Relasi Anggota</Modal.Title>
        </Modal.Header>
        <Modal.Header>
          <h5 className='m-0'> Untuk :{node.nama}</h5>
        </Modal.Header>
        <Modal.Header>
          <p className="m-0">Catatan: Sebelum menambahkan relasi ke level yang lebih bawah (anak), lengkapi relasi dengan level (pasangan) terlebih dahulu</p>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmitForm(onSubmit)}>
                <p className='form-label'> Hubungan </p>
                  <select className='form-basic-data' {...registerForm("relation")}>
                    <option value="parent">Orang Tua</option>
                    <option value="children">Anak</option>
                    <option value="sibling">Saudara</option>
                    <option value="spouse">Pasangan</option>
                  </select>
                <p className="form-label">Nama</p>
                <input className={`form-basic-data ${errorsForm.nama ? "border-2 border-danger" : ""}`} type="text" placeholder="Nama Lengkap" {...registerForm("nama", {required: true})} />
                {errorsForm.nama && <span className="text-danger">Nama Harus Diisi ! </span>}
                <p className="form-label">Alias</p>
                <input className="form-basic-data" type="text" placeholder="Alias" {...registerForm("alias", {required: true})} />
                <p className="form-label">Nama Kecil</p>
                <input className="form-basic-data" type="text" placeholder="Nama Kecil" {...registerForm("nama_kecil", {required: true})} />
                <p className="form-label">Jabatan</p>
                <input className="form-basic-data" type="text" placeholder="Jabatan" {...registerForm("jabatan", {required: true})} />
                <p className="form-label">Tahun Awal Menjabat</p>
                <input className="form-basic-data" type="text" placeholder="Cth:1822" {...registerForm("awal_jabatan", {required: true})} />
                <p className="form-label">Tahun Akhir Menjabat</p>
                <input className="form-basic-data" type="text" placeholder="Cth:1830" {...registerForm("akhir_jabatan", {required: true})} />
                <div>
                  <p className="form-label">Jenis Kelamin</p>
                  <label>Laki-laki</label>
                  <input {...registerForm("gender", { required: true })} type="radio" value="male" />
                  <label>Perempuan</label>
                  <input {...registerForm("gender", { required: true })} type="radio" value="female" />
                </div>
                <p className="form-label"> Alamat </p>
                <input className="form-basic-data" type="text" placeholder="Alamat" {...registerForm("alamat", {required: true, maxLength: 80})} />
                <div className="container m-0 p-0 d-flex">
                  <div className="w-50 p-1">
                    <p className="form-label">Tanggal Lahir</p>
                    <input className="form-basic-data" type="date" placeholder="Tanggal Lahir" {...registerForm("tanggal_lahir", {})} />
                  </div>
                  <div className="w-50 p-1">
                    <p className="form-label">Tanggal Wafat</p>
                    <input className="form-basic-data" type="date" placeholder="Tanggal Wafat" {...registerForm("tanggal_wafat", {})} />
                  </div>
                </div>
                <p className="form-label">Alamat Makam</p>
                <input className="form-basic-data" type="text" placeholder="Alamat Makam" {...registerForm("alamat_makam", {})} />

                <input className={`btn-submit ${loading === true ? "disabled btn btn-secondary" : ""}`} type="submit" />
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
      {/* Modal For Edit */}
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Ubah Biodata Anggota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmitEditForm(onSubmit2)}>
          <div>
            <h4>Anggota : [{`ID - ${node.id}`}] {node.nama}</h4>
          </div>
          {/* <div>{node.name}</div> */}
          <p className='form-label'>Nama</p>
          <input className={`form-basic-data ${errorsForm.nama ? "border-2 border-danger" : ""}`} type="text" placeholder="Nama Lengkap" defaultValue={node?.nama} {...registerEditForm("nama", {required: true})} />
          {errorsEditForm.nama && <span className="text-danger">Nama Harus Diisi ! </span>}
          <p className="form-label">Alias</p>
                <input className="form-basic-data" type="text" placeholder="Alias" {...registerEditForm("alias", {required: true})} defaultValue={node?.alias} />
                <p className="form-label">Nama Kecil</p>
                <input className="form-basic-data" type="text" placeholder="Nama Kecil" {...registerEditForm("nama_kecil", {required: true})} defaultValue={node?.nama_kecil} />
                <p className="form-label">Jabatan</p>
                <input className="form-basic-data" type="text" placeholder="Jabatan" {...registerEditForm("jabatan", {required: true})} defaultValue={node?.jabatan} />
                <p className="form-label">Tahun Awal Menjabat</p>
                <input className="form-basic-data" type="text" placeholder="Cth:1822" {...registerEditForm("awal_jabatan", {required: true})} defaultValue={node?.awal_jabatan} />
                <p className="form-label">Tahun Akhir Menjabat</p>
                <input className="form-basic-data" type="text" placeholder="Cth:1830" {...registerEditForm("akhir_jabatan", {required: true})} defaultValue={node?.akhir_jabatan} />
          <div>
            <p className="form-label">Jenis Kelamin</p>
            <label>Laki-laki</label>
            <input {...registerEditForm("gender", { required: true })} type="radio" value="male"  defaultChecked={node?.gender === "male"}/>
            <label>Perempuan</label>
            <input {...registerEditForm("gender", { required: true })} type="radio" value="female" defaultChecked={node?.gender === "female"} />
          </div>
          <p className="form-label"> Alamat </p>
          <input className="form-basic-data" type="text" placeholder="Alamat" {...registerEditForm("alamat", {required: true, maxLength: 80})} defaultValue={node?.alamat} />
          <div className="container m-0 p-0 d-flex">
            <div className="w-50 p-1">
              <p className="form-label">Tanggal Lahir</p>
              <input className="form-basic-data" type="date" placeholder="Tanggal Lahir" {...registerEditForm("tanggal_lahir", {})} defaultValue={node?.tanggal_lahir ? tanggal_lahir : ""} />
            </div>
            <div className="w-50 p-1">
              <p className="form-label">Tanggal Wafat</p>
              <input className="form-basic-data" type="date" placeholder="Tanggal Wafat" {...registerEditForm("tanggal_wafat", {})} defaultValue={node?.tanggal_wafat ? tanggal_wafat : ""} />
            </div>
          </div>
          <p className="form-label">Alamat Makam</p>
          <input className="form-basic-data" type="text" placeholder="Alamat Makam" {...registerEditForm("alamat_makam", {})} defaultValue={node?.alamat_makam} />
          <input className={`btn-submit ${loading === true ? "disabled btn btn-secondary" : ""}`} type="submit" />
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose2}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Simpan Draft
          </Button>
        </Modal.Footer>
      </Modal>
        <div
          className={classNames(
            css.inner,
            css[node.gender],
            isRoot && css.isRoot,
            isHover && css.isHover,
          )}
          onClick={clickHandler}
          
        >
          <div className={css.container}>
              <div className="mx-auto fw-bolder">
                {node.nama}
              </div>
              <div className="mx-auto fw-bold fs-6">
                {node.alias}
              </div>
              <div className="mx-auto">
                {node.tanggal_lahir ? moment(node.tanggal_lahir).format('DD-MM-YYYY') : ""}
              </div>
              <div className="mx-auto">
                {node.tanggal_wafat ? moment(node.tanggal_wafat).format('DD-MM-YYYY') + " (Meninggal)" : ""}
              </div>
              <div className="mx-auto">
                {node.alamat_makam}
              </div>
            </div>
        </div>
        {(selected && token) &&(
          <>
          <button className={classNames(css.add)} onClick={handleShow}>+</button>
          <button className={classNames(css.edit)} onClick={handleShow2}>Edit</button>
          </>
        )}
        {node.hasSubTree && (
          <div
            className={classNames(css.sub, css[node.gender])}
            onClick={clickSubHandler}
          />
        )}
      </div>
  );
};

export default FamilyNode;
