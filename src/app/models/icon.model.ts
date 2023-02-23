export enum AppsEnum {
  Home = 'home',
  Linkedin = 'linkedin',
  Deviant = 'deviant',
  Facebook = 'facebook',
  Instagram = 'instagram',
  Patreon = 'patreon',
  Github = 'github',
  Discord = 'discord',
  Twitch = 'twitch',
}

export interface AppsModel {
  id: string;
  label: string;
  isActive: boolean;
  isInNavigationBar: boolean;
}

export enum AppsLabel {
  Linkedin = 'LinkedIn',
  Deviant = 'DeviantArt',
  Facebook = 'Facebook',
  Instagram = 'Instagram',
  Patreon = 'Patreon',
  Github = 'Github',
  Discord = 'Discord',
  Twitch = 'Twitch',
}
