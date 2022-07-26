import { Fragment } from "react";

import { Subtitle } from "../../shared/Titles";
import { NoLink } from "../../shared/Links";
import { RELIGIONS } from "../../../data/religions";
import { EntryBox, EntryDescription, EntrySingle, EntryTitle } from "../../shared/Entry";

export function Religions(): JSX.Element {
	return (
		<Fragment>
			<Subtitle>Religions</Subtitle>
			{RELIGIONS.map((v, i) => {
				return (
					<EntryBox key={i}>
						<EntryTitle>{v.name}</EntryTitle>
						{v.skill ? <EntrySingle>Skill : <NoLink>{v.skill}</NoLink></EntrySingle> : null}
						<EntryDescription>{v.description}</EntryDescription>
					</EntryBox>
				);
			})}
		</Fragment>
	);
}
