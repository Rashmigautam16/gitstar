import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex justifyContent={"space-around"} bg="cyan.300" p={"10px"}>
        <Button borderRadius={"3xl"}>
        <Link  to={"/"} >ALL</Link>
        </Button>
        <Button borderRadius={"3xl"} >
        <Link  to={"/html"} >HTML</Link>
        </Button>
        <Button borderRadius={"3xl"}>
        <Link  to={"/css"} >CSS</Link>
        </Button>
        <Button borderRadius={"3xl"}>
        <Link  to={"/javascript"} >Javascript</Link>
        </Button>
    </Flex>
  )
}

export default Navbar