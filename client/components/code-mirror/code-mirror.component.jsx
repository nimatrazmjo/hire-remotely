import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
export default ({ changeHandler, ...otherProps }) => (
    <CodeMirror
      minWidth='35rem'
      onChange={changeHandler}
      {...otherProps}
      extensions={[javascript({ jsx: true })]}
    />
)