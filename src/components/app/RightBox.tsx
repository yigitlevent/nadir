import shallow from "zustand/shallow";

import { ClientStore } from "../../store/ClientStore";

import { Box } from "../shared/Box";

import { Races } from "./rightbox/Races";

export function RightBox(): JSX.Element {
	const { activeMenu } = ClientStore(state => ({ activeMenu: state.activeMenu }), shallow);

	return (
		<Box grow={0} shrink={0} flexWidth={"600px"}>
			{(activeMenu === "races-and-cultures") ? <Races /> : null}
		</Box>
	);
}
