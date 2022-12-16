import { Box, Button, HStack,Wrap, Stack, VStack,Heading,Text, WrapItem, Center, Divider, Spacer } from "@chakra-ui/react"
import {InfoOutlineIcon} from "@chakra-ui/icons"
import { FiTag } from "react-icons/fi";
import  {IoLocationOutline}  from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx"
import {Googlemap} from "./Googlemaps";

export function BottomPart () {

const Aminities = [
  "POWER BACKUP","SHOPPING CLOSE BY","PARK NEARBY","MICROWAVE","COOKWARE","GAS/STOVE","REFRIGARATOR","TELEVISION","SATELLITE/CABLE CONNECTION","BOOKS & MAGAZINES","PICK AND DROP PACILITY","TRAVEL","GARDEN/LAWN","LINEN PROVIDED","HOT WATER","WESTERN TOILET",'KETTLE','SHOWER','PARKING SPACE','HOUSEKEEPING','RESTAURANTS CLOSE BY','FAN','AIR CONDITIONING','WIRELSS INTERNET','KITCHEN','RAILWAYSTATION CLOSEBY', 'AIRPORT CLOSE BY','SWIMMING POOL', 'BICYCLES','WATER FILTER','IRONING BOARD','TEA/COFFEE MAKER','BEACH NEARBY','HAIR DRYER','POTS & PANS','SPARE MATRESSES','OVEN','BALCONY','24/7 POWER','FIXED INTERNET'
]
  return (
    <Box w="100%" >
      <HStack p=" 40px" pb="0px" >
      <Button outline="none" colorScheme={"gray"} bg="none"  _hover={{background:"none"}} leftIcon={<InfoOutlineIcon />} variant='solid'>
    OVERVIEW
  </Button>

  <Button outline="none" colorScheme={"gray"} bg="none"  _hover={{background:"none"}} leftIcon={<FiTag />} variant='solid'>
    EMINITIES
  </Button>

  <Button outline="none" colorScheme={"gray"} bg="none"  _hover={{background:"none"}} leftIcon={<IoLocationOutline />} variant='solid'>
    MAP
  </Button>

  <Button outline="none" colorScheme={"gray"} bg="none"  _hover={{background:"none"}} leftIcon={<RxHamburgerMenu />} variant='solid'>
    POLICIES & FEES
  </Button>
      </HStack>
      <Divider orientation="horizontal"  />
      <VStack>
        <HStack spacing={"20px"} >
          <Box alignItems="center" >
            <Box w={"370px"} h={"56.25"} m="40px" boxShadow={"0 5px 15px rgb(0 0 0 / 8%) "} alignItems="center" >
               <Heading>{}</Heading>
               <Text>Type of Property</Text>
            </Box>
            <HStack alignItems="center" >
              <Box alignItems="center" w={"137.5px"} h="56.25px" m="40px" boxShadow={"0 5px 15px rgb(0 0 0 / 8%) "} >
              <Heading>{}</Heading>
               <Text>Bedrooms</Text>
              </Box>

              <Box alignItems="center" w={"137.5px"} h="56.25px" m="40px" boxShadow={"0 5px 15px rgb(0 0 0 / 8%) "} >
              <Heading>{}</Heading>
               <Text>Bathrooms</Text>
              </Box>
            </HStack>
            <Box w={"137.5px"} h="56.25px" m="40px" boxShadow={"0 5px 15px rgb(0 0 0 / 8%) "} >
              <Heading>{}</Heading>
               <Text>Max. Guests</Text>
              </Box>
          </Box>

          <Box  >
            <Text pb={"20px"} >
            Nestled in the south of Goa is a home away from home. Keeping in mind that one would come to Goa to get close to nature and close to the beach. We have to offer a holiday apartment with one bedroom, living area, dining, kitchen and a small balcony just overlooking the pool. The apartment is in a secured gated complex just across the road from the sands of Benaulim Beach. Literally, a hop, skip and a jump from the main gate.
            </Text>

            <Text>
            Benaulim Beach is one of the most beautiful beaches in Goa besides the Sun, Sand, and Surf the location of the holiday apartment provides scenic views of sand dunes, fields and ponds with aqua as well as botanical life in it.
            </Text>
          </Box>
        </HStack>

        <VStack  p={"40px"} >
          <Heading w="100%" textAlign={"left"} >Key Amenities</Heading>
          <Divider orientation="horizontal" />
          <Box p="20px 0px" >
           <Wrap spacing={"15px"} >
           {Aminities.map((el)=> {
              return <WrapItem key={el} >
                <Center border={"1px solid grey"} fontSize="12px" p="10px" borderRadius={"4px"} >{el} </Center>
              </WrapItem>
            })}
           </Wrap>
          </Box>
          <Box w="100%" >
            <Heading m="30px 14px" size={"md"} >Living Room</Heading>
             <wrap >
              <WrapItem>
              <Center border={"1px solid grey"} p="10px" borderRadius={"4px"} >TELEVISION WITH CABLE CONNECTION </Center>
              </WrapItem>

              <WrapItem>
              <Center border={"1px solid grey"} p="10px" borderRadius={"4px"} >SOFA </Center>
              </WrapItem>

              <WrapItem>
              <Center border={"1px solid grey"} p="10px" borderRadius={"4px"} >DINING TABLE </Center>
              </WrapItem>
             </wrap>
          </Box>

          <HStack w="100%" >
            <Box w="50%" >
              <Heading m="30px 14px" size={"md"} >Bedroom 1</Heading>
             <Wrap> <WrapItem>
              <Center border={"1px solid grey"} p="10px" borderRadius={"4px"} >1 QUEEN BED(S) </Center>
              </WrapItem>
              </Wrap>
              </Box>
             
              <Box>
              <Heading m="30px 14px" size={"md"} >Bedroom 2</Heading>
                <Wrap>
                <WrapItem>
              <Center border={"1px solid grey"} p="10px" borderRadius={"4px"} >1 QUEEN BED(S) </Center>
              </WrapItem>
              </Wrap> 
            </Box>
          </HStack>

          <HStack w="100%" >
            <Box w="50%" >
              <Heading m="30px 14px" size={"md"} >Bathroom 1</Heading>
             <Wrap> <WrapItem>
              <Center border={"1px solid grey"} p="10px" borderRadius={"4px"} >WESTERN TOILET </Center>
              </WrapItem>
              
              <WrapItem>
              <Center border={"1px solid grey"} p="10px" borderRadius={"4px"} >TOILET PAPER </Center>
              </WrapItem>
              </Wrap> 
            </Box>

            <Box>
              <Heading m="30px 14px" size={"md"} >Bathroom 2</Heading>
             <Wrap> <WrapItem>
              <Center border={"1px solid grey"} p="10px" borderRadius={"4px"} >WESTERN TOILET </Center>
              </WrapItem>
              
              <WrapItem>
              <Center border={"1px solid grey"} p="10px" borderRadius={"4px"} >TOILET PAPER </Center>
              </WrapItem>
              </Wrap> 
            </Box>
          </HStack>
        </VStack>
        <Box>
          <Googlemap />
        </Box>
      </VStack>

      <Box p="40px">
        <Heading>POLICIES & FEES</Heading>
       < Divider orientation="horizontal" />
      <HStack w="100%" >
            <Box w="50%" >
              <Heading m="30px 14px" size={"md"} >Default Cancellation Policy</Heading>
             <Text>No charges will be levied if booking is canceled 61 days prior to check-in. If cancellation is done between 30 to 60 days prior to check-in, 50% of the total booking amount will be charged. Post that, there will be no refund.</Text>
              </Box>
             
              <Box>
              <Heading m="30px 14px" size={"md"} >House Rules</Heading>
               <Text>Loud Music not allowed. Pets allowed on request</Text>
            </Box>
          </HStack>

          <Box w="45%" alignItems={"flex-start"} >
              <Heading m="30px 14px" size={"md"} >Cleaning Fee</Heading>
               <Text>Cleaning Fee INR 700.00 Fixed Amount Per Stay</Text>
            </Box>
      </Box>
    </Box>
  )
}