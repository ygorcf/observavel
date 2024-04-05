import { Observer } from './observer';
import { SubscriberListener, SubscriptionListener } from './listeners';

export class MyObservable {
  constructor(private subscribeListener: SubscriberListener) {}

  public subscribe(listener: SubscriptionListener) {
    const observer = new Observer(listener);

    this.subscribeListener(observer);
  }
}
