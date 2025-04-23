/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget10: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* Début::En-tête */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Statistiques des membres</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Plus de 500 membres</span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Cliquez pour ajouter un utilisateur'
        >
          <a
            href='#'
            className='btn btn-sm btn-light-primary'
          >
            <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
            Nouveau membre
          </a>
        </div>
      </div>
      {/* Fin::En-tête */}
      {/* Début::Corps */}
      <div className='card-body py-3'>
        {/* Début::Conteneur de table */}
        <div className='table-responsive'>
          {/* Début::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* Début::En-tête de table */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-9-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px'>Nom</th>
                <th className='min-w-140px'>Rôle</th>
                <th className='min-w-140px'>Projet</th>
                <th className='min-w-140px'>Coopératives</th>
                <th className='min-w-100px text-end'>Actions</th>
              </tr>
            </thead>
            {/* Fin::En-tête de table */}
            {/* Début::Corps de table */}
            <tbody>
              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('/media/avatars/300-14.jpg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        Ana Diouf
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        anadiouf@example.com
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className='text-dark fw-bold d-block fs-6'>Entrepreneure rurale</span>
                </td>
                <td>
                  <span className='text-dark fw-bold d-block fs-6'>Projet Maraîchage Bio</span>
                  <span className='text-muted fw-semibold d-block fs-7'>Phase d'incubation</span>
                </td>
                <td>
                  <span className='text-dark fw-bold d-block fs-6'>Jappo Liggey</span>
                  <span className='text-muted fw-semibold d-block fs-7'>Fatick</span>
                </td>
                <td className='text-end'>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      title='Voir'
                    >
                      <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      title='Modifier'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                      title='Supprimer'
                    >
                      <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
            {/* Fin::Corps de table */}
          </table>
          {/* Fin::Table */}
        </div>
        {/* Fin::Conteneur de table */}
      </div>
      {/* Fin::Corps */}
    </div>
  )
}

export {TablesWidget10}
