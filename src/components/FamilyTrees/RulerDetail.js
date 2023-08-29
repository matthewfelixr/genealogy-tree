import React from 'react'
import classNames from 'classnames';
import css from './RulerDetail.module.css'



const RulerDetail = ({node, className, onSelect,props}) => {
  // console.log(node)
    // const closeHandler = useCallback(() => props.onSelect(undefined), [props] )
  return (
    <section className={classNames(css.root)}>
        <header>
            <div className='d-flex'>
              <div className='row'>
                <div className='col'>
                <h3 className={css.title}>Nama:{node.name}</h3>
                <h3 className={css.title}>Gelar / Julukan:{node.title}</h3>
                <h3 className={css.title}>Masa Jabatan:{node.serve_start} - {node.serve_end} </h3>
                <h3 className={css.title}>Letak Ibukota:{node.capital}</h3>
                <h4 className={css.title}>Catatan: Apabila Ibukota tidak dituliskan, maka Ibukota memiliki letak sama dengan sebelumnya</h4>
                </div>
                <div className='col'>
                  <h3 className={css.title}>Petunjuk warna</h3>
                  <div><span className={classNames(css.color_legend,css.otonom)}/><h3 className={`${css.title} d-inline-block`}>  Bentuk Pemerintahan Kerajaan Otonom</h3></div>
                  <div><span className={classNames(css.color_legend,css.mataram)}/><h3 className={`${css.title} d-inline-block`}> Masa Pemerintahan Kerajaan Mataram</h3></div>
                  <div><span className={classNames(css.color_legend,css.belanda)}/><h3 className={`${css.title} d-inline-block`}> Masa Pemerintahan Kerajaan Belanda</h3></div>
                  <div><span className={classNames(css.color_legend,css.inggris)}/><h3 className={`${css.title} d-inline-block`}> Masa Pemerintahan Kerajaan Inggris</h3></div>
                  <div><span className={classNames(css.color_legend,css.jepang)}/><h3 className={`${css.title} d-inline-block`}>  Masa Pemerintahan Kekaisaran Jepang</h3></div>
                  <div><span className={classNames(css.color_legend,css.nkri)}/><h3 className={`${css.title} d-inline-block`}>    Masa Pemerintahan Negara Kesatuan Republik Indonesia</h3></div>
                </div>
              </div>
            </div>
        </header>
    </section>
  )
}

export default RulerDetail