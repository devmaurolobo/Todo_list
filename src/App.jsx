import { useState } from "react"
import {Item,Caixa_principal,Todolist,Seletor,Button,Itens} from "./styles"


function App(){

  const [tasks, settasks] = useState([])
  const [inputvalue, setinputvalue] = useState('')

  function input(evento){
    setinputvalue(evento.target.value)
  }

  function buttonclick(){
    settasks([...tasks, inputvalue])
  }

  return (

   
      <Caixa_principal>
          <Todolist>
              <Seletor placeholder="Escreva sua tarefa" onChange={input}/>
              <Button onClick={buttonclick}>Adicionar </Button>

              <Itens>
                {
                  tasks.map( (item,index) => (
                    <Item key={index}>{item}</Item>
                    ))
                }
              </Itens>
          </Todolist>
      </Caixa_principal>
  )
}

export default App
