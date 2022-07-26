import styled from "styled-components";

export const Title = styled.div`
	font-size: 2.0em;
	padding: 4px 6px 4px 16px;

	font-family: "Cinzel";
	text-transform: uppercase;
	font-weight: bold;

	border-bottom: ${(props: nadir.style.Props) => props.theme.border.hard};

	width: 100%;
	flex: 1 0 auto;
`;

export const Subtitle = styled.div<{ noBorder?: boolean; }>`
	font-size: 1.7em;
	padding: 4px 6px 4px 6px;

	font-family: "Cinzel";

	border-bottom: ${p => p.noBorder ? "none" : (props: nadir.style.Props) => props.theme.border.medium};

	width: 100%;
	flex: 1 0 auto;
`;

export const Header = styled.div`
	font-size: 1.7em;
	padding: 4px 6px 4px 6px;

	font-family: "Cinzel";

	border-bottom: ${(props: nadir.style.Props) => props.theme.border.medium};

	width: 100%;
	flex: 1 0 auto;
`;
