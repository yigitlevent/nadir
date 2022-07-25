namespace nadir {

	namespace data {

		type AttributeNames = "Accurate" | "Cunning" | "Discreet" | "Persuasive" | "Quick" | "Resolute" | "Strong" | "Vigilant";

		type RaceNames = `Human, ${"Luxian" | "Feon" | "Thistian" | "Blacktownian" | "Karvosian" | "Peasant"}` | `Changeling` | `Elf, ${"Rohni" | "Davoki"}` | "Dwarf";

		type TraitNames = "Bushcraft" | "Privilaged" | "Archivist" | "Contacts*" | "Pathfinder" | "Shapeshifter" | "Wisdom of Ages" | "Manipulator" | "Earth-bound" | "Bustler";

		interface Race {
			race: RaceNames;
			description: string;
			attributeBonus: PartialRecord<AttributeNames, number>;
			trait: TraitNames;
		}
	}

}