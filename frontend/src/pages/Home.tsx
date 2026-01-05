import BannerImg from "../assets/BannerImg.png"
import Typography from '@mui/material/Typography';
import Card from "../components/Card";
import WaterIntake from "../assets/waterintake.png"
import PersonalizedGoals from "../assets/personalizedgoals.png"
import MealPlan from "../assets/mealplan.png"

const cards = [
    {
        title: "💧Water Intake",
        imgUrl: WaterIntake,
        description: "Track your daily water consumption and stay hydrated throughout the day with smart reminders",
        footer: "Hydration made simple"
    },
    {
        title: "🎯Personalized Goal",
        imgUrl: PersonalizedGoals,
        description: "Set custom nutrition and fitness goals tailored to your lifestyle and health needs",
        footer: "Built around you"
    },
    {
        title: "🍽️Meal Plan",
        imgUrl: MealPlan,
        description: "Plan balanced meals based on your dietary preferences, calorie needs, and nutrition goals",
        footer: "Eat Smarter Everyday"
    }
]
function Home() {
    return (
        <>
            <div className="main-section">
                
                <section
                    className="relative bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${BannerImg})` }}
                >
                    {/* Overlay removed so banner image is fully visible */}

                    {/* Content */}
                    <div className="relative mx-auto max-w-7xl px-6 py-24">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-extrabold leading-tight text-green-700 sm:text-5xl">
                                Control Your Nutrition.<br />
                                Achieve Your Goals.<br />
                                Live Healthy.
                            </h1>

                            <p className="mt-6 text-base leading-relaxed text-gray-700">
                                No complex calculations. No excuses. Get complete control over your
                                nutrition with smart calorie counting, progress tracking, and
                                personalized recommendations. Control your diet anywhere, stay
                                consistent, and achieve your goals with smart algorithm support.
                            </p>

                            <ul className="mt-6 space-y-2 text-gray-700">
                                <li>• Keep your diary on the go — at home, in cafes, anywhere</li>
                                <li>• Get detailed reports on nutrition and progress</li>
                                <li>• Reach your weight goals with a scientific approach</li>
                                <li>• Track every calorie with an accurate food database</li>
                            </ul>
                            <div className="mt-8 flex gap-4">
                                <button className="rounded-lg bg-green-600 px-6 py-3 text-black font-semibold shadow-md hover:bg-green-700 transition">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-10 w-full">
                    <Typography variant="h3">
                        Features
                    </Typography>
                    <br />
                    <div className="flex w-full px-10">
                        {cards.map((card) => {
                            return <Card title={card.title} imageUrl={card.imgUrl} description={card.description} footerText={card.footer} />
                        })}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;