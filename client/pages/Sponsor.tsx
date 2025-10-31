import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Sponsor() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-[800px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F5fa3a0f6efef480eaf5f12e90c34c782)',
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '50px',
          alignSelf: 'stretch',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            bottom: '0px',
            left: '8589px',
            opacity: '0.8',
            position: 'absolute',
            right: '0px',
            top: '4936px',
          }}
        ></div>

        {/* Hero Content */}
        <div
          className="relative z-10"
          style={{
            maxWidth: '1152px',
            position: 'relative',
            zIndex: '10',
            margin: '0 auto',
            padding: '80px 16px',
          }}
        >
          <div
            style={{
              maxWidth: '672px',
            }}
          >
            <h1
              style={{
                fontSize: '60px',
                fontWeight: '700',
                lineHeight: '60px',
                marginBottom: '24px',
              }}
            >
              <br />
            </h1>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section
        style={{
          backgroundColor: 'rgb(15, 23, 42)',
          padding: '64px 16px',
        }}
      >
        <div
          style={{
            maxWidth: '1152px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'grid',
              gap: '24px',
              gridTemplateColumns: 'repeat(4, minmax(0px, 1fr))',
              marginTop: '-96px',
            }}
          >
            <a
              href="https://space9au.com/RFGOOGLESEO99"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe164342b0153494aade341b9660a90cf?format=webp"
                alt="Ambassador Campaign 1"
                loading="lazy"
                style={{
                  display: 'block',
                  borderRadius: '16px',
                  height: '373px',
                  width: '100%',
                  objectFit: 'cover',
                  transitionDuration: '0.15s',
                  transitionProperty: 'opacity',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </a>

            <a
              href="https://space9au.com/RFGOOGLESEO99"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F76ff2db872904bb59c735348dd15f083"
                alt="Ambassador Campaign 2"
                loading="lazy"
                style={{
                  display: 'block',
                  borderRadius: '16px',
                  height: '373px',
                  width: '100%',
                  objectFit: 'cover',
                  transitionDuration: '0.15s',
                  transitionProperty: 'opacity',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </a>

            <a
              href="https://space9au.com/RFGOOGLESEO99"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6ae0c44493794b71a2f57dfd333958ed"
                alt="Ambassador Campaign 3"
                loading="lazy"
                style={{
                  display: 'block',
                  borderRadius: '16px',
                  height: '373px',
                  width: '100%',
                  objectFit: 'cover',
                  transitionDuration: '0.15s',
                  transitionProperty: 'opacity',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </a>

            <a
              href="https://space9au.com/RFGOOGLESEO99"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fab0c68669a7e47718b457cce72147767"
                alt="Ambassador Campaign 4"
                loading="lazy"
                style={{
                  display: 'block',
                  borderRadius: '16px',
                  height: '373px',
                  width: '100%',
                  objectFit: 'cover',
                  transitionDuration: '0.15s',
                  transitionProperty: 'opacity',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section
        style={{
          backgroundColor: 'rgb(15, 23, 42)',
          padding: '64px 16px',
        }}
      >
        <div
          style={{
            maxWidth: '896px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: '48px',
              fontWeight: '600',
              lineHeight: '62.4px',
              marginBottom: '31.5px',
              color: 'rgb(30, 41, 59)',
            }}
          >
            SPACE9: The Opening To Exciting Australia Live Casino Championship
          </h2>

          <p
            style={{
              marginBottom: '31.5px',
              color: 'rgb(30, 41, 59)',
            }}
          >
            SPACE9 is a thrilling online casino tournaments site where you can also find the prestigious Australia Live Casino Championship. We have everything from a seasoned player who risks high stakes to someone new in the world of gambling. Playing at SPACE9, you will experience electrifying gaming times which may result in life-changing jackpots.
          </p>

          <h3
            style={{
              fontSize: '48px',
              fontWeight: '600',
              lineHeight: '62.4px',
              marginBottom: '31.5px',
              color: 'rgb(30, 41, 59)',
            }}
          >
            SPACE9 Tournaments: Success, Fun And Thrill Combined As One
          </h3>

          <p
            style={{
              marginBottom: '31.5px',
              color: 'rgb(30, 41, 59)',
            }}
          >
            We appreciate what competition means and that is why we provide an array of online casino championships catering for different tastes and wallets. Look below:
          </p>

          <ul
            style={{
              marginBottom: '27px',
              marginLeft: '54px',
              color: 'rgb(30, 41, 59)',
            }}
          >
            <li style={{ display: 'list-item' }}>
              <strong>Non-Stop Action:</strong> Immerse yourself in daily, weekly and monthly tournaments including numerous of your favorite online casino games. From the perpetual fascination of fruit machines to the tactical profundity that comes with table games like blackjack and poker there is a championship that suits every gamer.
            </li>
            <li style={{ display: 'list-item' }}>
              <strong>Free rolls and Buy-Ins:</strong> Enjoy the thrill of competition without putting a hole in your pocket. SPACE9 regularly invites you to participate in free roll tournaments where the player takes all but also real money is won. Also, several buy-in tournaments are provided for you to enter for bigger prize pools.
            </li>
            <li style={{ display: 'list-item' }}>
              <strong>Level Up Your Skills:</strong> Participating in championships enables one to become better at gaming as he/she plays against other players. Study tactics, build up your intuition, challenge yourself aiming for top positions.
            </li>
            <li style={{ display: 'list-item' }}>
              <strong>Leader boards and Recognition:</strong> Check out our interactive leader boards to track your progress and see how you compare with other participants. The exhilaration of climbing through the ranks and gaining prominence among comrades enhances the SPACE9 tournament experience.
            </li>
            <li style={{ display: 'list-item' }}>
              <strong>Life-Changing Wins:</strong> The prize pools offered by SPACE9 events can change lives forever. Just imagine how it feels when you convert just a little investment into a jackpot large enough to make all your dreams come true!
            </li>
          </ul>

          <h3
            style={{
              fontSize: '24px',
              fontWeight: '600',
              lineHeight: '31.2px',
              marginBottom: '31.5px',
              color: 'rgb(30, 41, 59)',
            }}
          >
            The Australia Live Casino Championship
          </h3>

          <p
            style={{
              marginBottom: '31.5px',
              color: 'rgb(30, 41, 59)',
            }}
          >
            Australia Live Casino Championship (ALCC) is the ultimate occasion for Australia's best casino enthusiasts, SPACE9. It brings together topmost players in the country who compete for the final bragging right and a life-changing grand prize.
          </p>

          <ol
            style={{
              marginBottom: '27px',
              marginLeft: '54px',
              color: 'rgb(30, 41, 59)',
            }}
          >
            <li style={{ display: 'list-item' }}>
              <strong>Qualification Tournaments:</strong> ALCC is not an exclusive preserve of its invited elite. SPACE9 holds a series of online qualification tournaments throughout the year. Get your light to shine and take your seat at this prestigious live event.
            </li>
            <li style={{ display: 'list-item' }}>
              <strong>Live Casino Ambiance:</strong> Feel the unparalleled thrill of a live casino atmosphere. ALCC draws you away from the virtual world into the gaming frenzy with all its associated sights, sounds and excitements.
            </li>
            <li style={{ display: 'list-item' }}>
              <strong>Unforgettable Experience:</strong> Not only is it a tournament but ALCC turns out to be one unforgettable experience. Here you can mix with other high rollers, establish connections with those who matter in business while also creating memories worth cherishing forever.
            </li>
          </ol>

          <h4
            style={{
              fontSize: '20px',
              fontWeight: '600',
              lineHeight: '24px',
              marginBottom: '31.5px',
              color: 'rgb(30, 41, 59)',
            }}
          >
            Join The SPACE9 Universe Today
          </h4>

          <p
            style={{
              marginBottom: '31.5px',
              color: 'rgb(30, 41, 59)',
            }}
          >
            Do you feel like embarking on an exciting online gambling journey with chances of winning some life-changing prizes? Open a SPACE9 account now and get access to many thrilling championship tournaments as well as the prestigious Australia Live Casino Championship. Experience unforgettable moments at our casino with diversified games, thrilling contests, and fair play which is always adhered to. So why wait more? Connect with SPACE9 members now and start living the dream!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
