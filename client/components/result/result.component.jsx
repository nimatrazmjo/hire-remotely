import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



// const canvasOptions = {
//   animationEnabled: true,
//   theme: "light2",
//   title:{
//     text: "Most Popular Social Networking Sites"
//   },
//   axisX: {
//     title: "Social Network",
//     reversed: true,
//   },
//   axisY: {
//     title: "Monthly Active Users",
//     includeZero: true,
//     labelFormatter: this.addSymbols
//   },
//   data: [{
//     type: "bar",
//     dataPoints: [
//       { y:  2200000000, label: "Facebook" },
//       { y:  1800000000, label: "YouTube" },
//       { y:  800000000, label: "Instagram" },
//       { y:  563000000, label: "Qzone" },
//       { y:  376000000, label: "Weibo" },
//       { y:  336000000, label: "Twitter" },
//       { y:  330000000, label: "Reddit" }
//     ]
//   }]
// }
const examplePieChartData1 = [
  { name: 'Example Test', value: 100, label: true },
];

const examplePieChartData2 = [
  { name: 'Simple Test', value: 75, label: true },
];

const examplePieChartData3 = [
  { name: 'Advanced Test', value: 25, label: true },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const exampleTestResult = [
  {
    "text": "Example Test 1",
    "input": "madam",
    "output": "madam\nada",
    "status": "Accepted"
  },
  {
    "text": "Example Test 2",
    "input": "level",
    "output": "level\neve",
    "status": "Accepted"
  },
]

const testResultBasic = [
    {
      "text": "Simple Correctness Test 1",
      "input": "madam",
      "output": "madam\nada",
      "status": "Accepted"
    },
    {
      "text": "Simple Correctness Test 2",
      "input": "level",
      "output": "level\neve",
      "status": "Accepted"
    },
]

//Advanced Test Result should not show tested input to user as this could make the assignment easier
const testResultAdvanced = [
  {
    "text": "Advanced Test 1",
    "isCorrect": "0",
    "status": "Wrong Answer"
  },
  {
    "text": "Advanced Test 2",
    "isCorrect": "1",
    "status": "Accepted"
  },
  {
    "text": "Advanced Test 2",
    "isCorrect": "0",
    "status": "Time Limit Exceeded"
  },
  {
    "text": "Advanced Test 3",
    "isCorrect": "0",
    "status": "Runntime Error"
  }
]

const performanceTestResult = [
  {
    "text": "Performance Test 1",
    "isCorrect": "0",
    "status": "Accepted"
  },
  {
    "text": "Performance Test 2",
    "isCorrect": "1",
    "status": "Accepted"
  }
]

const memoryTestResult = [
  {
    "text": "Memory Test 1",
    "isCorrect": "1",
    "status": "Time Limit Exceeded"
  },
  {
    "text": "Memory Test 2",
    "isCorrect": "1",
    "status": "Time Limit Exceeded"
  }
]
const exampleChartData = [
  {
    name: 'Score',
    value: 50,

  },
  {
    name: 'Correctness',
    value: 50,

  },
  {
    name: 'Performance',
    value: 100,

  },
  {
    name: 'Memory',
    value: 100,

  },
];
const Result = ({result }) => {

    return (
        <>
        <div class="grid grid-cols-12 grid-rows-1 place-items-start ">
          <div class="col-span-4">
            <div class="text-xl">Example Test Cases</div>
              {exampleTestResult.map(i =>
                <div class="pt-5">
                  <CheckCircleIcon  className="text-white inline h-5 w-5 bg-emerald-500 text-primary-100" /><span class="pl-2">{i.text}</span>
                  <p>Input</p>
                  <pre class="text-white bg-editor-background px-4 py-2 border-b border-b-gray-600">
                    <code>
                      {i.input}
                    </code>
                  </pre>
                  <p>Output</p>
                  <pre class="text-white bg-editor-background px-4 py-2 border-b border-b-gray-600">
                    <code>
                    {i.output}
                    </code>
                  </pre>
                </div>
              )}

            <div class="text-xl pt-3">Simple Test Cases</div>
              {testResultBasic.map(i =>
                <div class="pt-5">
                  <CheckCircleIcon  className="text-white inline h-5 w-5 bg-emerald-500 text-primary-100" /><span class="pl-2">{i.text}</span>
                  <p>Input</p>
                  <pre class="text-white bg-editor-background px-4 py-2 border-b border-b-gray-600">
                    <code>
                      {i.input}
                    </code>
                  </pre>
                  <p>Output</p>
                  <pre class="text-white bg-editor-background px-4 py-2 border-b border-b-gray-600">
                    <code>
                    {i.output}
                    </code>
                  </pre>
                </div>
              )}

            <div class="text-xl pt-5">Advanced Test Cases</div>
              {testResultAdvanced.map(i => <div class="pt-5">
              <XCircleIcon className="inline h-5 w-5 text-danger" /><span class="text-danger pl-2">{i.text}</span>
                <pre>
                  {i.status}
                </pre>
                </div>
              )}
            <div class="text-xl pt-3">Memory Test Cases</div>
              {memoryTestResult.map(i => <div class="pt-5">
              <CheckCircleIcon  className="text-white inline h-5 w-5 bg-emerald-500 text-primary-100" /><span class="pl-2">{i.text}</span>
                <pre>
                {i.status}
                </pre>
                </div>
              )}

            <div class="text-xl pt-3">Performance Test Cases</div>
              {performanceTestResult.map(i => <div class="pt-5">
              <XCircleIcon className="inline h-5 w-5 text-danger" /><span class="text-danger pl-2">{i.text}</span>
                <pre>
                  {i.status}
                </pre>
                </div>
              )}
            </div>
            <div>
            <div class="col-span-8 text-xl">Overview</div>
            {/* <CanvasJS.React.CanvasJSChart options = {options} */}
            {/* <ResponsiveContainer width="100%" height="100%"> */}
              <BarChart
                width={380}
                height={200}
                layout="vertical"
                data={exampleChartData}
                margin={{
                  top: 0,
                  right: 0,
                  left: 50,
                  bottom: 0,
                }}
                barSize={20}
              >
                <YAxis type="category" dataKey="name" />
                <XAxis  type="number" />
                {/* <Bar dataKey="uv" fill="#8884d8" background={{ fill: '#eee' }} /> */}
                <Bar dataKey="value" fill="#82ca9d" />
                {/* <Tooltip /> */}
                {/* <Legend /> */}
                <CartesianGrid strokeDasharray="3 3" />

              </BarChart>
            {/* </ResponsiveContainer> */}
              {/* <PieChart width={400} height={400}>
                <Pie
                  data={examplePieChartData1}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {examplePieChartData1.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" align="center" height={16}/>
              </PieChart>
              <PieChart width={400} height={400}>
                <Pie
                  data={examplePieChartData2}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {examplePieChartData2.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" align="center" height={16}/>
              </PieChart>
              <PieChart width={400} height={400}>
                <Pie
                  data={examplePieChartData3}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {examplePieChartData3.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" align="center" height={16}/>
              </PieChart> */}
            </div>
          </div>
        </>
        )
}

export default Result;