export default () => (
  <div className="flex items-center justify-between text-white bg-editor-background px-4 py-2 border-b border-b-gray-600">
    <label className="text-sm"> main.js </label>
    <select className="block appearance-none bg-gray-500 py-1.5 px-6 text-sm rounded leading-tight focus:outline-none focus:bg-white " id="grid-state">
      <option value="javascript">Javascript</option>
    </select>
  </div>
)