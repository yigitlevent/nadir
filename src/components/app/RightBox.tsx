import shallow from "zustand/shallow";

import { ClientStore } from "../../store/ClientStore";

import { Box } from "../shared/Box";

import { Races } from "./rightbox/Races";
import { Religions } from "./rightbox/Religions";
import { Skills } from "./rightbox/Skills";
import { Traits } from "./rightbox/Traits";

export function RightBox(): JSX.Element {
	const { activeMenu } = ClientStore(state => ({ activeMenu: state.activeMenu }), shallow);

	return (
		<Box grow={0} shrink={0} flexWidth={"600px"}>
			{(activeMenu === "races-and-cultures") ? <Races /> : null}
			{(activeMenu === "religions") ? <Religions /> : null}
			{(activeMenu === "skills") ? <Skills /> : null}
			{(activeMenu === "traits") ? <Traits /> : null}
		</Box>
	);
}
