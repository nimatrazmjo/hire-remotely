import React from 'react';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { php, phpLanguage } from "@codemirror/lang-php";
import { EditorView } from '@codemirror/view';

interface CodeMirrorProps extends ReactCodeMirrorProps {
    label?: string;
    language?: string;
    onChange: (e:string) => void;
}


const CodeEditor: React.FC<CodeMirrorProps> = ({ value, label,extensions, onChange, language, ...otherProps }) => {
    let extension = javascript({ jsx: true });

    // console.log(lanuage,'lanuage');

    // if (lanuage && lanuage === '68') {

    //   extension = php({baseLanguage:phpLanguage});
    // }
    return (
        <div>
            <CodeMirror
            value={value}
            onChange={onChange}
            {...otherProps}
            // extensions={[javascript({ jsx: true })]}
            />
        </div>
    );
}

export default CodeEditor;