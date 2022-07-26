import { Fragment } from "react";

import { Subtitle } from "../../shared/Titles";
import { NoLink } from "../../shared/Links";
import { TRAITS } from "../../../data/traits";
import { EntryBox, EntryDescription, EntrySingle, EntryTitle } from "../../shared/Entry";

export function Traits(): JSX.Element {
	return (
		<Fragment>
			<Subtitle>Traits</Subtitle>
			{TRAITS.sort((a, b) => a.name.localeCompare(b.name)).map((v, i) => {
				return (
					<EntryBox key={i}>
						<EntryTitle>{v.name}</EntryTitle>
						<EntryDescription>{v.description}</EntryDescription>
					</EntryBox>
				);
			})}
		</Fragment>
	);
}
