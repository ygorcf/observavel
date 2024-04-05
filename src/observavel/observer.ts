import { SubscriberListener } from './subscriber-listener';

export class Observer<T> {
  constructor(private destination: SubscriberListener<T>) {}

  public complete() {}

  public next(value: T) {
    this.destination(value);
  }
}
