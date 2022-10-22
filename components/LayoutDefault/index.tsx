import React, { ReactElement } from "react"
import Footer from "../Footer"
import TopBar from "../TopBar"

function LayoutDefault({ children }: { children: ReactElement }) {
	return (
		<div
			style={{
				minHeight: "100vh",
				height: "100%",
				width: "100%",
				padding: 0,
				margin: 0,
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-start",
				alignItems: "center",
			}}
		>
            <TopBar/>
			{children}
			<Footer />
		</div>
	)
}

export default LayoutDefault