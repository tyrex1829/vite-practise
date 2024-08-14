import React, { useContext } from "react";

function MoodEmoji() {
  const emoji = useContext(moodContext);

  return <div>{emoji}</div>;
}

export default MoodEmoji;
