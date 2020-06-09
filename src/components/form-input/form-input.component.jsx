import React from 'react'

const FormInput = ({ handlechange, lable, ...oterProps }) =>
    (
        <div className='group'>
            <input className='form-input' onChange={handlechange} {...oterProps} type="text" />
            {
                lable ?
                    (<lable className={`${oterProps.value.length ? 'shrink' : ''} form-input-label`} > {lable}</lable>)
                    : null
            }
        </div >
    )


export default FormInput
