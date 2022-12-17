import { background, Box, Button, Center, Heading, HStack,Image, Text, VStack, Wrap, WrapItem,Divider } from "@chakra-ui/react";
import React, { useState } from "react";
//import { ImageSwiper } from "../../Components/SingleHotelComps/ImageSwiper";
//import {BottomPart} from "../../Components/SingleHotelComps/BottomPart"
//import { RouteComp } from "../../Components/SingleHotelComps/RouteComp";
import  {IoLocationOutline}  from "react-icons/io5";
import { CiLogin,CiLogout } from "react-icons/ci"
// import DatePicker from "react-multi-date-picker";
import { Link, Spacer } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
//import BeatLoader from "react-spinners/BeatLoader"
import { useParams } from "react-router";
import { useDisclosure } from "@chakra-ui/hooks"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { getDatafromLocal, sendDatatoLocal } from "../../Redux/DataReducer/action";
import { useDispatch, useSelector } from "react-redux";



const SingleHotel = () => {
  const dispatch = useDispatch()
  dispatch(getDatafromLocal)
  const {BookedData} = useSelector((store)=> store.dataReducer);
  var initial = []
  if(BookedData.date!=undefined){
     initial = BookedData.date;
  }

  const [date,setDate] = useState(initial);
  const [ load,setLoad ] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
    const { userId } = useParams();

   
  var country = "India";
  var state = "Goa";
  var city = "Vizag";
  var hotel = "hotel";
  const [availability,setAvailable] = useState(true);
 console.log(date)

 const details = [ ["Check in",""],["Check Out",""],["Guests",1] ]
  const OpenModafunc = () => {
    onOpen();
    console.log(date)
    var checkin = `${date[0].day}/${date[0].monthIndex+1}/${ date[0].year}`;
    var checkout =  `${date[1].day}/${date[1].monthIndex+1}/${ date[1].year}`|| "";
    console.log("checkuot" , checkin,checkout)
    const details = [ ["Check in",checkin],["Check Out",checkout],["Guests",1] ];
  }

   const submitFunc = () => {
    if(date.length<2){
       
    } else {
      var checkin = `${date[0].day}/${date[0].monthIndex+1}/${ date[0].year}`;
      var current = new Date();
      var day = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      var checkout =  `${date[1].day}/${date[1].monthIndex+1}/${ date[1].year}`;
      var range = date[1].dayOfBeginning-date[0].dayOfBeginning +1;
      var price = 52;
      var guest = +(document.getElementById("guest").value);
       console.log(checkin,day,guest)
      if(checkin == day  ){
        setAvailable(false)
      } else {
        setAvailable(true);
        const BookedData = {
          "Checkin" : checkin,
          "Checkout" : checkout,
          Range : range,
          Price : price,
          guests : guest || 1,
          date : date
         }

         dispatch(sendDatatoLocal(BookedData))
      }
    }
   }
 
  const Facilities = ['SHOWER','PARKING SPACE','HOUSEKEEPING','RESTAURANTS CLOSE BY','FAN','AIR CONDITIONING'];

  return   <HStack w={"100%"} p={"20px"}  >
   <Box w="75%" paddingRight={"40px"} borderRight={"1px solid #A9A9A9"} >
   {/* <RouteComp /> */}
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
  {/* <BottomPart /> */}
   </Box>

   <Divider colorScheme={"#D3D3D3"} orientation='vertical' />
  <Box w="370px" h={"100%"} position="fixed" top="0" right={"0"} p="40px" >
      <Text>Starting</Text>
      <HStack>
      <Heading>{}</Heading>
      <Text>per Night</Text>
      </HStack>

      { date.length<2 ? <Box bg="red.100" p="10px" color={"red.900"} >Select dates</Box> : (availability) ? <Box bg="green.100" p="10px" color={"green.900"} >Your dates are available to book</Box> : <Box  bg="red.100" p="10px" color={"red.900"} >Advance Booking 1 day prior</Box> }

     {/* <Box mt="20px"   > <DatePicker style={{
    background: "none",
    height: "38px",
    width:"290px",
    borderRadius: "3px",
    fontSize: "14px",
    padding: "3px 50px",
    border:"1px solid grey",
  
  }} placeholder="Check in               Check out"  range={true} rangeHover={true} numberOfMonths={2} value={date}
   onChange={setDate}  layout="mobile" /></Box> */}

  <HStack mt="-40px" zIndex="3" spacing="100px" w="300px" h="38px" >
  <Box><CiLogin size={"28px"} /></Box>
  <Box w="15px" h="100%" bg="default"  ></Box>
  <Box ><CiLogout  size={"28px"} /></Box>
  </HStack>

  <Box width="100%" my="20px" >
  <Select id="guest" placeholder='Select Guests'>
  <option value='1'>1 Guest</option>
  <option value='2'>2 Guests</option>
  <option value='3'>3 Guests</option>
  <option value='4'>4 Guests</option>
  <option value='5'>5 Guests</option>
</Select>
  </Box>

  <Text fontSize="sm" >Rateplan: No meals provided (European Plan)</Text>

   <HStack mt="20px" >
    <Box>
      <Text fontSize="lg" >Total</Text>
      <Text fontSize="xs" >Include Taxes and fees</Text>
    </Box>
   <Spacer />
    <Box>
      <Text fontSize="lg" >50{}</Text>
      <Link onClick={OpenModafunc} fontSize="xs" color="blue" >view Details</Link>
    </Box>
   </HStack>

   <Button w="100%" mt="20px"
   colorScheme={"blue"}
  isLoading={load}
   height="50px"
   onClick={submitFunc}
  // spinner={<BeatLoader size={10} color='white' />}
>
  Request to Book
</Button>
  </Box>

  <Modal size="2xl" blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay  />
        <ModalContent  >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
              You can scroll the content behind the modal
            </Text>
            <Box w="100%" >
        <Wrap w="100%" spacing="23px" my="20px" >
          { details.map((el)=> {
            return (
              <WrapItem key={el} >
                <Center w="170px" h="150px" boxShadow={"0 5px 15px rgb(0 0 0 / 8%) "} >
                  <Heading size= "md" >{el[1]}</Heading>
                  <Text>{el[0]}</Text>
                </Center>
              </WrapItem>
            )
          })}
        </Wrap>
      </Box>

      <Box w="100%" p="10px" >
        <HStack my="10px" >
          <Text>Sub Total</Text>
        <Box w="80%"  borderBottom="1px dashed grey" ></Box>
        <Text>${}</Text>
                </HStack>

                <HStack my="10px" >
          <Text>Discount</Text>
          <Box w="80%"  borderBottom="1px dashed grey" ></Box>
        <Text>${}</Text>
                </HStack>

                <HStack my="10px" >
          <Text>Tax</Text>
          <Box w="85%"  borderBottom="1px dashed grey" ></Box>
        <Text>${}</Text>
                </HStack>
      
       <Divider orientation="horizontal" />
      
       <HStack my="20px" >
          <Text size="md" >Total</Text>
          <Box w="84%"  borderBottom="2px dashed grey" ></Box>
        <Text>${}</Text>
                </HStack>
       </Box>

       <Box w="97%" bg="red.200" color="red" p="10px" >
        <Heading size="28px" >Above price DOES NOT include</Heading>
        <HStack  my="20px" >
          <Text>Cleaning Fee</Text>
          <Box w="74%" borderBottom="1px dashed red" ></Box>
        <Text>${}</Text>
                </HStack>
       </Box>

       <Box>
        <Box my="20px" >
          <Heading size="sm" mb="7px" >Rate Plan</Heading>
          <Text>No meals provided (European Plan)</Text>
        </Box>

        <Box my="20px" >
          <Heading  size="sm" mb="7px" >Stringent Cancellation Policy</Heading>
          <Text>No charges will be levied if booking is canceled 61 days prior to check-in. If cancellation is done between 30 to 60 days prior to check-in, 50% of the total booking amount will be charged. Post that, there will be no refund.</Text>
        </Box>

        <Box>
          <Heading size="sm" mb="7px" >House Rules</Heading>
          <Text fontSize="16px" >Loud Music not allowed. Pets allowed on request</Text>
        </Box>
        
       </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

</HStack>   

};

export default SingleHotel;