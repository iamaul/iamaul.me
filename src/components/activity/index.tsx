import * as React from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  Heading,
  Text,
  HStack,
} from '@chakra-ui/react';
import { 
    FaLink,
    FaLinkedin,
    FaInstagram
} from 'react-icons/fa';

import { ActivityEntity } from '@/models/Activity';
import MotionBox from '@/components/MotionBox';

interface ActivityProps {
    activities: ActivityEntity[];
}

export const Activity = ({ activities }: ActivityProps) => {
    return (
        <>
            {activities.map((data, index) => (
                <div key={index}>
                    <MotionBox
                        position="relative"
                        whileHover={{ scale: 1.05 }}
                        role="group">
                        <Box 
                            p={6} 
                            border="1px solid" 
                            rounded="lg"
                            borderWidth="1px"
                            borderColor="gray"
                            transition="all 0.25s"
                            transition-timing-function="spring(1 100 10 10)"
                            _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
                        >
                            <Flex justifyContent="space-between" alignItems="center" mb={4}>
                                <Heading size="md">{data.activity_name}</Heading>
                            </Flex>
                            <Text>{data.activity_desc}</Text>
                            <HStack fontSize="sm" mt={4} color="trueGray.500">
                                {data.activity_link !== null && (
                                    <Link 
                                        href={data.activity_link} 
                                        variant="ghost"
                                        isExternal
                                        >
                                        <Button
                                            size="xs"
                                            variant="ghost"
                                            _hover={{ 
                                                backgroundColor: '#55265a', 
                                                color: 'white',
                                                fontWeight: 'bold' 
                                            }}
                                            rightIcon={<FaLink />}
                                        >
                                            Website
                                        </Button>
                                    </Link>
                                )}
                                {data.activity_linkedin !== null && (
                                    <Link 
                                        href={data.activity_linkedin}
                                        isExternal
                                    >
                                        <Button
                                            size="xs"
                                            variant="ghost"
                                            _hover={{ 
                                                backgroundColor: '#55265a', 
                                                color: 'white',
                                                fontWeight: 'bold' 
                                            }}
                                            rightIcon={<FaLinkedin />}
                                        >
                                            LinkedIn
                                        </Button>
                                    </Link>
                                )}
                                {data.activity_instagram !== null && (
                                    <Link 
                                        href={data.activity_instagram}
                                        isExternal
                                    >
                                        <Button
                                            size="xs"
                                            variant="ghost"
                                            _hover={{ 
                                                backgroundColor: '#55265a', 
                                                color: 'white',
                                                fontWeight: 'bold' 
                                            }}
                                            rightIcon={<FaInstagram />}
                                        >
                                            Instagram
                                        </Button>
                                    </Link>
                                )}
                            </HStack>
                        </Box>
                    </MotionBox>
                </div>
            ))}
        </>
    )
}
