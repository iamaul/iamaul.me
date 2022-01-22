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
    FaCode
} from 'react-icons/fa';

import { ProjectEntity } from '@/models/Project';
import MotionBox from '@/components/MotionBox';

interface ProjectProps {
    projects: ProjectEntity[];
}

export const Project = ({ projects }: ProjectProps) => {
    return (
        <>
            {projects.map((project, index) => (
                <div key={index}>
                <MotionBox
                    position="relative"
                    whileHover={{ scale: 1.05 }}
                    role="group"
                >
<!--                     <Box
                      p={6} 
                      border="1px solid" 
                      borderColor="gray" 
                      shadow="lg"> -->
                      <HStack
                        p={4}
                        bg="white"
                        rounded="lg"
                        borderWidth="1px"
                        borderColor="gray"
                        w="100%"
                        h="100%"
                        textAlign="left"
                        align="start"
                        spacing={4}
                        transition="all 0.25s"
                        transition-timing-function="spring(1 100 10 10)"
                        _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
                      >
                        <Flex justifyContent="space-between" alignItems="center" mb={4}>
                            <Heading size="md">{project.project_name}</Heading>
                        </Flex>
                        <Text>{project.project_desc}</Text>
                        <HStack fontSize="sm" mt={4} color="trueGray.500">
                            {project.project_link !== null && (
                                <Link 
                                    href={project.project_link} 
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
                                        Live
                                    </Button>
                                </Link>
                            )}
                            {project.project_source_code !== null && (
                                <Link 
                                    href={project.project_source_code}
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
                                        rightIcon={<FaCode />}
                                    >
                                        Source Code
                                    </Button>
                                </Link>
                            )}
                        </HStack>
<!--                     </Box> -->
                  </HStack>
                </MotionBox>
                </div>
            ))}
        </>
    )
}
