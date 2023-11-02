
const Select = (props) => {
    const { defaultOption, options, onSelect } = props

    return (
        <select 
        onChange={onSelect} 
        defaultValue={defaultOption}
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
}

export default Select