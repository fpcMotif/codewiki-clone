export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.CvFLAgBp.js",app:"_app/immutable/entry/app.zQYSNbD0.js",imports:["_app/immutable/entry/start.CvFLAgBp.js","_app/immutable/chunks/BwL-N5FV.js","_app/immutable/chunks/8vlFY5QZ.js","_app/immutable/chunks/DGOUePF9.js","_app/immutable/chunks/DGdFKC7k.js","_app/immutable/entry/app.zQYSNbD0.js","_app/immutable/chunks/B8tyt4ng.js","_app/immutable/chunks/8vlFY5QZ.js","_app/immutable/chunks/ChGoenQv.js","_app/immutable/chunks/CGw-Ln9w.js","_app/immutable/chunks/DQ1H2tK8.js","_app/immutable/chunks/DGdFKC7k.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
