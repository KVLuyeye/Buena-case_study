import create from "zustand";

type ProgressStore = {
  progress: number;
  setProgress: (progress: number) => void;
};

export const useProgressStore = create<ProgressStore>((set) => ({
  progress: 0,
  setProgress: (progress) => set({ progress }),
}));