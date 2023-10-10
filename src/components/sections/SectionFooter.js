/*
 *
 * @Copyright 2023 TO WIN
 *
 */
import Logo from '../../assets/images/logo.png';
import { Instagram } from '@mui/icons-material';

const SectionFooter = () => {
    return (
		<section className="section-footer">
			<div className="section-footer__wrap">
				<div className="section-footer__wrap__business">
					<img src={Logo} alt="Assinando Site logo" />
					<p>CNPJ - 37.540.801/0001-50</p>
				</div>
				<div className="section-footer__wrap__social">
					<p>Nossas redes sociais:</p>
					<a href="https://www.instagram.com/assinandosite/" target="_blank" rel="noreferrer"><Instagram /></a>
				</div>
			</div>
			<p>Copyright 2023 © Assinando Site – Todos os direitos reservados.</p>
		</section>
	);
};
  
export default SectionFooter;
  