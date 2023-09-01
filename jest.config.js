export default {
	setupFilesAfterEnv: ['jest-extended'],
	testEnvironment: 'jest-environment-node',
	transform: {},
	reporters: [
		'default',
		[ 'jest-junit', {
			outputDirectory: 'test_reports',
			outputName: 'jest-junit.xml',
		} ]
	]
};
