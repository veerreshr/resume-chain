import create from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useStore = create(
  devtools(
    persist(
      (set) => ({
        currentTab: 0,
        setCurrentTab: (tab) => set((_) => ({ currentTab: tab })),
        incrementTab: () =>
          set((state) => ({ currentTab: (state.currentTab + 1) % 11 })),
        basics: {},
        setBasics: (basics) => set((_) => ({ basics })),
        education: [],
        setEducation: (education) => set((_) => ({ education })),
        work: [],
        setWork: (work) => set((_) => ({ work })),
        projects: [],
        setProjects: (projects) => set((_) => ({ projects })),
        skills: [],
        setSkills: (skills) => set((_) => ({ skills })),
        awards: [],
        setAwards: (awards) => set((_) => ({ awards })),
      }),
      {
        name: "resume-chain-store", // unique name
      }
    )
  )
);
