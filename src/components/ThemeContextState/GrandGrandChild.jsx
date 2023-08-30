import { ThemeContext } from "../../context/ThemeContext"

export const GrandGrandChild = () => (
	<ThemeContext.Consumer>
		{isDarkMode => <p>GrandGrandChild modo oscuro: {isDarkMode}</p>}
	</ThemeContext.Consumer>
)
