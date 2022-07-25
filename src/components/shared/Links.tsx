import styled from "styled-components";

export const Link = styled.a`
	color: ${(props: nadir.style.Props) => props.theme.text.link};
	cursor: pointer;
	text-decoration: none;

	&:hover {
		${(props: nadir.style.Props) => props.theme.brightness.hovered}
	}

	&:visited {
		color: ${(props: nadir.style.Props) => props.theme.text.link};
		text-decoration: none;
	}
`;

export const NoLink = styled.span<{ seperator?: string; }>`
	color: ${(props: nadir.style.Props) => props.theme.text.nolink};
	cursor: pointer;
	text-decoration: none;

	&:not(:last-child):after {
		content: "${p => (p.seperator) ? p.seperator : ""}";
		color: ${(props: nadir.style.Props) => props.theme.text.main};
	}
	
	&:hover {
		${(props: nadir.style.Props) => props.theme.brightness.hovered}
	}

	&:visited {
		color: ${(props: nadir.style.Props) => props.theme.text.link};
		text-decoration: none;
	}
`;
