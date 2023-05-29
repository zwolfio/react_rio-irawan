import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Hero from "../../component/Hero/Hero";
import Footer from "../../component/Footer/Footer";

const About = () => {

    return (
        <>
            <Navbar />
            <div className="container-fluid py-5 mb-3 text-center contactus">
                <h1>Contact us</h1>
                <p className="fs-10">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, rem
                    officia. <br />
                    Modi ducimus possimus nam libero , debitis vitae facere, obcaecati
                    blanditiis iusto animi.
                </p>
                <div className="container about">
                    <div className="row">
                        <div className="col-md-6 py-5 align-content-start">
                            <h1 className="text-start">Thankyou, ALTERRA!</h1>
                            <p className="col-md-8 fs-10 text-start">
                                Ini adalah tugas code competence 2 yang saya kerjakan dengan sangat terlambat karena lupa,
                                di tugas pribadi yang mungkin terakhir ini saya ingin menyampaikan terimakasih kepada para
                                staf alterra atas segala pengajaran dan nasihat ataupun materi yang sudah diberikan,
                                khususnya mentor kelas B, mas Alvin Miftah terimakasih sudah mengajari saya dan kami semua
                                para mentee dengan sabar, meskipun saya sering tidak masuk karena harus kerja,
                                saya masih melihat recordingan dan merasa apa yang disampaikan mentor sangatlah berarti untuk
                                kedepannya, semangat buat para mentor ,dan terima kasih banyak untuk 5 bulan ini, sekian <br /><br />
                                by : <br />
                                Menteemu, Rio Irawan
                            </p>
                        </div>
                        <div className="col-md-6 py-5">
                            <img src="./src/assets/heroo.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}

export default About