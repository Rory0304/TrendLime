const highlightKeyword = (sentence, keyword) => {
    const highlightedSentence = sentence.split(keyword).reduce((prev, current, i) => {
        if (!i) {
            return [current];
        }
        return prev.concat(<b style={{ color: '#00DD00' }}>{keyword}</b>, current);
    }, []);

    return highlightedSentence;
};

export default highlightKeyword;
