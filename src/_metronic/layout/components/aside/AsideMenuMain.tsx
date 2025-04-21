/* eslint-disable react/jsx-no-target-blank */
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
      <AsideMenuItem
        to='/formations'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Formations'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/produits'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Produits'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/accompagnement'
        title='Accompagnement'
        icon='/media/icons/duotune/general/gen019.svg'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/fournisseurs'
        title='Fournisseurs'
        icon='/media/icons/duotune/general/gen019.svg'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/vendeurs'
        title='Vendeurs'
        icon='/media/icons/duotune/general/gen019.svg'
        fontIcon='bi-layers'
      />
      {/* <AsideMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub> */}
      <AsideMenuItem
        to='/apps/user-management/users'
        icon='/media/icons/duotune/general/gen051.svg'
        title='User management'
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      <div className='menu-item'>
        <a
          target='_blank'
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
