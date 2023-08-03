import { config } from "src/environments/config";

export function enableAnalytics(): void {
	loadScript(`https://www.googletagmanager.com/gtag/js?id=${config.analytics.google.id}`);

	// eslint-disable-next-line no-eval
	eval(`globalThis.dataLayer ??= [];
	globalThis.gtag = (...args) => {
		dataLayer.push(args);
	};
	gtag("js", new Date());

	gtag("config", "${config.analytics.google.id}");`);
}

function loadScript(url: string, async = true, type = "text/javascript") {
	return new Promise((resolve, reject) => {
		try {
			const script = document.createElement("script");
			script.type = type;
			script.async = async;
			script.src = url;

			script.addEventListener("load", resolve);

			script.addEventListener("error", reject);

			document.body.appendChild(script);
		} catch (error) {
			reject(error);
		}
	});
}
