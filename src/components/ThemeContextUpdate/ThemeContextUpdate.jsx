import { useState } from "react"

import { ThemeContext } from "../../context/ThemeContext"
import { Child } from "./Child"

export const ThemeContextUpdate = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	return (
		<ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
			<h1>Context Update</h1>
			<Child />
		</ThemeContext.Provider>
	)
}
