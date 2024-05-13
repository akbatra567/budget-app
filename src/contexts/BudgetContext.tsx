import React, { useContext, useState } from "react";
import {v4 as uuid} from "uuid";

const BudgetsContext = React.createContext({});


type budget = {
  id: string;
  name: string;
  max: number;
}
type expense = {
  id: string;
  budgetId: number;
  amount: number;
  description: string;
}

export function useBudgets() {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
  const [budgets,  setBudget]= useState<budget[]>([]);
  const [expenses, setExpense] =  useState<expense[]>([]);

  function getBudgetExpenses(budgetId: number){
    return expenses.filter(expense => expense.budgetId === budgetId)
  }
  function addExpense({description, amount, budgetId}: ({description: string, amount: number, budgetId: string}))
  {
    setExpense(prevExpenses => {
      return [...prevExpenses, {id: uuid(), budgetId,amount, description}];
    });
  }

  function addBudget({name, max}: ({name: string, max: number})){
    setBudget(prevBudgets => {
      if(prevBudgets.find(budget => budget.name === name)){
        return prevBudgets;
      }
      return [...prevBudgets, {id: uuid(), name, max}]
    });
  }

  function deleteBudget(){}
  function deleteExpense(){}

  return (
    <BudgetsContext.Provider value={{
      budgets,
      expenses,
      getBudgetExpenses,
      addExpense,
      addBudget,
      deleteBudget,
      deleteExpense
    }}>{children}</BudgetsContext.Provider>
  );
};
