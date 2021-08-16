import React, { useState } from 'react'
import Forms from './Forms'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

const Todos = ({ Todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    const submitUpdate = value => {
        
    }
    return (
        <div>
            
        </div>
    )
}

export default Todos
