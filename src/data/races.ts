import { SKILLS } from "./skills";
import { TRAITS } from "./traits";

export const RACES: nadir.data.RaceEntry[] = [
	{
		name: "Human",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		attributeBonus: { Will: 1, Constitution: 1 }
	},
	{
		name: "Elf",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		attributeBonus: { Wits: 1, Will: 1 }
	},
	{
		name: "Dwarf",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		attributeBonus: { Strength: 1, Constitution: 1 }
	},
	{
		name: "Myra",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		attributeBonus: { Perception: 1, Wits: 1 }
	}
];

export const CULTURE: nadir.data.CultureEntry[] = [
	{
		name: "Blacktownian",
		race: "Human",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		trait: TRAITS[0]
	},
	{
		name: "Feon",
		race: "Human",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		trait: TRAITS[0]
	},
	{
		name: "Karvosian",
		race: "Human",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		trait: TRAITS[0]
	},
	{
		name: "Luxian",
		race: "Human",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		trait: TRAITS[0]
	},
	{
		name: "Peasant",
		race: "Human",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		trait: TRAITS[0]
	},
	{
		name: "Thistian",
		race: "Human",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		trait: TRAITS[0]
	},
	{
		name: "Davoki",
		race: "Elf",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		trait: TRAITS[0]
	},
	{
		name: "Rohni",
		race: "Elf",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		trait: TRAITS[0]
	},
	{
		name: "Hill",
		race: "Dwarf",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		trait: TRAITS[0]
	},
	{
		name: "Myran",
		race: "Myra",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		trait: TRAITS[0]
	}
];

export const RELIGIONS: nadir.data.ReligionEntry[] = [
	{
		name: "Church of Mal'kath",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		skills: [SKILLS[0], SKILLS[1], SKILLS[2]]
	},
	{
		name: "Cult of the Black Sun",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		skills: [SKILLS[0], SKILLS[1], SKILLS[2]]
	},
	{
		name: "Followers of the Prophet",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		skills: [SKILLS[0], SKILLS[1], SKILLS[2]]
	},
	{
		name: "Thistian Arcana",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		skills: [SKILLS[0], SKILLS[1], SKILLS[2]]
	},
	{
		name: "Stone Lords",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		skills: [SKILLS[0], SKILLS[1], SKILLS[2]]
	},
	{
		name: "Non-practicing",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	}
];
