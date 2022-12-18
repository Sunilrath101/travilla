import React, { useState, useEffect } from "react";
import HotelCardVertical from "../../Components/HotelCardVertical/HotelCardVertical";
import style from './HotelLists.module.css'
import Map from '../../Components/Map/Map'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getData } from "../../Redux/DataReducer/action";
import axios from "axios"
import Searchbar from '../../Components/Searchbar/Searchbar'
import {Link, useSearchParams} from "react-router-dom";
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
import {BsFileEarmarkSlidesFill, BsFilterSquare} from "react-icons/bs"

const features=["Swimming Pool", "AC", "Wifi", "TV", "Internet", "Television", "Parking", "Housekeeping",
               "Function Kitchen", "Washing Machine", "Dish Washer", "Refrigirator", "Gym", "Spa", "Cook On Call"]
const propTypes=["Room", "Luxury Yacht", "Camping Ground", "Farm", "Homestay", "Apartment", "Villa", "Hostel", "Service Appartment", "Villa",
               "Hostel", "Serviced Appartment", "Royakan (Japanese Inn)", "Bed and Breakfast"]

const HotelLists = () => {

  const [value, setValue] = React.useState('1')
  const {search_query} = useParams();
  const data=useSelector((store)=> store.dataReducer.hotelList)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [open, setOpen] = useState(false);

  const dispatch= useDispatch()

  const [searchParams, setsearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("property_type");
  const [category, setCategory] = useState(initialCategory || []);

  const openFunc=()=>{
    setOpen(true)
  }
  const closeFunc=()=>{
    setOpen(false)
  }

  const handleFilterCat = (e) => {
    const newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  const [searchP] = useSearchParams();

  useEffect(()=>{
    let params = {};
    params.property_type = category;
    setsearchParams(params);

    const param={params:{property_type:searchP.getAll("property_type")}}
    dispatch(getData(search_query, param))
    console.log("data:", data)

  },[dispatch, category, setsearchParams, data.length])

  return <div className={style.container}>
    <div className={style.left}>
      <div className={style.top}>
      <Button 
      leftIcon={<BsFilterSquare/>} 
      onClick={onOpen} borderRadius="0"
      fontSize="12px" 
      background="transparent" 
      border="1px solid #dedede"
      _hover={{border:"1px solid gray", pointer:"cursor"}}
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
          return <Checkbox value={item}  checked={category.includes(item)} onChange={handleFilterCat}>{item}</Checkbox>
        })
        }
        
      </VStack>
      <VStack>
      <Heading as='h2' size="md">Property Type</Heading>
      {
        propTypes && propTypes?.map((item)=>{
          return <Checkbox value={item} onChange={handleFilterCat}>{item}</Checkbox>
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

<Button 
      leftIcon={<BsFilterSquare/>} 
      onClick={openFunc} borderRadius="0"
      fontSize="12px" 
      background="transparent" 
      border="1px solid #dedede"
      _hover={{border:"1px solid gray", pointer:"cursor"}}
      >MODIFY SEARCH</Button>

<Modal size="3xl" isOpen={open} onClose={closeFunc}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center">
            <Searchbar/>
          </ModalBody>
        </ModalContent>
      </Modal>




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
                city={item.city?.charAt(0).toUpperCase() + item.city?.slice(1)}
                state={item.state}
                country={item.country}
                tags={item.prop_tags}
                
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
