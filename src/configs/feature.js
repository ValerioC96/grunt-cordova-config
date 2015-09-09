export default {
	occurances: 'multiple',
	hasMany: true,
	optionsKey: 'features',
	getDefaultOptions(){
		return [];
	},
	getDocumentation(){
		return {
			description: 'Used to describe a plugin if you\'re not using the Cordova command line tool, but instead working directly with platform specific config.xml files.',
			type: {
				name: {
					description: 'The plugin\'s name.',
					type: 'string'
				},
				onload: {
					description: 'Wether or not the plugin should be loaded when the app launches or load it the first time it\'s requested.',
					type: 'boolean'
				},
				params: {
					description: 'A list of params for the plugin.',
					type: [
						{
							name: {
								description: 'The name of the param.',
								type: 'string',
								required: true
							},
							value: {
								description: 'The value of the param.',
								type: 'string',
								required: true
							}
						}
					]
				}
			},
			examples: [
				{
					title: 'Whitelist plugin for android.',
					example: {
						name: 'Whitelist',
						onload: true,
						params: [
							{
								name: 'android-package',
								value: 'org.apache.cordova.whitelist.WhitelistPlugin'
							}
						]
					}
				}
			],
			moreInfo: 'http://cordova.apache.org/docs/en/5.1.1/config_ref_index.md.html#The%20config.xml%20File_the_feature_element'
		};
	},
	processor(options,processor){
		return {
			feature: options.map((feature) => {
				let {name,params} = feature;
				return {
					'@': {
						name
					},
					param: (params || []).map((param) => {
						let {name,value,onload} = param;
						return {
							'@': {
								name,
								value,
								onload
							}
						};
					})
				};
			})
		};
	}
};