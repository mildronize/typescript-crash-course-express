import { TransactionModel } from "./transaction/transaction.model";

export interface DatabaseModel {
  transactions: TransactionModel[];
}
