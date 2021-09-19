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
                        src="https://cdn.discordapp.com/avatars/676575693072498698/f10ee7fca0079c04ebdc4c62b89180ff.png?size=1024"
                        alt="profile-picture"
                    />
                </Flex>   
            </Stack>
            <br/>
            <Stack spacing={12}>
                <Box>
                    <Text mb={4} align="justify">
                        I'm a software engineer based in Jakarta, work mainly on backend. I also really enjoy working on frontend, building both web and mobile applications. I like to solve technical problems, analyse the business process, 
                        and learn about other things.<br/><br/>Outside of Programming, I've been studying SAP ERP in Computer Science to design a wide variety of business processes.
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

