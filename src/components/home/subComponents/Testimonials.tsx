import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials =[
  {
    text: '"We align our success with the success of our customers which is why our offering transcends our software"',
    image: "/dummy.png",
    name: 'Randy Levin',
  },
  {
    text: '"We align our success with the success of our customers which is why our offering transcends our software"',
    image: "/dummy.png",
    name: 'Randy Levin',
  },
  {
    text: '"We align our success with the success of our customers which is why our offering transcends our software"',
    image: "/dummy.png",
    name: 'Randy Levin',
  },
]
function Testimonials() {
  return (
    <div className="flex flex-col  gap-11">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex bg-secondary rounded-full border border-accent py-2 px-3 gap-1 w-[8.688rem]">
              <img src="message-regular.svg" className="w-3" />
              <span>Testimonials</span>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-medium">What are people saying</h2>
              <p className="text-foreground w-4/5 mx-auto">
                "Thank you for your trust in Crypt Land! We are grateful for
                your feedback and are committed to providing the best
                [products/services offered]. Read what our clients have to say
                about their experience with us.
              </p>
            </div>

            <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex p-6 text-white flex-col gap-20">
                  <p className="w-4/5">{testimonial.text}</p>
                  <div className="flex justify-between">
                    <div className="w-44 flex gap-2">
                      <img src={testimonial.image} className="w-10 h-10 rounded-full" />
                      <div className="flex flex-col gap-3" >
                        <span className="text-sm">{testimonial.name}</span>
                      </div>
                    </div>
                    <img src="/quote-right-solid.svg" className="w-8" />
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

export default Testimonials
