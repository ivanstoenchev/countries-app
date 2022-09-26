import React from "react";


function HeaderMenu({ darkMode, type, placeholder, onChange}, ref) {
    
    
    return (
            <div className="search-input">
                <input type={type} className={`input-field ${darkMode ? 'darkMode' : ''}`} placeholder={placeholder} ref={ref} onChange={onChange}/>
            </div>        
    )
}
const ForwaredInput = React.forwardRef(HeaderMenu);
export default ForwaredInput;