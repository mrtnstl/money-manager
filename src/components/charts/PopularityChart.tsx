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
	{ name: "2017", javascript: 32, php: 37, csharp: 23 },
	{ name: "2018", javascript: 34, php: 39, csharp: 24 },
	{ name: "2019", javascript: 35, php: 40, csharp: 26 },
	{ name: "2020", javascript: 32, php: 39, csharp: 27 },
	{ name: "2021", javascript: 33, php: 38, csharp: 27 },
	{ name: "2022", javascript: 33, php: 40, csharp: 23 },
	{ name: "2023", javascript: 36, php: 41, csharp: 24 },
	{ name: "2024", javascript: 38, php: 37, csharp: 24 },
	{ name: "2025", javascript: 45, php: 35, csharp: 26 },
];

const PopularityChart = () => {
	return (
		<LineChart width={350} height={200} data={data}>
			<Line
				type="monotone"
				dataKey="javascript"
				stroke="#e2f321ff"
				strokeWidth={4}
			/>
			<Line type="monotone" dataKey="php" stroke="#4ba8f4ff" strokeWidth={4} />
			<Line
				type="monotone"
				dataKey="csharp"
				stroke="#8802dbff"
				strokeWidth={4}
			/>
			<CartesianGrid strokeDasharray={"3 3"} />
			<XAxis dataKey={"name"} />
			<YAxis />
			<Tooltip />
			<Legend />
		</LineChart>
	);
};

export default PopularityChart;
