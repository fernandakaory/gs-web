import "../assets/styles/Principal.scss"
import agendamento from '../assets/img/agendamento.jpg'
import relogio from '../assets/img/time.png'
import video from '../assets/img/video.png'
import conversa from '../assets/img/talk.png'
import { useEffect } from "react";

//página de apresentação da marca
export default function Principal() {
    useEffect(() => {
        document.title = 'Ponto + | Solução';
      },[])
    
  return (
    <>
    <main>
        <section className="c-apresentacao">
            <img src={agendamento} alt="Imagem principal de agendamento" />
            <div className="c-apresentacao-texto">
                <h2>PONTO +</h2>
                <p>Aplicativo simples e intuitivo que busca facilitar a processo de solicitação de exames, simplificando a comunicação entre os usuários e os locais de exame, tanto conveniados quanto clínicas particulares.</p>
            </div>
        </section>
        <section className="c-solucao">
            <div>
                <h3>O QUE É A SOLUÇÃO</h3>
                <p>Nossa solução é um aplicativo que será focado em facilitar para o usuário a solicitação de exames, simplificando a comunicação entre o convênio e locais de exame, tanto conveniados como clínicas particulares. O objetivo desta é garantir que os usuários tenham acesso facilitado aos procedimentos médicos necessários para uma vida mais saudável. 
                </p>
            </div>
            <div>
                <h3>O QUE ELA FARÁ</h3>
                <p>Nossa solução vai permitir que o usuário, a partir de uma solicitação médica, consiga de forma simples e rápida agendar exames com nossas clínicas parceiras, de acordo com a data, horário e local desejados. A aplicação, vinculada a um plano de saúde, possibilitará que os usuário e profissionais visualizem seus resultados, através do uso de sensores e Internet das Coisas, para garantir mais automação. </p>
            </div>
            <div>
                <h3>COMO FUNCIONARÁ</h3>
                <p>Ao solicitar o agendamento, o usuário terá acesso aos locais disponíveis em um mapa, aos horários e datas oferecidos e o preço da consulta (caso seja fora do convênio). Os resultados dos exames estarão disponíveis para consulta dos usuários e dos médicos. Para garantir o uso da tecnologia para automação, caso o paciente precise ficar em observação ou tratamento contínuo, a partir de sensores disponibilizados, informações médicas como temperatura/febre e sinais de movimento estarão disponíveis remotamente no aplicativo, através de IOT.</p>
            </div>
        </section>
        <section className="c-vantagens">
            <h3 id="vantagens-titulo">VANTAGENS</h3>
            <div className="c-vantagens-div">
            <div className="c-vantagens-div-interna">
                <div>
                    <img src={relogio} alt="" />
                </div>
                <div>
                    <h3>ECONOMIA DE TEMPO</h3>
                    <p>Com nosso aplicativo, o usuário pode economizar tempo, uma vez que não precisa fazer diversas ligações e pesquisas por clínicas para poder marcar um agendamento. Todas as informações e opções disponíveis estão centralizadas e unificadas na Ponto +.</p>
                </div>
            </div>
            <div className="c-vantagens-div-interna">
                <div>
                    <img src={video} alt="" />
                </div>
                <div>
                    <h3>TUTORIAL EM VÍDEO</h3>
                    <p>Com o intuito de promover maior acessibilidade, principalmente a idosos, será disponibilizado um vídeo de tutorial de como utilizar nossa aplicação. Este estará disponível a qualquer momento para quem precisar de ajuda.</p>
                </div>
            </div>
            <div className="c-vantagens-div-interna">
                <div>
                    <img src={conversa} alt="" />
                </div>
                <div>
                    <h3>COMUNICAÇÃO FACILITADA</h3>
                    <p>Além de facilitar o agendamento, buscamos facilitar a comunicação entre as clínicas e os usuários. Nosso aplicativo contará com chats para que os futuros pacientes e os locais de exame possam conversar e esclarecer dúvidas.</p>
                </div>
            </div>
            </div>
        </section>
        </main>
    </>
  );
}