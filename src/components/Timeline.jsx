import ScrollAnimationLeft1 from "./ScrollAnimationLeft1";
import ScrollAnimationRight1 from "./ScrollAnimationRight1";
import ScrollAnimationLeft2 from "./ScrollAnimationLeft2";
import ScrollAnimationRight2 from "./ScrollAnimationRight2";
import ScrollAnimationLeft3 from "./ScrollAnimationLeft3";
import ScrollAnimationRight3 from "./ScrollAnimationRight3";

const Timeline = () => {
  return (
    <div className="w-11/12 mx-auto mb-5">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">1990</time>
            <div className="text-lg font-black mt-1">Creation of Pokémon</div>
            The Pokémon franchise was created by Satoshi Tajiri and Ken
            Sugimori. Tajiri’s childhood interest in collecting insects inspired
            the concept of capturing and training creatures. Originally a gaming
            magazine, Game Freak was transformed into a game development company
            by Tajiri and Sugimori. This company would go on to develop the
            Pokémon games.
            <ScrollAnimationLeft1 />
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">1996</time>
            <div className="text-lg font-black mt-1">
              Release of Pokémon Red and Green
            </div>
            On February 27, 1996, Pokémon Red and Green were released in Japan
            for the Game Boy. These games introduced players to the world of
            Pokémon and became a massive hit. Pokémon Red and Blue were released
            in North America in 1998, followed by Europe and Australia. This
            marked the beginning of Pokémon’s global phenomenon.
            <ScrollAnimationRight1 />
          </div>

          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">1996</time>
            <div className="text-lg font-black mt-1">
              Pokémon Trading Card Game
            </div>
            Launched in 1996 in Japan and 1999 internationally, the Pokémon
            Trading Card Game became a popular collectible card game, further
            expanding the franchise digitally. The Pokémon TCG Online allows
            players to play the game digitally, offering a way to practice and
            compete with others globally. The goal is to knock out the
            opponent’s Pokémon and collect prize cards.
            <ScrollAnimationLeft2 />
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">1997</time>
            <div className="text-lg font-black mt-1">Pokémon Anime Debut</div>
            The Pokémon anime series "Pokémon-I Choose You!" premiered in Japan
            on April 1, 1997. The series follows the adventures of Ash Ketchum
            and his partner Pikachu as they travel through various regions,
            aiming to become Pokémon Masters. The first Pokémon movie is titled
            “Pokémon: The First Movie - Mewtwo Strikes Back”. It was released in
            Japan on July 18, 1998.
            <ScrollAnimationRight2 />
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2016</time>
            <div className="text-lg font-black mt-1">Pokémon Go Game</div>
            An augmented reality (AR) mobile game that was released in July
            2016. Developed by Niantic in collaboration with Nintendo and The
            Pokémon Company, it quickly became a global sensation1. The game has
            had a significant cultural impact, encouraging people to explore
            their surroundings and interact with others in new ways.
            <ScrollAnimationLeft3 />
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 md:text-start">
            <time className="font-mono italic">2021</time>
            <div className="text-lg font-black mt-1">25th Anniversary</div>
            In 2021, Pokémon celebrated its 25th anniversary with various
            events, new game releases, and collaborations, highlighting its
            enduring popularity. There were numerous collaborations with
            well-known brands, including Levi’s, McDonald’s, and Build-A-Bear,
            offering exclusive Pokémon-themed products. Collaborations with
            artists like Katy Perry, Post Malone, and J Balvin, including
            special music releases and virtual concerts.
            <ScrollAnimationRight3 />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
