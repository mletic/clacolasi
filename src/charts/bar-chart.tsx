import {ResponsiveBar} from '@nivo/bar';

const BarChart = ({data}: {data: any}) => (
  <div style={{height: 500}}>
    <ResponsiveBar
      data={data}
      keys={['value']}
      indexBy="name"
      margin={{top: 20, right: 20, bottom: 20, left: 50}}
      padding={0.3}
      valueScale={{type: 'linear'}}
      indexScale={{type: 'band', round: true}}
      colors={({index}) => {
        const colors = ['#e8c1a0', '#f47560', '#f1e15b', '#e8a838', '#61cdbb'];
        return colors[index % colors.length];
      }}
      borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Education level',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Count',
        legendPosition: 'middle',
        legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{from: 'color', modifiers: [['darker', 1.6]]}}
      animate={true}
    />
  </div>
);

export default BarChart;
