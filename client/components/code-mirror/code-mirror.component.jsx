import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from "@codemirror/view";
export default ({ changeHandler, ...otherProps }) => (
    <CodeMirror
      maxWidth='100%'
      onChange={changeHandler}
      {...otherProps}
      extensions={[javascript({ jsx: true }), EditorView.lineWrapping]}
    />
)