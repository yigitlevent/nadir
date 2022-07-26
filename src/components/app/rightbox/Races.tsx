import { Fragment } from "react";

import { RACES } from "../../../data/races";

import { Subtitle } from "../../shared/Titles";
import { NoLink } from "../../shared/Links";
import { EntryBox, EntryDescription, EntryList, EntrySingle, EntryTitle } from "../../shared/Entry";

function AttributeBonus({ name, bonus }: { name: string; bonus: number; }) {
	const v = (bonus >= 0) ? `+${bonus}` : bonus;
	return <span><NoLink>{name}</NoLink>: {v}</span>;
}

export function Races(): JSX.Element {
	return (
		<Fragment>
			<Subtitle>Races</Subtitle>
			{RACES.sort((a, b) => a.name.localeCompare(b.name)).map((v, i) => {
				return (
					<EntryBox key={i}>
						<EntryTitle>{v.name}</EntryTitle>
						<EntrySingle>Trait: <NoLink>{v.trait}</NoLink></EntrySingle>
						<EntryList>
							{Object.entries(v.attributeBonus).map((vv, ii) => <AttributeBonus key={ii} name={vv[0]} bonus={vv[1]} />)}
						</EntryList>
						<EntryDescription>{v.description}</EntryDescription>
					</EntryBox>
				);
			})}
		</Fragment>
	);
}
