import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition, rem } from '@mantine/core';

export default function FloatButton() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
            variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}
            component="a"
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            >
              Voltar ao início
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}