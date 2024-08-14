import React, { useContext } from "react";
import { MoodContext } from "./Context";

function MoodEmoji() {
  const emoji = useContext(MoodContext);

  return <div className="text-center mt-5">{emoji}</div>;
}

export default MoodEmoji;
