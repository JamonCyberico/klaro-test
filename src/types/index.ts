type TCardType = 'primary' | 'secondary';

export interface ICardData {
  buttonLabel: string;
  id: string;
  illustrationSrc: string;
  title: string;
  type: TCardType
}
