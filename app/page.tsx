'use client' ;
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { PieChart } from "@/components/ui/pie-chart";

const LandingPage: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animate", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".animate",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-200">
      <main className="flex-1">
        <section className="py-20 px-4 md:px-6 lg:py-32 animate">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-center lg:text-left sm:text-5xl lg:text-6xl">
                  Organize Work Effortlessly with Bindle
                </h1>
                <p className="text-center lg:text-left max-w-lg mx-auto lg:mx-0 text-xl text-muted-foreground">
                  Bindles work like folders, updated in real-time based on the work you do across your cloud-based apps, with no drag-and-drop required.
                </p>
                <div className="flex justify-center lg:justify-start gap-4">
                  <Button className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-indigo-400 transition">
                    Get Started 
                  </Button>
                  <Button className="bg-white text-indigo-500 px-6 py-2 rounded-lg shadow-lg hover:bg-indigo-100 border">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <img 
                  src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s" 
                  alt="Bindle Hero" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 lg:py-32 bg-white animate">
          <div className="container mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Bindle?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                With Bindle, you can effortlessly organize your work, thoughts, and communication across all your cloud-based apps without lifting a finger.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Card className="space-y-4 p-6 animate">
                <img 
                  src="https://picsum.photos/seed/picsum/200/300" 
                  alt="Feature 1" 
                  className="h-40 w-full object-cover rounded-md"
                />
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Real-Time Updates</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Bindles update your work in real-time, keeping everything synchronized seamlessly.
                </CardContent>
              </Card>

              <Card className="space-y-4 p-6 animate">
                <img 
                  src="https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY" 
                  alt="Feature 2" 
                  className="h-40 w-full object-cover rounded-md"
                />
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Minimal Effort</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Using Bindle requires minimal input, allowing you to focus on what really matters.
                </CardContent>
              </Card>

              <Card className="space-y-4 p-6 animate">
                <img 
                  src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s" 
                  alt="Feature 3" 
                  className="h-40 w-full object-cover rounded-md"
                />
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Affordable Pricing</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  High-performance at a low cost, making Bindle accessible for everyone.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 lg:py-32 bg-sky-50 animate">
          <div className="container mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">See Bindle in Action</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Experience how Bindle can transform the way you manage your work with our interactive demo.
              </p>
            </div>
            <Carousel className="mt-12">
              <CarouselContent>
                <CarouselItem>
                  <img 
                    src="https://picsum.photos/seed/picsum/200/300" 
                    alt="Demo 1" 
                    className="rounded-lg shadow-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img 
                    src="https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY" 
                    alt="Demo 2" 
                    className="rounded-lg shadow-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img 
                    src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s" 
                    alt="Demo 3" 
                    className="rounded-lg shadow-lg"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 lg:py-32 animate">
          <div className="container mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Customer Testimonials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                What our users are saying about their experience with Bindle.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Card className="space-y-4 p-6 animate">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://picsum.photos/seed/picsum/100/100" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">CEO, Example Corp</p>
                  </div>
                </div>
                <CardContent className="text-muted-foreground">
                  "Bindle has revolutionized the way our team collaborates. Real-time updates and minimal effort make it the perfect tool for our company."
                </CardContent>
              </Card>

              <Card className="space-y-4 p-6 animate">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://picsum.photos/seed/picsum/100/100" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Sarah Miller</p>
                    <p className="text-xs text-muted-foreground">Product Manager, Innovate Inc</p>
                  </div>
                </div>
                <CardContent className="text-muted-foreground">
                  "Effortless organization and unbeatable pricing. Bindle is a game-changer for anyone using cloud-based apps."
                </CardContent>
              </Card>

              <Card className="space-y-4 p-6 animate">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://picsum.photos/seed/picsum/100/100" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Michael Johnson</p>
                    <p className="text-xs text-muted-foreground">CTO, TechStart</p>
                  </div>
                </div>
                <CardContent className="text-muted-foreground">
                  "The low-cost, high-performance LLM behind Bindle makes it the most efficient tool we've used to date."
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 lg:py-32 bg-white animate">
          <div className="container mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Pricing Plans</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Choose a Bindle plan that fits your needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Card className="space-y-4 p-6 border animate">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Basic</CardTitle>
                  <p className="text-2xl font-bold text-muted-foreground">$5/mo</p>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li><Check className="inline-block h-4 w-4 mr-2 text-green-600" />5GB Storage</li>
                    <li><Check className="inline-block h-4 w-4 mr-2 text-green-600" />Basic Integrations</li>
                    <li><Check className="inline-block h-4 w-4 mr-2 text-green-600" />Community Support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="space-y-4 p-6 border bg-sky-100 animate">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Pro</CardTitle>
                  <p className="text-2xl font-bold text-muted-foreground">$15/mo</p>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li><Check className="inline-block h-4 w-4 mr-2 text-green-600" />50GB Storage</li>
                    <li><Check className="inline-block h-4 w-4 mr-2 text-green-600" />Advanced Integrations</li>
                    <li><Check className="inline-block h-4 w-4 mr-2 text-green-600" />Priority Support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="space-y-4 p-6 border animate">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Enterprise</CardTitle>
                  <p className="text-2xl font-bold text-muted-foreground">$50/mo</p>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li><Check className="inline-block h-4 w-4 mr-2 text-green-600" />Unlimited Storage</li>
                    <li><Check className="inline-block h-4 w-4 mr-2 text-green-600" />Custom Integrations</li>
                    <li><Check className="inline-block h-4 w-4 mr-2 text-green-600" />Dedicated Support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <footer className="bg-sky-200 py-6">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; 2023 Bindle. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-muted-foreground hover:text-indigo-500">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-indigo-500">Terms of Service</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;