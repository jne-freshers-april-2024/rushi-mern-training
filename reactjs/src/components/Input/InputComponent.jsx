const Input = (props)=>{
    return(
        <div className="form-group">
            <label 
                htmlFor={props.id}
            >
            {props.label}
            </label>

            <input 
                onChange={props.onChange} 
                type={props.type}
                value={props.value} 
                className={props.className}
                id={props.id}
                placeholder={props.placeholder}
            />
        </div>
    )
}


export default Input;