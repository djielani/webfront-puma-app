/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {KTSVG} from '../../../helpers'
import {getCSSVariableValue} from '../../../assets/ts/_utils'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {useThemeMode} from '../../layout/theme-mode/ThemeModeProvider'

type Props = {
  className: string
  chartColor: string
  strokeColor: string
  chartHeight: string
}

const MixedWidget2: React.FC<Props> = ({className, chartColor, chartHeight, strokeColor}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()

  const refreshChart = () => {
    if (!chartRef.current) return

    const chart = new ApexCharts(
      chartRef.current,
      chartOptions(chartHeight, chartColor, strokeColor)
    )
    if (chart) chart.render()
    return chart
  }

  useEffect(() => {
    const chart = refreshChart()
    return () => {
      if (chart) chart.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef, mode])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className={`card-header border-0 py-5 bg-${chartColor}`}>
        <h3 className='card-title fw-bold text-white'>Projets & Accompagnements</h3>
        <div className='card-toolbar'>
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color- border-0 me-n3'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body p-0'>
        <div
          ref={chartRef}
          className={`mixed-widget-2-chart card-rounded-bottom bg-${chartColor}`}
        ></div>

        <div className='card-p mt-n20 position-relative'>
          <div className='row g-0'>
            <div className='col bg-light-warning px-6 py-8 rounded-2 me-7 mb-7'>
              <KTSVG
                path='/media/icons/duotune/files/fil004.svg'
                className='svg-icon-3x svg-icon-warning d-block my-2'
              />
              <a href='#' className='text-warning fw-semibold fs-6'>
                Projets actifs
              </a>
            </div>
            <div className='col bg-light-primary px-6 py-8 rounded-2 mb-7'>
              <KTSVG
                path='/media/icons/duotune/communication/com012.svg'
                className='svg-icon-3x svg-icon-primary d-block my-2'
              />
              <a href='#' className='text-primary fw-semibold fs-6'>
                Nouveaux accompagnements
              </a>
            </div>
          </div>

          <div className='row g-0'>
            <div className='col bg-light-danger px-6 py-8 rounded-2 me-7'>
              <KTSVG
                path='/media/icons/duotune/ecommerce/ecm008.svg'
                className='svg-icon-3x svg-icon-danger d-block my-2'
              />
              <a href='#' className='text-danger fw-semibold fs-6 mt-2'>
                Projets clôturés
              </a>
            </div>
            <div className='col bg-light-success px-6 py-8 rounded-2'>
              <KTSVG
                path='/media/icons/duotune/general/gen014.svg'
                className='svg-icon-3x svg-icon-success d-block my-2'
              />
              <a href='#' className='text-success fw-semibold fs-6 mt-2'>
                Taux de réussite
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (
  chartHeight: string,
  chartColor: string,
  strokeColor: string
): ApexOptions => {
  const labelColor = getCSSVariableValue('--kt-gray-500')
  const borderColor = getCSSVariableValue('--kt-gray-200')
  const color = getCSSVariableValue('--kt-' + chartColor)

  return {
    series: [
      {
        name: 'Projets lancés',
        data: [10, 14, 20, 25, 22, 30, 28],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: chartHeight,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        top: 5,
        left: 0,
        blur: 3,
        color: strokeColor,
        opacity: 0.5,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 0,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [strokeColor],
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        show: false,
        position: 'front',
        stroke: {
          color: borderColor,
          width: 1,
          dashArray: 3,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 40,
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return val + ' projets'
        },
      },
      marker: {
        show: false,
      },
    },
    colors: ['transparent'],
    markers: {
      colors: [color],
      strokeColors: [strokeColor],
      strokeWidth: 3,
    },
  }
}

export {MixedWidget2}
