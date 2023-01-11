import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../theme/global";
import { DarkTheme } from "../theme/themes";

import { Box, OuterBox } from "./shared/Box";
import { Input } from "./shared/Inputs";


export const ThirdBox = styled.div`
	text-align: center;
	flex: 0 0 300px;
`;

export const HalfBox = styled.div`
	text-align: center;	
	flex: 0 0 455px;
`;

export function LabeledInput({ label }: { label: string; }) {
	return (
		<label>
			{label}
			<Input />
		</label>
	);
}


export function App(): JSX.Element {
	return (
		<ThemeProvider theme={DarkTheme}>
			<GlobalStyle />
			<OuterBox>
				<Box grow={0} shrink={0} flexWidth={"1000px"}>


					<HalfBox>
						<LabeledInput label={"Name"} />
					</HalfBox>
					<HalfBox>
						<LabeledInput label={"Age"} />
					</HalfBox>

					<ThirdBox>
						<LabeledInput label={"Race"} />
					</ThirdBox>
					<ThirdBox>
						<LabeledInput label={"Culture"} />
					</ThirdBox>
					<ThirdBox>
						<LabeledInput label={"Religion"} />
					</ThirdBox>

				</Box>
			</OuterBox>
		</ThemeProvider>
	);
}
