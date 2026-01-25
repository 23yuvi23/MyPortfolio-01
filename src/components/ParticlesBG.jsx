import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBG = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -3,
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // ✅ mouse hover reaction
            },
            onClick: {
              enable: true,
              mode: "push", // ✅ click adds particles
            },
          },

          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.5,
              },
            },
            push: {
              quantity: 3,
            },
          },
        },

        particles: {
          number: {
            value: 80,
          },

          color: {
            value: "#ffffff",
          },

          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.4,
          },

          move: {
            enable: true,
            speed: 4,
          },

          size: {
            value: 2,
          },

          opacity: {
            value: 0.6,
          },
        },
      }}
    />
  );
};

export default ParticlesBG;
