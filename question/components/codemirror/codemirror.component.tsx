import React from 'react';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import Label from '../label/label.component';

interface CodeMirrorProps extends ReactCodeMirrorProps {
    label?: string;
}


const CodeEditor: React.FC<CodeMirrorProps> = ({ value, label,extensions, onChange, ...otherProps }) => {
    return (
        <div className=''>
            {label && <Label className='font-bold text-lg col-span-2 uppercase'> {label!} </Label>}
            <CodeMirror value={value} onChange={onChange} {...otherProps} />
        </div>
    );
}

export default CodeEditor;