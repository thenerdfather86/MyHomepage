import React from 'react'

export const useTimeout = () => {
	// const [showLoading, setShowLoading] = React.useState(false)

	React.useEffect(() => {
		let timer1 = setTimeout(() => {}, 1000)

		// this will clear Timeout when component unmont like in willComponentUnmount
		return () => {
			clearTimeout(timer1)
		}
	}, []) //useEffect will run only one time
	//if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)

	return null
}
