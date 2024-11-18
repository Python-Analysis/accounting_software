import { Money } from 'pesa';

export type ItemQtyMap = {
  [item: string]: { availableQty: number; [batch: string]: number };
};

export type ItemSerialNumbers = { [item: string]: string };

export type DiscountType = 'percent' | 'amount';

export type ModalName =
  | 'Keyboard'
  | 'Payment'
  | 'ShiftClose'
  | 'LoyaltyProgram'
  | 'SavedInvoice'
  | 'Alert'
  | 'CouponCode';

export interface POSItem {
  id?: number;
  image?: string;
  name: string;
  rate: Money;
  availableQty: number;
  unit: string;
  hasBatch: boolean;
  hasSerialNumber: boolean;
}
