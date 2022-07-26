namespace nadir {

	namespace data {

		type AttributeNames = "Accurate" | "Cunning" | "Discreet" | "Persuasive" | "Quick" | "Resolute" | "Strong" | "Vigilant";

		type RaceNames = `Human, ${"Luxian" | "Feon" | "Thistian" | "Blacktownian" | "Karvosian" | "Peasant"}` | `Changeling` | `Elf, ${"Rohni" | "Davoki"}` | "Dwarf";

		type ReligionNames = "Church of Mal'kath" | "Cult of the Black Sun" | "Followers of the Prophet" | "Old Dôr Religion" | "Non-practicing" | "Thistian Philosophy";

		type TraitNames = "Bushcraft" | "Privilaged" | "Archivist" | "Contacts*" | "Pathfinder" | "Shapeshifter" | "Wisdom of Ages" | "Manipulator" | "Earth-bound" | "Bustler";

		type SkillNames = "Bargaining" | "Hiding" | "Intimidating" | "Researching" | "Lying";

		interface Race {
			name: RaceNames;
			description: string;
			attributeBonus: PartialRecord<AttributeNames, number>;
			trait: TraitNames;
		}

		interface Religion {
			name: ReligionNames;
			description: string;
			skill?: SkillNames;
		}

		interface Skill {
			name: SkillNames;
			description: string
		}
	}

}