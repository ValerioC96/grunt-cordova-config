export default {
	occurances: 'single',
	hasMany: false,
	getDefaultOptions(){
		return {
			id: 'com.example.hello',
			version: '0.0.1',
			name: 'HelloWorld',
			description: 'A sample Apache Cordova application that responds to the deviceready event.'
		};
	},
	getDocumentation(){
		return {
			type: {
				id: {
					type: 'string',
					description: 'The app\'s bundle identifier.',
					required: true
				},
				version: {
					type: 'string',
					description: 'The app\'s version number, in semver2 format.',
					moreInfo: 'http://semver.org',
					required: true
				},
				name: {
					type: 'string',
					description: 'The name of app.',
					required: true
				},
				description: {
					type: 'string',
					description: 'A description of the app and/or it\s goals.'
				}
			},
			moreInfo: 'http://cordova.apache.org/docs/en/5.0.0/config_ref_index.md.html#The%20config.xml%20File_core_configuration_elements'
		};
	},
	processor(options,processor){
		let {id,version,name,description} = options;
		let result = {
			'@': {
				id,
				version,
				xmlns: 'http://www.w3.org/ns/widgets',
				'xmlns:cdv': 'http://cordova.apache.org/ns/1.0'
			},
			name,
			description
		};
		if (options.androidVersionCode) {
			result['@']['android-versionCode'] = options.androidVersionCode;
		}
		if (options.iosBundleVersion) {
			result['@']['ios-CFBundleVersion'] = options.iosBundleVersion;
		}
		return result;
	}
};