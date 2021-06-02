import Main from '../components/Main'
import Board from '../components/Board'
import { useParams } from 'react-router-dom'
import {
  getNextStatus,
  slugToStatus,
  statusToTitle,
} from '../services/todoStatusService'
import Header from '../components/Header'
import Page from '../components/Page'
import Navigation from '../components/Navigation'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

BoardPage.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAdvance: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default function BoardPage({ todos, onAdvance, onRemove }) {
  const { status } = useParams()
  const statusType = slugToStatus(status)

  const filteredTodos = todos.filter(item => item.status === statusType)

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
