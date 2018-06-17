import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';
Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none'
  }
});

delete Wordpress2016.googleFonts;
Wordpress2016.headerFontFamily = ['Slabo 27px', 'Roboto', 'serif'];
Wordpress2016.bodyFontFamily = ['Montserrat', 'Georgia', 'serif'];
Wordpress2016.headerWeight = 700;
Wordpress2016.overrideThemeStyles = ({ rhythm }, options) => ({
  h1: {
    fontFamily: ['"Merriweather"', 'Palatino', 'Georgia', 'serif'].join(',')
  }
});
const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
