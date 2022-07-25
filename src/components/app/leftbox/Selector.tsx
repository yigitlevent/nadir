import shallow from "zustand/shallow";

import { ClientStore } from "../../../store/ClientStore";

import { SubBox } from "../../shared/Box";
import { Subtitle } from "../../shared/Titles";
import { NoLink } from "../../shared/Links";

interface Selector {
	title: string;
	id: nadir.stores.MenuNames;
}

export function Selector({ title, id }: Selector): JSX.Element {
	const { setActiveMenu } = ClientStore(state => ({
		setActiveMenu: state.setActiveMenu
	}), shallow);

	return (
		<SubBox>
			<Subtitle noBorder>
				<NoLink onClick={() => { setActiveMenu(id); }}>
					{title}
				</NoLink>
			</Subtitle>
		</SubBox>
	);
}
