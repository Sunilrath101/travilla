import React, { useState, useEffect } from "react";
import HotelCardVertical from "../../Components/HotelCardVertical/HotelCardVertical";
import style from './HotelLists.module.css'
import Map from '../../Components/Map/Map'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getData } from "../../Redux/DataReducer/action";
import axios from "axios"
import {Link} from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  VStack,
  Checkbox,
  Heading,
  Radio,
  RadioGroup,
  Stack
} from '@chakra-ui/react'
import {BsFilterSquare} from "react-icons/bs"

const features=["Swimming Pool", "Air Conditioner", "Internet", "Television", "Parking", "Housekeeping",
               "Function Kitchen", "Washing Machine", "Dish Washer", "Refrigirator", "Gym", "Spa", "Cook On Call"]
const propTypes=["Luxury Yacht", "Camping Ground", "Farm", "Homestay", "Apartment", "Villa", "Hostel", "Service Appartment", "Villa",
               "Hostel", "Serviced Appartment", "Royakan (Japanese Inn)", "Bed and Breakfast"]

const HotelLists = () => {

  const [value, setValue] = React.useState('1')
  const {search_query} = useParams();
  const data=useSelector((store)=> store.dataReducer.hotelList)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const dispatch= useDispatch()
  // const [data, setData]= useState();

  // const getData=()=>{
  //   axios
  //     .get("https://long-plum-mite-cape.cyclic.app/results?state=himachal&_limit=7")
  //     .then((res)=> setData(res.data))
  //     .catch((err)=> console.log(err))
  // }


  useEffect(()=>{
    dispatch(getData(search_query))
    console.log("data:", data)
    // getData()
  },[dispatch])

  return <div className={style.container}>
    <div className={style.left}>
      <div className={style.top}>
      <Button 
      leftIcon={<BsFilterSquare/>} 
      onClick={onOpen} borderRadius="0" 
      background="transparent" 
      border="1px solid #999991"
      _hover={{border:"1px solid black", pointer:"cursor"}}
      >APPLY FILTER</Button>

<Modal isOpen={isOpen} onClose={onClose} size={'xl'}> 
  <ModalOverlay />
  <ModalContent>
    <ModalHeader></ModalHeader>
    <ModalCloseButton />
    <ModalBody display="flex" gap="50px" borderRadius="0">
      <VStack>
        <Heading as='h2' size="md">Features</Heading>
        {
        features && features?.map((item)=>{
          return <Checkbox>{item}</Checkbox>
        })
        }
        
      </VStack>
      <VStack>
      <Heading as='h2' size="md">Property Type</Heading>
      {
        propTypes && propTypes?.map((item)=>{
          return <Checkbox>{item}</Checkbox>
        })
        }
      </VStack>
      <VStack>
      <Heading as='h2' size="md">Bedrooms</Heading>
        <RadioGroup onChange={setValue} value={value}>
        <Stack direction='column'>
          <Radio value='1'>First</Radio>
          <Radio value='2'>Second</Radio>
          <Radio value='3'>Third</Radio>
        </Stack>
    </RadioGroup>
      <Heading as='h2' size="md">Bedrooms</Heading>

      </VStack>
    </ModalBody>

    <ModalFooter>
    <Button borderRadius="0px" variant='ghost'>CANCEL</Button>
      <Button borderRadius="0px" background="#1E87F0" color="#fff" mr={3} onClick={onClose}>
        APPLY
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>
        <div>MODIFY SEARCH</div>
      </div>
      <div className={style.bottom}>
        <div className={style.tools}>
          <p>Total 283 results</p>
          <select name="sort-by" id="">
            <option value="rel">Relevance</option>
            <option value="lth">Price (Low to High)</option>
            <option value="htl">Price (High to Low)</option>
          </select>
        </div>
        <div className={style.lists}>
          {
            data && data.map((item)=>{
              return( <Link to={`hotel-list/${search_query}/singlehotelpage/${item.id}`}> 
              <HotelCardVertical 
                name={item.title}
                price={(item.max_price_in_usd*80).toFixed(2)}
                id={item.id}
                image={item.images_medium[0]}
              />
              </Link>)
            })
          }
        </div>
      </div>
    </div>
    <div className={style.right}>
      <Map city={search_query}/>
    </div>
    
  </div>;
};

export default HotelLists;
