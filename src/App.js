import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { MainComponent } from "./components/PropDrilling"
import { ThemeContextState } from "./components/ThemeContextState/ThemeContextState"
import { ThemeContextUpdate } from "./components/ThemeContextUpdate/ThemeContextUpdate"
import { MultipleContext } from "./components/MultipleContext/MultipleContext"

function App() {
	return (
		<BrowserRouter>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">Context</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/">Prop Drilling</Nav.Link>
						<Nav.Link href="/context">Context</Nav.Link>
						<Nav.Link href="/context-update">Context Update</Nav.Link>
						<Nav.Link href="/context-multiple">Múltiple Context</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<Container className="mt-4">
				<Routes>
					<Route path="/" element={<MainComponent />} />
					<Route path="/context" element={<ThemeContextState />} />
					<Route path="/context-update" element={<ThemeContextUpdate />} />
					<Route path="/context-multiple" element={<MultipleContext />} />
				</Routes>
			</Container>
			<footer bg="dark" variant="dark">
				<Container className="d-flex justify-content-between">
					<div>Creado por Julio Avantt!</div>
					<div>
						<Link to="https://www.linkedin.com/in/julio-avantt/">
							<LinkedInIcon />
						</Link>
					</div>
				</Container>
			</footer>
		</BrowserRouter>
	)
}

export default App
