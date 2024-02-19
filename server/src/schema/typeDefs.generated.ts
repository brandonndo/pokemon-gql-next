import type { DocumentNode } from 'graphql';
  export const typeDefs = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query","loc":{"start":5,"end":10}},"interfaces":[],"directives":[],"fields":[],"loc":{"start":0,"end":10}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query","loc":{"start":16,"end":21}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"pokemon","loc":{"start":26,"end":33}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Pokemon","loc":{"start":36,"end":43}},"loc":{"start":36,"end":43}},"loc":{"start":36,"end":44}},"loc":{"start":35,"end":45}},"loc":{"start":35,"end":46}},"directives":[],"loc":{"start":26,"end":46}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"pokemon_by_pk","loc":{"start":49,"end":62}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":63,"end":65}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":67,"end":69}},"loc":{"start":67,"end":69}},"loc":{"start":67,"end":70}},"directives":[],"loc":{"start":63,"end":70}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pokemon","loc":{"start":73,"end":80}},"loc":{"start":73,"end":80}},"directives":[],"loc":{"start":49,"end":80}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"pokemon_by_name","loc":{"start":83,"end":98}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"name","loc":{"start":99,"end":103}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":105,"end":111}},"loc":{"start":105,"end":111}},"loc":{"start":105,"end":112}},"directives":[],"loc":{"start":99,"end":112}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pokemon","loc":{"start":115,"end":122}},"loc":{"start":115,"end":122}},"directives":[],"loc":{"start":83,"end":122}}],"loc":{"start":11,"end":124}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Pokemon","loc":{"start":131,"end":138}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"name","loc":{"start":143,"end":147}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":149,"end":155}},"loc":{"start":149,"end":155}},"loc":{"start":149,"end":156}},"directives":[],"loc":{"start":143,"end":156}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"url","loc":{"start":159,"end":162}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":164,"end":170}},"loc":{"start":164,"end":170}},"loc":{"start":164,"end":171}},"directives":[],"loc":{"start":159,"end":171}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":174,"end":176}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":178,"end":180}},"loc":{"start":178,"end":180}},"loc":{"start":178,"end":181}},"directives":[],"loc":{"start":174,"end":181}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"height","loc":{"start":184,"end":190}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":192,"end":195}},"loc":{"start":192,"end":195}},"loc":{"start":192,"end":196}},"directives":[],"loc":{"start":184,"end":196}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"weight","loc":{"start":199,"end":205}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":207,"end":210}},"loc":{"start":207,"end":210}},"loc":{"start":207,"end":211}},"directives":[],"loc":{"start":199,"end":211}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"base_experience","loc":{"start":214,"end":229}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":231,"end":234}},"loc":{"start":231,"end":234}},"loc":{"start":231,"end":235}},"directives":[],"loc":{"start":214,"end":235}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"species","loc":{"start":238,"end":245}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Species","loc":{"start":247,"end":254}},"loc":{"start":247,"end":254}},"loc":{"start":247,"end":255}},"directives":[],"loc":{"start":238,"end":255}}],"loc":{"start":126,"end":257}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Species","loc":{"start":264,"end":271}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"name","loc":{"start":276,"end":280}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":282,"end":288}},"loc":{"start":282,"end":288}},"loc":{"start":282,"end":289}},"directives":[],"loc":{"start":276,"end":289}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"url","loc":{"start":292,"end":295}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":297,"end":303}},"loc":{"start":297,"end":303}},"loc":{"start":297,"end":304}},"directives":[],"loc":{"start":292,"end":304}}],"loc":{"start":259,"end":306}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"SpeciesDetails","loc":{"start":312,"end":326}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"is_legendary","loc":{"start":331,"end":343}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":345,"end":352}},"loc":{"start":345,"end":352}},"loc":{"start":345,"end":353}},"directives":[],"loc":{"start":331,"end":353}}],"loc":{"start":307,"end":355}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Species","loc":{"start":369,"end":376}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"speciesDetails","loc":{"start":381,"end":395}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SpeciesDetails","loc":{"start":397,"end":411}},"loc":{"start":397,"end":411}},"loc":{"start":397,"end":412}},"directives":[],"loc":{"start":381,"end":412}}],"loc":{"start":357,"end":414}}],"loc":{"start":0,"end":415}} as unknown as DocumentNode