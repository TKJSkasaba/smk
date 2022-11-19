import { Box, Container, Heading } from "@chakra-ui/react"
import Logo from "../components/logo"

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center">
        TKJ Skasaba
      </Box>
      
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            TKJ Skasaba
          </Heading>
          <p>Student</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }}>

        </Box>
      </Box>
    </Container>
  )
}

export default Page