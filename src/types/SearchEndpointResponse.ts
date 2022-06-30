export interface SearchEndpointResponse {
    hits: Hit[];
}

export interface Hit {
    objectID:           string;
    grade:              string;
    gradingCompany:     string;
    images:             Image[];
    itemName:           string;
    lowestListingPrice: number;
    name:               string;
    subject:            string;
    year:               number;
}

export interface Image {
    url:      string;
    position: string;
}
