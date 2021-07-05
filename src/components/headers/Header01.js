import Image from 'next/image';
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Icon,
	Text,
	VStack,
} from '@chakra-ui/react';
import { Zap } from 'react-feather';
import dashboard from '../../assets/dashboard.png';

const Navigation01 = () => (
	<Flex w='full' h='6xl' bg='gray.900' mt={8}>
		<Container maxW='container.xl'>
			<VStack
				p={4}
				justifyContent='center'
				alignItems='center'
				w='full'
				h='full'
				spacing={16}
			>
				<VStack
					color='white'
					justifyContent='center'
					alignItems='center'
					maxW='40rem'
					spacing={8}
				>
					<Box
						p={6}
						rounded='full'
						borderColor='gray.700'
						borderWidth={1}
						bg='gray.700'
						boxShadow='xl'
					>
						<Icon as={Zap} color='green.500' w={12} h={12} />
					</Box>
					<Heading
						as='h1'
						size='3xl'
						textAlign='center'
						lineHeight='shorter'
					>
						The best way to organize your work
					</Heading>
					<Text fontSize='xl' textAlign='center' lineHeight='base'>
						Cirrus is the only platform you need for managing your
						remote team communications.
					</Text>
					<Button
						p={8}
						bg='green.500'
						color='white'
						fontSize='lg'
						boxShadow='xl'
					>
						Sign Up for free
					</Button>
				</VStack>
				<Box w='48rem' h='32rem' position='relative'>
					<Image
						width='1597'
						height='1005'
						src={dashboard}
						alt='Image'
					/>
				</Box>
			</VStack>
		</Container>
	</Flex>
);

export default Navigation01;
