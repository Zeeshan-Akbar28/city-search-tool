import React from 'react'
import '../styles/content.css'
import FilteredTypes from './FilteredTypes'
import InputForm from './InputForm'
import Table from './Table'

function Content({updateSelected, selected}) {
  return (
    <div className='content--container'>
        <InputForm selected={selected}/>
        <FilteredTypes />
        <Table updateSelected={updateSelected}/>
    </div>
  )
}

export default Content
