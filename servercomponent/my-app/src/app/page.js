import Hero from "@/app/component/home";
import Errorboundary from "@/app/component/Errorboundary";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <h1 className="text-3xl flex justify-center items-center font-bold underline"> Page</h1>
      {/* <Button /> */}
      <Errorboundary >
        <Hero heroName="Batman"
        />
      </Errorboundary>
      <Errorboundary>
        <Hero heroName='Superman'
        />
      </Errorboundary>
      <Errorboundary>
        <Hero heroName='Joker' />
      </Errorboundary>
    </div>
  )
}