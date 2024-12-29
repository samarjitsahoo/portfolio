import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const scriptSources = [
      "https://cdn.botpress.cloud/webchat/v2.2/inject.js",
      "https://files.bpcontent.cloud/2024/12/29/12/20241229121842-B1MNBW2I.js",    
    ];
    const loadScripts = (sources) => {
      return sources.map((src) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.dataset.chatbotScript = true;
        document.body.appendChild(script);
        return script;
      });
    };
    const scripts = loadScripts(scriptSources);
    return () => {
      scripts.forEach((script) => document.body.removeChild(script));
    };
  }, []);

  return null;
};

export default Chatbot;
