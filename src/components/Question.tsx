import styled from "styled-components";
import { animationVariants } from "../constants";
import { generateNum, useToggleState } from "../utils";
import Arrow from "./Arrow";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ContentType } from "./GlobalProvider";

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
`

interface QuestionProps {
    content: any[];
    num: number | undefined;
    setNum: (num: number) => void;
    inputValue: string | undefined;
}

function Question({ content, num, setNum, inputValue }: QuestionProps) {

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

    useEffect(() => {
        if (num === undefined) {
            setNum(generateNum(num, content.length));
        } else {
            if (inputValue?.toLowerCase() === content[num].English) {
                startAnimation("right");
                setNum(generateNum(num, content.length));
            }
        }
        console.log(content, num);
    }, [content, num, inputValue]);



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
                }}
                onAnimationStart={() => {
                    // prev
                    if (animationDirection === "left") {

                    }
                }}
            >
                <h1 className="question-text">{num !== undefined ? /*content[num] */ "" : ""}</h1>
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