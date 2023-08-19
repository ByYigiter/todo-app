import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoField = ({ addTodo }) => {
	const [value, setValue] = useState("");
	const inputRef = useRef(null); // Input alanına odaklanmak için referans oluşturuyoruz

	return (
		<div className="todoField">
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				type="text"
				ref={inputRef} // Input alanını referansa bağlıyoruz
				className="todo_input"
			/>
			<button
				onClick={() => {
					addTodo({
						id: uuidv4(),
						name: value,
						status: false,
					});
					setValue("");
					inputRef.current.focus(); // Input alanına odaklanıyoruz
				}}
				className="todo_btn"
			>
				Add
			</button>
		</div>
	);
};

export default TodoField;
