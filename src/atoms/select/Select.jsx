import React from "react"

const Select = React.forwardRef((props, ref) => {
    const { defaultOption, options, onSelect, value } = props

    return (
        <select
        ref={ref} 
        onChange={onSelect} 
        value={value || defaultOption}
        className="p-1"
        >
            <option
                value={defaultOption}
                disabled
            >{defaultOption}</option>
            {options.map((option) => (
                <option
                    key={option}
                    value={option}
                >{option}</option>
            ))}
        </select>
    )
})

export default Select