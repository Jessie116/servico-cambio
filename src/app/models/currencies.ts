export interface Currency {
  id: string;
  name: string;
  priority: number;
}

export const CURRENCIES: Currency[] = [
  { id: 'CAD', name: 'Canadian Dollar', priority: 1 },
  { id: 'MZN', name: 'Mozambican Metical', priority: 1 },
  { id: 'ZAR', name: ' South African Rand', priority: 1 },
 
  { id: 'CHF', name: 'Swiss Franc', priority: 1 },
  { id: 'EUR', name: 'Euro', priority: 1 },
  { id: 'GBP', name: 'British Pound', priority: 1 },
  { id: 'TRY', name: 'Turkish Lira', priority: 1 },
  { id: 'USD', name: 'US Dollar', priority: 1 },
  { id: 'AUD', name: 'Australian Dollar', priority: 2 },
  { id: 'CNY', name: 'Chinese Yuan', priority: 2 },
  { id: 'CZK', name: 'Czech Koruna', priority: 2 },
  { id: 'DKK', name: 'Danish Krone', priority: 2 },
  { id: 'HKD', name: 'Hong Kong Dollar', priority: 2 },
  { id: 'JPY', name: 'Japanese Yen', priority: 2 },
  { id: 'NOK', name: 'Norwegian Krone', priority: 2 },
  { id: 'MZN', name: 'Norwegian Krone', priority: 2 },
  { id: 'NZD', name: 'New Zealand Dollar', priority: 2 },
  { id: 'PLN', name: 'Polish Zloty', priority: 2 },
  { id: 'RUB', name: 'Russian Ruble', priority: 2 },
  { id: 'SEK', name: 'Swedish Krona', priority: 2 },
];
