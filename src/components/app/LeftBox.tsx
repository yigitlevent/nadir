import { Box } from "../shared/Box";
import { Title } from "../shared/Titles";
import { Divider } from "../shared/Divider";

import { Selector } from "./leftbox/Selector";

/*const IconWrapper = styled.div`
	width: 100%;
	margin-bottom: 9px;
	height: auto;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	align-items: center;
	align-content: center;
`;*/

export function LeftBox(): JSX.Element {

	return (
		<Box grow={0} shrink={0} flexWidth={"300px"}>
			<Title>Nadir</Title>

			<Selector title="Character Generation" id="character-generation" />

			<Divider />

			<Selector title="Races & Cultures" id="races-and-cultures" />
			<Selector title="Religions" id="religions" />

			<Divider />

			<Selector title="Traits" id="traits" />
			<Selector title="Skills" id="skills" />
			<Selector title="Abilities" id="abilities" />
			<Selector title="Spells" id="spells" />
			<Selector title="Rituals" id="rituals" />

			<Divider />

			<Selector title="Downtime" id="downtime" />
			<Selector title="Town" id="town" />
			<Selector title="Travel" id="travel" />

			<Divider />

			<Selector title="Advancement" id="advancement" />

			{/*<IconWrapper>
				<Link href="https://www.burningwheel.com" rel="noopener noreferrer" target="_blank">
					<Icon name={"external"} title={"Burning Wheel HQ"} isDev={IsDev} size={24} />
				</Link>
				<Link href="https://github.com/yigitlevent/bwgr-tools" rel="noopener noreferrer" target="_blank">
					<Icon name={"github"} title={"BWGR Tools Github"} isDev={IsDev} size={24} />
				</Link>
				<Link href="https://discord.gg/dwkuevMXCH" rel="noopener noreferrer" target="_blank">
					<Icon name={"discord"} title={"Burning Wheel Discord Server"} isDev={IsDev} size={24} />
				</Link>
			/IconWrapper>*/}
		</Box>
	);
}
