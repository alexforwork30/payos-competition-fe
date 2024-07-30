import { PaymentLink } from "./payment";

export type OrderCreateReq = {
  amount: number;
  description: string;
};

export type OrderCreateRes = {
  paymentLink: PaymentLink;
  token: string;
};

export type Order = {
  id: string;
  orderCode: number;
  amount: number;
  amountPaid: number;
  amountRemaining: number;
  status: string;
  createdAt: string;
  transactions: TransactionType[];
  cancellationReason: string | null;
  canceledAt: string | null;
};

type TransactionType = {
  reference: string;
  amount: number;
  accountNumber: string;
  description: string;
  transactionDateTime: string;
  virtualAccountName: string | null;
  virtualAccountNumber: string | null;
  counterAccountBankId: string | null;
  counterAccountBankName: string | null;
  counterAccountName: string | null;
  counterAccountNumber: string | null;
};
