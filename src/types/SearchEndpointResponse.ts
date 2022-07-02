export interface SearchEndpointResponse {
  hits: Hit[];
  nbHits?: number;
  page?: number;
  nbPages: number;
  hitsPerPage?: number;
  exhaustiveNbHits?: boolean;
  exhaustiveTypo?: boolean;
  query?: string;
  params?: string;
  renderingContent?: RenderingContent;
  processingTimeMS?: number;
}

export interface Hit {
  assetId: string;
  assetCategory: Category;
  autograph: null;
  brand: string;
  cardNumber: string;
  category: Category;
  confidenceMetric: number;
  createdAt: number;
  grade: string;
  gradeKey: string;
  gradingCompany: GradingCompany;
  groupName: string;
  groupListingCount: number;
  hasPrintRun: boolean;
  hasPrintRunAndSerial: boolean;
  hasSerial: boolean;
  isRookieYearCard: boolean;
  images: Image[];
  itemId: string;
  itemName: string;
  listingPriceAndAltValueDifference: number;
  listingType: ListingType;
  lowestListingPrice: number;
  lowestPriceListingId: string;
  name: string;
  pop: number;
  printRun: null;
  serial: null;
  subject: string;
  updatedAt: number;
  variety: string;
  year: number;
  altValue: number;
  valueScore: number;
  objectID: string;
  _highlightResult: HighlightResult;
}

export interface HighlightResult {
  brand: Brand;
  cardNumber: Brand;
  grade: Brand;
  gradingCompany: Brand;
  subject: Brand;
  variety: Brand;
  year: Brand;
}

export interface Brand {
  value: string;
  matchLevel: MatchLevel;
  matchedWords: MatchedWord[];
  fullyHighlighted?: boolean;
}

export enum MatchLevel {
  Full = "full",
  None = "none",
}

export enum MatchedWord {
  Charizar = "charizar",
}

export enum Category {
  PokemonCards = "POKEMON_CARDS",
}

export enum GradingCompany {
  PSA = "PSA",
}

export interface Image {
  url: string;
  position: Position;
}

export enum Position {
  Back = "BACK",
  Front = "FRONT",
}

export enum ListingType {
  BuyNow = "buy_now",
}

export interface RenderingContent {}
