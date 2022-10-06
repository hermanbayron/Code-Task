import React, { useState } from "react";

const Home = () => {
	//declaracion de estados

	const [tarea, setTarea] = useState("");
	const [listaDeTareas, setListadeTareas] = useState([]);

	// OnKeyDown
	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			setListadeTareas([...listaDeTareas, tarea]);
			setTarea("");
			console.log(listaDeTareas);
		}
	};

	const eliminarTarea = (i) => {
		const tareaFiltrada = listaDeTareas.filter((tarea, index) => {
			if (i !== index) {
				return tarea
			}
		});
		setListadeTareas(tareaFiltrada)
	};

	return (
		<div className="container bg-primary bg-opacity-10 m-3">
			<div className="card bg-primary bg-opacity-25">
				<div className="card-body">
					<h1 className="card-title d-flex justify-content-center fw-lighter opacity-50">Todos</h1>
					<form className="container">
						<div className="mb-3">
							<input
								type="text"
								className="form-control inputt"
								id="exampleInputTarea"
								aria-describedby="emailHelp"
								onChange={(e) => setTarea(e.target.value)}
								onKeyDown={handleKeyDown}
								value={tarea}
							/>
						</div>
					</form>
				</div>
				<div className="card">
					<ul className="list-group list-group-flush">
						{listaDeTareas.map((tarea, i) => {
							return (
								<li className="list-group-item border border-1 tareaOculta" key={i}>
									{tarea}<span className="close btn btn-danger" onClick={() => eliminarTarea(i)}><b>X</b></span>
								</li>
							);
						})}
					</ul>
					<div className="p-1 fw-lighter bg-primary bg-opacity-25"> {listaDeTareas.length == 0 ? "No hay tareas, añade una" : "Numero de tareas: "+listaDeTareas.length}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
