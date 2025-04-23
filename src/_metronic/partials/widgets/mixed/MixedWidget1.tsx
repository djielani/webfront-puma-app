/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {KTSVG} from '../../../helpers'

type Props = {
  className?: string
  color?: string
}

const MixedWidget1 : React.FC<Props> = ({className = '', color = 'success'}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body p-0'>
        {/* begin::Header */}
        <div className={`px-9 pt-7 card-rounded h-275px w-100 bg-${color}`}>
          {/* begin::Heading */}
          <div className='d-flex flex-stack'>
            <h3 className='m-0 text-white fw-bold fs-3'>Ventes Mensuelles</h3>
            <div className='ms-1'>
              <button
                type='button'
                className={`btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color-${color} border-0 me-n3`}
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
              >
                <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
              </button>
              <Dropdown1 />
            </div>
          </div>
          {/* end::Heading */}

          {/* begin::Total */}
          <div className='d-flex text-center flex-column text-white pt-8'>
            <span className='fw-semibold fs-7'>Total avril</span>
            <span className='fw-bold fs-2x pt-1'>37 562 000 FCFA</span>
          </div>
          {/* end::Total */}
        </div>
        {/* end::Header */}

        {/* begin::Items */}
        <div
          className='shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body'
          style={{marginTop: '-100px'}}
        >
          {/* Produit vedette */}
          <div className='d-flex align-items-center mb-6'>
            <div className='symbol symbol-45px w-40px me-5'>
              <span className='symbol-label bg-light'>
                <KTSVG path='/media/icons/duotune/ecommerce/ecm002.svg' className='svg-icon-1' />
              </span>
            </div>
            <div className='flex-grow-1'>
              <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bold'>
                Produits vendus
              </a>
            </div>
            <div className='fw-bold fs-6 text-gray-800'>12 000 000 FCFA</div>
          </div>

          {/* Meilleure région */}
          <div className='d-flex align-items-center mb-6'>
            <div className='symbol symbol-45px w-40px me-5'>
              <span className='symbol-label bg-light'>
                <KTSVG path='/media/icons/duotune/maps/map004.svg' className='svg-icon-1' />
              </span>
            </div>
            <div className='flex-grow-1'>
              <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bold'>
                Top région
              </a>
            </div>
            <div className='fw-bold fs-6 text-gray-800'>Sédhiou</div>
          </div>

          {/* Taux de croissance */}
          <div className='d-flex align-items-center mb-6'>
            <div className='symbol symbol-45px w-40px me-5'>
              <span className='symbol-label bg-light'>
                <KTSVG path='/media/icons/duotune/ecommerce/ecm010.svg' className='svg-icon-1' />
              </span>
            </div>
            <div className='flex-grow-1'>
              <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bold'>
                Croissance
              </a>
            </div>
            <div className='fw-bold fs-6 text-gray-800'>+18%</div>
          </div>

          {/* Litiges en cours */}
          <div className='d-flex align-items-center'>
            <div className='symbol symbol-45px w-40px me-5'>
              <span className='symbol-label bg-light'>
                <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-1' />
              </span>
            </div>
            <div className='flex-grow-1'>
              <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bold'>
                Litiges
              </a>
            </div>
            <div className='fw-bold fs-6 text-danger'>+3 en cours</div>
          </div>
        </div>
        {/* end::Items */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {MixedWidget1}
