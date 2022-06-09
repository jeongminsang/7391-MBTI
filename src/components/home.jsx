import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const imagestyle = {
    height: '400px',
    width: '400px',
    textAlign: 'center',
};

class home extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <div>
                    <h1>7391</h1>
                    <img src="img/school-1.png" alt="로고" style={imagestyle} />
                </div>
                <div>
                    <h2>나에게 맞는 학과는?</h2>
                    <p>
                        총 16개의 유형의 MBTI성향을 기반으로 가장 잘 어울리는
                        학과를 추천해드립니다.
                    </p>
                </div>
                <div>
                    <Link
                        to="/departmentMBTI" /* app.jsx에 렌더링한 주소로 입력해야 읽고 들어감 */
                    >
                        테스트 시작!
                    </Link>
                </div>
            </div>
        );
    }
}

export default home;
