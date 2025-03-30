import styled from "styled-components";
import { animationVariants } from "../constants";
import { useToggleState } from "../utils";
import Arrow from "./Arrow";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CardContainer = styled.section`
    display: flex;
    flex-direction: row;
    place-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 10em;
    height: 50vh;
    background-color: yellow;

    @media (max-width: 768px) {
        margin-top: 0;
    }
`;

const QuestionContainer = styled(motion.div)`
    position: absolute;
    display: flex;
    width: min(70vw, 60em);
    height: 50vh;
    place-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.third};
    border-radius: 2em;
    box-shadow: 0 0.5rem 1.5rem ${({ theme }) => theme.shadow.third[80]};
    z-index: 1;

    .question-text {
        color: ${({ theme }) => theme.color.text};
        font-size: clamp(2rem, max(6vw, 4vh), 10rem);
        text-align: center;
        width: fit-content;
        max-width: 90%;
        max-height: 90%;
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

    const startAnimation = (direction: "left" | "right") => {
        if (isCardVisible) return;
        if (index !== undefined) {
            if (direction === "right") {
                setTopCardText(content[sessionIndexes[index]].Kanji);
                setBottomCardText(content[sessionIndexes[index + 1]].Kanji)
            }
            else if (direction === "left") {
                if (index === 0) return;
                setTopCardText(content[sessionIndexes[index - 1]].Kanji);
                setBottomCardText(content[sessionIndexes[index]].Kanji)
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
        index !== undefined ? setTopCardText(content[sessionIndexes[index]].Kanji) : setTopCardText("");
    }, [])

    return (
        <CardContainer>
            <Arrow direction="left" onClick={() => setTriggerAnimation("left")} isArrowVisible={true} />

            <QuestionContainer
                variants={animationVariants}
                initial={"static"}
                animate={isCardVisible ? (animationDirection === "left" ? ["left", "bounce"] : "right") : "static"}
                style={{ zIndex: 2 }}
                onAnimationComplete={() => {
                    if (isCardVisible) {
                        if (animationDirection === "right") {
                            index !== undefined ? setTopCardText(content[sessionIndexes[index + 1]].Kanji) : setTopCardText("");
                        }
                        toggleIsCardVisible();
                        onAnimationComplete();

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

            <Arrow direction="right" onClick={() => setTriggerAnimation("right")} isArrowVisible={true} />
        </CardContainer>
    );
}

export default Question;