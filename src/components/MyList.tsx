type TItem = {
	id: string;
	text: string;
};

interface ListProps {
	header: string;
	items: TItem[];
}

export { TItem, ListProps };

export default function MyList(props: ListProps) {
	const items = props.items.map((item) => {
		return <li id={item.id}>{item.text}</li>;
	});

	return (
		<div>
			<h1>{props.header}</h1>
			<ol>{items}</ol>
		</div>
	);
}
