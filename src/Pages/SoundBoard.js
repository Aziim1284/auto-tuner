
import React, { useEffect, useState } from "react";
import SoundButton from "./SoundButton";

// Define different instruments and notes
const sounds = [
    { instrument: "synth", note: "C4", label: "C4", key: "A" },
    { instrument: "synth", note: "D4", label: "D4", key: "B" },
    { instrument: "amSynth", note: "E4", label: "E4", key: "C" },
    { instrument: "fmSynth", note: "F4", label: "F4", key: "D" },
    { instrument: "amSynth", note: "G4", label: "G4", key: "E" },
    { instrument: "synth", note: "A4", label: "A4", key: "F" },
    { instrument: "synth", note: "B4", label: "B4", key: "G" },
    { instrument: "amSynth", note: "C5", label: "C5", key: "H" },
    { instrument: "fmSynth", note: "D5", label: "D5", key: "I" },
    { instrument: "amSynth", note: "E5", label: "E5", key: "J" },
    { instrument: "synth", note: "F5", label: "F5", key: "K" },
    { instrument: "synth", note: "G5", label: "G5", key: "L" },
    { instrument: "amSynth", note: "A5", label: "A5", key: "M" },
    { instrument: "fmSynth", note: "B5", label: "B5", key: "N" },
    { instrument: "amSynth", note: "C6", label: "C6", key: "O" },
    { instrument: "synth", note: "D6", label: "D6", key: "P" },
    { instrument: "synth", note: "E6", label: "E6", key: "Q" },
    { instrument: "amSynth", note: "F6", label: "F6", key: "R" },
    { instrument: "fmSynth", note: "G6", label: "G6", key: "S" },
    { instrument: "amSynth", note: "A6", label: "A6", key: "T" },
    { instrument: "synth", note: "B6", label: "B6", key: "U" },
    { instrument: "synth", note: "C7", label: "C7", key: "V" },
    { instrument: "amSynth", note: "D7", label: "D7", key: "W" },
    { instrument: "fmSynth", note: "E7", label: "E7", key: "X" },
    { instrument: "amSynth", note: "F7", label: "F7", key: "Y" },
    { instrument: "synth", note: "G7", label: "G7", key: "Z" },
  ];

const SoundBoard = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const handleKeyPress = (event) => {
    const sound = sounds.find(
      (s) => s.key.toLowerCase() === event.key.toLowerCase()
    );
    if (sound) {
      const button = document.getElementById(`sound-btn-${sound.label}`);
      if (button) button.click();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <div className="__mainBoard__">
        {sounds.map((sound, index) => (
          <SoundButton
            key={index}
            instrument={sound.instrument}
            note={sound.note}
            label={sound.label}
            id={`sound-btn-${sound.label}`}
            isPlaying={currentlyPlaying === sound.label}
            setCurrentlyPlaying={setCurrentlyPlaying}
          />
        ))}

      </div>
    </>
  );
};

export default SoundBoard;
