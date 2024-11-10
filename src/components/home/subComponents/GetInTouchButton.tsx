

function GetInTouchButton(props:{shadow:boolean}) {
  return (
    <div className={`py-4 px-6 rounded-lg border min-w-56 duration-200 cursor-pointer w-60 lg:w-auto my-4 lg:my-0 ${props.shadow&&'shadow-heroBtn'} bg-white hover:bg-inherit hover:border-foreground text-[#323130] hover:text-foreground flex gap-3 justify-center items-center`}>
            <span className="w-full font-medium">Get in touch now</span>
              <img src="/Arrow-Right.svg" className="w-6" />
          </div>
  )
}

export default GetInTouchButton
