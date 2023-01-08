import { Box, Button, Flex, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FcLike } from "react-icons/fc";
import { DiGitBranch } from "react-icons/di";


const All = () => {
const [dat, setData]=useState([])
const [page, setPage] = useState(1)

const getData=async(page)=>{
    try{
        let res=await fetch(`https://api.github.com/search/repositories?q=user:rashmigautam16+fork:true&sort=updated&page=${page}&per_page=10&type=Repositories`)
        let data=await res.json();
       return  setData(data.items);
                
    }catch(e){
        console.log(e)
    }
}


console.log(dat)
useEffect(()=>{
    getData(page)
},[page])
  return (
    <Box>
        <SimpleGrid columns={[1,2,4]} gap="20px" pt={"7%"} m="auto" w="80%">
            {
                dat.map((el)=>(
                    
                    <Box border={"1px solid grey"} key={el.id} p="20px" borderRadius={"2xl"}>
                        <a href={el.svn_url}>
                        <Heading as='h2' size='md'>{el.name}</Heading>
                        <Text  fontSize='xs'>{el.full_name}</Text>
                        <Text  fontSize='xs'>{el.language}</Text>
                        <Flex justifyContent={"space-around"}>
                            <Button><FcLike/>{el.stargazers_count}</Button>
                            <Button><DiGitBranch/>{el.forks}</Button>
                        </Flex>
                        </a>
                    </Box>
                ))
            }
           
        </SimpleGrid>
            <Box pt={"30px"}>
                <Button disabled={page==1} onClick={()=>setPage(page-1)}>-</Button>
                <Button>{page}</Button>
                <Button onClick={()=>setPage(page+1)}>+</Button>
            </Box>
    </Box>
  )
}

export default All