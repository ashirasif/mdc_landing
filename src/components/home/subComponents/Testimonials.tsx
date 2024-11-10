import { useSpring, a, config } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

interface TestimonialData {
  text: string;
  image: string;
  name: string;
  rating: number;
}

function Testimonial() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [spring, api] = useSpring(() => ({
    from: {
      left: "0vw",
    },
    config: config.gentle,
  }));

  const [number, setNumber] = useState<number>(1);

  useEffect(() => {
    setTimeout(()=>{
      number===2?setNumber(0):setNumber(number+1)
    },5000)
  }, [number])
  

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

  const bind = useDrag(
    ({ swipe: [swipeX] }) => {
      let n;
      if (swipeX !== 0) {
        n = swipeX < 0 ? 1 : -1;
      }
      if (
        n &&
        Object.keys(testimonials).length > number + n &&
        number + n >= 0
      ) {
        setNumber(number + n);
      }
    },
    { swipe: { duration: 500 } }
  );

  useEffect(() => {
    // Set up the event listener for resizing
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Initial check to set the `isMobile` state on component mount
    handleResize();

    // Cleanup function to remove the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    api.start({
      to: { left: `${number * -(window.innerWidth > 1024 ? 51 : 85)}vw` },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  return (
    <div className="flex flex-col overflow-hidden gap-11 text-lg">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex bg-secondary shadow-inner rounded-full border border-accent py-2 px-3 gap-1 w-[8.688rem]">
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
        <div className="self-start pt-16">
          <div {...bind()} className="drag text-white">
            <a.div
              className="relative flex flex-row justify-start gap-4 lg:translate-x-[25vw]"
              style={spring}
            >
              {Object.keys(testimonials).map((e, i) => (
                <div
                  key={i}
                  className="flex w-[90vw] flex-col justify-center gap-20 rounded-2xl bg-secondary shadow-inner p-8 italic lg:w-[45vw]"
                  onClick={() => {
                    setNumber(i);
                  }}
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
                    <div className="">
                      <div className="font-normal">
                        {testimonials[e as keyof typeof testimonials].name}
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={`w-4 h-4 ${
                              starIndex < testimonials[e as keyof typeof testimonials].rating
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
            </a.div>
          </div>
        </div>
      </div>
      {isMobile ? (
        <div className="mt-10 self-center font-light tracking-widest text-white/50">
          &#8592; SWIPE &#8594;
        </div>
      ) : null}
    </div>
  );
}

export default Testimonial;
