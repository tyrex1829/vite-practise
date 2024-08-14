import { createContext } from "react";

const moods = {
  happy: "😁",
  sad: "😔",
};

export const moodContext = createContext(moods);
