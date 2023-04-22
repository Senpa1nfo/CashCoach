import { useState } from 'react';

interface IBudgetItem {
    source: string;
    amount: number;
    type: string;
    date: string;
}
export const Queue = () => {
    const [budgetQueue, setBudgetQueue] = useState<IBudgetItem[]>([]);
    return [budgetQueue, setBudgetQueue]
}
