/* eslint-disable no-undef */

if ('undefined' === typeof window) {
	importScripts('/dynamic/dynamic.config.js');
	importScripts('/dynamic/dynamic.worker.js');

	importScripts('/uv/uv.bundle.js');
	importScripts('/uv/uv.config.js');
	importScripts('/uv/uv.sw.js');

	const uv = new UVServiceWorker();
	const dynamic = new Dynamic();

	self.dynamic = dynamic;
	self.uv = uv;

	self.addEventListener('fetch', (event) => {
		event.respondWith(
			(async function () {
				if (event.request.url.startsWith(location.origin + '/~/uv/')) {
					return await uv.fetch(event);
				}

				if (self.dynamic.route(event)) {
					return await dynamic.fetch(event);
				}

				return await fetch(event.request);
			})()
		);
	});
}
