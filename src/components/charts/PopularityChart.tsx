import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{ name: "2017", javascript: 12, php: 37, csharp: 23 },
	{ name: "2018", javascript: 14, php: 39, csharp: 24 },
	{ name: "2019", javascript: 15, php: 40, csharp: 26 },
	{ name: "2020", javascript: 19, php: 39, csharp: 27 },
	{ name: "2021", javascript: 16, php: 38, csharp: 27 },
	{ name: "2022", javascript: 26, php: 40, csharp: 23 },
	{ name: "2023", javascript: 14, php: 41, csharp: 24 },
	{ name: "2024", javascript: 38, php: 37, csharp: 14 },
	{ name: "2025", javascript: 45, php: 35, csharp: 11 },
];

type LineChartLineOptions = {
	dataKey: string;
	type?: string;
	stroke?: string;
	strokeWidth?: number;
};
type LineChartOptions = {
	width?: number;
	height?: number;
	data: object[];
	lines: LineChartLineOptions[];
	xAxisKey: string;
};
const PopularityChart = (props: LineChartOptions) => {
	return (
		<LineChart
			width={props.width || 350}
			height={props.height || 200}
			data={props.data}
		>
			{props.lines &&
				props.lines.map((item, index) => (
					<Line
						key={index}
						type={item.type || "monotone"}
						dataKey={item.dataKey}
						stroke={item.stroke}
						strokeWidth={item.strokeWidth}
					/>
				))}

			{/*<Line
				type="monotone"
				dataKey="csharp"
				stroke="#8802dbff"
				strokeWidth={4}
			/>*/}
			<CartesianGrid strokeDasharray={"3 3"} />
			<XAxis dataKey={props.xAxisKey} />
			<YAxis />
			<Tooltip />
			<Legend />
		</LineChart>
	);
};

export default PopularityChart;
