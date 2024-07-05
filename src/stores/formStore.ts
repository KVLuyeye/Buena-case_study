import { create } from 'zustand';

type FormStore = {
  form: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
  setForm: (form: FormStore['form']) => void;
};

export const useFormStore = create<FormStore>((set) => ({
    form: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '+49',
    },
    setForm: (form) => set({ form }),
    }));