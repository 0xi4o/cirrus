import {
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	Icon,
	Text,
	VStack,
} from '@chakra-ui/react';
import { Code, Cpu, Database, CreditCard } from 'react-feather';

const Features01 = () => (
	<Flex w='full' h='2xl' mt={8} bg='gray.800'>
		<Container maxW='container.xl'>
			<VStack
				p={4}
				justifyContent='center'
				alignItems='center'
				w='full'
				h='full'
				spacing={24}
			>
				<Flex
					w='full'
					justifyContent='center'
					alignItems='center'
					flexDir='column'
					color='white'
				>
					<Heading
						as='h2'
						lineHeight='shorter'
						mb={4}
						size='xl'
						textAlign='center'
					>
						Go beyond unlimited features
					</Heading>
					<Text
						w='2xl'
						fontSize='xl'
						textAlign='center'
						lineHeight='base'
					>
						Focus only on the meaning, we take care of the design.
						As soon as the meeting ends you can export in one click
						into your preferred format.
					</Text>
				</Flex>
				<Grid
					w='full'
					templateColumns='repeat(4, 1fr)'
					gap={8}
					color='white'
				>
					<GridItem>
						<Flex
							w={16}
							h={16}
							p={4}
							justifyContent='center'
							alignItems='center'
							rounded='full'
							borderColor='gray.700'
							borderWidth={1}
							bg='gray.700'
							boxShadow='xl'
							mb={8}
						>
							<Icon as={Code} color='green.500' w={8} h={8} />
						</Flex>
						<Heading as='h3' size='md' mb={4}>
							REST API or GraphQL
						</Heading>
						<Text>
							See where you’re making and spending money in real.
						</Text>
					</GridItem>
					<GridItem>
						<Flex
							w={16}
							h={16}
							p={4}
							justifyContent='center'
							alignItems='center'
							rounded='full'
							borderColor='gray.700'
							borderWidth={1}
							bg='gray.700'
							boxShadow='xl'
							mb={8}
						>
							<Icon as={Cpu} color='green.500' w={8} h={8} />
						</Flex>
						<Heading as='h3' size='md' mb={4}>
							High Performance
						</Heading>
						<Text>
							See where you’re making and spending money in real.
						</Text>
					</GridItem>
					<GridItem>
						<Flex
							w={16}
							h={16}
							p={4}
							justifyContent='center'
							alignItems='center'
							rounded='full'
							borderColor='gray.700'
							borderWidth={1}
							bg='gray.700'
							boxShadow='xl'
							mb={8}
						>
							<Icon as={Database} color='green.500' w={8} h={8} />
						</Flex>
						<Heading as='h3' size='md' mb={4}>
							Visual Database
						</Heading>
						<Text>
							See where you’re making and spending money in real.
						</Text>
					</GridItem>
					<GridItem>
						<Flex
							w={16}
							h={16}
							p={4}
							justifyContent='center'
							alignItems='center'
							rounded='full'
							borderColor='gray.700'
							borderWidth={1}
							bg='gray.700'
							boxShadow='xl'
							mb={8}
						>
							<Icon
								as={CreditCard}
								color='green.500'
								w={8}
								h={8}
							/>
						</Flex>
						<Heading as='h3' size='md' mb={4}>
							Payments API
						</Heading>
						<Text>
							See where you’re making and spending money in real.
						</Text>
					</GridItem>
				</Grid>
			</VStack>
		</Container>
	</Flex>
);

export default Features01;
