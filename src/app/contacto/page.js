import ContactForm from "@/components/ContactForm";

import "@/styles/contacto.css";

export const metadata = {
    title: "Contacto",
    description: " destacadosGenerated by create next app",
};

export default function Contacto() {



    return (
        <main className="holder contacto">
            <div className="columna">
                <h2>Complete el siguiente formulario</h2>
                <ContactForm />
            </div>
            <div className="columna datos">
                <h2>Otras vias de contacto</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios:</p>
                <ul>
                    <li>Teléfono:123456789</li>
                    <li>Email: </li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </main>
    )
}
