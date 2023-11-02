import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { FcAddressBook, FcAssistant } from 'react-icons/fc'
import { BiCertification } from 'react-icons/bi'

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack bg={'white'} p={10} rounded="lg" shadow="lg">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={BiCertification} w={10} h={10} color={'green.400'}/>}
          title={'Certificados'}
          text={
            'Receba o certificado após finalizar o curso e realizar a prova...'
          }
        />
        <Feature
          icon={<Icon as={FcAddressBook} w={10} h={10} />}
          title={'Estude em qualquer lugar'}
          text={
            'Com internet e um dispositivo, você pode estudar em qualquer lugar...'
          }
        />
				<Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Suporte'}
          text={
            'Suporte sempre que precisar de ajuda...'
          }
        />
      </SimpleGrid>
    </Box>
  )
}