import { Link, Flex, HStack, Text, Tooltip, Icon } from '@chakra-ui/react';

import { useSocialLink } from '@/hooks';

export const Footer = () => {
    const socials = useSocialLink();

    return (
        <>
            <Flex h="12vh" alignItems="center">
                <Flex w="full" justifyContent="flex-start">
                    <HStack>
                        <Tooltip hasArrow label="View my curriculum vitae" placement="top">
                            <Link href="/Agung Maulana.pdf" isExternal>
                                <Text fontWeight="bold">CV</Text>
                            </Link>
                        </Tooltip>
                    </HStack>
                </Flex>
                <Flex w="full" justifyContent="flex-end">
                    <HStack>
                        {socials.map(([href, IconType]) => (
                            <Link href={href} isExternal key={href}>
                                <Icon 
                                    fontSize="lg"
                                    transition="150ms ease-in-out"
                                    _hover={{ color: "#55265a" }}
                                    as={IconType}  
                                />
                            </Link>
                        ))}
                    </HStack>
                </Flex>
            </Flex>
        </>
    )
}
