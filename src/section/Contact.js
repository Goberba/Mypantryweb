function Contact(){
    return(
        <section id="contact" class="contact">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                <h2>Contacto</h2>
                <p>Contactanos</p>
                </div>

                <div>
                <iframe class="frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1451.1971201270449!2d-1.9709205948614956!3d43.32693872802477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a54183b87fed%3A0x6b3f34b4f0c14472!2sIES%20Xabier%20Zubiri%20Manteo%20BHI!5e0!3m2!1ses!2ses!4v1671184992662!5m2!1ses!2ses" frameborder="0" allowfullscreen></iframe>
                </div>

                <div class="row mt-5">

                <div class="col-lg-4">
                    <div class="info">
                    <div class="address">
                        <i class="bi bi-geo-alt"></i>
                        <h4>Ubicación:</h4>
                        <p>C. Jose Miguel Barandiaran, 10-12, 20013 Zubiri, Gipuzkoa</p>
                    </div>

                    <div class="email">
                        <i class="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p>info@ikzubirimanteo.com</p>
                    </div>

                    <div class="phone">
                        <i class="bi bi-phone"></i>
                        <h4>Teléfono:</h4>
                        <p>+34 698 588 557</p>
                    </div>

                    </div>

                </div>

                <div class="col-lg-8 mt-5 mt-lg-0">

                    <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                    <div class="row">
                        <div class="col-md-6 form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Nombre" required/>
                        </div>
                        <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Email" required/>
                        </div>
                    </div>
                    <div class="form-group mt-3">
                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" required/>
                    </div>
                    <div class="form-group mt-3">
                        <textarea class="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
                    </div>
                    <div class="my-3">
                        <div class="loading">Cargando</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Tu mensaje ha sido enviado gracias!</div>
                    </div>
                    <div class="text-center"><button type="submit">Enviar</button></div>
                    </form>

                </div>

                </div>

            </div>
        </section>
    );
}
export default Contact;