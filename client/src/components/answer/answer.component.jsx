import { useState } from 'react';
import { connect } from 'react-redux';
import CustomSelectComponent from '../custom-select/custom-select.component';
import CodeMirrorComponent from '../code-mirror/code-mirror.component';
import CustomButtonComponent from '../custom-button/custom-button.component';
import { createStructuredSelector } from "reselect";
import { selectLanguageId } from '../../state/language/language.reselector';


const Answer = ({language}) => {
  console.log('language', language);
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    
  
    const handleSubmit = async e => {
      e.preventDefault(0);
      setResult('');
      setError('');
      axios.post('/api/run', { source_code: answer, language_id: selectedLanauge }).then(response => {
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
          getLanaguageId= {e => setSelectedLanguage(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <CodeMirrorComponent
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

const mapStateToProps =  createStructuredSelector({
  language: selectLanguageId
})



export default connect(mapStateToProps)(Answer);