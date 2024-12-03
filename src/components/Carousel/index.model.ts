interface CarouselProps {
  slides: { id: number, content: string }[];
  loop?: boolean;
  isVertical?: boolean;
}

export default CarouselProps;
