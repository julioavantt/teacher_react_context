import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { UpdaterContext } from "./UpdaterContext"

const AmoLasProps = props => <mark>{JSON.stringify(props.rebelde)}</mark>

export const GrandChild = () => {
	const { isDarkMode } = useContext(ThemeContext)

	return (
		<div>
			GrandChild
			<hr />
			Modo oscuro: {JSON.stringify(isDarkMode)}
			<hr />
			<UpdaterContext />
			<AmoLasProps rebelde={isDarkMode} />
		</div>
	)
}
