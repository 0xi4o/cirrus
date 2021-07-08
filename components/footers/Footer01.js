import {
	Box,
	Container,
	Divider,
	Flex,
	HStack,
	Icon,
	Link,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react';
import { Facebook, GitHub, Linkedin, Twitter, Zap } from 'react-feather';

const Footer01 = () => (
	<Flex w='full' h='md' bg='gray.900' mt={8}>
		<Container maxW='container.xl'>
			<VStack
				color='white'
				justifyContent='center'
				alignItems='center'
				w='full'
				h='full'
				spacing={24}
			>
				<Flex w='full'>Links</Flex>
				<Box w='full' py={4}>
					<Divider />
				</Box>
				<Flex w='full' h={12} alignItems='center' color='white'>
					<HStack alignItems='center' spacing={8}>
						<Flex alignItems='center'>
							<Icon as={Zap} w={6} h={6} color='green.400' />
							<Text
								fontSize='lg'
								fontWeight='bold'
								casing='uppercase'
								color='white'
								ml={2}
							>
								Cirrus
							</Text>
						</Flex>
						<Text>Copyright by 2021 Atomic Creations, Inc.</Text>
					</HStack>
					<Spacer />
					<HStack alignItems='center' spacing={4}>
						<Link href='#'>
							<Flex
								w={8}
								h={8}
								justifyContent='center'
								alignItems='center'
								color='white'
								bg='green.500'
								borderRadius='full'
							>
								<Icon as={Facebook} w={4} h={4} />
							</Flex>
						</Link>
						<Link href='#'>
							<Flex
								w={8}
								h={8}
								justifyContent='center'
								alignItems='center'
								color='white'
								bg='green.500'
								borderRadius='full'
							>
								<Icon as={GitHub} w={4} h={4} />
							</Flex>
						</Link>
						<Link href='#'>
							<Flex
								w={8}
								h={8}
								justifyContent='center'
								alignItems='center'
								color='white'
								bg='green.500'
								borderRadius='full'
							>
								<Icon as={Linkedin} w={4} h={4} />
							</Flex>
						</Link>
						<Link href='#'>
							<Flex
								w={8}
								h={8}
								justifyContent='center'
								alignItems='center'
								color='white'
								bg='green.500'
								borderRadius='full'
							>
								<Icon as={Twitter} w={4} h={4} />
							</Flex>
						</Link>
					</HStack>
				</Flex>
			</VStack>
		</Container>
	</Flex>
);

export default Footer01;
