import { FC } from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { useIntl } from 'react-intl'
import {
    MixedWidget2,
    ListsWidget2,
    ListsWidget5,
    TablesWidget10,
} from '../../../_metronic/partials/widgets'

const DashboardBuyerPage: FC = () => {
    return (
        <>
            <div className='row gy-5 g-xl-8'>
                <div className='col-xxl-4'>
                    <MixedWidget2
                        className='card-xl-stretch mb-xl-8'
                        chartColor='primary'
                        chartHeight='200px'
                        strokeColor='#009ef7'
                    />
                </div>
                <div className='col-xxl-4'>
                    <ListsWidget5 className='card-xxl-stretch mb-xl-8' />
                </div>
                <div className='col-xxl-4'>
                    <ListsWidget2 className='card-xxl-stretch mb-xl-8' />
                </div>
            </div>

            <div className='row gy-5 g-xl-8'>
                <div className='col-xxl-12'>
                    <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
                </div>
            </div>
        </>
    )
}

const DashboardBuyer: FC = () => {
    const intl = useIntl()

    return (
        <>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.BUYER_DASHBOARD' })}</PageTitle>
            <DashboardBuyerPage />
        </>
    )
}

export default DashboardBuyer
