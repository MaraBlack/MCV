export enum AppsEnum {
  Home = 'home',
  Linkedin = 'linkedin',
  Deviant = 'deviant',
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
}
