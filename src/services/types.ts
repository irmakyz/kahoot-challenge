export interface ItemResponse {
  name: string;
  url: string;
}

export interface ItemType {
  type: ItemResponse;
}

export interface ItemPower {
  base_stat: number;
  effort: number;
  stat: ItemResponse;
}

export interface ItemAbility {
  ability: ItemResponse;
  is_hidden: boolean;
  slot: number;
}
