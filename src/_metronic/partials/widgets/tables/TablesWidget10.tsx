/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import CreateUserModal from '../../../../app/modules/modals/CreateUserModal'
import { getUsers } from '../../../../services/userServices'

type Props = {
  className: string
}

const TablesWidget10: React.FC<Props> = ({className}) => {
  const [users, setUsers] = React.useState<any[]>([])
  const [total, setTotal] = React.useState<number>(0)

  React.useEffect(() => {
    getUsers()
      .then(response => {
        console.log('Users response:', response)

        const userList = Array.isArray(response?.data) ? response.data : []
        setUsers(userList)
        setTotal(response?.total || 0)

        userList.forEach((user: any) => {
          console.log('Username:', user.username)
        })
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs:', error)
      })
  }, [])

  return (
    <>
      <div className={`card ${className}`}>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Statistiques des membres</span>
            <span className='text-muted mt-1 fw-semibold fs-7'>
              {total > 0 ? `${total} membres` : 'Aucun membre'}
            </span>
          </h3>
          <div className='card-toolbar' title='Cliquez pour ajouter un utilisateur'>
            <a
              type='button'
              data-bs-toggle='modal'
              data-bs-target='#CreateUserModal'
              className='btn btn-sm btn-light-primary'
            >
              <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
              Nouveau membre
            </a>
          </div>
        </div>

        <div className='card-body py-3'>
          <div className='table-responsive'>
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              <thead>
                <tr className='fw-bold text-muted'>
                  <th className='w-25px'>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                      <input className='form-check-input' type='checkbox' />
                    </div>
                  </th>
                  <th className='min-w-150px'>Nom</th>
                  <th className='min-w-140px'>Rôle</th>
                  <th className='min-w-140px'>Projet</th>
                  <th className='min-w-140px'>Coopératives</th>
                  <th className='min-w-100px text-end'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={user.id || index}>
                      <td>
                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input className='form-check-input widget-9-check' type='checkbox' />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='symbol symbol-45px me-5'>
                            <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='' />
                          </div>
                          <div className='d-flex justify-content-start flex-column'>
                            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                              {user.firstName + ' ' + user.lastName}
                            </a>
                            <span className='text-muted fw-semibold text-muted d-block fs-7'>
                              {user.email}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='text-dark fw-bold d-block fs-6'>{user.role}</span>
                      </td>
                      <td>
                        <span className='text-dark fw-bold d-block fs-6'>{user.projet}</span>
                        <span className='text-muted fw-semibold d-block fs-7'>{user.statutProjet}</span>
                      </td>
                      <td>
                        <span className='text-dark fw-bold d-block fs-6'>{user.cooperative}</span>
                        <span className='text-muted fw-semibold d-block fs-7'>{user.localisation}</span>
                      </td>
                      <td className='text-end'>
                        <div className='d-flex justify-content-end flex-shrink-0'>
                          <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1' title='Voir'>
                            <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                          </a>
                          <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1' title='Modifier'>
                            <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                          </a>
                          <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm' title='Supprimer'>
                            <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className='text-center text-muted py-10'>
                      Aucun utilisateur trouvé.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CreateUserModal />
    </>
  )
}

export {TablesWidget10}
