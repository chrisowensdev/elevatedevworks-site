import { webDesignLocations } from "@/content/locations.web-design";
import WebDesignHub from "./_components/WebDesignHub";

export default function WebDesignPage() {
	return <WebDesignHub locations={webDesignLocations} />;
}
