import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='max-w-7xl mx-auto min-w-full'>
      <div className=' bg-white rounded-xl shadow-xl my-10 px-10 py-20 grid grid-cols-[1fr_10rem] grid-rows-[5rem_1fr]  gap-y-4 items-center justify-center'>
        <h2 className='text-xl font-bold pl-4'>Coding Question</h2>
        <button className='rounded-lg bg-main-blue text-slate-100 px-4 py-3'> <span >+</span> New Questions</button>
        <table className="border col-span-2">
                <thead className="border-b bg-slate-200 font-light py-10">
                    <tr>
                        <th className="text-sm font-medium text-slate-500 px-6 py-4 text-left">Name</th>
                        <th className="text-sm font-medium text-slate-500 px-6 py-4 text-left">Languages</th>
                        <th className="text-sm font-medium text-slate-500 px-6 py-4 text-left">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white">

                    <tr className="hover:bg-slate-200">
                        <td className="text-sm font-medium text-slate-500 px-6 py-4 text-left">
                            <a href="#" className="text-main-blue hover:text-main-blue-dark">
                                <span className="text-sm">Question 1</span>
                            </a>
                        </td>
                        <td className="text-sm font-medium text-slate-500 px-6 py-4 text-left">
                            <span className="text-sm">JavaScript (Node.js 12.14.0),  PHP (7.4.1),  Python (2.7.17),  Java (OpenJDK 13.0.1)</span>
                        </td>
                        <td className="text-sm font-medium text-slate-500 px-6 py-4 text-left">

                            <a href="#" className="text-main-blue hover:text-main-blue-dark mx-1">

                                <span className="text-sm">Edit</span>
                            </a>
                            <a href="#" className="text-main-blue hover:text-main-blue-dark mx-1">

                                <span className="text-sm">Delete</span>
                            </a>
                        </td>
                    </tr>
                    <tr className="hover:bg-slate-200">

                        <td className="text-sm font-medium text-slate-500 px-6 py-4 text-left">

                            <a href="#" className="text-main-blue hover:text-main-blue-dark">
                                <span className="text-sm">Question 2</span>
                            </a>
                        </td>
                        <td className="text-sm font-medium text-slate-500 px-6 py-4 text-left">
                            <span className="text-sm">JavaScript (Node.js 12.14.0),  PHP (7.4.1),  Python (2.7.17),  Java (OpenJDK 13.0.1)</span>
                        </td>
                        <td className="text-sm font-medium text-slate-500 px-6 py-4 text-left">

                            <a href="#" className="text-main-blue hover:text-main-blue-dark mx-1">

                                <span className="text-sm">Edit</span>
                            </a>
                            <a href="#" className="text-main-blue hover:text-main-blue-dark mx-1">

                                <span className="text-sm">Delete</span>
                            </a>
                        </td>
                    </tr>
                  </tbody>
            </table>
      </div>
    </div>
  )
}

export default Home
