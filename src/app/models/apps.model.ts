export interface AppsModel {
  id: string;
  label: string;
  class: string;
  isActive: boolean;
  isInNavigationBar: boolean;
}

export const apps: AppsModel[] = [
  {
    id: 'home',
    label: 'Home',
    class: 'home',
    isActive: false,
    isInNavigationBar: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    class: 'ln',
    isActive: false,
    isInNavigationBar: false,
  },
  {
    id: 'deviant',
    label: 'DeviantArt',
    class: 'deviant',
    isActive: false,
    isInNavigationBar: true,
  },
];
