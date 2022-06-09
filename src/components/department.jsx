import { Link } from 'react-router-dom';
import Department from '../api/mbtiApi';
import styled from 'styled-components';

const SearchBtn = styled.button`
    box-size: auto;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    color: black;
    background-color: #b8d7ff;
    padding: 10px 40px;
    margin: 20px;
`;

const handle = () => {
    if (navigator.share) {
        navigator.share({
            title: '나의 학과 테스트 해보기',
            text: '심리 테스트를 통해 당신의 학과를 선택하세요!\n',
            url: 'https://serene-kringle-40f9ef.netlify.app/',
        });
    } else {
        alert('공유하기가 지원되지 않는 환경 입니다.');
    }
};

const Profile = ({ match }) => {
    const { departmentName } = match.params;
    const nation = Department[departmentName];
    const imagestyle = {
        height: '500px',
        width: '400px',
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <div>
                    <img src={nation.image} style={imagestyle} />
                </div>
                <div>
                    <h2>{nation.id}의 학과특징은?</h2>
                    <br />
                </div>
                <div>
                    <h1>{nation.subject}</h1>
                </div>
                <div>
                    <Link to="/">다시하기</Link>
                    <br />
                    <br />
                    <SearchBtn
                        onClick={() => {
                            handle();
                        }}
                    >
                        공유하기
                    </SearchBtn>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
};
export default Profile;
