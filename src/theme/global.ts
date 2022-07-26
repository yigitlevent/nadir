import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		tab-size: 4;

		font-size: 1em;

		font-family: "Garamond";
		color: ${(props: nadir.style.Props) => props.theme.text.main};
	}

	html {
		height: 100vh;
		width: 100vw;
	}

	html,
	body {
		overflow: hidden;
	}

	body, 
	#root {
		height: 100%;
		width: 100%;
	}

	html,
	body,
	#root {
		background: ${(props: nadir.style.Props) => props.theme.background.surface};
		margin: 0;
		padding: 0;
	}

	#root {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: flex-start;
		align-content: flex-start;
		overflow: hidden scroll;
		margin: 0;
		padding: 30px 0;
	}
`;
