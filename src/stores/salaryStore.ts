import create from 'zustand';

type SalaryStore = {
  salary: string;
  setSalary: (salary: string) => void;
};

export const useSalaryStore = create<SalaryStore>((set) => ({
  salary: '',
  setSalary: (salary) => set({ salary }),
}));