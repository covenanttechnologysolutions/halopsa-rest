/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Expense} */
export type Expense = schemas['Expense']

/**
 * @module ExpenseAPI
 */

/**
 * Expense module
 * @public
 */
export class ExpenseAPI extends BaseAPI {
  getExpense(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Expense' })
  }

  postExpense({ expenseList }: { expenseList: Array<Expense> }): Promise<Expense> {
    return this.request({ method: 'post', data: expenseList, path: '/Expense' })
  }
}
