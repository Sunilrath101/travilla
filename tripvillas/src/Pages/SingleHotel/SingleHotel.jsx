import { background, Box, Button, Center, Heading, HStack,Image, Text, VStack, Wrap, WrapItem,Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import { ImageSwiper } from "../../Components/SingleHotelComps/ImageSwiper";
import {BottomPart} from "../../Components/SingleHotelComps/BottomPart"
import { RouteComp } from "../../Components/SingleHotelComps/RouteComp";
import  {IoLocationOutline}  from "react-icons/io5"
import DatePicker from "react-multi-date-picker";

const SingleHotel = () => {
  const [date,setDate] = useState()

  var country = "India";
  var state = "Goa";
  var city = "Vizag";
  var hotel = "hotel";
  const availability = true;
 
  var id = 1;
  const Facilities = ['SHOWER','PARKING SPACE','HOUSEKEEPING','RESTAURANTS CLOSE BY','FAN','AIR CONDITIONING'];

  return   <HStack w={"100%"} p={"20px"}  >
   <Box w="75%" paddingRight={"40px"} borderRight={"1px solid #A9A9A9"} >
   <RouteComp />
   <Divider colorScheme={"#D3D3D3"} orientation='horizontal' />
   <HStack pt="20px" pl="20px" alignItems={"flex-start"} >
     <Box width={"558px"} h="450" >
      <Image  width={"558px"} h="300" fallbackSrc='https://via.placeholder.com/200' />
      <HStack p="5px" >
        <Image  width={"279px"} h="150" fallbackSrc='https://via.placeholder.com/150' />
        <Image width={"279px"} h="150"  fallbackSrc='https://via.placeholder.com/150' />
      </HStack>
     </Box>
     <VStack width={"50%"} p="40px" >
       <Heading>Hotel Name</Heading>

       <Button leftIcon={<IoLocationOutline />} outline="none" colorScheme={"gray"} bg="none" cursor={"default"} _hover={{background:"none"}} >{city},{state},{country}</Button>

       <Divider color={"#D3D3C0"} orientation='horizontal' />
       <Wrap>
       { Facilities.map((el)=>{
          return (<WrapItem key={el} >
                <Center border={"1px solid grey"} p="10px" borderRadius={"4px"} >{el}</Center>
          </WrapItem>)
        })}
       </Wrap>
     </VStack>

  </HStack>
  <BottomPart />
   </Box>

   <Divider colorScheme={"#D3D3D3"} orientation='vertical' />
  <Box w="370px" h={"100%"} position="fixed" top="0" right={"0"} p="40px" >
      <Text>Starting</Text>
      <HStack>
      <Heading>{}</Heading>
      <Text>per Night</Text>
      </HStack>

      {(availability) ? <Box color={"green.100"} >Your dates are available to book</Box> : <Box></Box> }

      <DatePicker range={true} rangeHover={true} numberOfMonths={2} value={date} onChange={setDate} layout="mobile" />
  </Box>
</HStack>   

};

export default SingleHotel;
