import styled from "styled-components";
import { animationVariants } from "../constants";
import { useToggleState } from "../utils";
import Arrow from "./Arrow";
import { motion, px } from "framer-motion";
import { useEffect, useState } from "react";
import { useGlobalContext } from "./GlobalProvider";

const CardContainer = styled.section`
    display: flex;
    flex-direction: row;
    place-items: center;
    justify-content: center;
    width: 100vw;
    margin: 3.5em 0 0 0;
    min-height: max(60vh, 30em);
 
    @media (max-width: 768px) {
        margin: 2em 0 0 0;
    }
`;

const QuestionContainer = styled(motion.div)`
    position: absolute;
    display: flex;
    aspect-ratio: 4 / 3;
    height: max(60vh, 30em); 
    place-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.third};
    border-radius: max(2em, 2vh);
    box-shadow: 0 0.5rem 1.5rem ${({ theme }) => theme.shadow.third[80]};
    z-index: 1;

    .question-text {
        color: ${({ theme }) => theme.color.text};
        /* font-size: clamp(2rem, max(6vw, 4vh), 10rem); */
        font-size: max(min(8rem, max(6vw, 4vh)), 2rem);
        text-align: center;
        width: fit-content;
        max-width: 90%;
        max-height: 90%;
    }

     @media (max-width: 768px) {
        width: 80vw;
        height: max(60vh, 30em); 
    }
`;

interface QuestionProps {
    content: any[];
    index: number | undefined;
    sessionIndexes: number[];
    triggerAnimation: "left" | "right" | null;
    setTriggerAnimation: (triggerAnimation: "left" | "right" | null) => void;
    onAnimationComplete: () => void;
}

function Question({ content, index, sessionIndexes, triggerAnimation, setTriggerAnimation, onAnimationComplete }: QuestionProps) {
    const [isCardVisible, toggleIsCardVisible] = useToggleState(false);
    const [animationDirection, setAnimationDirection] = useState<"left" | "right">("left");
    const [bottomCardText, setBottomCardText] = useState<string>("");
    const [topCardText, setTopCardText] = useState<string>("");
    const [drawArrows, setDrawArrows] = useState<boolean>(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setDrawArrows(window.innerWidth > 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const {
        userSettings: { displayMode }
    } = useGlobalContext();

    const startAnimation = (direction: "left" | "right") => {
        if (isCardVisible) return;
        if (index !== undefined) {
            if (direction === "right") {
                setTopCardText(content[sessionIndexes[index]][displayMode]);
                setBottomCardText(content[sessionIndexes[index + 1]][displayMode])
            }
            else if (direction === "left") {
                if (index === 0) return;
                setTopCardText(content[sessionIndexes[index - 1]][displayMode]);
                setBottomCardText(content[sessionIndexes[index]][displayMode])
            }
        }
        setAnimationDirection(direction);
        toggleIsCardVisible();
    };

    useEffect(() => {
        if (triggerAnimation === null) return;
        startAnimation(triggerAnimation);
    }, [triggerAnimation]);

    useEffect(() => {
        index !== undefined ? setTopCardText(content[sessionIndexes[index]][displayMode]) : setTopCardText("");
    }, [displayMode])

    return (
        <CardContainer>
            <Arrow direction="left" onClick={() => setTriggerAnimation("left")} isArrowVisible={drawArrows} />

            <QuestionContainer
                variants={animationVariants}
                initial={"static"}
                animate={isCardVisible ? (animationDirection === "left" ? ["left", "bounce"] : "right") : "static"}
                style={{ zIndex: 2 }}
                onAnimationComplete={() => {
                    if (isCardVisible) {
                        const animationDuration = animationDirection === "left" ? 0 : 300;
                        setTimeout(() => {
                            if (animationDirection === "right") {
                                index !== undefined ? setTopCardText(content[sessionIndexes[index + 1]][displayMode]) : setTopCardText("");
                            }
                            toggleIsCardVisible();
                            onAnimationComplete();
                        }, animationDuration);
                    }
                }}
                onAnimationStart={() => {

                }}
            >
                <h1 className="question-text">
                    {topCardText}
                </h1>
            </QuestionContainer>

            {isCardVisible && (
                <QuestionContainer
                    variants={animationVariants}
                    animate={animationDirection === "left" ? "shrink" : "rise"}
                >
                    <h1 className="question-text">
                        {bottomCardText}
                    </h1>
                </QuestionContainer>
            )}

            <Arrow direction="right" onClick={() => setTriggerAnimation("right")} isArrowVisible={drawArrows} />
        </CardContainer>
    );
}

export default Question;