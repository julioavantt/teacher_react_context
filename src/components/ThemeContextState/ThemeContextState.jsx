import { useState } from "react"

import { ThemeContext } from "../../context/ThemeContext"

import { Child } from "./Child"

export const ThemeContextState = () => {
	const [isDarkMode] = useState("dark")

	return (
		<ThemeContext.Provider value={isDarkMode}>
			<h1>Context</h1>
			<Child />
		</ThemeContext.Provider>
	)
}
