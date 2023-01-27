interface AppsModel {
  path: string;
  label: string;
  class: string;
  isActive: boolean;
}

export const apps: AppsModel[] = [
  { path: 'home', label: 'Home', class: 'home', isActive: false },
  { path: 'linkedin', label: 'LinkedIn', class: 'ln', isActive: false },
  { path: 'deviant', label: 'DeviantArt', class: 'deviant', isActive: false },
];
