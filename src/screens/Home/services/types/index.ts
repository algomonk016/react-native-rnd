type TNameUrl = {
  name: string;
  url: string;
};

type TAbility = {
  ability: TNameUrl;
  is_hidden: boolean;
  slot: number;
};

type TGameIndex = {
  game_index: number;
  version: TNameUrl;
};

type TVersionGroupDetail = {
  level_learned_at: number;
  move_learn_moethod: TNameUrl;
  version_group: TNameUrl;
};

type TMove = {
  move: TNameUrl;
  version_group_details: Array<TVersionGroupDetail>;
};

type TStat = {
  base_stat: number;
  effort: number;
  stat: TNameUrl;
};

type TType = {
  slot: number;
  type: TNameUrl;
};

type TAbilities = Array<TAbility>;
type TForms = Array<TNameUrl>;
type TGameIndicies = Array<TGameIndex>;
type TMoves = Array<TMove>;
type TSpecies = TNameUrl;
type TStats = Array<TStat>;
type TTypes = Array<TType>;

export type TPokemon = {
  abilities: TAbilities;
  base_experience: number;
  forms: TForms;
  game_indices: TGameIndicies;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: TMoves;
  name: string;
  order: number;
  species: TSpecies;
  stats: TStats;
  types: TTypes;
  weight: number;
};
