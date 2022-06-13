import { AspectRatio, Box } from '@chakra-ui/react';
export default function Map() {
  return (
    <Box
      w={{ base: '100%', md: '50%' }}
      h={600}
      borderRadius={'xl'}
      my={{ base: 0, md: 5 }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13143.396697271111!2d-58.4775454!3d-34.557374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5984dd221326c032!2sChevroalet!5e0!3m2!1ses!2sar!4v1655088571798!5m2!1ses!2sar"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        alt="Av Balbin 3317"
        width={'100%'}
        height={'100%'}
      />
    </Box>
  );
}

