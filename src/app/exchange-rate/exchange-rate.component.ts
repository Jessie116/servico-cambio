import { Component, OnInit , OnDestroy} from '@angular/core';
import { ExchangeRate } from '../models/exchange.model';
import { ExchangeRateService } from '../services/exchange-rate.service';
import { CURRENCIES } from '../models/currencies';
import { ToastService } from '../services/toast-service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss'],
})
export class ExchangeRateComponent implements OnInit, OnDestroy {
  public totalCosts: number = 0;
  public convertToCurrency: string = '';

  public buttonCta = 'CALCULATE_IMPORT_COSTS';
  public convertFrom = 'USD';
  public convertTo = 'MZN';
  public currencies = CURRENCIES;
  public exchangeRates: ExchangeRate | undefined;

  public shouldRecalculate = false;

  public purchaseCosts: number = 0;
  public shippingCosts: number = 0;
  private previousConvertFrom = this.convertFrom;
  private previousConvertTo = this.convertTo;

 

  



  constructor(private exchangeService: ExchangeRateService,public toastService: ToastService) {}

  ngOnInit(): void {
    this.getExchangeRates();
  }
  showSuccess() {
    this.toastService.show('Submetido', { classname: 'bg-success text-light', delay: 10000 });
  }

  

  ngOnDestroy(): void {
    this.toastService.clear();
  }

  private getExchangeRates(): void {
    this.exchangeService
      .getRates(this.convertFrom)
      .subscribe((data) => this.exchangeRatesLoaded(data));
  }

  private exchangeRatesLoaded(data: ExchangeRate): void {
    this.exchangeRates = data;
  }

  public convertPurchaseValue(): number {
    if (this.exchangeRates) {
      const purchaseCosts =
        this.purchaseCosts *
        this.exchangeRates.conversion_rates[this.convertTo];
      return purchaseCosts;
    } else return 0;
  }

 

  public onConvertFromChange(event: string): void {
    if (event === this.convertTo) {
      this.convertTo = this.previousConvertFrom;
      this.previousConvertFrom = this.convertFrom;
      this.previousConvertTo = this.convertTo;
    }
    this.getExchangeRates();
    this.toggleRecalculateButtonFlash();
  }

  public onConvertToChange(event: string): void {
    if (event === this.convertFrom) {
      this.convertFrom = this.previousConvertTo;
      this.previousConvertTo = this.convertTo;
      this.previousConvertFrom = this.convertFrom;
      this.getExchangeRates();
    }
    this.toggleRecalculateButtonFlash();
  }

  public getTotalCosts(): number {
    return  this.convertPurchaseValue();
  }

 

  public onCostsChange(): void {
    this.toggleRecalculateButtonFlash();
  }

  private toggleRecalculateButtonFlash(shouldReset: boolean = false): void {
    if (shouldReset) {
      this.shouldRecalculate = false;
      return;
    }
    
  }
}


