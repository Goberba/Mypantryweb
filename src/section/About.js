function About(){
    return(
        <section id="about" class="about">
        <div class="container" data-aos="fade-up">

            <div class="row">
            <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                <img src="assets/img/despensa comida.jpg" class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                <h3>My Pantry Web es una despensa en la web para dar facilidades.</h3>
                <br/>
                <br/>
                <p class="fst-italic">
                Nuestra página sirve para ser conscientes de lo que tenemos en nuestra despensa.
                En esta página podrás conseguir llevar toda tu despensa al día y te facilitará el 
                día a día a la hora de hacer la compra o saber si tus compañeros han ido gastando la comida y se necesita más en casa.
                </p>
            </div>
            </div>

        </div>
        </section>
    );
}
export default About;