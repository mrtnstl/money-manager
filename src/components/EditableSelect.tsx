import { useEffect, useState } from "react";
import styles from "../styles/Sidebar.module.css";
import editableselect from "../styles/EditableSelect.module.css";

const mockProjectListData = [
	{ id: "34j5234f4-18ffh45", name: "personal" },
	{ id: "23f345432-234v3v4", name: "project1" },
	{ id: "884h276dd-6jf3454", name: "the shop" },
];

const EditableSelect = () => {
	const [selectedProjectName, setSelectedProjectName] =
		useState<string>("select project");
	const [isEditing, setIsEditing] = useState<boolean>(false);

	useEffect(() => {}, []);
	if (isEditing) {
		return (
			<span>
				<div>
					<input
						type="text"
						name=""
						className={styles.navlink}
						id={styles.projectSelector}
						value={selectedProjectName ? selectedProjectName : ""}
						onChange={(e) => {
							setSelectedProjectName(e.target.value);
						}}
						/*onBlur={() => setIsEditing(false)}*/
						autoFocus
					/>
				</div>
				<ul id={editableselect.dropdown} onBlur={() => setIsEditing(false)}>
					{mockProjectListData &&
						mockProjectListData.map((project) => (
							<li
								className={editableselect.dropdownItem}
								key={project.id}
								data-option-value={project.name}
								onClick={(e) => {
									setSelectedProjectName(
										e.currentTarget.getAttribute("data-option-value") as string
									);
									setIsEditing(false);
								}}
							>
								{project.name}
							</li>
						))}
				</ul>
			</span>
		);
	}
	return (
		<button
			className={styles.navlink}
			id={styles.projectSelector}
			onClick={() => setIsEditing(true)}
		>
			{selectedProjectName}
		</button>
	);
};

export default EditableSelect;
