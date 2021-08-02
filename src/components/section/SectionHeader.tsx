import { Heading } from '@chakra-ui/react';

const SectionHeader = ({ children, ...rest }) => {
    return (
        <Heading
            textTransform="uppercase"
            size="xs"
            color="#55265a"
            letterSpacing="1.3px"
            fontWeight="bold"
            mb={8}
            {...rest}
        >
            {children}
        </Heading>
    )
}

export default SectionHeader;