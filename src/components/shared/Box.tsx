import styled from "styled-components";

export const OuterBox = styled.div`
	width: 100%;
	padding: 0;
	margin: 0 auto;

	flex: 1 0 auto;

	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
`;

export const Box = styled.div<{ grow: number; shrink: number; flexWidth: string; }>`
	max-width: min(94%, ${p => p.flexWidth});
	margin: 3px;
	padding: 15px 4px;

	background: ${(props: nadir.style.Props) => props.theme.background.element};
	outline: ${(props: nadir.style.Props) => props.theme.border.medium};
	
	flex: ${p => p.grow} ${p => p.shrink} ${p => p.flexWidth};
	
	display: flex;
	flex-flow: row wrap;
	gap: 10px;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
`;

export const SubBox = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	margin: 6px 0 6px 0;
`;
