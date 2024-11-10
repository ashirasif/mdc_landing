

function GetInTouchButton(props:{shadow:boolean}) {
  return (
    <div className={`py-3 px-4 rounded-lg border cursor-pointer w-56 my-4 lg:my-0 ${props.shadow&&'shadow-heroBtn'} bg-white hover:bg-inherit hover:border-foreground text-[#323130] hover:text-foreground flex gap-4 justify-center items-center`}>
            <span className="w-full font-medium">Get in touch now</span>
              <img src="/Arrow-Right.svg" />
          </div>
  )
}

export default GetInTouchButton
