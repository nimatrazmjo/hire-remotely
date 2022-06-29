import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { php, phpLanguage } from "@codemirror/lang-php";
import { EditorView } from "@codemirror/view";
import { useSelector } from 'react-redux';
import { selectLanguageId } from '../../state/languageid/language_id.reselector';

export default ({ changeHandler, ...otherProps }) => {
  let extension = javascript({ jsx: true });

  const { languageId } = useSelector(selectLanguageId);
  if (languageId === '68') {

    extension = php({baseLanguage:phpLanguage});
  }
  return (
    <CodeMirror
      onChange={changeHandler}
      {...otherProps}
      extensions={[extension, EditorView.lineWrapping]}
    />
)}