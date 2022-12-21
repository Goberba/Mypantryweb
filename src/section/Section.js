function Section(){
    return(
        <section id="hero" class="d-flex align-items-center justify-content-center">
        <div class="container" data-aos="fade-up">

        <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <div class="col-xl-6 col-lg-8">
            <img src="assets/img/cesta.png"/>
            <h1>My pantry web<span>.</span></h1>
            <h2>Tu despensa en la Web</h2>
            </div>
        </div>

        <div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
            <div class="col-xl-2 col-md-4">
            <div class="icon-box">
                <i class="bi bi-person-circle"></i>
                <h3><a href="">Usuarios</a></h3>
            </div>
            </div>
            <div class="col-xl-2 col-md-4">
            <div class="icon-box">
                <i class="bi bi-file-ppt"></i>
                <h3><a href="">Productos</a></h3>
            </div>
            </div>
            <div class="col-xl-2 col-md-4">
            <div class="icon-box">
                <i class="bi bi-card-list"></i>
                <h3><a href="">Notas</a></h3>
            </div>
            </div>
        </div>

        </div>
    </section>
    );
}
export default Section;