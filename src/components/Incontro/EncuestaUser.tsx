import { UseCalendarStore } from "@/store/calendarStore"
import { Question } from "@/types"
import { useEffect, useState } from "react"

const EncuestaUser = () => {
  const [questions,setQuestions] = useState<Question[]> ([])
  const paquete = UseCalendarStore((state) => state.paquete);
  const setPrice = UseCalendarStore(state=> state.setPriceData)

  async function getQuestions(){
    const request = await fetch("http://localhost:5173/mocks/encuesta.json")
    if(request.status === 200){
      const data = await request.json()
      setQuestions(data.questions)
    }
  }

  function selectAnswer( indexQuestion:number, answerIndex: number, pricing: number){
    const questionIndex = questions.findIndex(item=> item.id === indexQuestion)
    const newQuestions = structuredClone(questions)
    const questionInfo = newQuestions[questionIndex]
    newQuestions[questionIndex] = {
      ...questionInfo,
      userSelectAnswer: answerIndex
    }
    setPrice(pricing,  questions[0].answers[answerIndex].name)
    setQuestions(newQuestions)
  }
  
  useEffect(()=>{
    getQuestions()
  }, [paquete])

  return (
    <div className=' flex border rounded w-full items-center h-full px-1 gap-2 py-1 justify-between'>
      {
        questions.map((item)=>{
          return(
            <div key={crypto.randomUUID()} className=" w-full border text-sm md:text-base">
              <h3 className="px-1 font-semibold">  {item.question} </h3> 
              <div className="flex flex-col items-start border-t">
                {
                  item.answers.map((answer, indexAnswer)=>{
                    return(
                        <button key={crypto.randomUUID()} onClick={()=> {selectAnswer(item.id,indexAnswer, answer.pricing ) }} className={`p-1 w-full text-start ${indexAnswer + 1 <= answer.name  .length && 'border-b' }   ${(item.userSelectAnswer === indexAnswer) || paquete === answer.name && 'bg-blue-50 border-blue-400 border font-semibold'}`}>
                          {answer.name}
                        </button>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default EncuestaUser