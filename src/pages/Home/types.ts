export type Page = {
  items: Promise<ListItem>[];
  hasMore: boolean;
  nextPage?: number;
};

export interface ListItem {
  name: string;
  detailsURL: string;
}
