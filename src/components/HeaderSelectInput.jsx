import React from "react"


function HeaderSelect({darkMode, onChange}, ref) {
    return (

        <div className="select-continents">
            <select className={`select-field ${darkMode ? 'darkMode' : ''}`} ref={ref} onChange={onChange}>
                <option>All</option>
                <option>Africa</option>
                <option>Americas</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </div>
    )
}
const ForwaredSelect = React.forwardRef(HeaderSelect);

export default ForwaredSelect;