import {
	Badge,
	Box,
	Button,
	Container,
	Divider,
	Flex,
	Grid,
	Heading,
	List,
	ListIcon,
	ListItem,
	Tab,
	Tabs,
	TabList,
	TabPanel,
	TabPanels,
	Text,
	VStack,
} from '@chakra-ui/react';
import { CheckCircle, XCircle } from 'react-feather';

const Pricing01 = () => (
	<Flex w='full' h='5xl' bg='gray.900'>
		<Container maxW='container.xl'>
			<VStack
				p={4}
				justifyContent='center'
				alignItems='center'
				w='full'
				h='full'
				spacing={16}
			>
				<Flex flexDir='column' color='white' textAlign='center'>
					<Text casing='uppercase' color='green.500' mb={2}>
						Simple, Transparent Pricing
					</Text>
					<Heading as='h2' size='xl'>
						Get the Cirrus plan that fits your needs.
					</Heading>
				</Flex>
				<Flex color='white' spacing={8} w='full'>
					<Tabs
						variant='soft-rounded'
						justifyContent='center'
						alignItems='center'
					>
						<TabList
							justifyContent='center'
							alignItems='center'
							mb={8}
							w='auto'
						>
							<Box
								d='flex'
								justifyContent='center'
								alignItems='center'
								bg='gray.700'
								p={2}
								borderRadius='xl'
							>
								<Tab
									_selected={{
										color: 'white',
										bg: 'green.500',
										borderRadius: 'xl',
									}}
								>
									Monthly
								</Tab>
								<Tab
									_selected={{
										color: 'white',
										bg: 'green.500',
										borderRadius: 'xl',
									}}
								>
									Yearly
								</Tab>
							</Box>
						</TabList>
						<TabPanels>
							<TabPanel p={0}>
								<Grid
									templateColumns='repeat(3, 1fr)'
									gap={8}
									w='full'
								>
									<Box
										p={12}
										border='2px'
										borderColor='gray.200'
										borderRadius='xl'
									>
										<Text
											casing='uppercase'
											color='green.500'
											fontSize='lg'
											fontWeight='bold'
											mb={2}
										>
											Essential
										</Text>
										<Flex alignItems='baseline'>
											<Text
												fontSize='3xl'
												color='gray.300'
											>
												$
											</Text>
											<Text fontSize='5xl'>29</Text>
											<Text
												fontSize='xl'
												color='gray.300'
											>
												/month
											</Text>
										</Flex>
										<Box py={4}>
											<Divider orientation='horizontal' />
										</Box>
										<List mb={8} spacing={6}>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													10+ page combinations
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													20+ modular components
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={XCircle}
													color='gray.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													800+ downloads
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={XCircle}
													color='gray.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													5 built-in integrations
												</Text>
											</ListItem>
										</List>
										<Button
											d='flex'
											bg='green.500'
											color='white'
											isFullWidth={true}
											size='lg'
										>
											Start Free Trial
										</Button>
									</Box>
									<Box
										p={12}
										border='2px'
										borderColor='green.500'
										borderRadius='xl'
									>
										<Text
											d='flex'
											alignItems='center'
											casing='uppercase'
											color='green.500'
											fontSize='lg'
											fontWeight='bold'
											mb={2}
										>
											Professional
											<Badge
												bg='green.500'
												color='white'
												ml={2}
											>
												Most Popular
											</Badge>
										</Text>
										<Flex alignItems='baseline'>
											<Text
												fontSize='3xl'
												color='gray.300'
											>
												$
											</Text>
											<Text fontSize='5xl'>49</Text>
											<Text
												fontSize='xl'
												color='gray.300'
											>
												/month
											</Text>
										</Flex>
										<Box py={4}>
											<Divider orientation='horizontal' />
										</Box>
										<List mb={8} spacing={6}>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													10+ page combinations
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													20+ modular components
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													800+ downloads
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={XCircle}
													color='gray.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													5 built-in integrations
												</Text>
											</ListItem>
										</List>
										<Button
											d='flex'
											bg='green.500'
											color='white'
											isFullWidth={true}
											size='lg'
										>
											Start Free Trial
										</Button>
									</Box>
									<Box
										p={12}
										border='2px'
										borderColor='gray.200'
										borderRadius='xl'
									>
										<Text
											casing='uppercase'
											color='green.500'
											fontSize='lg'
											fontWeight='bold'
											mb={2}
										>
											Enterprise
										</Text>
										<Flex alignItems='baseline'>
											<Text
												fontSize='3xl'
												color='gray.300'
											>
												$
											</Text>
											<Text fontSize='5xl'>99</Text>
											<Text
												fontSize='xl'
												color='gray.300'
											>
												/month
											</Text>
										</Flex>
										<Box py={4}>
											<Divider orientation='horizontal' />
										</Box>
										<List mb={8} spacing={6}>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													10+ page combinations
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													20+ modular components
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													800+ downloads
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													5 built-in integrations
												</Text>
											</ListItem>
										</List>
										<Button
											d='flex'
											bg='green.500'
											color='white'
											isFullWidth={true}
											size='lg'
										>
											Start Free Trial
										</Button>
									</Box>
								</Grid>
							</TabPanel>
							<TabPanel p={0}>
								<Grid
									templateColumns='repeat(3, 1fr)'
									gap={8}
									w='full'
								>
									<Box
										p={12}
										border='2px'
										borderColor='gray.200'
										borderRadius='xl'
									>
										<Text
											casing='uppercase'
											color='green.500'
											fontSize='lg'
											fontWeight='bold'
											mb={2}
										>
											Essential
										</Text>
										<Flex alignItems='baseline'>
											<Text
												fontSize='3xl'
												color='gray.300'
											>
												$
											</Text>
											<Text fontSize='5xl'>299</Text>
											<Text
												fontSize='xl'
												color='gray.300'
											>
												/year
											</Text>
										</Flex>
										<Box py={4}>
											<Divider orientation='horizontal' />
										</Box>
										<List mb={8} spacing={6}>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													10+ page combinations
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													20+ modular components
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={XCircle}
													color='gray.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													800+ downloads
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={XCircle}
													color='gray.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													5 built-in integrations
												</Text>
											</ListItem>
										</List>
										<Button
											d='flex'
											bg='green.500'
											color='white'
											isFullWidth={true}
											size='lg'
										>
											Start Free Trial
										</Button>
									</Box>
									<Box
										p={12}
										border='2px'
										borderColor='green.500'
										borderRadius='xl'
									>
										<Text
											d='flex'
											alignItems='center'
											casing='uppercase'
											color='green.500'
											fontSize='lg'
											fontWeight='bold'
											mb={2}
										>
											Professional
											<Badge
												bg='green.500'
												color='white'
												ml={2}
											>
												Most Popular
											</Badge>
										</Text>
										<Flex alignItems='baseline'>
											<Text
												fontSize='3xl'
												color='gray.300'
											>
												$
											</Text>
											<Text fontSize='5xl'>499</Text>
											<Text
												fontSize='xl'
												color='gray.300'
											>
												/year
											</Text>
										</Flex>
										<Box py={4}>
											<Divider orientation='horizontal' />
										</Box>
										<List mb={8} spacing={6}>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													10+ page combinations
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													20+ modular components
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													800+ downloads
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={XCircle}
													color='gray.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													5 built-in integrations
												</Text>
											</ListItem>
										</List>
										<Button
											d='flex'
											bg='green.500'
											color='white'
											isFullWidth={true}
											size='lg'
										>
											Start Free Trial
										</Button>
									</Box>
									<Box
										p={12}
										border='2px'
										borderColor='gray.200'
										borderRadius='xl'
									>
										<Text
											casing='uppercase'
											color='green.500'
											fontSize='lg'
											fontWeight='bold'
											mb={2}
										>
											Enterprise
										</Text>
										<Flex alignItems='baseline'>
											<Text
												fontSize='3xl'
												color='gray.300'
											>
												$
											</Text>
											<Text fontSize='5xl'>999</Text>
											<Text
												fontSize='xl'
												color='gray.300'
											>
												/year
											</Text>
										</Flex>
										<Box py={4}>
											<Divider orientation='horizontal' />
										</Box>
										<List mb={8} spacing={6}>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													10+ page combinations
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													20+ modular components
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													800+ downloads
												</Text>
											</ListItem>
											<ListItem
												d='flex'
												alignItems='center'
											>
												<ListIcon
													as={CheckCircle}
													color='green.500'
													w={8}
													h={8}
													mr={4}
												/>
												<Text fontSize='lg'>
													5 built-in integrations
												</Text>
											</ListItem>
										</List>
										<Button
											d='flex'
											bg='green.500'
											color='white'
											isFullWidth={true}
											size='lg'
										>
											Start Free Trial
										</Button>
									</Box>
								</Grid>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Flex>
			</VStack>
		</Container>
	</Flex>
);

export default Pricing01;
