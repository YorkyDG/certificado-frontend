import './App.css'
function App() {

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Registro</a>
              <a class="nav-link" href="#">Pricing</a>
              <a class="nav-link" href="#">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
      <div className='login'>
        <h2>Login</h2>
        <input className='input-login' type="text" placeholder='Nombre' />
        <input className='input-login' type="email" placeholder='Correo' />
        <input className='input-login' type="password" placeholder='Contraseña' />
        <button className='btn btn-primary'>Registrar</button>
      </div>

    </>
  )
}

export default App
