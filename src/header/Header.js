function Header(){
    return(
        <header id="header" class="fixed-top prueba">
            <div class="container d-flex align-items-center justify-content-lg-between">

                <h1 class="logo me-auto me-lg-0"><a href="index.html">My Pantry Web<span>.</span></a></h1>

                <nav id="navbar" class="navbar order-last order-lg-0">
                    <ul>
                    <li><a class="nav-link scrollto active" href="#hero">Inicio</a></li>
                    <li><a class="nav-link scrollto" href="#about">Sobre Nosotros</a></li>
                    <li><a class="nav-link scrollto" href="#productos">Productos</a></li>
                    <li class="dropdown"><a href="#services"><span>Planes</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                        <li><a href="#">Gratuito</a></li>
                        <li><a href="#">Premium</a></li>
                        <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                            <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li><a class="nav-link scrollto" href="#team">Equipo</a></li>
                    <li><a class="nav-link scrollto " href="#contact">Contacto</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
                
                <div class="dropdown">
                    <button class="btn btn-outline-success dropdown-toggle boton" type="button" id="dropdown1" data-bs-toggle="dropdown">
                        <i class="bi bi-person-circle"></i> Conectarse
                    </button>
                    <div class="dropdown-menu usuario">
                        <form class="ps-4 pe-4">
                        <div class="mb-3">
                            <label for="nombre" class="form-label">Usuario:</label>
                            <input type="text" class="form-control" id="nombre" name="nombre"/>
                        </div>
                        <div class="mb-3">
                            <label for="clave" class="form-label">Contraseña:</label>
                            <input type="password" class="form-control" id="clave" name="clave"/>
                        </div>
                        <button type="submit" class="btn btn-primary boton">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;