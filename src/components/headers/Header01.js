import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	HStack,
	Icon,
	Link,
	Text,
	VStack,
} from '@chakra-ui/react';
import { Zap } from 'react-feather';

const Navigation01 = () => (
	<Flex as='nav' w='full' h='960px' bg='gray.50'>
		<Container maxW='container.xl'>
			<VStack
				p={4}
				justifyContent='center'
				alignItems='center'
				w='full'
				h='full'
				spacing={16}
			>
				<HStack>
					<Icon as={Zap} w={12} h={12} />
					<Text fontSize='4xl'>Cirrus</Text>
				</HStack>
				<Box maxW='48rem'>
					<Heading as='h1' size='4xl' textAlign='center'>
						The best way to organize your work
					</Heading>
				</Box>
				<VStack>
					<Link>Home</Link>
					<Link>Features</Link>
					<Link>Pricing</Link>
					<Link>FAQ</Link>
				</VStack>
				<VStack spacing={4}>
					<Link>Log In</Link>
					<Button colorScheme='green'>Sign Up</Button>
				</VStack>
			</VStack>
		</Container>
	</Flex>
);

export default Navigation01;
