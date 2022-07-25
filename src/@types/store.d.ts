namespace nadir {

	namespace stores {

		type MenuNames = "" | "character-generation" | "races-and-cultures" | "religions" | "traits" | "skills" | "abilities" | "spells" | "rituals" | "downtime" | "town" | "travel" | "advancement";

		interface ClientStore {
			activeMenu: nadir.stores.MenuNames;

			setActiveMenu: (menuName: nadir.stores.MenuNames) => void;
		}

	}

}
