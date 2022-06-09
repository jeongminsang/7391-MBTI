import '../App.css';
import styled from 'styled-components';

function App(props) {
    const gage = props.gage - 1;
    const total = props.total;

    return (
        <Container>
            {/*%로 부모넓이의 1/12 씩 넓어짐*/}
            <Progress width={(gage / total) * 100 + '%'} />
        </Container>
    );
}

export default App;

const Container = styled.div`
    margin: 50px auto;
    background-color: #eee;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: 20px;
`;
const Progress = styled.div`
    background-color: blue;
    width: ${(props) => props.width};
    height: 100%;
    transition: width 1s;
    border-radius: 20px;
`;
