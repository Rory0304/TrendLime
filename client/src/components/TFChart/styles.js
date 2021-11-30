import styled from '@emotion/styled';
import { primaryColor } from '../../common/constants/Styles';

export const Styled = {};

Styled.TFChartWRapper = styled.table`
    width: 487px;
    height: 500px;
    margin: 0 auto;
    margin-top: 8rem;
`;

Styled.TFChartHead = styled.thead`
    tr th {
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
    }
`;

Styled.Rank = styled.span`
    display: block;
    width: 20%;
    background-color: ${(props) => (props.top ? primaryColor : 'gray')};
    color: #fff;
    padding: 0.5rem;
    border-radius: 50%;
    text-align: center;
    margin: 0 auto;
    font-size: 1rem;
`;

Styled.Word = styled.span`
    text-align: center;
`;

Styled.Bar = styled.div`
    background-color: ${(props) => (props.top ? primaryColor : 'gray')};
    height: 60%;
    p {
        text-align: right;
    }
`;
