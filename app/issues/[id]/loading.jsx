import { Skeleton } from '@/app/components'
import { Box, Card, Flex, Heading } from '@radix-ui/themes'

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
        <Heading><Skeleton /></Heading>
        <Flex className='space-x-3' my="2">
            <Skeleton width="5rem" />
            <Skeleton width="8rem" />        
        </Flex>
        <Card className='prose' mt="4">
            <Skeleton count="3" />
        </Card>
    </Box>
  )
}

export default LoadingIssueDetailPage
