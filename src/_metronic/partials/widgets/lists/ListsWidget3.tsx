/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

type Task = {
  title: string
  dueDate: string
  status: 'À faire' | 'En cours' | 'Terminé'
  tag: string
  project: string
  color: 'success' | 'primary' | 'warning' | 'danger'
}

const tasks: Task[] = [
  {
    title: 'Planification atelier avec la coopérative de Kolda',
    dueDate: 'Dans 3 jours',
    status: 'À faire',
    tag: 'Réunion',
    project: 'Appui à l’agriculture durable',
    color: 'primary',
  },
  {
    title: 'Mise à jour des indicateurs du projet de transformation',
    dueDate: 'Demain',
    status: 'En cours',
    tag: 'Reporting',
    project: 'Agri-transformation Sédhiou',
    color: 'success',
  },
  {
    title: 'Validation du financement ANPEJ',
    dueDate: 'Dans 5 jours',
    status: 'À faire',
    tag: 'Financement',
    project: 'Insertion Jeunes Ziguinchor',
    color: 'warning',
  },
  {
    title: 'Rencontre DER/FJ sur les financements complémentaires',
    dueDate: 'Dans 7 jours',
    status: 'Terminé',
    tag: 'Réunion',
    project: 'Plateforme entrepreneuriale Dakar',
    color: 'danger',
  },
]

const ListsWidget3: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>Todo par projet</h3>
        <div className='card-toolbar'>
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
        </div>
      </div>

      <div className='card-body pt-2'>
        {tasks.map((task, index) => (
          <div className='d-flex align-items-center mb-8' key={index}>
            <span className={`bullet bullet-vertical h-40px bg-${task.color}`}></span>

            <div className='form-check form-check-custom form-check-solid mx-5'>
              <input className='form-check-input' type='checkbox' />
            </div>

            <div className='flex-grow-1'>
              <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
                {task.title}
              </a>
              <div className='text-muted fw-semibold d-block'>
                {task.project} • {task.dueDate}
              </div>
            </div>

            <span className={`badge badge-light-${task.color} fs-8 fw-bold`}>
              {task.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export {ListsWidget3}
