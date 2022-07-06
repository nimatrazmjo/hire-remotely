import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguageId } from '../../state/languageid/language_id.actions';
import { selectLanguages } from '../../state/languages/languages.reselector'

const CustomButton = () => {
  const dispatch = useDispatch();
  const { languages } = useSelector(selectLanguages);
  const [language_id, setLanguage_id] = useState(null);
  const languageId = (e) => {
    setLanguage_id(e.target.value);
    dispatch(setLanguageId(e.target.value));
  }

  useEffect(() => {
    if (languages && languages.length > 0) {
      dispatch(setLanguageId(languages[0].id));
      setLanguage_id(languages[0].id);
    }
  }, [languages]);
  return (
    <div className="flex items-center justify-end text-white bg-editor-background px-4 py-2 border-b border-b-slate-600">
      <select onChange={languageId} value={language_id} className="block appearance-none bg-slate-500 py-1.5 px-6 text-sm rounded leading-tight focus:outline-none" id="grid-state">
        <option value="null">Select a language</option>
        {languages && languages.map((lang, index) => <option key={lang.id} value={lang.id}>{lang.name}</option>)}
      </select>
    </div>
  )
}

export default CustomButton;