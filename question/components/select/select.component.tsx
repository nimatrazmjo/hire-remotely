import React from 'react';
import Label from '../label/label.component';

interface SelectProps {

}

const Select: React.FC<SelectProps> = () => {
    return (
    <div className='col-span-2'>
        <Label> Question Snippets </Label>
    </div>
    )
}

export default Select