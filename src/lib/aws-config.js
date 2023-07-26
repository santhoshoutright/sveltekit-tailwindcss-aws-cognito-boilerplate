const awsconfigv1 = {
	aws_project_region: 'ap-south-1',
	aws_cognito_region: 'ap-south-1',
	aws_user_pools_id: 'ap-south-1_HJuBbseSL',
	aws_user_pools_web_client_id: '1m6tlbimjm0p786sukvajilsba',
	aws_user_pools_web_client_secret: 'nhqq5i3q5g8q4ntua4g6gjv6ga5qvb3auq36bs6fjfg7p0opt1c',
	oauth: {
		domain: 'https://zerotours.auth.ap-south-1.amazoncognito.com'
	},
	aws_cognito_username_attributes: ['EMAIL'],
	authProvidersUserPool: ['Facebook', 'Google'],
	aws_cognito_social_providers: ['Facebook', 'Google'],
	aws_cognito_signup_attributes: [],
	aws_cognito_mfa_configuration: 'OFF',
	aws_cognito_mfa_types: [],
	aws_cognito_password_protection_settings: {
		passwordPolicyMinLength: 10,
		passwordPolicyCharacters: [
			'REQUIRES_LOWERCASE',
			'REQUIRES_UPPERCASE',
			'REQUIRES_NUMBERS',
			'REQUIRES_SYMBOLS'
		]
	},
	aws_cognito_verification_mechanisms: ['EMAIL', 'PHONE_NUMBER']
};

const awsconfig = {
	Auth: {
		region: 'ap-south-1',
		userPoolId: 'ap-south-1_HJuBbseSL',
		userPoolWebClientId: '4hvv2kh3pgmno8b3jhshb6kn4p', //  1m6tlbimjm0p786sukvajilsba
		oauth: {
			domain: 'zerotours.auth.ap-south-1.amazoncognito.com',
			scope: ["email", "openid", "profile"],
			redirectSignIn: 'http://localhost:5173/auth/login', // Replace with your redirect URL
			redirectSignOut: 'http://localhost:5173/auth/logout', // Replace with your sign-out URL
			responseType: 'code'
		}
	}
};

export default awsconfig;
