import React, { Fragment } from "react"
import styles from "./style.module.css"
import { PageContainerProps } from "./types"
function PageContainer(props: PageContainerProps) {
	const isShowHeader = props.header && !props.title
	const isShowDefaultHeader = props.title && !props.header
	return (
		<div className={styles.container} style={{ ...props.style }}>
			{isShowHeader && props.header}
			{isShowDefaultHeader && <h2 style={{alignSelf:"flex-start"}}>{props.title}</h2>}
			{React.Children.toArray(props.children).map((Content, i) => {
				return <Fragment key={i}>{Content}</Fragment>
			})}
		</div>
	)
}

export default PageContainer