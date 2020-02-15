import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
	text-align: center;
`
const Header = styled.div`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`

export const App: React.FC = () => {
	return (
		<AppContainer>
			<Header>
				<p>Hi Justin!</p>
			</Header>
		</AppContainer>
	)
}
