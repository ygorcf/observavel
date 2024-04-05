import { SubscriptionListener } from './listeners';

export class Observer {
  constructor(private destination: SubscriptionListener) {}

  public complete() {}

  public next(value: any) {
    this.destination(value);
  }
}
