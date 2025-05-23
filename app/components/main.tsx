"use client";
import ShoeEventCard from "./main-components/shoe-event-card";
import ShoeEventCardContent from "./main-components/shoe-event-card-content";
import { useState, useEffect } from "react";

export default function Component() {
    const [showGiantShoeContent, setShowGiantShoeContent] = useState(false);
    const [showBazaarContent, setShowBazaarContent] = useState(false);
    const [showStilettoRaceContent, setShowstilettoRaceContent] = useState(false);
    const [showCaravanContent, setShowCaravanContent] = useState(false);
    const [showConcertContent, setShowConcertContent] = useState(false);
    const [showFireworksContent, setShowFireworksContent] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Handle scroll animation
    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('main-section');
            if (element) {
                const position = element.getBoundingClientRect();
                // If the element is in the viewport
                if (position.top < window.innerHeight && position.bottom >= 0) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="main-section" className="flex flex-col gap-14 py-28 relative mx-4 sm:mx-8 md:mx-12 lg:mx-16">
            {/* Decorative elements */}
            <div className="absolute top-40 left-10 w-60 h-60 bg-tertuary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-10 w-80 h-80 bg-quartery/5 rounded-full blur-3xl"></div>

            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="font-playfair text-secondary text-3xl sm:text-5xl text-center mb-8">
                    THE HEART OF SHOE MAKING
                </h1>
                <p className="font-montserrat text-secondary text-md sm:text-xl text-center max-w-3xl mx-auto mb-10">
                    Explore the vibrant traditions and celebrations that make the Marikina Shoe Festival a cultural landmark and a testament to Filipino craftsmanship.
                </p>
            </div>

            <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <ShoeEventCard
                    image="/shoe3.png"
                    title="GIANT SHOE OF MARIKINA"
                    subtitle="Craft. Pride. Giant"
                    showEventCardContent={() => setShowGiantShoeContent(true)}
                />
            </div>
            { showGiantShoeContent && <ShoeEventCardContent
                title="GIANT SHOE OF MARIKINA"
                image="/shoe3.png"
                paragraph="The Giant Shoe of Marikina, located at Riverbanks Center in Barangka, Marikina City, is a world-famous attraction recognized by the Guinness World Records in 2002 as the largest pair of shoes globally. Measuring approximately 5.5 meters long, 2.25 meters wide, and 1.83 meters high—equivalent to a men's US size 753—the shoe was crafted by skilled local shoemakers as a tribute to Marikina's proud heritage as the Shoe Capital of the Philippines. It is displayed inside the Riverbanks Mall, alongside museums and other local attractions."
                closeEventCardContent={() => setShowGiantShoeContent(false)}
            /> }

            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <ShoeEventCard
                    image="/shoe4.png"
                    title="BAZAAR"
                    subtitle="Shop. Discover. Enjoy."
                    reverse={true}
                    showEventCardContent={() => setShowBazaarContent(true)}
                />
            </div>
            { showBazaarContent && <ShoeEventCardContent
                title="BAZAAR"
                image="/shoe4.png"
                paragraph="​The Sapatos Festival in Marikina City is a month-long celebration held annually from mid-September to December, honoring the city&apos;s rich shoemaking heritage. A central highlight of the festival is the Shoe Bazaar, hosted at Freedom Park in Barangay Sta. Elena. This bazaar features a wide array of locally crafted shoes, bags, belts, and other leather goods, showcasing the craftsmanship of Marikina&apos;s artisans. In recent years, the bazaar has included participation from over 40 local manufacturers, offering quality products at affordable prices. To support the local industry, the city government has implemented initiatives such as waiving rental fees for participating vendors during the festival. The bazaar operates daily from 9:00 AM to 7:00 PM, providing an excellent opportunity for visitors to purchase authentic Marikina-made products and support the local economy."
                closeEventCardContent={() => setShowBazaarContent(false)}
            /> }

            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <ShoeEventCard
                    image="/shoe5.png"
                    title="STILETTO RACE"
                    subtitle="Run in heels."
                    showEventCardContent={() => setShowstilettoRaceContent(true)}
                />
            </div>
            { showStilettoRaceContent && <ShoeEventCardContent
                title="STILETTO RACE"
                image="/shoe5.png"
                paragraph="The Tour de Takong, also known as the Stiletto Race, is one of the most exciting and unique highlights of Marikina City&apos;s annual Sapatos Festival, showcasing the city's pride as the Shoe Capital of the Philippines. Launched in 2013, the race features participants—regardless of gender—running a 550-meter course along Shoe Avenue while wearing high-heeled shoes made by Marikina&quot;s local shoemakers. The event is not only entertaining but also serves as a symbol of women&apos;s strength and resilience, with participants from diverse backgrounds including military personnel, teachers, athletes, and even foreigners. Winners receive cash prizes, with PHP 15,000 awarded to the first-place finishers in both male and female categories. The event usually kicks off with a fun  &quot;Zumballeto,&quot; a Zumba session performed in heels, adding to the vibrant and empowering spirit of the festival."
                closeEventCardContent={() => setShowstilettoRaceContent(false)}
            /> }

            <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <ShoeEventCard
                    image="/shoe6.png"
                    title="CARAVAN"
                    subtitle="Tradition on tour."
                    reverse={true}
                    showEventCardContent={() => setShowCaravanContent(true)}
                />
            </div>
            { showCaravanContent && <ShoeEventCardContent
                title="CARAVAN"
                image="/shoe6.png"
                paragraph="As part of the Sapatos Festival, Marikina City organizes a dynamic Shoe Caravan that travels to various cities across Metro Manila and beyond, showcasing the city's renowned footwear craftsmanship. This mobile trade fair brings Marikina-made shoes directly to consumers, promoting local artisans and boosting the city's shoe industry. Past caravan stops have included locations such as Eastwood Citywalk in Quezon City, Lucky Chinatown Mall in Manila, and city halls in Valenzuela, Malabon, and Caloocan, among others. The caravan not only offers quality footwear at affordable prices but also serves as a testament to Marikina's enduring legacy as the Shoe Capital of the Philippines"
                closeEventCardContent={() => setShowCaravanContent(false)}
            /> }

            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <ShoeEventCard
                    image="/shoe7.png"
                    title="CONCERTS AND PERFORMANCE"
                    subtitle="Music. Dance. Vibes."
                    showEventCardContent={() => setShowConcertContent(true)}
                />
            </div>
            { showConcertContent && <ShoeEventCardContent
                title="CONCERTS AND PERFORMANCE"
                image="/shoe7.png"
                paragraph="Concerts and live performances are integral to Marikina City's annual Sapatos Festival, adding vibrant energy to the celebration of the city's shoemaking heritage. The festival's opening ceremonies often feature motorcades and pocket concerts at venues like Freedom Park, with performances by local bands and artists. Past events have included acts such as Silent Sanctuary, Mayonnaise, Princess, Darryl Shy, and Jireh Lim, drawing large crowds and fostering community spirit. These musical events not only entertain but also highlight Marikina's cultural richness, complementing other festival activities like the stiletto race and shoe bazaars."
                closeEventCardContent={() => setShowConcertContent(false)}
            /> }

            <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <ShoeEventCard
                    image="/shoe8.png"
                    title="FIREWORKS DISPLAY"
                    subtitle="Light the sky."
                    reverse={true}
                    showEventCardContent={() => setShowFireworksContent(true)}
                />
            </div>
            { showFireworksContent && <ShoeEventCardContent
                title="FIREWORKS DISPLAY"
                image="/shoe8.png"
                paragraph="​The Sapatos Festival in Marikina City culminates in a spectacular fireworks display, illuminating the sky in celebration of the city's rich shoemaking heritage. This dazzling event is typically held at prominent venues such as the Marikina Sports Center or Riverbanks Center, drawing large crowds of residents and visitors alike. The fireworks serve as a grand finale to the month-long festivities, which include shoe bazaars, stiletto races, concerts, and cultural performances, leaving attendees with lasting memories of the vibrant celebration."
                closeEventCardContent={() => setShowFireworksContent(false)}
            /> }
        </div>
    );
}
