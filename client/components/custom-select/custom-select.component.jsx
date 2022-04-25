import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import axios from 'axios';
import { setLanguageId } from '../../state/language/language.actions';

const CustomButton = ({ setLanguageId }) => {
  const [languages, setLanguages] = useState([]);
  const {test} = useSelector(state => state.test);
  const snippetLanguage = test?.languages;
  useEffect(async () => {
    const { data } = await axios.get('https://ce.judge0.com/languages');
    setLanguages(data);
  }, []);
  return (
    <div className="flex items-center justify-between text-white bg-editor-background px-4 py-2 border-b border-b-gray-600">
      <label className="text-sm"> main.js </label>
      <select onChange={e => setLanguageId(e.target.value)} className="block appearance-none bg-gray-500 py-1.5 px-6 text-sm rounded leading-tight focus:outline-none" id="grid-state">
        {languages.map(lang => snippetLanguage && snippetLanguage.includes(lang.id.toString()) && <option key={lang.id} value={lang.id}>{lang.name}</option>)}
      </select>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return ({
    setLanguageId: id => dispatch(setLanguageId(id))
  })
};
export default connect(null, mapDispatchToProps)(CustomButton);