import { type SchemaTypeDefinition } from "sanity";
import homepage from "./documents/homepage";
import cta from "./objects/cta";
import hero from "./modules/hero";
import logoList from "./objects/logoList";

const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    homepage,

    // Modules
    hero,

    // Objects
    cta,
    logoList,
  ],
};

export default schema;
