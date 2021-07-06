import {
	Box,
	Container,
	Flex,
	Heading,
	HStack,
	Text,
	VStack,
} from '@chakra-ui/react';

const Content01 = () => (
	<Flex w='full' h='4xl' bg='gray.900' mt={8}>
		<Container maxW='container.xl'>
			<HStack
				p={4}
				justifyContent='center'
				alignItems='center'
				w='full'
				h='full'
				spacing={24}
			>
				<Flex>
					<HStack
						justifyContent='center'
						alignItems='center'
						spacing={12}
					>
						<VStack spacing={12}>
							<Box
								d='flex'
								flexDir='column'
								justifyContent='center'
								alignItems='center'
								textAlign='center'
								w='xs'
								h='xs'
								bg='gray.700'
								borderRadius='lg'
								mt={24}
								p={8}
								boxShadow='xl'
							>
								<Heading
									as='h3'
									size='4xl'
									color='green.500'
									mb={2}
								>
									10+
								</Heading>
								<Text color='white' fontSize='md'>
									page combinations
								</Text>
							</Box>
							<Box
								d='flex'
								flexDir='column'
								justifyContent='center'
								alignItems='center'
								textAlign='center'
								w='xs'
								h='xs'
								bg='gray.700'
								borderRadius='lg'
								p={8}
								boxShadow='xl'
							>
								<Heading
									as='h3'
									size='4xl'
									color='purple.500'
									mb={2}
								>
									20+
								</Heading>
								<Text color='white' fontSize='md'>
									components you can mix and match
								</Text>
							</Box>
						</VStack>
						<VStack spacing={12}>
							<Box
								d='flex'
								flexDir='column'
								justifyContent='center'
								alignItems='center'
								textAlign='center'
								w='xs'
								h='xs'
								bg='gray.700'
								borderRadius='lg'
								p={8}
								boxShadow='xl'
							>
								<Heading
									as='h3'
									size='4xl'
									color='blue.500'
									mb={2}
								>
									800+
								</Heading>
								<Text color='white' fontSize='md'>
									downloads
								</Text>
							</Box>
							<Box
								d='flex'
								flexDir='column'
								justifyContent='center'
								alignItems='center'
								textAlign='center'
								w='xs'
								h='xs'
								bg='gray.700'
								borderRadius='lg'
								mb={24}
								p={8}
								boxShadow='xl'
							>
								<Heading
									as='h3'
									size='4xl'
									color='red.500'
									mb={2}
								>
									5
								</Heading>
								<Text color='white' fontSize='md'>
									integrations to get you started as fast as
									possible
								</Text>
							</Box>
						</VStack>
					</HStack>
				</Flex>
				<Flex flexDir='column' color='white'>
					<Text casing='uppercase' color='green.500' mb={2}>
						The ultimate SaaS Landing Page Kit
					</Text>
					<Heading as='h2' size='xl' mb={8}>
						Powerful Design System & Library
					</Heading>
					<Text fontSize='xl'>
						Get started using Cirrus with complete ease. Mix and
						match sections and customise them to suit any project
						you like over and over again.
					</Text>
				</Flex>
			</HStack>
		</Container>
	</Flex>
);

export default Content01;
