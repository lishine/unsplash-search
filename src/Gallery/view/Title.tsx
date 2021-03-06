import React from 'react'
import { Text } from '@chakra-ui/core'

import { useGalleryContext } from '../_gallery'

export const Title = () => {
    const searchTerm = useGalleryContext((state) => state.searchTerm)

    console.log('rendering Title')
    return <Text {...{ my: 1, fontWeight: 700 }}>{searchTerm}</Text>
}
