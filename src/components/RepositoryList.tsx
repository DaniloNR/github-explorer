import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'

interface Repository {
  id: string
  name: string
  description: string
  html_url: string
}

export function RepositoryList () {

  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(setRepositories)
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {repositories.map(repo => {
          return <RepositoryItem repository={repo} key={repo.id}/>
        })}
      </ul>
    </section>
  )
}
