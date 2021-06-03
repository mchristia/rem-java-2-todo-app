import Main from '../components/Main'
import Board from '../components/Board'
import { useParams } from 'react-router-dom'
import { slugToStatus, statusToTitle } from '../services/todoStatusService'
import Header from '../components/Header'
import Page from '../components/Page'
import Navigation from '../components/Navigation'
import styled from 'styled-components/macro'
import useTodos from '../hooks/useTodos'

export default function BoardPage() {
  const { status } = useParams()
  const statusType = slugToStatus(status)

  const { getTodosByStatus, advanceTodo, removeTodo } = useTodos()

  const todos = getTodosByStatus(statusType)

  return (
    <Wrapper>
      <Header />
      <Navigation />
      <Main>
        <Board
          title={statusToTitle(statusType)}
          todos={todos}
          onAdvance={advanceTodo}
          onRemove={removeTodo}
        />
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled(Page)`
  grid-template-rows: min-content min-content 1fr;
`
