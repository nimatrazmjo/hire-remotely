import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
export default ({ changeHandler, ...otherProps }) => (
    <CodeMirror
      onChange={changeHandler}
      {...otherProps}
      extensions={[javascript({ jsx: true })]}
    />
)