import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionOne = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    A UI/UX pode ser customizada / estendida?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>SIM. Nossa UI/UX é flexível e foi desenvolvida pensando em futuras customizações. Como cliente, você terá acesso a todos os componentes de UI, podendo adaptá-lo para se adequar aos padrões visuais da sua marca.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Posso adaptar minha UI já existente?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>A conexão com o backend da plataforma Fortem é realizada através de chamadas de APIs. Dessa forma, uma UI já existente pode ser adapdata para se conectar ao nosso backend através dessas APIs.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Quais tipo de relatórios podem ser gerados?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>A plataforma coleta todos os dados e informações de todas as transações financeiras realizadas, como compras / vendas de ativos, taxas, depósitos, saques, fees de blockchain, liquidação etc. Provision the requirement for your report(s) for each department of your company that needs a report and the next day you have a button for downloading this information. Need custom reports to be submitted to 3rd party services or regulatory bodies in real time? No problem, just a little bit of coding.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Como eu adiciono um novo token / moeda / ativo digital?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>Se o protocolo do blockchain já for suportado pela pltaforma (exemplo, ERC20 para Ethereum), pode-se utilizar o Painel de Administração para adicionar uma quantidade ilimitada de tokens. Em média, leva-se 2 minutos para adicionar cada token.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    Quantos ativos digitais a plataforma suporta?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>Pergunta interessante. Quantos você precisa? Do you want to host ALL the blockchains? Maybe use a 3rd Party Service while retaining full control over your ‘Private Keys’? For the last option, Marionette supports Chainstack (https://chainstack.com/protocols) and it is recommended that you use a service like this to gain access to multiple chains and token protocols without having to host and maintain them all yourself. Maintaining your own blockchains can be very expensive just from a hosting perspective. Factor in maintenance and updates, and you will need a dedicated developer for this task. We recommend staying lightweight and utilizing services that cost you less than hosting the node yourself, unless it is a requirement. But if you are set on hosting your own Blockchain, then rest assured that Marionette can communicate with any and every blockchain and host as many coins as you need.</Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}
export default AccordionOne

