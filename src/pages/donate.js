import Head from "next/head";
import Footer from "@/components/Footer";
import { useState } from "react";
import { getCampaign, donate } from "../services/Web3Service";

export default function Donate() {

    const [campaign, setCampaign] = useState({});
    const [donation, setDonation] = useState(0);
    const [message, setMessage] = useState("");

    function onChangeId(evt) {
        campaign.id = evt.target.value;
    }

    function btnSearchClick() {
        setMessage("Buscando...aguarde...");
        getCampaign(campaign.id)
            .then(result => {
                setMessage("");
                result.id = campaign.id;
                setCampaign(result);
            })
            .catch(err => setMessage(err.message));
    }

    function onChangeValue(evt) {
        setDonation(evt.target.value);
    }

    function btnDonateClick() {
        setMessage("Doando...aguarde...");
        donate(campaign.id, donation)
            .then(tx => setMessage(`Doação realizada, obrigado. Em alguns minutos o saldo será atualizado.`))
            .catch(err => setMessage(err.message));
    }

    return (
        <>
            <Head>
                <title>Doe Crypto | Fazer Doação</title>
                <meta charSet='utf-8' />
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container  text-white" style={{ backgroundColor: '#000' }}>
                <div className="col-12 d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
                    <div className="col-9 d-flex flex-column align-items-center">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Doe Crypto</h1>
                        {
                            !campaign.id ?
                                <>
                                    <p className="mb-5">
                                        Qual é o ID da campanha que procura?
                                    </p>
                                    <div className="col-12">
                                        {/* <div className="input-group col-12 d-flex flex-column"> */}
                                        <input type="number" id="campaignId" className="form-control" onChange={onChangeId} value={campaign.id} />
                                        <input type="button" value="Buscar" className="btn btn-primary p-3 mt-4 col-12" onClick={btnSearchClick} />
                                        {/* </div> */}
                                    </div>
                                </>
                                :
                                <>
                                    <p>Verifique se esta é a campanha certa antes de finalizar sua doação.</p>
                                    <hr />
                                    <div className="row flex-lg-row-reverse align-items-center g-5">
                                        <div className="col-12 mb-5" style={{ height: 480, scrollbars: true }}>
                                            <h2>{campaign.title}</h2>
                                            <p><strong>Autor:</strong>{campaign.author}</p>
                                            <p className="mb-3">{campaign.description}</p>
                                            {/* {
                                                campaign.videoUrl
                                                    ? <p>Assista o vídeo ao lado para entender mais sobre nossa campanha.</p>
                                                    : <></>
                                            } */}
                                            <p className="mb-3 fst-italic mt-5">
                                                E aí, o que achou do projeto? Já foi arrecadado {campaign.balance / 10 ** 18} BNB nesta campanha. O quanto você quer doar (em BNB)?
                                            </p>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">BNB</label>
                                                <input type="number" id="donation" className="form-control" onChange={onChangeValue} value={donation} />
                                                <input type="button" value="Doar" className="btn btn-primary mt-2 p-3 w-25" onClick={btnDonateClick} />
                                            </div>
                                        </div>
                                    </div>
                                </>

                        }
                    </div>
                </div>
                <Footer message={message} />
            </div>
        </>
    )
}