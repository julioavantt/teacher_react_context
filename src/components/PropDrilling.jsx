import { useState } from "react"

const Pink = ({ state, update }) => (
	<div id="six">
		Component 6 -<b>Valor del state: {state}</b>
		<button onClick={() => update(prev => prev + 1)}>update</button>
	</div>
)

const Green = ({ state, update }) => (
	<div id="five">
		{/* 5 state: {state} */}
		<Pink state={state} update={update} />
	</div>
)

const Blue = ({ state, update }) => (
	<div id="four">
		4
		<Green state={state} update={update} />
	</div>
)

const Orange = ({ state, update }) => (
	<div id="three">
		3
		<Blue state={state} update={update} />
	</div>
)

const Grey = ({ state, update }) => (
	<div id="two">
		2
		<Orange state={state} update={update} />
	</div>
)

const Red = ({ state, update }) => (
	<div id="one">
		1
		<Grey state={state} update={update} />
	</div>
)

export const MainComponent = () => {
	const [state, setState] = useState(1)

	return (
		<div id="propsdrilling">
			<h1>Prop drilling</h1>
			<span>Main Component</span>
			<Red state={state} update={setState} />
		</div>
	)
}
