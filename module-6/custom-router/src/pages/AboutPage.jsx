import { Link } from '../router-tools/Link';

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: 'Esta es la página de Sobre nosotros',
    button: 'Ir a la Pagina principal',
  },
  en: {
    title: 'About us',
    description: 'This is the about page',
    button: 'Go to Home',
  },
};

const usei18n = (lang) => {
  return i18n[lang] || i18n.en;
};

const AboutPage = ({ routeParams }) => {
  const i18n = usei18n(routeParams.lang ?? 'es');

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>

      <Link to="/">{i18n.button}</Link>
    </>
  );
};

export default AboutPage;
