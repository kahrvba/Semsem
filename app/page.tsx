import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Facebook, Phone, Mail, MapPin, Clock, ChevronDown, Star, Menu } from "lucide-react"

export default function BakeryWebsite() {
  return (
    <div className="min-h-screen bg-[#FDF8F5] text-[#5D4037] font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FDF8F5]/90 backdrop-blur-sm border-b border-[#F3E5DC] px-4 md:px-8 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png?height=40&width=40"
              alt="Sweet Delights Bakery"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="font-serif text-xl md:text-2xl font-medium">Sweet Delights</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="hover:text-[#D4A5A5] transition-colors">
              About
            </Link>
            <Link href="#products" className="hover:text-[#D4A5A5] transition-colors">
              Our Cakes
            </Link>
            <Link href="#gallery" className="hover:text-[#D4A5A5] transition-colors">
              Gallery
            </Link>
            <Link href="#reviews" className="hover:text-[#D4A5A5] transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="hover:text-[#D4A5A5] transition-colors">
              Contact
            </Link>
            <Button className="bg-[#a95757] hover:bg-[#c45a5a] text-white">Order Now</Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg?height=1080&width=1920"
            alt="Beautiful cakes showcase"
            fill
            className="object-cover brightness-[0.5]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
            Baked with Love, <br />
            Served with Joy
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Handcrafted cakes, pastries, and more—made fresh daily with the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#a95757] hover:bg-[#c45a5a] text-white text-lg px-8 py-6">View Menu</Button>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6"
            >
              Order Now
            </Button>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Sweet Story</h2>
              <p className="text-[#7D6E83] mb-4 leading-relaxed">
              I'm Mahfoodh Karman a final-year student from the Business Department, and this website is the core of my graduation project. It represents months of planning, teamwork, and execution.
              I wanted to bring a business idea to life—so I created a bakery brand from scratch, complete with a full digital presence. This included branding, marketing, and an e-commerce-ready website.
              This project is more than just a school requirement.
              It's a real-world application of what I have learned, and a reflection of my passion for entrepreneurship and building meaningful customer experiences.              </p>

              <Button className="bg-[#a95757] hover:bg-[#c45a5a] text-white">Learn More About Us</Button>
            </div>
            <div className="relative h-[400px] w-[400px] mx-auto rounded-full overflow-hidden shadow-xl">
              <Image src="/logo.png?height=800&width=600" alt="Our bakery team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Signature Cakes / Products */}
      <section id="products" className="py-20 bg-[#FDF8F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Signature Cakes</h2>
            <p className="text-[#7D6E83] max-w-2xl mx-auto">
              Each cake is a masterpiece, handcrafted with premium ingredients and decorated with artistic flair.
              Customization available for all designs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Chocolate mini Pancake",
                price: "$45",
                image: "/cakes/1.jpeg?height=500&width=500",
              },
              {
                name: "Sweet lotus mini pancake",
                price: "$48",
                image: "/cakes/2.jpeg?height=500&width=500",
              },
              {
                name: "White Chocolate mini pancake",
                price: "$50",
                image: "/cakes/3.jpeg?height=500&width=500",
              },
              {
                name: "Chocolate waffles",
                price: "$47",
                image: "/cakes/4.jpeg?height=500&width=500",
              },
              {
                name: "White Chocolate waffles",
                price: "$52",
                image: "/cakes/5.jpeg?height=500&width=500",
              },
              {
                name: "Honey Fresh Toast",
                price: "From $60",
                image: "/cakes/6.jpeg?height=500&width=500",
                custom: true,
              },
            ].map((cake, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={cake.image || "/placeholder.svg"}
                    alt={cake.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {cake.custom && (
                    <div className="absolute top-4 right-4 bg-[#D4A5A5] text-white text-xs px-3 py-1 rounded-full">
                      Customizable
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl">{cake.name}</h3>
                    <span className="font-medium text-[#D4A5A5]">{cake.price}</span>
                  </div>
                  <p className="text-[#7D6E83] text-sm mb-4">{cake.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-[#D4A5A5] text-white bg-[#a95757] hover:bg-[#c45a5a] hover:text-white"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#a95757] hover:bg-[#c45a5a] text-white">View Full Menu</Button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Sweet Gallery</h2>
            <p className="text-[#7D6E83] max-w-2xl mx-auto">
              A feast for the eyes! Browse through our collection of delightful creations that taste as good as they
              look.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={`/cakes/${index + 7}.jpeg?height=600&width=600`}
                  alt={`Gallery image ${index + 7}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#D4A5A5] text-white bg-[#a95757] hover:bg-[#c45a5a]] hover:text-white">
              Follow Us on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="py-20 bg-[#FDF8F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
            <p className="text-[#7D6E83] max-w-2xl mx-auto">
              We're honored to be part of your special moments and everyday joys.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                review:
                  "The birthday cake exceeded all expectations! Not only was it stunning to look at, but the flavor was incredible. Everyone at the party was asking where I got it.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                review:
                  "I've ordered from many bakeries, but Sweet Delights truly lives up to its name. Their attention to detail and quality ingredients make all the difference.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                review:
                  "Our wedding cake was absolute perfection! Working with the team was a delight from start to finish. They listened to our vision and executed it flawlessly.",
                rating: 5,
              },
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-[#7D6E83] italic mb-6">"{review.review}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#F3E5DC] flex items-center justify-center mr-4">
                    <span className="font-serif text-lg">{review.name.charAt(0)}</span>
                  </div>
                  <span className="font-medium">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order / Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Get in Touch</h2>
              <p className="text-[#7D6E83] mb-8">
                Have a question or want to place a custom order? Fill out the form or contact us directly. We'd love to
                hear from you!
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#D4A5A5] mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-[#7D6E83]">+90500000001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-[#D4A5A5] mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-[#7D6E83]">info@Semsem.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#D4A5A5] mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-[#7D6E83]">North Cyprus, Lefkosa</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-[#D4A5A5] mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <p className="text-[#7D6E83]">
                      Monday - Friday: 7am - 6pm
                      <br />
                      Saturday: 8am - 5pm
                      <br />
                      Sunday: 9am - 3pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[#D4A5A5] text-[#D4A5A5] hover:bg-[#D4A5A5] hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[#D4A5A5] text-[#D4A5A5] hover:bg-[#D4A5A5] hover:text-white"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#FDF8F5] p-8 rounded-xl shadow-md">
                <h3 className="font-serif text-2xl mb-6">Contact Form</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="border-[#E8D8D0] focus-visible:ring-[#D4A5A5]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        placeholder="Your phone number"
                        className="border-[#E8D8D0] focus-visible:ring-[#D4A5A5]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      className="border-[#E8D8D0] focus-visible:ring-[#D4A5A5]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your order or inquiry"
                      className="min-h-[120px] border-[#E8D8D0] focus-visible:ring-[#D4A5A5]"
                    />
                  </div>

                  <Button className="w-full bg-[#a95757] hover:bg-[#c45a5a] text-white">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5D4037] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/logo.png?height=40&width=40"
                  alt="Sweet Delights Bakery"
                  width={40}
                  height={40}
                  className="mr-2 rounded-full p-1"
                />
                <span className="font-serif text-xl font-medium">Sweet Delights</span>
              </div>
              <p className="text-white/80 text-sm">
                Handcrafted cakes, pastries, and more—made fresh daily with the finest ingredients.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-white/80 hover:text-white transition-colors">
                    Our Cakes
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-white/80 hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#reviews" className="text-white/80 hover:text-white transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-white/80">+905000000087</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-white/80">info@Semsem.org</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-white/80">North Cyprus, lefoksa</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-4">Hours</h3>
              <ul className="space-y-2 text-white/80">
                <li>Monday - Friday: 7am - 6pm</li>
                <li>Saturday: 8am - 5pm</li>
                <li>Sunday: 9am - 3pm</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
           <a href="https://github.com/kahrvba"> <p className="text-white/60 text-sm hover:text-blue-500">
              &copy; {new Date().getFullYear()} Kahrvba. All rights reserved.
            </p></a>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
