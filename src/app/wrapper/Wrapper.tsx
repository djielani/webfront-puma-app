import React, { useState, FC } from 'react'
import { PageTitle } from '../../_metronic/layout/core'
import clsx from 'clsx'
// import { KTSVG } from '../../../_metronic/helpers'
import { getLayout, ILayout, LayoutSetup, useLayout } from '../../_metronic/layout/core'


const Wrapper: FC = () => {
    const pageName = window.location.pathname.split('/').pop()
    const { setLayout } = useLayout()
    const [tab, setTab] = useState('Header')
    const [config, setConfig] = useState<ILayout>(getLayout())
    const [configLoading, setConfigLoading] = useState<boolean>(false)
    const [resetLoading, setResetLoading]   = useState<boolean>(false)

    const updateData = (fieldsToUpdate: Partial<ILayout>) => {
        const updatedData = { ...config, ...fieldsToUpdate }
        setConfig(updatedData)
    }

    const updateConfig = () => {
        setConfigLoading(true)
        try {
            LayoutSetup.setConfig(config)
        } catch (error) {
            setConfig(getLayout())
        }
        setTimeout(() => {
            setLayout(config)
            setConfigLoading(false)
        }, 1000)
    }

    const reset = () => {
        setResetLoading(true)
        setTimeout(() => {
            setConfig(getLayout())
            setResetLoading(false)
        }, 1000)
    }
    return (
        <>
            <PageTitle breadcrumbs={[]}>{pageName}</PageTitle>
            {/* cette partie va contenir les elements des autres pages */}
        </>
    )
}

export default Wrapper