import { Box,Breadcrumb, BreadcrumbItem, BreadcrumbLink, } from "@chakra-ui/react"

export const RouteComp = () => {

  var Country = "India";
  var State = "Goa";
  var City = "Vizag";
  var hotel = "hotel"
  return (
    <Box p="20px 40px" w={{base:"100%"}} >
      
<Breadcrumb>
<BreadcrumbItem>
<BreadcrumbLink href='/'>Home</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem>
<BreadcrumbLink href='/search-state/:state_query'>{State}</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem>
<BreadcrumbLink href='/search-city/:city_query'>{City}</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem isCurrentPage>
<BreadcrumbLink href='/hotel-list/:search_query/:id'>Property {hotel}</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
    </Box>
  )
}