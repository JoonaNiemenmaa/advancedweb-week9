type TItem = {
	id: string;
	text: string;
	marked: boolean;
};

interface ListProps {
	header: string;
	items: TItem[];
	updateList(id: string): void;
}

export { TItem, ListProps };

export default function MyList(props: ListProps) {
	const items = props.items.map((item) => {
		return (
			<li
				key={item.id}
				style={{
					textDecoration: item.marked ? "line-through" : "none",
				}}
				onClick={() => {
					props.updateList(item.id);
				}}
			>
				{item.text}
			</li>
		);
	});

	return (
		<div>
			<h1>{props.header}</h1>
			<ol>{items}</ol>
		</div>
	);
}
