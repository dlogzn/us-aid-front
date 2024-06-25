import { Outlet } from "react-router-dom"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import ButtonLeft from "./ButtonLeft"

const Root = () => {
	return (
		<>
			<Header></Header>			
			<Outlet></Outlet>
			<Footer></Footer>
			<ButtonLeft></ButtonLeft>
		</>
	)
}

export default Root