import styled from "styled-components";
import Question from "../components/Question";
import TextInput from "../components/TextInput";
import { useGlobalContext } from "../components/GlobalProvider";
import { useEffect, useMemo, useState } from "react";
import { generateNum, useToggleState } from "../utils";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Answer = styled.h2`
    font-size: 2rem;
    height: 2rem;
`

function MainPage() {
    const { userContent } = useGlobalContext();
    const [index, setIndex] = useState<number | undefined>(undefined);
    const [sessionIndexes, setSessionIndexes] = useState<number[]>([]);
    const [inputValue, setInputValue] = useState<string | undefined>(undefined);
    const [showAnswer, toggleShowAnswer] = useToggleState(false);
    const [triggerAnimation, setTriggerAnimation] = useState<"left" | "right" | null>(null);

    const sessionContent = useMemo(() => {
        return userContent.reduce((acc: any[], content: any) => {
            if (content.selected) {
                return acc.concat(content.content);
            }
            return acc;
        }, []);
    }, [userContent]);

    useEffect(() => {
        if (sessionContent.length > 0 && index === undefined) {
            const firstNum = generateNum(undefined, sessionContent.length);
            setSessionIndexes([firstNum, generateNum(firstNum, sessionContent.length)]);
            setIndex(0);
        }
    }, []);

    useEffect(() => {
        if (index !== undefined && sessionContent[sessionIndexes[index]]
            ?.English.toLowerCase().split(";")
            .map((w: string) => w.trim())
            .includes(inputValue?.toLowerCase())
        ) {
            setInputValue("");
            setTriggerAnimation("right");
        }
    }, [inputValue]);

    const handleAnimationComplete = () => {
        if (index !== undefined) {
            if (triggerAnimation === "right") {
                const nextIndex = index + 1;
                setSessionIndexes([
                    ...sessionIndexes,
                    generateNum(sessionIndexes[index], sessionContent.length),
                ]);
                setIndex(nextIndex);
                setTriggerAnimation(null);
            }
            else if (triggerAnimation === "left") {
                if (index === 0) {
                    return;
                }
                const nextIndex = index - 1;
                setIndex(nextIndex);
                setTriggerAnimation(null);
            }
        }
    };

    return (
        <MainContainer>
            {sessionContent.length > 0 && index !== undefined && (
                <>
                    <Question
                        content={sessionContent}
                        index={index}
                        sessionIndexes={sessionIndexes}
                        triggerAnimation={triggerAnimation}
                        setTriggerAnimation={setTriggerAnimation}
                        onAnimationComplete={handleAnimationComplete}
                    />
                    <Answer>{showAnswer && index !== undefined ? sessionContent[sessionIndexes[index]].English + "  " + sessionContent[sessionIndexes[index]].Kana : ""}</Answer>
                    <TextInput
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        showAnswer={showAnswer}
                        toggleShowAnswer={toggleShowAnswer}
                    />
                </>
            )}
        </MainContainer>
    );
}

export default MainPage;