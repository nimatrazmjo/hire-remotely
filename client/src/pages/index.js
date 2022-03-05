import CustomSelectComponent from '../components/custom-select/custom-select.component';
import CodeMirrorComponent from '../components/code-mirror/code-mirror.component';
import CustomButtonComponent from '../components/custom-button/custom-button.component';
import { useRef, useState } from 'react';

import axios from 'axios';

function Home() {

  const iframe = useRef();
  const [selectedLanauge, setSelectedLanguage] = useState(64);
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



  const html = `
      <html>
      <header>
        
      </header>
      <body>
        <div id="root"></div>
        <script> window.addEventListener('message', (event)=>{
          try {
            
            eval(event.data)
          } catch(err) {
            const root = document.querySelector('#root');
            root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
            console.error(err);
          }
        },false)</script>
      </body>
      </html>
  `;

  return (
    <div className='bg-white flex-grow'>
      <div className='mx-10 h-full'>
        <div className='grid grid-cols-2 h-full'>
          <div className='bg-gray-100 h-full p-5'>
            <h2 className='text-xl mb-2 font-medium'>Question</h2>
            <p className='text-lg text-gray-600'>
              <pre> Write a function to calculate two number </pre>
            </p>

          </div>
          <div className='h-full p-4'>
            <form onSubmit={handleSubmit}>
              <div>
                <CustomSelectComponent
                  getLanaguageId={e => setSelectedLanguage(e.target.value)}
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
            <hr />
            {/* <iframe title='Code' ref={iframe} srcDoc={html}> {result}</iframe> */}
            <pre>{result}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;