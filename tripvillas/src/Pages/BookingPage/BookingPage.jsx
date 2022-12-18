import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input";
import { Box, Heading, HStack, List, ListItem, VStack, Wrap, WrapItem, Divider,Text,Center, UnorderedList, Spacer } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { CheckIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { sendSignInLinkToEmail } from "@firebase/auth";
import { Navigate, useParams } from "react-router";
import { getDatafromLocal } from "../../Redux/DataReducer/action";

 const BookingPage = () => {
  const [error,setError] = useState(false)
  const [mobile,setMobile] = useState("");
  const [fname,setFname] = useState("");
  const [email,setEmail] = useState("");
  const dispatch = useDispatch();
  dispatch(getDatafromLocal)
  const { BookedData } = useSelector((state)=>state.dataReducer)
  console.log(BookedData)
   const p = BookedData.Price*80;
   const r = BookedData.Range;
   const {id} = useParams()
  const {isAuth} = useSelector((state)=> state.authReducer)

  const myfunc = () => {
    if(isAuth){
      
      if(mobile && fname && email){
        
      }

    } else {
      alert("Need to Login")
    }
  }

  const details = [ ["Check in",BookedData.Checkin],["Check Out",BookedData.Checkout],["Guests",BookedData.guests],["Units",1] ]

  return <HStack w={{base:"150%",md:"100%"}} p="40px" spacing="60px" alignItems="flexStart" flexDirection={{base:"column",lg:"row"}} >
     <VStack w={{base:"100%",lg:"55%"}}  >
       <Box bg="blue.700" p="40px" w="100%" my="20px" >
         <Heading size="md" my="10px" >
          Book Tension Free
         </Heading>
          <UnorderedList my="10px" >
            <ListItem  my="7px" > Your payments are secured by Tripvilas.
            </ListItem>
            <ListItem  my="7px"  >The amounts are released to verified owners in advance while new owners are paid post your check-in and confirmation.
            </ListItem>

            <ListItem>
            You can contact us if you face any issues during checkin or your stay.
            </ListItem>
          </UnorderedList>
       </Box>

       <HStack w="100%" h="170px" spacing="40px" boxShadow={"0 5px 15px rgb(0 0 0 / 8%) "} py = "20px" >
           <Image display={{base:"none",lg:"inLine"}} w="320px" h="170px" src={BookedData?.Image} fallbackSrc='https://via.placeholder.com/170' />
           <Box w="100%" >
            <Text>Property Ref ID {id}</Text>
            <Heading size="lg" >{BookedData.hotel}</Heading>
            <Text>{BookedData.city },{BookedData.state}</Text>
            <Text> {},Accomodates max 5 guests | 2 Bedrooms | 2 Bathrooms </Text>
           </Box>
       </HStack>

      <Box w="100%" >
        <Wrap w="100%" spacing="23px" my="20px" >
          { details.map((el)=> {
            return (
              <WrapItem key={el} >
                <Center w={{base:"150px",md:"300px" , lg:"160px"}} h="140px" boxShadow={"0 5px 15px rgb(0 0 0 / 8%) " }flexDirection="column"  >
                  <Heading size="md" >{el[1]}</Heading>
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
        <Box w="75%"  borderBottom="1px dashed grey" ></Box>
        <Text>Rs {r*(p).toFixed(2)}/-</Text>
                </HStack>

                <HStack my="10px" >
          <Text>Discount</Text>
          <Box w="80%"  borderBottom="1px dashed grey" ></Box>
        <Text>${}</Text>
                </HStack>

                <HStack my="10px" >
          <Text>Tax</Text>
          <Box w="80%"  borderBottom="1px dashed grey" ></Box>
        <Text>Rs {(r*p*0.14).toFixed(2)}/-</Text>
                </HStack>
      
       <Divider orientation="horizontal" />
      
       <HStack my="20px" >
          <Text size="md" >Total</Text>
          <Box w="75%"  borderBottom="2px dashed grey" ></Box>
        <Text>Rs {r*(p+p*14/100).toFixed(2)}/-</Text>
                </HStack>
       </Box>

       <Box w="97%" bg="red.200" color="red" p="10px" >
      <HStack> <InfoOutlineIcon />
        <Heading size="28px" >Above price DOES NOT include</Heading></HStack>
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
     </VStack>

     <VStack w={{base:"80%",lg:"45%"}} m="auto" >
      <HStack w="100%" h="50px" bg="red.100" color="red" p="10px" my="20px" >
         <InfoOutlineIcon />
       
      <Text>Book fast. Your dates might get booked by someone else.</Text>
      </HStack>

      <Box w="100%" h="auto" p="20px" boxShadow={"0 5px 15px rgb(0 0 0 / 8%) "} >
        <HStack p="10px" ><Heading size="md" >Enter your contact information</Heading></HStack>
        <Divider  orientation="horizonal" borderColor="grey" />
        <VStack spacing={10} color="grey" >
  <InputGroup w="100%" my="10px" >
    <InputLeftAddon children="+91"  />
    <Input type='number' placeholder='Mobile number' onChange={(e)=>{setMobile(e.target.value)}} />
  </InputGroup>

  <HStack w="100%" >
    <Input placeholder="First name" onChange={(e)=>{setFname(e.target.value)}} />
    <Input placeholder="Last name" />
  </HStack>
  <Input placeholder="Email Address" onChange={(e)=>{setEmail(e.target.value)}} />
  </VStack>
  </Box>

  <Box w="100%" boxShadow={"0 5px 15px rgb(0 0 0 / 8%) "} p="20px" >
        <HStack><Heading size="md" py="10px" >Are There any special requests?</Heading></HStack>
        <Divider  orientation="horizonal"/>
  <Input placeholder="Your Message" h="80px" />

  <Text fontSize="14px" >This message will be visible to the owner/manager once she/he accepts the booking</Text>
      </Box>
    

     <Box  w="100%" >
        <HStack><Heading size="md" py="10px" >Booking Options</Heading></HStack>
    <Divider  orientation="horizonal"/>
   <HStack alignItems="flexStart" padding="10px" border="2px solid blue" spacing="20px" >
     {/* <icon /> */} <CheckIcon boxSize="8" />
     <Box>
  <Heading fontSize="22px" my="10px" >Put your credit/debit card on file.</Heading>
  
  <Text fontSize="14px"  my="10px" >Since this booking is on 'Request To Book', We will only charge your card once owner accepts the booking.</Text>
  <Text  fontSize="14px"  my="10px" >This is 100% Secure
</Text>
<Text  fontSize="14px"  my="10px" >We DO NOT store/save your credit card details. We use Stripe.com. Stripe has been audited by an independent PCI Qualified Security Assessor (QSA) and is certified as a PCI Level 1 Service Provider.
</Text>
</Box>
   </HStack>

      </Box>

    <Box   w="100%" h="75px" bg="black.500" color="grey" p="10px" my="40px"  >
    By clicking 'Agree & Continue', you are agreeing to our Terms & Conditions, Privacy Policy, Booking policies like cancellation policies, house rules.
    </Box>

    <Box display = {error ? "" : "none"}  w="100%" h="50px" bg="red.100" color="red" p="10px" my="40px"  >Please correct the errors above & retry</Box>
 
   <Button h="55px" bg="blue" _hover={{bg:"blue.500"}} w="100%" onClick={myfunc} >AGREE & CONTINUE</Button>
     </VStack>
  </HStack>
};

export default BookingPage;
