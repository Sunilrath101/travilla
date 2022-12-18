import { background, Box, Button, Center, Heading, HStack,Image, Text, VStack, Wrap, WrapItem,Divider } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { ImageSwiper } from "../../Components/SingleHotelComps/ImageSwiper";
import {BottomPart} from "../../Components/SingleHotelComps/BottomPart"
import { RouteComp } from "../../Components/SingleHotelComps/RouteComp";
import  {IoLocationOutline}  from "react-icons/io5";
import { CiLogin,CiLogout } from "react-icons/ci"
import DatePicker from "react-multi-date-picker";
import { Link, Spacer } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import BeatLoader from "react-spinners/BeatLoader"
import { useParams } from "react-router";
import { useDisclosure, useTimeout } from "@chakra-ui/hooks"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { getDatafromLocal, getSingleHotel, sendDatatoLocal } from "../../Redux/DataReducer/action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SingleHotel = () => {
  const dispatch = useDispatch()
  dispatch(getDatafromLocal)
  const {BookedData,singleHotel} = useSelector((store)=> store.dataReducer);
  const [guests,setGuests] = useState(1)
  const [val,setVal] = useState("")
  const [loader,setLoader] = useState(false);
  const [p,setP]=useState(0)

  var initial = []
  if(BookedData.date!=undefined){
     initial = BookedData.date;
  }
   console.log(BookedData)
  const [date,setDate] = useState(initial);
  const [ load,setLoad ] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
    const { id } = useParams();


    useEffect(()=> {
      
      axios.get(`https://long-plum-mite-cape.cyclic.app/results/${id}`)
      .then((res)=>{
        // console.log("axios")
        // setSingleHotel(res.data)
        dispatch(getSingleHotel(res.data))
        // console.log(res.data)
      })
      .catch((err)=>{console.log('err')})
    },[])

  const [availability,setAvailable] = useState(true);


 const details = [ ["Check in",""],["Check Out",""],["Guests",1] ]
 const navigate=useNavigate()
  const OpenModafunc = () => {
    console.log(date)
    var checkin = `${date[0].day}/${date[0].monthIndex+1}/${ date[0].year}`;
    var checkout =  `${date[1].day}/${date[1].monthIndex+1}/${ date[1].year}`|| "";
    console.log("checkuot" , checkin,checkout)
    const details = [ ["Check in",checkin],["Check Out",checkout],["Guests",guests] ];
    onOpen();
  }

   const submitFunc = () => {
    if(date.length<2){
       
    } else {
      var checkin = `${date[0].day}/${date[0].monthIndex+1}/${ date[0].year}`;
      var current = new Date();
      var day = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      var checkout =  `${date[1].day}/${date[1].monthIndex+1}/${ date[1].year}`;
      var range = date[1].dayOfBeginning-date[0].dayOfBeginning +1;
      var price = p;
   
      if(checkin == day  ){
        setAvailable(false)
      } else {
        setAvailable(true);
        const BookedData = {
          "Checkin" : checkin,
          "Checkout" : checkout,
          Range : range,
          Price : p,
          guests : guests || 1,
          date : date
         }
         console.log(typeof(date[0]))
        if(typeof(date[0])!=='number'){
          dispatch(sendDatatoLocal(BookedData))
        }
        navigate('/booking')
      }
    }
   }
