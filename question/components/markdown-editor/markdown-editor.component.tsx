import dynamic from 'next/dynamic';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import * as commands from "@uiw/react-md-editor/esm/commands";
import { ContextStore, MDEditorProps } from '@uiw/react-md-editor';

interface EditorProps extends MDEditorProps {
    value?:  string;
    onChange?: (value?: string, event?: React.ChangeEvent<HTMLTextAreaElement>, state?: ContextStore) => void;
    source?: string;
   }

  const MarkdownEditor = dynamic<EditorProps>(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false, }
  );

  export default MarkdownEditor