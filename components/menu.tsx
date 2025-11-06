"use client"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export function Menu() {
  const [activeTab, setActiveTab] = useState("food")
  const [isAnimating, setIsAnimating] = useState(false)

  const foodItems = [
    {
      name: "Traditional Irish Stew",
      description: "Tender lamb, potatoes, carrots, and herbs in rich gravy",
      price: "$18",
    },
    {
      name: "Fish & Chips",
      description: "Beer-battered cod with hand-cut chips and mushy peas",
      price: "$16",
    },
    {
      name: "Shepherd's Pie",
      description: "Ground lamb with vegetables, topped with creamy mashed potatoes",
      price: "$17",
    },
    {
      name: "Bangers & Mash",
      description: "Irish sausages with mashed potatoes and onion gravy",
      price: "$15",
    },
    {
      name: "Corned Beef & Cabbage",
      description: "Slow-cooked corned beef with cabbage, carrots, and potatoes",
      price: "$19",
    },
    {
      name: "Boxty",
      description: "Traditional Irish potato pancakes with various fillings",
      price: "$14",
    },
  ]

  const drinks = [
    {
      name: "Guinness Draught",
      description: "The perfect pint, poured to perfection",
      price: "$8",
    },
    {
      name: "Irish Whiskey Flight",
      description: "Sample three premium Irish whiskeys",
      price: "$22",
    },
    {
      name: "Irish Coffee",
      description: "Hot coffee, Irish whiskey, sugar, and cream",
      price: "$12",
    },
    {
      name: "Craft Beer Selection",
      description: "Rotating selection of local and Irish craft beers",
      price: "$7-10",
    },
    {
      name: "Signature Cocktails",
      description: "Irish-inspired cocktails crafted by our mixologists",
      price: "$13",
    },
    {
      name: "Wine Selection",
      description: "Curated wines from around the world",
      price: "$9-15",
    },
  ]

  return (
    <section id="menu" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/dark-wood-texture-with-subtle-grain.jpg" alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-muted/50 to-background/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">Culinary Excellence</span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-8 text-shadow-gold">Our Menu</h2>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-24 bg-primary/50" />
            <div className="w-2 h-2 bg-primary rotate-45" />
            <div className="h-px w-24 bg-primary/50" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            Savor authentic Irish cuisine elevated to perfection
          </p>
        </div>

        <Tabs 
          defaultValue="food" 
          className="max-w-6xl mx-auto"
          value={activeTab}
          onValueChange={(value) => {
            if (value !== activeTab) {
              setIsAnimating(true)
              setTimeout(() => {
                setActiveTab(value)
                setTimeout(() => {
                  setIsAnimating(false)
                }, 50)
              }, 300)
            }
          }}
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16 bg-transparent border border-primary/20 p-0 rounded-none h-14">
            <TabsTrigger
              value="food"
              className="text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground font-medium tracking-wide transition-all duration-300 rounded-none h-full py-3 m-0 border-0"
            >
              Food
            </TabsTrigger>
            <TabsTrigger
              value="drinks"
              className="text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground font-medium tracking-wide transition-all duration-300 rounded-none h-full py-3 m-0 border-0"
            >
              Drinks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="food" className="relative">
            <div className={`transition-all duration-500 ease-in-out ${activeTab === "food" && !isAnimating ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95 pointer-events-none"}`}>
              <div className="mb-12 max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-lg aspect-[16/9] mb-12">
                  <img
                    src="/traditional-irish-food-platter-with-stew-and-bread.jpg"
                    alt="Traditional Irish Cuisine"
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-700 ${activeTab === "food" && !isAnimating ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                    <h3 className="text-white text-3xl md:text-4xl font-serif font-bold mb-2">Authentic Irish Cuisine</h3>
                    <p className="text-white/90 text-lg">Handcrafted with traditional recipes and premium ingredients</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {foodItems.map((item, index) => (
                  <Card
                    key={index}
                    className={`p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 ${
                      activeTab === "food" && !isAnimating 
                        ? "opacity-100 translate-y-0 scale-100" 
                        : "opacity-0 translate-y-8 scale-95"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-serif text-2xl font-bold text-foreground">{item.name}</h3>
                      <span className="text-primary font-bold text-xl">{item.price}</span>
                    </div>
                    <div className="h-px w-full bg-primary/20 mb-4" />
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="drinks" className="relative">
            <div className={`transition-all duration-500 ease-in-out ${activeTab === "drinks" && !isAnimating ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95 pointer-events-none"}`}>
              <div className="mb-12 max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-lg aspect-[16/9] mb-12">
                  <img
                    src="/craft-beer-taps-and-whiskey-bottles-on-pub-shelf.jpg"
                    alt="Craft Beer & Whiskey Selection"
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-700 ${activeTab === "drinks" && !isAnimating ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                    <h3 className="text-white text-3xl md:text-4xl font-serif font-bold mb-2">Premium Beverages</h3>
                    <p className="text-white/90 text-lg">Craft beers, fine whiskeys, and expertly crafted cocktails</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {drinks.map((item, index) => (
                  <Card
                    key={index}
                    className={`p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 ${
                      activeTab === "drinks" && !isAnimating 
                        ? "opacity-100 translate-y-0 scale-100" 
                        : "opacity-0 translate-y-8 scale-95"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-serif text-2xl font-bold text-foreground">{item.name}</h3>
                      <span className="text-primary font-bold text-xl">{item.price}</span>
                    </div>
                    <div className="h-px w-full bg-primary/20 mb-4" />
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
