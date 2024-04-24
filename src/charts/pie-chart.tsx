import {ResponsivePie} from '@nivo/pie';

const PieChart = ({data}: {data: any}) => (
  <div style={{height: 400}}>
    <ResponsivePie
      data={data}
      margin={{top: 40, right: 100, bottom: 40, left: 100}}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{from: 'color', modifiers: [['darker', 0.2]]}}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{from: 'color'}}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{from: 'color', modifiers: [['darker', 2]]}}
      animate={true}
      motionConfig={{
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: false,
        precision: 0.01,
        velocity: 0
      }}
      transitionMode="outerRadius"
    />
  </div>
);

export default PieChart;
