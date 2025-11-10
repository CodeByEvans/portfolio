import Typewriter from "typewriter-effect";

export const DeveloperConfig = () => {
  const text = ["¡Hola!", "Soy CodeByEvans", "Desarrollador Full-Stack"];
  return (
    <Typewriter
      options={{
        strings: text,
        autoStart: true,
        loop: true,
      }}
    />
  );
};
