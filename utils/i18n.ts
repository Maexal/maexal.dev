import lngDictEN from "@/locales/en.json";
import lngDictNL from "@/locales/nl.json";

// eslint-disable-next-line @typescript-eslint/ban-types
export const getLngDict = (lng: string): object => {
	switch (lng) {
		case "nl":
			return lngDictNL;
		case "en":
		default:
			return lngDictEN;
	}
};
