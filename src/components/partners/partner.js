import React from 'react'
import './partner.css'
const Partners = () => {
    let hospitals = [
        {
            title:'National Hospital Abuja',
            image: 'https://nationalhospital.gov.ng/wp-content/themes/template/assets/img//logo2x.svg',
            location: 'Abuja'
        },
        {
            title:'Aminu Kano Teaching Hospital',
            image: 'https://2.bp.blogspot.com/-sMs1c0gbZNg/XJZ0QETWo3I/AAAAAAAADRA/atphLZBLeu8qE8jLHs5uBAVN799ihpsMQCLcBGAs/s1600/Aminu%2BKano%2BTeaching%2BHospital%252C%2BAdmission%2Binto%2BPost%2BBasic%2BPaediatric%2Band%2BNephrology%2BNursing%2BProgramme.jpg',
            location: 'Kano'
        },
        {
            title:'Lagos University Teaching Hospital',
            image: 'https://i1.wp.com/nigerianmedinterns.com/wp-content/uploads/2019/05/S90513-1427221.jpg?ssl=1',
            location: 'Lagos'
        },
        {
            title:'Limi Hospital',
            image: 'https://media-exp1.licdn.com/dms/image/C510BAQHXZPkule1RFw/company-logo_200_200/0?e=2159024400&v=beta&t=sYiec--AN57SDDqtX4FH7S_zeAibma0xTt5NTGfj8fU',
            location: 'Abuja'
        },
        {
            title:'Amana Medical Centre',
            image: 'https://scontent.fabv2-1.fna.fbcdn.net/v/t1.0-9/55492986_584428878713680_5252875685977915392_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeGlW7YTUQWhI_quzgcq4-tmqZnq3uujis2pmere66OKzYiNZePLZy_rwvlZV56vrS6ysYbwgF91YK1_0Vfed15N&_nc_ohc=69rKV4u-VoAAX_7jbG9&_nc_ht=scontent.fabv2-1.fna&oh=655b30d621234f50de33c2f95fcbf3d3&oe=5EF75439',
            location: 'Abuja'
        },
        {
            title:'Lily Hospitals',
            image: 'https://lilyhospitals.com/wp-content/uploads/2019/10/cropped-real-logo.jpg"',
            location: 'Warri'
        },
    ]
    return (
        <div>
            <section class="features-icons bg-light text-center">
            <div class="container">
                <h2 >Our Partners</h2>
                <p class="mb-5">The best public and private hospitals nationwide</p>
            <div class="row">
            {hospitals.map(hospital => (
                <div class="col-lg-4 mb-3">
                <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                    <div class="features-icons-icon d-flex">
                        <img src={hospital.image} class="m-auto text-primary"/>
                    </div>            
                </div>
                </div>

                    ))}            
                
            </div>
            </div>
        </section>
        <section class="testimonials text-center">
    <div class="container">
      <h2 class="mb-5">What people are saying...</h2>
      <div class="row">
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src="https://nigerianinfopedia.com.ng/wp-content/uploads/2019/10/Nkem-owoh-popular-actor-in-Nigeria.jpg" alt="" />
            <h5>Margaret E.</h5>
            <p class="font-weight-light mb-0">"Dokita be the best e-Health application for Naija"</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src="https://connectnigeria.com/articles/wp-content/uploads/2019/07/david-oyelowo-portrait.jpg" alt=""/>
            <h5>Fred S.</h5>
            <p class="font-weight-light mb-0">"Dokita helps you monitor your health"</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src="https://tvseriesfinale.com/wp-content/uploads/2013/02/ironside02.jpg" alt="" />
            <h5>Sarah W.</h5>
            <p class="font-weight-light mb-0">"Thanks so much for making these resources available to us!"</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="call-to-action text-white text-center">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h2 class="mb-4 text-light">Ready to get started? Sign up now!</h2>
        </div>
        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form>
            <div class="form-row">
              <div class="col-12 col-md-9 mb-2 mb-md-0">
                <input type="email" class="form-control form-control-lg" placeholder="Enter your email..." />
              </div>
              <div class="col-12 col-md-3">
                <button type="submit" class="btn submit btn-block btn-lg btn-primary">Sign up!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
        </div>
       
   
    )
}

export default Partners
