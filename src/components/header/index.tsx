import { Flex, Tooltip, IconButton, useColorMode, Stack } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

import Summary from '@/components/header/Summary';

const ToggleThemeBtn = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    
    return (
        <Tooltip
            label={colorMode === "light" ? "Dark mode" : "Light mode"}
            fontSize="xs"
            letterSpacing={1}
            placement="top"
            rounded="sm"
        >
            <IconButton
                aria-label="toggleColorMode"
                bgColor={
                    colorMode === "light"
                    ? "rgb(245, 245, 245, 1)"
                    : "rgba(13, 16, 19, 1)"
                }
                color={colorMode === "light" ? "black" : "white"}
                outline="none"
                rounded="full"
                transitionDuration="200ms"
                borderWidth="0.3px"
                onClick={() => toggleColorMode()}
                icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                _hover={{
                    borderColor: `${colorMode === "light" ? "black" : "whiteAlpha.800"}`,
                    transform: "rotate(45deg)",
                    border: "1px solid",
                }}
                _focus={{
                    outline: "none",
                }}
                _active={{
                    outline: "none",
                }}
            />
        </Tooltip>
    );
}
  

export const Header = () => {
    return (
        <>
            <Stack
                direction={'row'}
                align={'center'}
                spacing={2}
                marginTop={1}
                flex={{ base: 1, md: 'auto' }}
                justify={'flex-end'}>
                <ToggleThemeBtn />    
            </Stack>
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
