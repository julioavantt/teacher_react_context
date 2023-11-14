import { useState } from "react"

const ComponentChild6 = ({ state, update }) => (
	<div id="six">
		Component 6 -<b>Valor del state: {state}</b>
		<button onClick={() => update(prev => prev + 1)}>update</button>
	</div>
)

const ComponentChild5 = ({ state, update }) => (
	<div id="five">
		5 state: {state}
		<ComponentChild6 state={state} update={update} />
	</div>
)

const ComponentChild4 = ({ state, update }) => (
	<div id="four">
		4
		<ComponentChild5 state={state} update={update} />
	</div>
)

const ComponentChild3 = ({ state, update }) => (
	<div id="three">
		3
		<ComponentChild4 state={state} update={update} />
	</div>
)

const ComponentChild2 = ({ state, update }) => (
	<div id="two">
		2
		<ComponentChild3 state={state} update={update} />
	</div>
)

const ComponentChild1 = ({ state, update }) => (
	<div id="one">
		1
		<ComponentChild2 state={state} update={update} />
	</div>
)

export const MainComponent = () => {
	const [state, setState] = useState(1) //! 2

	return (
		<div id="propsdrilling">
			<h1>Prop drilling</h1>
			<span>Main Component</span>
			<ComponentChild1 state={state} update={setState} />
		</div>
	)
}
