import { useState } from "react";
import MyList, { TItem } from "./MyList";

export default function MyContainer() {
	const [items, setItems] = useState<TItem[]>([]);
	const [text, setText] = useState<string>("");

	let id: number = 0;

	function handleClick() {
		setItems(
			items.concat([
				{
					id: (id++).toString(),
					text: text,
					clicked: false,
				},
			]),
		);
		setText("");
	}

	function updateList(id: string): void {
		setItems(
			items.map((item) => {
				if (id === item.id) {
					item.clicked = !item.clicked;
				}
				return item;
			}),
		);
	}

	return (
		<div>
			<textarea
				value={text}
				onChange={(event) => {
					setText(event.target.value);
				}}
			></textarea>
			<br></br>
			<button onClick={handleClick}>Add item</button>

			<MyList
				header="Lista asioita"
				items={items}
				updateList={updateList}
			></MyList>
		</div>
	);
}
