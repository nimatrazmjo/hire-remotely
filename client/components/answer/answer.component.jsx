import { useState } from 'react';
import { connect } from 'react-redux';
import CustomSelectComponent from '../custom-select/custom-select.component';
import CodeMirrorComponent from '../code-mirror/code-mirror.component';
import CustomButtonComponent from '../custom-button/custom-button.component';
import { createStructuredSelector } from "reselect";
import { selectLanguageId } from '../../state/language/language.reselector';
import { selectTest } from '../../state/test/test.reselector';
import axios from 'axios';


const Answer = ({ language:language_id, test: { docs} }) => {

  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  let snippet = '';
  let test_id;
  if (docs && docs.length > 0) {
    test_id = docs[0]._id;
    const foundSnippet = docs[0].snippets.find(snippet => snippet.language == language_id);
    snippet = foundSnippet?.snippet
  }

  const handleSubmit = async e => {
    e.preventDefault(0);
    setResult('');
    setError('');
    axios.post('/api/run', { source_code: answer, language_id, test_id }).then(response => {
      setResult(response.data);
    }).catch(error => {
      const { data } = error.response
      data.length ? setError(data[0].message) : '';
    });
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
        <CustomButtonComponent className="px-5 py-3 rounded" type='submit'> Compile  </CustomButtonComponent>
        <CustomButtonComponent className="px-5 py-3 rounded"> Submit result  </CustomButtonComponent>
      </div>
    </form>
  )
}

const mapStateToProps = createStructuredSelector({
  language: selectLanguageId,
  test: selectTest
})



export default connect(mapStateToProps)(Answer);