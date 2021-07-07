import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	HStack,
	List,
	ListIcon,
	ListItem,
	Text,
	VStack,
} from '@chakra-ui/react';
import { ArrowRight, CheckCircle } from 'react-feather';
import Image from 'next/image';
import dashboard from '../../assets/dashboard.png';

const Content02 = () => (
	<Flex w='full' h='4xl' bg='gray.800' mt={8}>
		<Container maxW='container.xl'>
			<HStack
				p={4}
				justifyContent='center'
				alignItems='center'
				w='full'
				h='full'
				spacing={24}
			>
				<VStack alignItems='start' color='white' spacing={8}>
					<Flex flexDir='column'>
						<Text casing='uppercase' color='green.500' mb={2}>
							The ultimate SaaS Landing Page Kit
						</Text>
						<Heading as='h2' size='xl'>
							Powerful Design System & Library
						</Heading>
					</Flex>
					<List mb={8} spacing={6}>
						<ListItem d='flex' alignItems='center'>
							<ListIcon
								as={CheckCircle}
								color='green.500'
								w={8}
								h={8}
								mr={4}
							/>
							<Text fontSize='lg'>10+ page combinations</Text>
						</ListItem>
						<ListItem d='flex' alignItems='center'>
							<ListIcon
								as={CheckCircle}
								color='green.500'
								w={8}
								h={8}
								mr={4}
							/>
							<Text fontSize='lg'>20+ modular components</Text>
						</ListItem>
						<ListItem d='flex' alignItems='center'>
							<ListIcon
								as={CheckCircle}
								color='green.500'
								w={8}
								h={8}
								mr={4}
							/>
							<Text fontSize='lg'>800+ downloads</Text>
						</ListItem>
						<ListItem d='flex' alignItems='center'>
							<ListIcon
								as={CheckCircle}
								color='green.500'
								w={8}
								h={8}
								mr={4}
							/>
							<Text fontSize='lg'>5 built-in integrations</Text>
						</ListItem>
					</List>
					<Button
						d='flex'
						bg='green.500'
						color='white'
						rightIcon={<ArrowRight />}
						size='lg'
					>
						Find out more
					</Button>
				</VStack>
				<Flex>
					<Box w='48rem' h='32rem' position='relative'>
						<Image
							width='1597'
							height='1005'
							src={dashboard}
							alt='Image'
						/>
					</Box>
				</Flex>
			</HStack>
		</Container>
	</Flex>
);

export default Content02;
