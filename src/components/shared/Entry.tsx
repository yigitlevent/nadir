import styled from "styled-components";

export const EntryBox = styled.div`
	width: 100%;
	margin: 4px 0 10px;

	display: grid;
	grid-template-columns: 3fr 2fr 2fr;
	grid-template-rows: repeat(5, auto);
`;

export const EntryTitle = styled.div`
	font-size: 18px;
	font-weight: bold;
	margin: 2px 2px 3px;
`;

export const EntrySingle = styled.span`
	justify-self: left;
	align-self: center;
	font-size: 0.95em;
	margin: 2px 2px 3px;
`;

export const EntryList = styled.span`
	justify-self: left;
	align-self: center;
	font-size: 0.95em;
	margin: 2px 2px 3px;

	& > span {
		margin: 2px 2px 3px;
		
		&:not(:last-child)::after {
			content: ",";
		}
	}
`;

export const EntryDescription = styled.div`
	grid-column: span 3;
	font-family: "Cormorant Upright";
	font-style: italic;
	font-size: 1.1em;
	padding: 2px 3px 5px 10px;
`;
