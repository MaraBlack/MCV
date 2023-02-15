import { AppsEnum, AppsLabel, AppsModel } from './icon.model';

export const apps: AppsModel[] = [
  {
    id: AppsEnum.Linkedin,
    label: AppsLabel.Linkedin,
    isActive: false,
    isInNavigationBar: false,
  },
  {
    id: AppsEnum.Deviant,
    label: AppsLabel.Deviant,
    isActive: false,
    isInNavigationBar: true,
  },
];
