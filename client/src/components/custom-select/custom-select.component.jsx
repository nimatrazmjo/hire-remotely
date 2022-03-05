import React, { useState, useEffect } from 'react';

import axios from 'axios';

const CustomButton = ({ getLanaguageId }) => {
  const [languages, setLanguages] = useState([])

  useEffect(async () => {
    const { data } = await axios.get('http://104.154.92.155/languages');
    setLanguages(data);
  }, []);
  return (
    <div className="flex items-center justify-between text-white bg-editor-background px-4 py-2 border-b border-b-gray-600">
      <label className="text-sm"> main.js </label>
      <select onChange={getLanaguageId} className="block appearance-none bg-gray-500 py-1.5 px-6 text-sm rounded leading-tight focus:outline-none" id="grid-state">
        {languages.map(lang => <option value={lang.id}>{lang.name}</option>)}
      </select>
    </div>
  )
}

export default CustomButton;