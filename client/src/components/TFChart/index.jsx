import React from 'react';
import { Styled } from './styles';

function TFChart({ tfResult }) {
    const tfCounts = tfResult.map((result) => result.count);
    const maxNum = Math.max.apply(null, tfCounts);

    console.log(maxNum);

    return (
        <div>
            <Styled.TFChartWRapper>
                <caption className="visually-hidden">
                    이 표는 TOP10 곡 리스트로부터 뽑은 가사의 주요 단어의 빈도수를 표시하고
                    있습니다.
                </caption>
                <colgroup>
                    <col width="15%" />
                    <col width="20%" />
                    <col />
                </colgroup>
                <Styled.TFChartHead>
                    <tr>
                        <th scope="col">순위</th>
                        <th scope="col">단어</th>
                        <th scope="col">빈도수</th>
                    </tr>
                </Styled.TFChartHead>
                <tbody>
                    {tfResult.map((result, index) => (
                        <tr>
                            <td>
                                <Styled.Rank top={index < 3}>{index + 1}</Styled.Rank>
                            </td>
                            <td>
                                <Styled.Word>{result.word}</Styled.Word>
                            </td>
                            <td>
                                <Styled.Bar
                                    top={index < 3}
                                    style={{ width: `${(result.count / maxNum) * 100}%` }}
                                >
                                    {' '}
                                    <p>{result.count}</p>
                                </Styled.Bar>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Styled.TFChartWRapper>
        </div>
    );
}

export default TFChart;
