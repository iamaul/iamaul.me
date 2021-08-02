import * as React from 'react';

import { 
    Box, 
    Heading, 
    Link, 
    Stack, 
    Text, 
    Image,
    Flex 
} from '@chakra-ui/react';

const Summary: React.FC = () => {
    return (
        <>
            <Stack direction="row">
                <div>
                    <Heading mb={2}>Hi,</Heading>
                    <Text mb={4}>My name is <b>Agung Maulana</b>, also known as iamaul.</Text>
                </div>
                <Flex w="full" justifyContent="flex-end">
                    <Image
                        boxSize="120px"
                        objectFit="cover"
                        style={{ borderRadius: '3px' }}
                        src="https://media-exp1.licdn.com/dms/image/C5603AQFqkVdumwp7VA/profile-displayphoto-shrink_400_400/0/1517344541288?e=1633564800&v=beta&t=IlcjiwIWQQLspns7C5um2p03FCnDIG5LB4oHMn5gYlM"
                        alt="profile-picture"
                    />
                </Flex>   
            </Stack>
            <br/>
            <Stack spacing={12}>
                <Box>
                    <Text mb={4} align="justify">
                        I'm a software engineer based in Jakarta. Mostly, I'm focused on back-end development to provide an API service
                        and also I really enjoyed on front-end, especially developing a web application using React. 
                        I like to solve technical problems, analyse the business process, and learn about other things.<br/><br/>Outside of Programming, 
                        I've been studying SAP ERP in Computer Science to design a wide variety of business processes.
                        <br/><br/>
                        Send me an <Link
                            href="mailto:iamaul@hotmail.com"
                            style={{ borderRadius: '3px' }}
                            _hover={{ 
                                backgroundColor: '#55265a', 
                                textDecoration: 'none',
                                color: 'white',
                                fontWeight: 'bold' 
                            }}
                        >
                            email
                        </Link> message If you'd like to discuss working together.
                    </Text>
                </Box>  
            </Stack>
        </>
    )
}

export default Summary;

