import { Fragment } from "react";
import styled from "styled-components";

import { RACES } from "../../../data/races";

import { Subtitle } from "../../shared/Titles";
import { CategoryWrapper } from "../../shared/Inner";
import { NoLink } from "../../shared/Links";


const RaceBox = styled.div`
	width: 100%;
	margin: 4px 0 10px;

	display: grid;
	grid-template-columns: 3fr 2fr 2fr;
	grid-template-rows: repeat(5, auto);
`;

const RaceTitle = styled.div`
	font-size: 18px;
	font-weight: bold;
	margin: 2px 2px 3px;
`;

const RaceTrait = styled.span`
	justify-self: left;
	align-self: center;
	margin: 2px 2px 3px;
`;

const RaceAttributes = styled.span`
	justify-self: left;
	align-self: center;

	& > span {
		margin: 2px 2px 3px;
		
		&:not(:last-child)::after {
			content: ",";
		}
	}
`;

const RaceDescription = styled.div`
	grid-column: span 3;
	font-style: italic;
	padding: 2px 3px 5px 10px;
`;

function AttributeBonus({ name, bonus }: { name: string; bonus: number; }) {
	const v = (bonus >= 0) ? `+${bonus}` : bonus;
	return <span><NoLink>{name}</NoLink>: {v}</span>;
}


export function Races(): JSX.Element {
	return (
		<Fragment>
			<Subtitle>Races</Subtitle>
			{RACES.map((v, i) => {
				return (
					<RaceBox key={i}>
						<RaceTitle>{v.race}</RaceTitle>
						<RaceTrait>Trait: <NoLink>{v.trait}</NoLink></RaceTrait>
						<RaceAttributes>
							{Object.entries(v.attributeBonus).map((vv, ii) => <AttributeBonus key={ii} name={vv[0]} bonus={vv[1]} />)}
						</RaceAttributes>
						<RaceDescription>{v.description}</RaceDescription>
					</RaceBox>
				);
			})}
		</Fragment>
	);
}
