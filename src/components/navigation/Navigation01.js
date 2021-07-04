import {
	Button,
	Container,
	Flex,
	HStack,
	Icon,
	Link,
	Text,
} from '@chakra-ui/react';
import { Zap } from 'react-feather';

const Navigation01 = () => (
	<Flex as='nav' w='full' h={24} bg='gray.50'>
		<Container maxW='container.xl'>
			<HStack
				p={4}
				justifyContent='space-between'
				alignItems='center'
				w='full'
				h='full'
			>
				<HStack>
					<Icon as={Zap} w={6} h={6} color='purple.200' />
					<Text fontSize='lg'>Cirrus</Text>
				</HStack>
				<HStack spacing={12}>
					<Link>Home</Link>
					<Link>Features</Link>
					<Link>Pricing</Link>
					<Link>FAQ</Link>
				</HStack>
				<HStack spacing={4}>
					<Link>Log In</Link>
					<Button colorScheme='green'>Sign Up</Button>
				</HStack>
			</HStack>
		</Container>
	</Flex>
);

export default Navigation01;
