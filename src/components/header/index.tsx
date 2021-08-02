import { Flex } from '@chakra-ui/react';

import Summary from '@/components/header/Summary';

export const Header = () => {
    return (
        <>
            <Flex
                mt={24}
                mb={8}
                justifyContent="flex-end"
                flexDirection="column"
            >
                <Summary />
            </Flex>  
        </>
    )
}
