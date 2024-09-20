import { Question } from "@/types"
import { useEffect, useState } from "react"

const EncuestaUser = () => {
  const [questions,setQuestions] = useState<Question[]> ([])
  async function getQuestions(){
    const request = await fetch("http://localhost:5173/mocks/encuesta.json")
    if(request.status === 200){
      const data = await request.json()
      setQuestions(data.questions)
    }
  }

  function selectAnswer( indexQuestion:number, answerIndex: number ){
    const questionIndex = questions.findIndex(item=> item.id === indexQuestion)
    const newQuestions = structuredClone(questions)
    const questionInfo = newQuestions[questionIndex]
    newQuestions[questionIndex] = {
      ...questionInfo,
      userSelectAnswer: answerIndex
    }
    setQuestions(newQuestions)
  }

  
  useEffect(()=>{
    getQuestions()
  }, [])

  return (
    <div className='w-full flex flex-col items-start h-full px-1 gap-4 py-1 justify-between'>
      {
        questions.map((item,indexQuestion)=>{
          return(
            <div key={crypto.randomUUID()} className=" w-full border">
              <h3 className="px-1 font-semibold"> {indexQuestion + 1}. {item.question} </h3> 
              <div className="flex flex-col items-start border-t">
                {
                  item.answers.map((answer, indexAnswer)=>{
                    return(
                        <button key={crypto.randomUUID()} onClick={()=> {selectAnswer(item.id,indexAnswer) }} className={`p-1 w-full text-start ${indexAnswer + 1 <= answer.length && 'border-b' }   ${item.userSelectAnswer === indexAnswer && 'bg-blue-50 border-blue-400 border font-semibold'}`}>
                          {answer}
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