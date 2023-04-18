import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { Link, useHistory } from 'react-router-dom';
import { display } from 'src/custom/styles/tailwindcss/lib/plugins';


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    backgroundColor: 'rgb(22, 29, 38)',
    fontFamily: 'IBM Plex Sans',
    color: '#c4c4c4',
    border: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, .425)',
  '&:before': {
    display: 'none',
    backgroundColor: 'rgb(22, 29, 38)',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ color: '#f5f5f5', fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
    
    fontFamily: 'IBM Plex Sans',
    color: '#c4c4c4',
    // opacity: '0.91',
    backgroundColor: 'rgb(22, 29, 38)',
    fontWeight: '500',
    paddingLeft: '1.5rem',
    paddingTop: '0.5rem',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: '0.5rem',
    border: 'none',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  fontFamily: 'IBM Plex Sans',
  marginLeft: '2rem',
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor: 'rgb(22, 29, 38)',
  color: '#c4c4c4',
  marginBottom: '14px',
  paddingBottom: '0',
  opacity: '0.91',
  border: 'none',
  lineHeight: '2',


  '& .MuiAccordionDetails-content': {
    marginTop: '0',
    paddingTop: '0',
    paddingBottom: '0',
    
  },

}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel0');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>

<Accordion expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
        <AccordionSummary aria-controls="panel0d-content" id="panel0d-header">
            <div style={{fontFamily: 'IBM Plex Sans'}}><p style={{fontFamily: 'IBM Plex Sans', color: '#f5f5f5'}}>CONTATO</p></div>
        </AccordionSummary>
        <AccordionDetails>

          <Link to="/">
              

              <p style={{display: 'flex', marginBottom: '1rem',  fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="brandhub-icon" height="1.25rem" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                <span style={{marginLeft: '0.8rem', marginTop: '-5px', }}>contato@fortem1.com.br</span>
              </p>


          </Link>

          <Link to="/">
              <p style={{display: 'flex', marginBottom: '1rem',  fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="brandhub-icon" height="1.25rem" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                <span style={{marginLeft: '0.8rem', marginTop: '-5px',}}>+55 (11) 3200-0001</span>
              </p>
          </Link>

          

          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', maxWidth: '200px', marginTop: '1.5rem',}}> 
          
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="duration-100 text-neutral-control-layer-color-20 hover:text-neutral-control-layer-color-60">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" className="brandhub-icon"><path d="M32 6.076a13.025 13.025 0 01-3.771 1.033 6.581 6.581 0 002.887-3.632 13.144 13.144 0 01-4.169 1.594 6.556 6.556 0 00-4.792-2.073 6.565 6.565 0 00-6.565 6.565c0 .514.058 1.015.17 1.496A18.643 18.643 0 012.227 4.2a6.533 6.533 0 00-.889 3.301 6.563 6.563 0 002.92 5.464 6.54 6.54 0 01-2.974-.822l-.001.083a6.57 6.57 0 005.267 6.437 6.62 6.62 0 01-2.966.112 6.571 6.571 0 006.133 4.559 13.17 13.17 0 01-8.153 2.811 13.29 13.29 0 01-1.566-.092 18.576 18.576 0 0010.064 2.95c12.076 0 18.679-10.003 18.679-18.679 0-.284-.006-.568-.018-.85a13.307 13.307 0 003.275-3.397z" fill="#c4c4c4"></path></svg>
            </a>
            
            <a href="https://www.linkedin.com/company//" target="_blank" rel="noopener noreferrer" className="duration-100 text-neutral-control-layer-color-20 hover:text-neutral-control-layer-color-60">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1.5rem" height="1.5rem" className="brandhub-icon"><path d="M25.604 30.968V18.852s-.359-3.241-3.495-3.241c-3.134 0-3.707 3.081-3.707 3.081v12.276h-6.459l.105-20.014h6.248l-.051 2.516s1.303-3.288 6.211-3.288c4.907 0 7.13 2.82 7.543 8.093v12.694h-6.396zM4.021 8.111C1.802 8.111 0 6.524 0 4.562s1.802-3.553 4.021-3.553S8.042 2.6 8.042 4.562 6.24 8.111 4.021 8.111zm3.986 22.881H.066V11.005l7.941-.051v20.038z" fill="#c4c4c4"></path></svg>
            </a>

            <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" className="duration-100 text-neutral-control-layer-color-20 hover:text-neutral-control-layer-color-60">
              <svg viewBox="0 0 24 24"  width="1.5rem" height="1.5rem" fill="#c4c4c4" className="brandhub-icon" xmlns="http://www.w3.org/2000/svg"><path fill-rule="#c4c4c4" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM18.7994 7.02833L17.7142 8.06967C17.6213 8.13959 17.5737 8.25782 17.5935 8.37321V16.0281C17.5737 16.143 17.6218 16.2612 17.7148 16.3317L18.7744 17.3725V17.6004H13.441V17.3719L14.5403 16.305C14.6468 16.1981 14.6468 16.1646 14.6468 16.0014V9.81643L11.5908 17.5805H11.1777L7.62357 9.81643V15.0198C7.59241 15.2397 7.66551 15.4586 7.82021 15.6166L9.24821 17.3497V17.5777H5.19938V17.3526L6.62737 15.6166C6.77924 15.4591 6.84951 15.2363 6.81041 15.0198V9.00416C6.82684 8.83761 6.76224 8.6722 6.63871 8.55909L5.37108 7.02833V6.80039H9.31281L12.3609 13.4896L15.0401 6.80039H18.7994V7.02833Z" fill="#c4c4c4"></path></svg>
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="duration-100 text-neutral-control-layer-color-20 hover:text-neutral-control-layer-color-60">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1.5rem" height="1.5rem" className="brandhub-icon"><path d="M16 7.677c-4.516 0-8.258 3.677-8.258 8.258s3.677 8.258 8.258 8.258c4.581 0 8.258-3.742 8.258-8.258S20.516 7.677 16 7.677zm0 13.549c-2.903 0-5.29-2.387-5.29-5.29s2.387-5.29 5.29-5.29 5.29 2.387 5.29 5.29-2.387 5.29-5.29 5.29zM26.452 7.484a1.871 1.871 0 11-3.743 0 1.871 1.871 0 013.743 0z" fill="#c4c4c4"></path><path d="M29.419 2.645C27.742.903 25.355 0 22.645 0H9.355C3.742 0 0 3.742 0 9.355v13.226c0 2.774.903 5.161 2.71 6.903C4.452 31.161 6.774 32 9.42 32h13.161c2.774 0 5.097-.903 6.774-2.516C31.097 27.807 32 25.42 32 22.645V9.355c0-2.71-.903-5.032-2.581-6.71zm-.258 20c0 2-.71 3.613-1.871 4.71s-2.774 1.677-4.71 1.677H9.419c-1.935 0-3.548-.581-4.71-1.677-1.161-1.161-1.742-2.774-1.742-4.774V9.355c0-1.935.581-3.548 1.742-4.71 1.097-1.097 2.774-1.677 4.71-1.677h13.29c1.935 0 3.548.581 4.71 1.742 1.097 1.161 1.742 2.774 1.742 4.645v13.29z" fill="#c4c4c4"></path></svg>
            </a>
            
          </div>

        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div style={{fontFamily: 'IBM Plex Sans'}}><p style={{fontFamily: 'IBM Plex Sans', color: '#f5f5f5'}}>INSTITUCIONAL</p></div>
        </AccordionSummary>
        <AccordionDetails>
          
            <Link to="/">
              <p style={{fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>Quem somos</p>
            </Link>


            <Link to="/">
              <p style={{fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>Produtos</p>
            </Link>


            <Link to="/">
              <p style={{fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>Serviços</p>
            </Link>

        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <div style={{fontFamily: 'IBM Plex Sans'}}><p style={{fontFamily: 'IBM Plex Sans', color: '#f5f5f5'}}>TERMOS E POLÍTICAS</p></div>
        </AccordionSummary>
        <AccordionDetails>
        <Link to="/">
              <p style={{fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>Termos de uso</p>
            </Link>


            <Link to="/">
              <p style={{fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>Política de privacidade</p>
            </Link>


            <Link to="/">
              <p style={{fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>Disclaimers</p>
            </Link>

        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div style={{fontFamily: 'IBM Plex Sans'}}><p style={{fontFamily: 'IBM Plex Sans', color: '#f5f5f5'}}>CENTRAL DE SUPORTE</p></div>
        </AccordionSummary>
        <AccordionDetails>
        <Link to="/">
              <p style={{fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>Nossas Taxas</p>
            </Link>


            <Link to="/">
              <p style={{fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>Comunicados ao mercado</p>
            </Link>


            <Link to="/">
              <p style={{fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>Dúvidas frequentes (FAQ)</p>
            </Link>

            <Link to="/">
              <p style={{fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>Documentação das APIs</p>
            </Link>

            <Link to="/">
              <p style={{fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>Status dos serviços</p>
            </Link>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <div style={{fontFamily: 'IBM Plex Sans'}}><p style={{fontFamily: 'IBM Plex Sans', color: '#f5f5f5'}}>ARENA DO CONHECIMENTO</p></div>
        </AccordionSummary>
        <AccordionDetails>

          <Link to="/">
              <p style={{fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>Notícias do mundo cripto</p>
          </Link>

          <Link to="/">
              <p style={{fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>Artigos</p>
          </Link>

          <Link to="/">
              <p style={{fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>Fortem Academy</p>
          </Link>

          <Link to="/">
              <p style={{fontFamily: 'IBM Plex Sans', color: '#c4c4c4', paddingTop: '0.25rem', paddingBottom: '0.25rem', }}>Documentações</p>
          </Link>

        </AccordionDetails>
      </Accordion>
    </div>
  );
}