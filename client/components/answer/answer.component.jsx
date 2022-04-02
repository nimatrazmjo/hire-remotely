import { useState } from 'react';
import { connect } from 'react-redux';
import CustomSelectComponent from '../custom-select/custom-select.component';
import CodeMirrorComponent from '../code-mirror/code-mirror.component';
import CustomButtonComponent from '../custom-button/custom-button.component';
import { createStructuredSelector } from "reselect";
import { selectLanguageId } from '../../state/language/language.reselector';
import { selectTest } from '../../state/test/test.reselector';
import axios from 'axios';
import { setResult } from '../../state/result/result.actions';


const Answer = ({ language:language_id, test: { docs}, addResultToState }) => {

  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [disable, setDisable] = useState(false);
  let snippet = '';
  let test_id;
  if (docs && docs.length > 0) {
    test_id = docs[0]._id;
    const foundSnippet = docs[0].snippets.find(snippet => snippet.language == language_id);
    snippet = foundSnippet?.snippet
  }

  const handleSubmit = async e => {
    console.log('called');
    e.preventDefault(0);
    setDisable(true);
    setResult('');
    setError('');
    axios.post('/api/run', { source_code: answer, language_id, test_id,submit:true }).then(response => {
      addResultToState(response.data);
      setDisable(false);

    }).catch(error => {
      setDisable(false);
      const { data } = error.response
      data.length ? setError(data[0].message) : '';
    });
  }

  const run = async ()=> {
    setDisable(true);
    setResult('');
    setError('');
    axios.post('/api/run', { source_code: answer, language_id, test_id,submit:false }).then(response => {
      addResultToState(response.data);
      setDisable(false);
    }).catch(error => {
      setDisable(false);
      const { data } = error.response
      data.length ? setError(data[0].message) : '';
    }
    );
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
        <CustomButtonComponent className="px-5 py-3 rounded" disabled={disable}  type='submit'> Submit result  </CustomButtonComponent>
      </div>
    </form>
  )
}

const mapStateToProps = createStructuredSelector({
  language: selectLanguageId,
  test: selectTest
})

const mapDispatchToProps = dispatch => {
  return ({
    addResultToState: result => dispatch(setResult(result))
  })
}



export default connect(mapStateToProps, mapDispatchToProps)(Answer);