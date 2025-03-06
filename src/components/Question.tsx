import styled from "styled-components";
import { animationVariants, darkColor3, darkText } from "../constants";
import { hexToRGB, useToggleState } from "../utils";
import Arrow from "./Arrow";
import { animate, motion } from "framer-motion";
import { useState } from "react";

const CardContainer = styled.section`
    display: flex;
    flex-direction: row;
    place-items: center;
    justify-content: center;
    width: 100vw;
`

const QuestionContainer = styled(motion.div)`
    position: absolute;
    display: flex;
    width: min(70vw, 75rem);
    height: 50vh;
    place-items: center;
    justify-content: center;
    background-color: ${darkColor3};
    border-radius: 20px;
    box-shadow: 0 0.5rem 1.5rem rgba(${hexToRGB(darkColor3)}, 0.8);
    z-index: 1;
    
    .question-text {
        font-size: clamp(2rem, max(6vw, 4vh), 10rem);
        text-align: center;
        width: fit-content;
        max-width: 90%;
        max-height: 90%;
    }
`

function Question() {
    // for testing purposes
    const [question, setQuestion] = useState<string>("QUESTION");

    // for when settings page is completed
    //const [isArrowVisible, toggleIsArrowVisible] = useToggleState(true);
    const [isCardVisible, toggleIsCardVisible] = useToggleState(false);
    const [animationDirection, setAnimationDirection] = useState<"left" | "right">("left");

    const startAnimation = (direction: "left" | "right") => {
        if (isCardVisible) {
            return;
        }
        setAnimationDirection(direction);
        toggleIsCardVisible();
    };

    return (
        <CardContainer>
            <Arrow
                direction="left"
                onClick={() => startAnimation("left")}
                isArrowVisible={true}
            />

            <QuestionContainer
                variants={animationVariants}
                initial={"static"}
                animate={isCardVisible ? (animationDirection === "left" ? ["left", "bounce"] : "right") : "static"}
                style={{ zIndex: 2 }}
                onAnimationComplete={() => {
                    // next
                    setQuestion("BEHIND");
                }
                }
                onAnimationStart={() => {
                    // prev
                    if (animationDirection === "left") setQuestion("BEHIND");
                }
                }
            >
                <h1 className="question-text">{question}</h1>
            </QuestionContainer>

            {isCardVisible && (
                <QuestionContainer
                    variants={animationVariants}
                    animate={animationDirection === "left" ? "shrink" : "rise"}
                    onAnimationComplete={() => {
                        if (isCardVisible) toggleIsCardVisible();
                    }}
                >
                    <h1 className="question-text">BEHIND</h1>
                </QuestionContainer>
            )}

            <Arrow
                direction="right"
                onClick={() => startAnimation("right")}
                isArrowVisible={true}
            />
        </CardContainer >
    )
}

export default Question;