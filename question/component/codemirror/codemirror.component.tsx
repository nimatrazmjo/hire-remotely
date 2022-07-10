import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/mode/javascript/javascript';


interface ICodeMirrorProps {
    value: string;
    onChange: (value: string) => void;
}

const CodeMirrorComponent: React.FC<ICodeMirrorProps> = ({ value, onChange }) => {
    return (
        <CodeMirror
            value={value}
            onChange={onChange}
        />
    );
}

export default CodeMirrorComponent;