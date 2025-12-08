import {
	Bar,
	BarChart,
	CartesianGrid,
	Rectangle,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{ name: 2018, views: 1000, subs: 30 },
	{ name: 2019, views: 1250, subs: 70 },
	{ name: 2020, views: 2600, subs: 90 },
	{ name: 2021, views: 3000, subs: 200 },
	{ name: 2022, views: 2300, subs: 250 },
	{ name: 2023, views: 4500, subs: 300 },
	{ name: 2024, views: 5000, subs: 400 },
	{ name: 2025, views: 6000, subs: 500 },
];
const ViewsChart = () => {
	return (
		<BarChart width={400} height={300} data={data}>
			<Bar
				dataKey={"views"}
				fill="#2196f3"
				activeBar={<Rectangle fill="gold" stroke="purple" />}
			/>
			<Bar
				dataKey={"subs"}
				fill="#f32121ff"
				activeBar={<Rectangle fill="pink" stroke="purple" />}
			/>
			<CartesianGrid strokeDasharray={"3 3"} />
			<XAxis dataKey={"name"} />
			<YAxis />
			<Tooltip cursor={{ fill: "transparent" }} />
		</BarChart>
	);
};

export default ViewsChart;
