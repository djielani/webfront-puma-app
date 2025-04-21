// export interface AuthModel {
//   roles: any
//   user: UserModel
//   data: {
//   access_token: string
//   refresh_token?: string
//   roles?: Array<number>
//   }
// }

export interface AuthModel {
  data:
    {
      id: number;
      user: {
        id: number;
        name: string;
        username: string;
        firstName: string;
        lastName: string;
        email: string;
        telephone: string;
      };
      access_token: string;
      token_type: string;
      expires_in: number;
      refresh_token: string;
      roles: string[];
      privileges: string[];
    };
};

// export type AuthModel = {
//   id: number;
//   user: {
//     id: number;
//     name: string;
//     userName: string;
//     firstName: string;
//     lastName: string;
//     email: string;
//     telephone: string;
//   };
//   access_token: string;
//   token_type: string;
//   expires_in: number;
//   refresh_token: string;
//   roles: string[];
//   privileges: string[];
// }

export interface UserAddressModel {
  addressLine: string
  city: string
  state: string
  postCode: string
}

export interface UserCommunicationModel {
  email: boolean
  sms: boolean
  phone: boolean
}

export interface UserEmailSettingsModel {
  emailNotification?: boolean
  sendCopyToPersonalEmail?: boolean
  activityRelatesEmail?: {
    youHaveNewNotifications?: boolean
    youAreSentADirectMessage?: boolean
    someoneAddsYouAsAsAConnection?: boolean
    uponNewOrder?: boolean
    newMembershipApproval?: boolean
    memberRegistration?: boolean
  }
  updatesFromKeenthemes?: {
    newsAboutKeenthemesProductsAndFeatureUpdates?: boolean
    tipsOnGettingMoreOutOfKeen?: boolean
    thingsYouMissedSindeYouLastLoggedIntoKeen?: boolean
    newsAboutStartOnPartnerProductsAndOtherServices?: boolean
    tipsOnStartBusinessProducts?: boolean
  }
}

export interface UserSocialNetworksModel {
  linkedIn: string
  facebook: string
  twitter: string
  instagram: string
}

export interface UserModel {
  id: number
  role: string
  username: string
  password: string | undefined
  email: string
  first_name: string
  last_name: string
  fullname?: string
  occupation?: string
  companyName?: string
  phone?: string
  // roles?: Array<number>
  pic?: string
  language?: 'en' | 'de' | 'es' | 'fr' | 'ja' | 'zh' | 'ru'
  timeZone?: string
  // website?: 'https://keenthemes.com'
  emailSettings?: UserEmailSettingsModel
  auth?: AuthModel
  communication?: UserCommunicationModel
  address?: UserAddressModel
  socialNetworks?: UserSocialNetworksModel
}
