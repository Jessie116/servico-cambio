export interface ExchangeRate {
  result: string;
  base_code: string;
  // conversion_rates: [string: number];
  conversion_rates: { [key: string]: any };
}
