import { Fragment } from "react";

import { Subtitle } from "../../shared/Titles";
import { NoLink } from "../../shared/Links";
import { SKILLS } from "../../../data/skills";
import { EntryBox, EntryDescription, EntrySingle, EntryTitle } from "../../shared/Entry";

export function Skills(): JSX.Element {
	return (
		<Fragment>
			<Subtitle>Skills</Subtitle>
			{SKILLS.sort((a, b) => a.name.localeCompare(b.name)).map((v, i) => {
				return (
					<EntryBox key={i}>
						<EntryTitle>{v.name}</EntryTitle>
						<EntrySingle>Attribute: <NoLink>{v.attribute}</NoLink></EntrySingle>
						<EntryDescription>{v.description}</EntryDescription>
					</EntryBox>
				);
			})}
		</Fragment>
	);
}
