import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/layouts/lay001.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItemWithSub
        to='/users'
        title='Utilisateurs'
        fontIcon='bi-people'
        icon='/media/icons/duotune/general/gen051.svg'
      >
        <AsideMenuItem to='/users/liste' title='Liste' hasBullet={true} />
        <AsideMenuItem to='/users/nouveaux' title='Nouveaux' hasBullet={true} />
        <AsideMenuItem to='/users/roles' title='Rôles' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/produits'
        title='Produits'
        fontIcon='bi-basket'
        icon='/media/icons/duotune/general/gen019.svg'
      >
        <AsideMenuItem to='/produits/liste' title='Liste' hasBullet={true} />
        <AsideMenuItem to='/produits/attente' title='En attente' hasBullet={true} />
        <AsideMenuItem to='/produits/ajouter' title='Ajouter' hasBullet={true} />
        <AsideMenuItem to='/produits/categories' title='Catégories' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItem
        to='/formations'
        icon='/media/icons/duotune/education/edu001.svg'
        title='Formations'
        fontIcon='bi-book'
      />

      <AsideMenuItemWithSub
        to='/vendeurs'
        title='Vendeurs'
        fontIcon='bi-shop'
        icon='/media/icons/duotune/ecommerce/ecm004.svg'
      >
        <AsideMenuItem to='/vendeurs/liste' title='Liste' hasBullet={true} />
        <AsideMenuItem to='/vendeurs/attente' title='À valider' hasBullet={true} />
        <AsideMenuItem to='/vendeurs/blocages' title='Blocages' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItem
        to='/fournisseurs'
        title='Fournisseurs'
        icon='/media/icons/duotune/ecommerce/ecm001.svg'
        fontIcon='bi-truck'
      />

      <AsideMenuItemWithSub
        to='/accompagnement'
        title='Projets'
        icon='/media/icons/duotune/files/fil008.svg'
        fontIcon='bi-kanban'
      >
        <AsideMenuItem to='/accompagnement/demandes' title='Demandes' hasBullet={true} />
        <AsideMenuItem to='/accompagnement/suivi' title='Suivi' hasBullet={true} />
        <AsideMenuItem to='/accompagnement/conseillers' title='Conseillers' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItem
        to='/cooperatives'
        title='Coopératives'
        icon='/media/icons/duotune/abstract/abs042.svg'
        fontIcon='bi-people'
      />

      <AsideMenuItem
        to='/rapports'
        title='Rapports'
        icon='/media/icons/duotune/graphs/gra005.svg'
        fontIcon='bi-bar-chart'
      />

      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>

      <div className='menu-item'>
        <a
          target='_blank' rel="noreferer noreferrer"
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div>
    </>
  )
}
export default AsideMenuMain