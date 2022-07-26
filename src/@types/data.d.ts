namespace nadir {

	namespace data {

		type AttributeNames = "Accurate" | "Cunning" | "Discreet" | "Persuasive" | "Quick" | "Resolute" | "Strong" | "Vigilant";

		type TraitNames = "Bushcraft" | "Privilaged" | "Archivist" | "Contacts*" | "Pathfinder" | "Shapeshifter" | "Wisdom of Ages" | "Manipulator" | "Earth-bound" | "Bustler";

		type SkillNames = "Bargaining" | "Hiding" | "Intimidating" | "Researching" | "Lying";

		interface Race {
			name: `Human, ${"Luxian" | "Feon" | "Thistian" | "Blacktownian" | "Karvosian" | "Peasant"}` | `Changeling` | `Elf, ${"Rohni" | "Davoki"}` | "Dwarf";
			description: string;
			attributeBonus: PartialRecord<AttributeNames, number>;
			trait: TraitNames;
		}

		interface Religion {
			name: "Church of Mal'kath" | "Cult of the Black Sun" | "Followers of the Prophet" | "Old Dôr Religion" | "Non-practicing" | "Thistian Philosophy";
			description: string;
			skill?: SkillNames;
		}

		interface Trait {
			name: TraitNames;
			description: string;
		}

		interface Skill {
			name: SkillNames;
			attribute: AttributeNames;
			description: string;
		}

		interface Ability {
			name: "";
			description: string;
			rank1: string;
			rank2: string;
			rank3: string;
		}

		interface Spell {
			name: "";
			description: string;
		}

		interface Ritual {
			name: "";
			description: string;
			rank1: string;
			rank2: string;
			rank3: string;
		}
	}

}