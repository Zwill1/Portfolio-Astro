import { useEffect, useRef, useState } from "react";

const words = ["Full Stack Developer", "Web Developer", "Web Designer", "Digital Marketer", "Graphic Designer"];

export default function TypingLoop() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    const currentWord = words[wordIndex];

    intervalRef.current = setTimeout(() => {
      if (typing) {
        if (charIndex <= currentWord.length) {
          setDisplayText(currentWord.slice(0, charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          setTyping(false);
          setTimeout(() => intervalRef.current && typeLoop(), 1000);
        }
      } else {
        if (charIndex >= 0) {
          setDisplayText(currentWord.slice(0, charIndex));
          setCharIndex((prev) => prev - 1);
        } else {
        setDisplayText(""); // clear text immediately
        setCharIndex(0); // start fresh
        setTyping(true);
        setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typing ? 250 : 150); // 250ms per letter when typing, 100ms when deleting

    return () => clearTimeout(intervalRef.current);
  }, [charIndex, typing, wordIndex]);

  function typeLoop() {
    setCharIndex((prev) => prev); // trigger useEffect
  }

  return (
    <div className="w-full text-center lg:text-left">
        <div className="inline-block font-mono text-3xl font-semibold leading-[1.5] whitespace-nowrap">
            <span>{displayText}</span><span className="cursor">|</span>
        </div>
      <style jsx>{`
        .cursor {
          display: inline-block;
          animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          50.01%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
