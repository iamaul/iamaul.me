import * as React from 'react';

import { Grid } from '@chakra-ui/react';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

import styles from "@/styles/Home.module.css";

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <>
            <Grid
                gridTemplateColumns="1fr min(60ch, calc(100% - 64px)) 1fr"
                gridColumnGap="32px"
                className={styles.wrapper}
                as="main"
            >
                <Header />
                {children}
                <Footer />
            </Grid>
        </>
    );
}

export default AppLayout;
