import { Box,Breadcrumb, BreadcrumbItem, BreadcrumbLink, } from "@chakra-ui/react"

export const RouteComp = () => {

  var Country = "India";
  var State = "Goa";
  var City = "Vizag";
  var hotel = "hotel"
  return (
    <Box p="20px 40px" >
      
<Breadcrumb>
<BreadcrumbItem>
<BreadcrumbLink href='#'>Home</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem>
<BreadcrumbLink href='#'>{Country}</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem>
<BreadcrumbLink href='#'>{State}</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem>
<BreadcrumbLink href='#'>{City}</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem isCurrentPage>
<BreadcrumbLink href='#'>Property {hotel}</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
    </Box>
  )
}