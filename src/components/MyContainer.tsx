import { useState } from "react";
import MyList, { TItem } from "./MyList";

export default function MyContainer() {
	const [items, setItems] = useState<TItem[]>([]);
	const [text, setText] = useState<string>("");

	let id: number = 0;

	function addItem() {
		setItems(
			items.concat([
				{
					id: (id++).toString(),
					text: text,
				},
			]),
		);
	}

	return (
		<div>
			<form>
				<textarea value={text}></textarea>
				<br></br>
				<button onClick={addItem}>Add item</button>
			</form>

			<MyList header="Joonan kammio" items={items}></MyList>
		</div>
	);
}
