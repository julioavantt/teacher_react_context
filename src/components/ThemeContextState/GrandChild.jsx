import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { GrandGrandChild } from "./GrandGrandChild"

export const GrandChild = () => {
	const isDarkMode = useContext(ThemeContext)

	return (
		<div>
			GrandChild
			<hr />
			Modo oscuro: {isDarkMode}
			<hr />
			<GrandGrandChild />
		</div>
	)
}
