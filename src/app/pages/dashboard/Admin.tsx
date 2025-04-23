import { FC } from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { useIntl } from 'react-intl'
import { MixedWidget10, TablesWidget10, ListsWidget3, MixedWidget1, MixedWidget2, MixedWidget4 } from '../../../_metronic/partials/widgets'
import { CalendarWidget } from '../../../_metronic/partials/widgets/calendar/Calandar'

const DashboardAdminPage: FC = () => {
    return (
        <>
            {/* Graphique Finacements */}
            <div className='col-xxl-12'>
                <MixedWidget10
                    className='card-xl-stretch mb-xl-8'
                    chartColor='primary'
                    chartHeight='200px'
                // title='Évolution des inscriptions'
                // description='Sur les 30 derniers jours'
                />
            </div>
            <div className='row gy-5 g-xl-8'>
                {/* Ventes Mensuelles */}
                <div className='col-md-6'>
                    <MixedWidget1
                        className='card-xl-stretch mb-xl-8'
                        color='primary'
                    // chartHeight='150px'
                    // title='Utilisateurs'
                    // description='Inscrits ce mois'
                    // stats='+325'
                    />
                </div>
                {/* Projets & Accompagnementss */}
                <div className='col-md-6'>
                    <MixedWidget2
                        className='card-xl-stretch mb-xl-8'
                        chartColor='info'
                        chartHeight='150px'
                        strokeColor={''}
                    // title='Demandes d’accompagnement'
                    // description='En attente de traitement'
                    // stats='15'
                    />
                </div>
                {/* <div className='col-md-4'>
                    <MixedWidget1
                        className='card-xl-stretch mb-xl-8'
                        color='danger'
                    // chartHeight='150px'
                    // title='Formations'
                    // description='Actives'
                    // stats='24'
                    />
                </div> */}
            </div>

            {/* Tableau des produits récents */}
            <div className='row gy-5 g-xl-8'>
                <div className='col-xxl-12'>
                    <TablesWidget10
                        className='card-xxl-stretch mb-5 mb-xl-8'
                    // title='Produits récents'
                    />
                </div>

                {/* Activité / alertes
                <div className='col-xxl-4'>
                    <MixedWidget2
                        className='card-xl-stretch mb-xl-8'
                        chartColor='info'
                        chartHeight='150px'
                        strokeColor={''}
                    // title='Demandes d’accompagnement'
                    // description='En attente de traitement'
                    // stats='15'
                    />
                </div> */}
            </div>

            {/* Todo */}
            <div className='row gy-5 g-xl-8'>
                <div className='col-xxl-4'>
                    <ListsWidget3
                        className='card-xxl-stretch mb-5 mb-xl-8'
                    // title='Nouveaux inscrits'
                    />
                </div>
                {/* Calendrier */}
                <div className='col-xxl-8'>
                    <div className='card-xxl-stretch mb-5 mb-xl-8'>
                        <CalendarWidget />
                    </div>
                </div>
            </div>
        </>
    )
}


const DashboardAdmin: FC = () => {
    const intl = useIntl()

    return (
        <>
            {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.ADMIN_DASHBOARD' })}</PageTitle> */}
            <DashboardAdminPage />
        </>
    )
}

export default DashboardAdmin
