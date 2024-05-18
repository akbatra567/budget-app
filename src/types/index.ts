export type Expense = {
    id: string;
    description: string;
    amount: number;
    budgetId: string;
  }
  
  export type Budget = {
    id: string;
    name: string;
    max: number;
  }