export interface CountryType {
    code?: string;
    name: string;
    capital?: string;
    currency?: string;
    emoji?: string;
}

export interface ContinentType {
    code?: string;
    name: string;
    countries?: CountryType[];

}