import React, { useState, useEffect, useRef } from 'react'

const Forms = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        
    }
    return (
        <div>
            
        </div>
    )
}

export default Forms
