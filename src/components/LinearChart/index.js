import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

const LinearChart = props => {
  const {quarterCommitCount} = props

  const data = quarterCommitCount

  return (
    <LineChart
      width={330}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="name"
        label={{value: 'Quarter', position: 'insideBottom', offset: -5}}
      />
      <YAxis
        label={{value: 'Count', angle: -90, position: 'insideLeft', offset: 10}}
      />
      <Tooltip />
      <Line type="monotone" dataKey="commits" stroke="#8884d8" />
    </LineChart>
  )
}
export default LinearChart
