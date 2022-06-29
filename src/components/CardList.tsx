import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface CardsProps {
  cards: ICard[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [imageUrl, setImageUrl] = useState<string>();

  const handleViewImage = (url: string): void => {
    setImageUrl(url);
    onOpen();
  };

  return (
    <>
      <SimpleGrid gridcol gap="40px" columns={3} align="flex-start">
        {cards.map(card => (
          <Card data={card} key={card.id} viewImage={handleViewImage} />
        ))}
      </SimpleGrid>

      <ModalViewImage imgUrl={imageUrl} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
