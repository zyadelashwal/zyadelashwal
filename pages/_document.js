 import Document, { Html, Main,Head, NextScript } from 'next/document'
 import withTranslation from 'next-translate/withTranslation'
 import getT from 'next-translate/getT'

const BaseCSS = ({ css }) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />

BaseCSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}'
}

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage
    const locale = ctx.locale;
    const t = await getT(locale, 'common')

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)
    

        
    return { ...initialProps, locale ,t};
  }

  render() {
    
    
    return (
      <Html lang={this.props.locale}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="Zyad Mahmoud Muhammed Elashwal" content={"Zyad Mahmoud Muhammed Elashwal"} />
          <meta name='generator' content='mdx-docs' />
          <meta name='Zyad Mahmoud Muhammed Elashwal' content="Zyad Mahmoud Muhammed Elashwal Front end Developer" />
          <meta name='React' content="React" />
          <meta name='ReactJS' content="ReactJS" />
          <meta name='React-Native' content="React-Native" />
          <meta name='NextJs' content="NextJS" />
          <meta name='JavaScript' content="JavaScript" />
          <meta name='Jquery' content="Jquery" />
          <meta name='Frontend' content="Fron End Developer" />
          
         
          <BaseCSS />
        </Head>
        <body className={`try`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}   
export default withTranslation(MyDocument)


