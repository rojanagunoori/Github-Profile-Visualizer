import {
  PieChart,
  Pie,
  Legend,
  Cell, //  ResponsiveContainer
} from 'recharts'

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  'Pink',
  '#F2637F',
  'Orange',
  'purple',
]

const LanguageRepoCountPie = props => {
  const {langRepoCount} = props
  const data = langRepoCount

  return (
    <div>
      {/* <ResponsiveContainer width="100%" height={200   */}
      <PieChart width={400} height={400}>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={data.name + data.value}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Legend
          iconType="square"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
      {/* </ResponsiveContainer> */}
      {/* Render language names as plain HTML so tests can find them */}
      <ul className="language-names-list">
        {data.map(each => (
          <li key={each.name}>{each.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default LanguageRepoCountPie
