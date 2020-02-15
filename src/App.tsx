import * as React from 'react'
import styled from 'styled-components'
import { useContextMenu } from './hooks'

// import { useSpring, animated } from 'react-spring'

// interface IProps {
// 	height: string
// }

interface ITitleProps {
	children: string
}

interface IMenuProps {
	outerRef: any
}

interface IStyledMenuProps {
	top: string
	left: string
}

const AppContainer = styled.div`
	text-align: center;
	display: flex;
	flex-flow: column nowrap;
`

const Header = styled.div`
	background-color: #282c34;
	/* min-height: ${(p: IProps) => p.height}; */
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* font-size: calc(10px + 2vmin); */
	color: white;
`

const Main = styled.div`
	height: 100%;
`

const Letter = styled.span`
	cursor: default;
	font-size: calc(12px + 2vmin);
	&:hover {
		color: #7c7;
		font-size: calc(12px + 4vmin);
		margin: 2px;
	}
`

const StyledTitle = styled.p`
	cursor: default;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 0.5em;
`

const StyledMenu = styled.ul`
	background-color: #7c7;
	/* border-radius: 0px; */
	border: 2px solid #343434;
	padding-left: 0;
	margin: 0;
	position: absolute;
	list-style: none;
	top: ${(p: IStyledMenuProps) => p.top};
	left: ${(p: IStyledMenuProps) => p.left};
`

const ContextItem = styled.li`
	padding: 0.2em 1em;
	color: #343434;
	cursor: default;

	&:hover {
		background-color: #5a5;
	}
`

const Title = (p: ITitleProps) => {
	const words = p.children.split(' ')

	return (
		<StyledTitle>
			{words.map(word => {
				const letters = word.split('')

				return (
					<span>
						{letters.map(letter => (
							<Letter>{letter}</Letter>
						))}
					</span>
				)
			})}
		</StyledTitle>
	)
}

// export const Menu: React.FC = () => {
const Menu = (p: IMenuProps) => {
	const { xPos, yPos, menu } = useContextMenu(p.outerRef)

	if (menu) {
		return (
			<StyledMenu top={yPos} left={xPos}>
				<ContextItem>Item1</ContextItem>
				<ContextItem>Item2</ContextItem>
				<ContextItem>Item3</ContextItem>
			</StyledMenu>
		)
	}
	return <></>
}

export const App: React.FC = () => {
	// const AnimatedHeader = animated(Header)
	// const props = useSpring({ value: '30vh', from: { value: '100vh' } })
	const outerRef = React.useRef(null)
	// const { xPos, yPos, menu } = useContextMenu(outerRef);

	return (
		<AppContainer>
			<Header ref={outerRef}>
				<Menu outerRef={outerRef} />
				<Title>Hi Justin!</Title>
			</Header>
			<Main />
		</AppContainer>
	)
}
