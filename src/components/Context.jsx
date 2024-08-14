import { createContext } from "react";

export const moods = {
  happy: "😁",
  sad: "😔",
};

export const MoodContext = createContext(moods);
