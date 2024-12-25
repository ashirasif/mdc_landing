import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const certifications =[
  {
    image: '/3084.png',
    text: 'Directorate General of Defense Purchase (DGDP)',
    date: '20.09.2012'
  },
  {
    image: '3085.png',
    text: 'ISO9001:2015 Certified',
    date: '20.09.2012'
  },
  {
    image: '/3086.png',
    text: 'ISO/IEC27001:2022 Certified',
    date: '20.09.2012'
  },
  {
    image: '/PPRA.svg',
    text: 'Public Procurement Regulatory Authority (PRA)',
    date: 'PPRA 2015'
  },
  {
    image: '/PSEB.svg',
    text: 'Pakistan Software Export Board',
    date: 'PSEB 2024'
  },
  // {
  //   image: '/3089.png',
  //   text: 'ISO/IEC27001:2022 Certified',
  //   date: '20.09.2012'
  // },
]
function Certifications() {
  return (
    <div className="flex flex-col gap-4 bg-secondary shadow-inner border border-accent rounded-3xl text-lg">
      <div className="p-8 flex flex-col gap-4 text-center sm:text-start">
        <h2 className="text-3xl font-medium">Certifications & Registrations</h2>
        <p className="text-foreground">We at MDC believe in staying ahead of the curve and learning new things all the time. MDC has been certified under INTERCERTINC, Business Management Solutions, Ministry of Defense, Government of Pakistan and Pakistan Aeronautical Complex Board (PACB).</p>
      </div>  
      <div className="">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl mx-auto"
    >
      <CarouselContent >
        {certifications.map((certification, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center gap-6 p-6 text-white text-center">
                  {/* <div className={`w-28 h-28 rounded-full bg-[url('${certification.image}')] bg-cover`}></div> */}
                  <img src={certification.image} className="w-28 h-28 rounded-full bg-white" alt="" />
                  <div className="flex flex-col gap-2">
                  <p className="text-sm">{certification.text}</p>
                  <p className="text-xs text-foreground">{certification.date}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>    
    </div>
  )
}

export default Certifications
