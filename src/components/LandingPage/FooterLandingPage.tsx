'use client'

import { ReactNode } from 'react'

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function FooterLandingPage() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <h1>ST Treinamentos</h1>
            </Box>
            <Text fontSize={'sm'}>© 2023 Souza Treinamentos. Todos os direitos reservados</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Cursos</ListHeader>
            <Box as="a" href={'#'}>
              NR: 20
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Empresa</ListHeader>
            <Box as="a" href={'#'}>
              Sobre
            </Box>
            <Box as="a" href={'#'}>
              Contato
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={'#'}>
              Suporte
            </Box>
            <Box as="a" href={'#'}>
              Termos de serviço
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}