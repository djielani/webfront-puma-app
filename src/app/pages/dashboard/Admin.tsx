import { FC } from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { useIntl } from 'react-intl'
import { MixedWidget10, TablesWidget10, ListsWidget3, MixedWidget1, MixedWidget2, MixedWidget4 } from '../../../_metronic/partials/widgets'

const DashboardAdminPage: FC = () => {
    return (
        <>
            <div className='row gy-5 g-xl-8'>
                <div className='col-xxl-4'>
                    <MixedWidget4 className={''} color={''} image={''} title={''} date={''} progress={''} />
                </div>

                <div className='col-xxl-8'>
                    <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
                </div>
            </div>

            <div className='row gy-5 g-xl-8'>
                <div className='col-xxl-12'>
                    <ListsWidget3 className='card-xxl-stretch mb-5 mb-xl-8' />
                </div>
            </div>
        </>
    )
}

const DashboardAdmin: FC = () => {
    const intl = useIntl()

    return (
        <>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.ADMIN_DASHBOARD' })}</PageTitle>
            <DashboardAdminPage />
        </>
    )
}

export default DashboardAdmin
