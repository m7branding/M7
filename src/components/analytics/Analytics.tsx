import Script from "next/script";
import { site } from "@/content/site";

/**
 * Google Analytics 4 / Google Tag Manager met Consent Mode v2.
 * Standaard staat alles op 'denied' tot de bezoeker toestemming geeft
 * (zie <CookieConsent>). IDs komen uit env vars, zodat dezelfde
 * GA4-property als de huidige site gebruikt kan worden.
 */
export function Analytics() {
  const { ga4, gtm } = site.analytics;
  const answersScript = site.answers.script;
  if (!ga4 && !gtm && !answersScript) return null;

  const consentDefaults = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    var stored = null;
    try { stored = JSON.parse(localStorage.getItem('m7-consent') || 'null'); } catch (e) {}
    gtag('consent', 'default', {
      ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
      analytics_storage: 'denied', functionality_storage: 'granted', security_storage: 'granted',
      wait_for_update: 500
    });
    if (stored) gtag('consent', 'update', stored);
    gtag('set', 'ads_data_redaction', true);
    gtag('set', 'url_passthrough', true);
  `;

  return (
    <>
      <Script id="consent-defaults" strategy="beforeInteractive">
        {consentDefaults}
      </Script>
      {gtm ? (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtm}');`}
        </Script>
      ) : null}
      {ga4 ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`gtag('js', new Date()); gtag('config', '${ga4}', { send_page_view: false });`}
          </Script>
        </>
      ) : null}
      {answersScript ? <Script src={answersScript} strategy="lazyOnload" /> : null}
    </>
  );
}