//  console.log(obj)
    if(singleHotel.title!=undefined){
      var obj = singleHotel
   }
 
  //  console.log(obj,typeof(singleHotel))
   var Facilities = [];
   for(var a in obj){
    if(obj[a]===true && a !== "active" ){
      Facilities.push(a.toUpperCase())
    }
   }
    //  console.log(Facilities)
    useEffect(()=>{
      const price = Math.floor(obj?.max_price_in_usd * 80);
      setP(price)
    },[obj])
  return   <HStack w={"100%"} p={"20px"}  >
   <Box w={{base:"100%",md:"100%",lg:"70%"}} marginLeft={{sm:"6%"}} paddingRight={"40px"} borderRight={"1px solid #A9A9A9"} >
   <RouteComp />
   <Divider colorScheme={"#D3D3D3"} orientation='horizontal' />
   <HStack width={{base:"100%",md:"100%",lg:"100%"}} pt="20px" pl="20px" alignItems={"flex-start"} flexDirection={{base:"column",md:"column",lg:"row"}} >
     <Box h="450" width={{base:"100%",md:"100%",lg:"558px"}} >
      <Image  width={{base:"100%", lg:"558px"}} h="300" src={obj?.images_large[0]}  fallbackSrc='https://via.placeholder.com/200' />
      <HStack p="5px" width={{base:"50%",md:"100%",lg:"100%"}} >
        <Image  width={"100%"} h="150" src={obj?.images_large[3]}  fallbackSrc='https://via.placeholder.com/150' />
        <Image width={"100%"} h="150" src={obj?.images_large[2]}  fallbackSrc='https://via.placeholder.com/150' />
      </HStack>
     </Box>
     <VStack width={{base:"100%",md:"100%",lg:"50%"}} p="40px" >
       <Heading>{obj?.title}</Heading>

       <Button leftIcon={<IoLocationOutline />} outline="none" colorScheme={"gray"} bg="none" cursor={"default"} _hover={{background:"none"}} >{obj?.city},{obj?.state},{obj?.country}</Button>

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
  <BottomPart bed = {obj?.number_of_rooms} bath = {obj?.number_of_bathrooms} type = {obj?.property_type} guest={guests} />
   </Box>

   <Divider colorScheme={"#D3D3D3"} orientation='vertical' display = {{base:"none",md:"none","lg":"block"}} />
  <Box w="370px" h={"100%"} position="fixed" top="14" right={"0"} p="40px"  display = {{base:"none",md:"none","lg":"block"}} >
      <Text>Starting</Text>
      <HStack>
  
      <Heading>Rs {p}/-</Heading>
      <Text>per Night</Text>
      </HStack>

      { date.length<2 ? <Box bg="red.100" p="10px" color={"red.900"} >Select dates</Box> : (availability) ? <Box bg="green.100" p="10px" color={"green.900"} >Your dates are available to book</Box> : <Box  bg="red.100" p="10px" color={"red.900"} >Advance Booking 1 day prior</Box> }

     <Box mt="20px"   > <DatePicker style={{
    background: "none",
    height: "38px",
    width:"290px",
    borderRadius: "3px",
    fontSize: "14px",
    padding: "3px 50px",
    border:"1px solid grey",
  
  }} placeholder="Check in               Check out"  range={true} rangeHover={true} numberOfMonths={2} value={date}
   onChange={setDate}  layout="mobile" /></Box>

  <HStack mt="-40px" zIndex="3" spacing="100px" w="300px" h="38px" >
  <Box><CiLogin size={"28px"} /></Box>
  <Box w="15px" h="100%" bg="default"  ></Box>
  <Box ><CiLogout  size={"28px"} /></Box>
  </HStack>

  <Box width="100%" my="20px" >
  <Select id="guest" placeholder='Select Guests' onChange={(e)=>{setGuests(e.target.value)}} >
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
      <Text fontSize="lg" >Rs {p+p*14/100}/-</Text>
      <Link onClick={OpenModafunc} fontSize="xs" color="blue" >view Details</Link>
    </Box>
   </HStack>

   <Button w="100%" mt="20px"
   colorScheme={"blue"}
  isLoading={loader}
   height="50px"
   onClick={submitFunc}
  spinner={<BeatLoader size={10} color='white' />}
>
  Request to Book
</Button>
  </Box>

  <Modal size="2xl" blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay  />
        <ModalContent  >
          <ModalHeader>Booking Summary</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Divider orientation="horizontal" />
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
        <Box w="73%"  borderBottom="1px dashed grey" ></Box>
        <Text>Rs {p}/-</Text>
                </HStack>

                <HStack my="10px" >
          <Text>Discount</Text>
          <Box w="73%"  borderBottom="1px dashed grey" ></Box>
        <Text>${}</Text>
                </HStack>

                <HStack my="10px" >
          <Text>Tax</Text>
          <Box w="73%"  borderBottom="1px dashed grey" ></Box>
        <Text>Rs {p*0.14}/-</Text>
                </HStack>
      
       <Divider orientation="horizontal" />
      
       <HStack my="20px" >
          <Text size="md" >Total</Text>
          <Box w="75%"  borderBottom="2px dashed grey" ></Box>
        <Text>Rs {p+p*14/100}/-</Text>
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
            <Button colorScheme={"blue"} onClick={submitFunc} variant='ghost'>Request to Book</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

</HStack>   

};

export default SingleHotel;
