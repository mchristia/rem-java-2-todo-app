import {Link, useParams} from 'react-router-dom'
import PropTypes from 'prop-types'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Page from '../components/Page'
import Main from '../components/Main'
import styled from 'styled-components/macro'

DetailsPage.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default function DetailsPage({ todos }) {
  const { id } = useParams()

  const todo = todos.find(item => item.id === id)

  if (!todo) {
    return null
  }

  return (
    <Wrapper>
      <Header />
      <Navigation />
      <Main>
        <h2>{todo?.description}</h2>
        <p>Id: {todo?.id}</p>
        <p>Status: {todo?.status}</p>
          <Link to={'/todo/' + todo.id+"/edit"}>Edit page</Link>
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled(Page)`
  grid-template-rows: min-content min-content 1fr;
`
