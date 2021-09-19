const repository = {
  name: 'unform'
}


export function RepositoryList () {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        <li>
          <strong>{repository.name}</strong>
          <p>Forms in React</p>
          <a href="">Acessar repositorio</a>
        </li>
      </ul>
    </section>
  )
}
