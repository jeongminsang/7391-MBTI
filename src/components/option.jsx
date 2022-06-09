import React, { createRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Questions from '../api/questionsApi.json';
import ProgressBar from './ProgressBar';
import styled from 'styled-components';

export const Button = styled.button`
    box-size: auto;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    color: black;
    background-color: #b8d7ff;
    padding: 10px 40px;
    margin: 20px;
`;

const Options = () => {
    const [num, setNum] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(1);
    const slideRef = createRef(null);
    const TOTAL_SLIDES = 12;
    const history = useHistory();
    const [mbti, setMbti] = useState([]);

    const nextSlideFir = () => {
        setMbti(mbti + Questions[num].answers[0].type);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
    };
    const nextSlideSec = () => {
        setMbti(mbti + Questions[num].answers[1].type);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
    };

    const mbtiChecker = () => {
        let map = {};
        let result = [];
        for (let i = 0; i < TOTAL_SLIDES; i++) {
            //map에 페이지 지날때마다 결과 +1
            if (mbti[i] in map) {
                map[mbti[i]] += 1;
            } else {
                map[mbti[i]] = 1;
            }
        }
        for (let count in map) {
            if (map[count] >= 2) {
                result.push(count);
            }
        }

        const examResult = result.join(''); // result 배열 합쳐서 문자열로 변환
        history.push(`/result/${examResult}`); //result(표현식으로 문자열 저장)로 값 전달하기
    };
    useEffect(() => {
        currentSlide > TOTAL_SLIDES && mbtiChecker();
    }, [currentSlide]);

    const imagestyle = {
        height: '300px',
        width: '500px',
    };

    return (
        <section>
            <ProgressBar gage={currentSlide} total={TOTAL_SLIDES} />

            <div style={{ textAlign: 'center' }}>
                <div style={{ width: '1200vw' }} ref={slideRef}>
                    {Questions.map((item) => {
                        return (
                            <div
                                style={{ width: '100vw', float: 'left' }}
                                key={item.id}
                            >
                                <div>
                                    <div>
                                        <span>{currentSlide}</span>
                                        <span>/{TOTAL_SLIDES}</span>
                                    </div>
                                    <h1>{item.question}</h1>
                                </div>
                                <div>
                                    <img
                                        src={item.imagePath}
                                        style={imagestyle}
                                        alt="mbti"
                                    />
                                </div>
                                <article>
                                    <Button onClick={nextSlideFir}>
                                        {item.answers[0].content}
                                    </Button>
                                    <br />
                                    <br />
                                    <Button onClick={nextSlideSec}>
                                        {item.answers[1].content}
                                    </Button>
                                </article>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Options;
