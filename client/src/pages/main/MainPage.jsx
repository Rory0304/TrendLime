import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Container from '../../components/Container/index';
import ScrollToTop from '../../common/ScrollToTop/index';
import MainBanner from './MainBanner';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const queryClient = new QueryClient();

function MainContents() {
    return (
        <div>
            <ScrollToTop />
            <MainBanner />
            <Container>
                <Section1 />
                <Section2 />
                <Section3 />
            </Container>
        </div>
    );
}

function MainPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <MainContents />
        </QueryClientProvider>
    );
}

export default MainPage;
