namespace nadir {

	namespace data {

		type AttributeNames = "Agility" | "Strength" | "Constitution" | "Perception" | "Will" | "Wits";
		type RaceNames = "Human" | "Elf" | "Dwarf" | "Myra";

		interface TraitEntry {
			description: string;
		}

		interface SkillEntry {
			attribute: AttributeNames;
			description: string;
		}

		interface AbilityEntry {
			attribute: AttributeNames;
			description: string;
		}

		interface SpellEntry {
			attribute: AttributeNames;
			description: string;
		}

		interface RaceEntry {
			name: RaceNames;
			description: string;
			attributeBonus: PartialRecord<AttributeNames, number>;
		}

		interface CultureEntry {
			name: string;
			race: RaceNames;
			description: string;
			trait: TraitEntry;
		}

		interface ReligionEntry {
			name: "Stone Lords" | "Church of Mal'kath" | "Cult of the Black Sun" | "Followers of the Prophet" | "Thistian Arcana" | "Non-practicing";
			description: string;
			skills?: [SkillEntry, SkillEntry, SkillEntry];
		}

		interface ClientStore {
			name: string;
			age: number;

			race?: RaceEntry;
			culture?: CultureEntry;
			religion?: ReligionEntry;

			setName: (name: string) => void;
			setAge: (age: number) => void;

			setRace: (race: RaceEntry) => void;
			setCulture: (culture: CultureEntry) => void;
			setReligion: (religion: ReligionEntry) => void;
		}

	}

}