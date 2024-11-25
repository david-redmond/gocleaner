const initGA = (measurementId) => {
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", measurementId);
  }
};
initGA("G-0RF7HF43FN");
