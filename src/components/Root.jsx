import { Outlet } from "react-router-dom"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"

const Root = () => {
	return (
		<>
			<Header></Header>			
			<Outlet></Outlet>
			<Footer></Footer>
		</>
	)
}

export default Root