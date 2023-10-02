import React, { useCallback } from 'react'
import classNames from 'classnames';
import moment from 'moment';
import css from './FamilyDetail.module.css';



const FamilyDetail = ({node, className, onSelect,props}) => {
  // console.log(node)
    // const closeHandler = useCallback(() => props.onSelect(undefined), [props] )
  return (
    <section className={classNames(css.root)}>
        <header>
          <div className='container m-0 p-0 d-flex'>
            <div className='w-50'>
              <h3 className={css.title}>Nama:{node.nama} | ID:{node.id} </h3>
              <h3 className={css.title}>Alias:{node.alias} </h3>
              <h3 className={css.title}>Nama Kecil:{node.nama_kecil} </h3>
              <h3 className={css.title}>Alamat:{node.alamat} </h3>
              <h3 className={css.title}>Tanggal Lahir:{node.tanggal_lahir ? moment(node.tanggal_lahir).format('DD-MM-YYYY') : "-"} </h3>
              <h3 className={css.title}>Tanggal Wafat:{node.tanggal_wafat ? moment(node.tanggal_wafat).format('DD-MM-YYYY') : "-"} </h3>
              <h3 className={css.title}>Makam:{node.alamat_makam} </h3>
            </div>
            <div className='w-50'>
              <h3 className={css.title}>Jabatan:{node.jabatan} </h3>
              <h3 className={css.title}>Masa Pemerintahan:{(node.awal_jabatan !== "-" ? node.awal_jabatan : <></>)} - {(node.akhir_jabatan !== "-" ? node.akhir_jabatan : <></>)} </h3>
              {/* <h3 className={css.title}>Parents:{node.parents?.map((nodeItem, idx)=>(
                <span key={idx} className={css.title}>{nodeItem.id} </span>
              ))} </h3>
              <h3 className={css.title}>Children:{node.children?.map((nodeItem, idx)=>(
                <span key={idx} className={css.title}>{nodeItem.id} </span>
              ))} </h3>
              <h3 className={css.title}>Siblings:{node.siblings?.map((nodeItem, idx)=>(
                <span key={idx} className={css.title}>{nodeItem.id} </span>
              ))} </h3>
              <h3 className={css.title}>Spouse:{node.spouses?.map((nodeItem, idx)=>(
                <span key={idx} className={css.title}>{nodeItem.id} </span>
              ))} </h3> */}
            </div>
          </div>
            
            {/* <h3 className={css.title}>Orang Tua :{node.parents}</h3> */}
        </header>
        {/* {node?.map((item, idx) => (
          <div
            key={idx}
            className=""
          >
            {item.id} ({item.type})
          </div>
        ))} */}
    </section>
  )
}

export default FamilyDetail