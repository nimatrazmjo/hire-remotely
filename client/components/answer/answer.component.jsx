import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { createStructuredSelector } from "reselect";
import NProgress from 'nprogress';
import Link from 'next/link';
import CustomSelectComponent from '../custom-select/custom-select.component';
import CodeMirrorComponent from '../code-mirror/code-mirror.component';
import CustomButtonComponent from '../custom-button/custom-button.component';
import { selectTest } from '../../state/test/test.reselector';
import { setResult } from '../../state/result/result.actions';
import IconButton from '../dialog/icons/Icons.component';
import ConfirmDialog from '../dialog/dialog.component';
import Router from 'next/router';
import { selectLanguageId } from '../../state/languageid/language_id.reselector';
import { setCompileResult } from '../../state/compile-result/compile-result.actions';
import { setPage } from '../../state/page/page.actions';


const Answer = () => {
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  const { test } = useSelector(selectTest);
  const languageId = useSelector(selectLanguageId);
  let language_id;
  let snippet = '';
  let test_id;
  if (languageId?.languageId && test?.data?.snippets) {
    language_id = languageId.languageId;
    const foundSnippet = test.data.snippets.find(snippet => snippet.language == languageId?.languageId);
    snippet = foundSnippet?.snippet;
    test_id = test.data._id;
  }
  const nextPage = test?.nextPage;
  const prevPage = test?.prevPage;
  const compileOrSubmit = async (submit = false) => {
    NProgress.start();
    setDisable(true);
    setResult('');
    setError('');
    dispatch(setCompileResult({}));

    axios.post('/api/run', { source_code: answer, language_id, test_id, submit }).then(response => {
      if (submit === true) {
        dispatch(setResult(response.data));
      } else {
        dispatch(setCompileResult(response.data));
      }
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
    compileOrSubmit(true);
    // setConfirmOpen(true)
  }


  const getQuestion = (page = 1)=>{
    useEffect(() => {

    }, [test?.page]);

  }
  const run = async () => {
    await compileOrSubmit(false);
  }

  const updatePage = (page) => {
    console.log(page,'page');
    dispatch(setPage(page));
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
        {test?.prevPage &&  <CustomButtonComponent className="px-10 py-3 rounded-lg bg-slate-200 text-black" disabled={disable} onClick={()=>updatePage(test?.prevPage)} type='button'> Previous  </CustomButtonComponent> }
        <CustomButtonComponent className="px-10 py-3 rounded-lg bg-slate-200 text-black" disabled={disable} onClick={run} type='button'> Compile  </CustomButtonComponent>
        <CustomButtonComponent className="px-10 py-3 rounded-lg bg-main-blue text-white" disabled={disable} type='submit'> Submit  </CustomButtonComponent>
        {test?.nextPage &&  <CustomButtonComponent className="px-10 py-3 rounded-lg bg-slate-200 text-black" disabled={disable} onClick={()=> updatePage(test?.nextPage)} type='button'> next  </CustomButtonComponent>}
        {!test?.hasNextPage && <Link href="/" ><CustomButtonComponent className="px-5 py-3 rounded-lg text-white bg-primary" disabled={disable} type='button'>Dashboard  </CustomButtonComponent></Link>}

      </div>

      <div>
        {/* <ConfirmDialog
          title="Submit result?"
          open={confirmOpen}
          onClose={() => setConfirmOpen(false)}
          onConfirm={() => compileOrSubmit(true)}
        >
          Once you submit the answer you will not be able to edit it
        </ConfirmDialog> */}
      </div>
    </form>
  )
}

export default Answer;