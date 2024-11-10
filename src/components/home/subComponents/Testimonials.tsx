import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from "lucide-react";

interface TestimonialData {
  text: string;
  image: string;
  name: string;
  rating: number;
}

function Testimonial() {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const testimonials: Record<string, TestimonialData> = {
    Randy: {
      text: 'We align our success with the success of our customers which is why our offering transcends our software',
      image: "/dummy.png",
      name: 'Randy Levin',
      rating: 4,
    },
    waqas: {
      text: 'We align our success with the success of our customers which is why our offering transcends our software',
      image: "/dummy.png",
      name: 'Waqas Malik',
      rating: 5,
    },
    doll: {
      text: 'We align our success with the success of our customers which is why our offering transcends our software',
      image: "/dummy.png",
      name: 'Doll Simon',
      rating: 3,
    },
  };

  return (
    <div className="flex flex-col overflow-hidden gap-11 text-lg">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex bg-secondary shadow-inner rounded-full border border-accent py-2 px-3 gap-1 ">
          <img src="message-regular.svg" className="w-3" alt="Message Icon" />
          <span>Testimonials</span>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-medium">What are people saying</h2>
          <p className="text-foreground sm:w-4/5 mx-auto">
            "Thank you for your trust in Crypt Land! We are grateful for your
            feedback and are committed to providing the best [products/services
            offered]. Read what our clients have to say about their experience
            with us.
          </p>
        </div>
      </div>
      
      {
        // <Carousel
        //   plugins={[plugin.current]}
        //   className="w-full max-w-xs mx-auto"
        //   onMouseEnter={plugin.current.stop}
        //   onMouseLeave={plugin.current.reset}
        // >
        //   <CarouselContent>
        //     {Array.from({ length: 5 }).map((_, index) => (
        //       <CarouselItem key={index}>
        //         <div className="p-1">
        //           <Card>
        //             <CardContent className="flex aspect-square items-center justify-center p-6">
        //               <span className="text-4xl font-semibold">{index + 1}</span>
        //             </CardContent>
        //           </Card>
        //         </div>
        //       </CarouselItem>
        //     ))}
        //   </CarouselContent>
        //   <CarouselPrevious />
        //   <CarouselNext />
        // </Carousel>
      }

<div className="gap-4 flex flex-row overflow-x-auto">
  {Object.keys(testimonials).map((e, i) => (
    <div
      key={i}
      className="flex-shrink-0 w-full lg:w-1/2 flex flex-col justify-center gap-20 rounded-2xl bg-secondary shadow-inner p-8 italic"
    >
      <div className="w-4/5 text-start">
        &quot;{testimonials[e as keyof typeof testimonials].text}&quot;
      </div>
      <div className="flex justify-between">
        <div className="flex flex-row gap-2">
          <img
            width={100}
            height={100}
            alt=""
            src={testimonials[e as keyof typeof testimonials].image}
            className="w-12 rounded-full"
          />
          <div>
            <div className="font-normal">
              {testimonials[e as keyof typeof testimonials].name}
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star
                  key={starIndex}
                  className={`w-4 h-4 ${
                    starIndex <
                    testimonials[e as keyof typeof testimonials].rating
                      ? "fill-yellow-500 text-yellow-500"
                      : "fill-secondary text-secondary"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <img src="/Qoutation Marks.svg" className="w-8" />
      </div>
    </div>
  ))}
</div>


    </div>
  );
}

export default Testimonial;
