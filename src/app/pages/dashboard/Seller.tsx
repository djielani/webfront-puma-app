import { FC } from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { useIntl } from 'react-intl'
import {
    MixedWidget11,
    MixedWidget8,
    ListsWidget6,
    TablesWidget5,
} from '../../../_metronic/partials/widgets'

const DashboardSellerPage: FC = () => {
    return (
        <>
            <div className='row gy-5 g-xl-8'>
                <div className='col-xxl-4'>
                    <MixedWidget11
                        className='card-xxl-stretch mb-xl-8'
                        chartColor='success'
                        chartHeight='200px'
                    />
                </div>
                <div className='col-xxl-4'>
                    <ListsWidget6 className='card-xxl-stretch mb-5 mb-xl-8' />
                </div>
                <div className='col-xxl-4'>
                    <MixedWidget8
                        className='card-xxl-stretch mb-5 mb-xl-8'
                        chartColor='warning'
                        chartHeight='150px'
                    />
                </div>
            </div>

            <div className='row gy-5 g-xl-8'>
                <div className='col-xxl-12'>
                    <TablesWidget5 className='card-xxl-stretch mb-5 mb-xl-8' />
                </div>
            </div>
        </>
    )
}

const DashboardSeller: FC = () => {
    const intl = useIntl()

    return (
        <>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.SELLER_DASHBOARD' })}</PageTitle>
            <DashboardSellerPage />
        </>
    )
}

export default DashboardSeller
