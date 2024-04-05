import { Observer } from './observer';
import { SubscriberListener } from './subscriber-listener';

export class Observavel<T> {
  constructor(private asyncFuction: (observer: Observer<T>) => void) {}

  public subscribe(listener: SubscriberListener<T>) {
    const observer = new Observer(listener);

    this.asyncFuction(observer);
  }
}
