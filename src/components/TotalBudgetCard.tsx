import { useBudgets } from "../contexts/BudgetsContext"
import { Budget, Expense } from "../types"
import BudgetCard from "./BudgetCard"

export default function TotalBudgetCard() {
  const { expenses, budgets } = useBudgets()
  const amount = expenses.reduce((total: number, expense: Expense) => total + expense.amount, 0)
  const max = budgets.reduce((total: number, budget: Budget) => total + budget.max, 0)
  if (max === 0) return null

  return <BudgetCard amount={amount} name="Total" gray max={max} hideButtons/>
}
