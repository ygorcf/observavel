import { Observer } from './observer';

export type SubscriptionListener = (value: any) => void;
export type SubscriberListener = (observer: Observer) => void;
