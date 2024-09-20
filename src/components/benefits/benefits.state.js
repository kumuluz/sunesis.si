import { useRef, useState, useEffect, useCallback } from "react";
import anime from "animejs";

export function useBenefitsState(initialBenefits) {
  const animating = useRef(false);
  const [benefits, setBenefits] = useState(
    initialBenefits.length > 4 ? initialBenefits : [...initialBenefits, ...initialBenefits]
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const MEDIA_PHONE = 790;

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shiftAmount = windowWidth <= MEDIA_PHONE ? windowWidth : 420;

  const moveCarousel = useCallback(
    (direction) => {
      if (animating.current) return;

      animating.current = true;

      anime({
        targets: ".benefits",
        translateX: direction === "left" ? `-=${shiftAmount}` : `+=${shiftAmount}`,
        duration: 250,
        easing: "easeInQuad",
      })
        .finished.then(() => {
          setBenefits((prevBenefits) => {
            const newBenefits =
              direction === "left"
                ? [...prevBenefits.slice(1), prevBenefits[0]]
                : [prevBenefits[prevBenefits.length - 1], ...prevBenefits.slice(0, -1)];

            anime({
              targets: ".benefits",
              translateX: -shiftAmount,
              duration: 0,
            });

            animating.current = false;
            return newBenefits;
          });
        })
        .catch(() => {
          animating.current = false;
        });
    },
    [shiftAmount]
  );

  const moveLeft = useCallback(() => moveCarousel("left"), [moveCarousel]);
  const moveRight = useCallback(() => moveCarousel("right"), [moveCarousel]);

  return {
    benefits,
    moveLeft,
    moveRight,
    shiftAmount,
  };
}
