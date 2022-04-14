import { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { createStructuredSelector } from "reselect";
import NProgress from 'nprogress';
import CustomSelectComponent from '../custom-select/custom-select.component';
import CodeMirrorComponent from '../code-mirror/code-mirror.component';
import CustomButtonComponent from '../custom-button/custom-button.component';
import { selectLanguageId } from '../../state/language/language.reselector';
import { selectTest } from '../../state/test/test.reselector';
import { setResult } from '../../state/result/result.actions';
import IconButton from '../dialog/icons/Icons.component';
import ConfirmDialog from '../dialog/dialog.component';
import Router from 'next/router';


const Answer = () => {


  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  const { test } = useSelector(selectTest);
  const language_id = useSelector(selectLanguageId);
  const dispatch = useDispatch();
  let snippet = '';
  let test_id;

  let docs = test?.docs;

  if (docs && docs.length > 0) {
    test_id = docs[0]._id;
    const foundSnippet = docs[0].snippets.find(snippet => snippet.language == language_id);
    snippet = foundSnippet?.snippet
  }

  const callApi = async (submit = false) => {
    NProgress.start();
    setDisable(true);
    setResult('');
    setError('');
    dispatch(setResult([]));
    axios.post('/api/run', { source_code: answer, language_id, test_id, submit }).then(response => {
      dispatch(setResult(response.data));
      setDisable(false);
      NProgress.done();
    }).catch(error => {
      setDisable(false);
      const { data } = error.response
      data.length ? setError(data[0].message) : '';
      NProgress.done();
    });
  }

  const handleSubmit = async e => {
    e.preventDefault(0);
    callApi(true);
    // setConfirmOpen(true)
  }




  const run = async () => {
    await callApi(false);
  }

  const reload = async () => {
    Router.reload();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <CustomSelectComponent
          getLanaguageId={e => getLanguageId(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <CodeMirrorComponent
          value={snippet}
          height="400px"
          theme="dark"
          placeholeer="Please write your answer here"
          autoFocus={true}
          changeHandler={(value, viewUpdate) => setAnswer(value)}
        />
      </div>
      <div className="py-3 flex justify-end gap-1">
        <CustomButtonComponent className="px-5 py-3 rounded" disabled={disable} onClick={run} type='button'> Compile  </CustomButtonComponent>
        <CustomButtonComponent className="px-5 py-3 rounded" disabled={disable} type='submit'> Submit result  </CustomButtonComponent>
        {test?.hasNextPage && <CustomButtonComponent className="px-5 py-3 rounded" disabled={disable} onClick={reload} type='button'> Next  </CustomButtonComponent>}
        
      </div>

      <div>
        {/* <ConfirmDialog
          title="Submit result?"
          open={confirmOpen}
          onClose={() => setConfirmOpen(false)}
          onConfirm={() => callApi(true)}
        >
          Once you submit the answer you will not be able to edit it
        </ConfirmDialog> */}
      </div>
    </form>
  )
}

export default Answer;